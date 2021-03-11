import { PAYMENT_TYPE } from "../../core/constants";
import { getById } from "../../services/quote";
import initiateLatitudePurchase from "../../services/latitude/initiatePurchase";

const handlePost = async (req, res) => {
  const { quoteId, paymentType } = req?.body || {};
  const quote = getById(quoteId);

  switch (paymentType) {
    case PAYMENT_TYPE.LATITUDE_INTEREST_FREE:
      const { result, redirectUrl } = await initiateLatitudePurchase(quote);
      res.status(200).json({ result, redirectUrl })
      break;

    // Other payment methods here

    default:
      res.status(403).end(`Payment method ${paymentType} not allowed`);
      break;
  }
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
