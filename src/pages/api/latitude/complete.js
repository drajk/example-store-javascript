import * as quoteService from "../../../services/quote";
import * as latitudeService from "../../../services/latitude";

const handleGet = async (req, res) => {
  const { merchantReference, transactionReference, gatewayReference } =
    req?.query || {};

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

  switch (result) {
    // handle successfull payments
    case "completed":
      // mark order as paid
      const { orderId } = quoteService.markAsPaid({
        quoteId: merchantReference,
        transactionReference,
        gatewayReference,
      });
      res.status(200).json({ result, orderId });
      break;

    // handle failed payments
    case "failed":
      res.status(200).json({ result });
      break;

    // handle other exceptions
    default:
      res.status(400).end(`Could not complete quote ${merchantReference}`);
      break;
  }
};

const handleDefault = (req, res) => {
  const { method } = req;
  res.setHeader("Allow", Object.keys(handlers));
  res.status(405).end(`Method ${method} not allowed`);
};

const handlers = {
  GET: handleGet,
  default: handleDefault,
};

export default (req, res) =>
  (handlers[req.method] || handlers.default)(req, res);
