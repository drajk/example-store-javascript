import * as quoteService from "../../../services/quote";
import * as latitudeService from "../../../services/latitude";

const handlePost = async (req, res) => {
  const { merchantReference, transactionReference, gatewayReference } =
    req?.body || {};

  if (!merchantReference || !transactionReference || !gatewayReference) {
    res.status(400).end("Missing required params");
    return;
  }

  // verify whether quote exists in your DB
  const quote = quoteService.getById(merchantReference);

  if (!quote.id) {
    res.status(400).end(`Quote ${merchantReference} not found`);
    return;
  }

  const { result } = await latitudeService.verifyPurchase({
    merchantReference,
    transactionReference,
    gatewayReference,
  });

  // mark order as paid when result = "completed"
  if (result === "completed") {
    const { orderId } = quoteService.markAsPaid({
      quoteId: merchantReference,
      transactionReference,
      gatewayReference,
    });

    res.status(200).json({ orderId });
    return;
  }

  // handle result = "failed" and other exceptions
  res.status(400).end(`Could not complete quote ${merchantReference}`);
};

const handleDefault = (req, res) => {
  const { method } = req;
  res.setHeader("Allow", Object.keys(handlers));
  res.status(405).end(`Method ${method} not allowed`);
};

const handlers = {
  POST: handlePost,
  default: handleDefault,
};

export default (req, res) =>
  (handlers[req.method] || handlers.default)(req, res);
