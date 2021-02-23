const handlePost = (req, res) => {
  const { quoteId } = req?.body || {};
  res.status(200).json({ quoteId });
};

const handleDefault = (req, res) => {
  const { method } = req;
  res.setHeader("Allow", Object.keys(handlers));
  res.status(405).end(`Method ${method} Not Allowed`);
};

const handlers = {
  POST: handlePost,
  default: handleDefault,
};

export default (req, res) =>
  (handlers[req.method] || handlers.default)(req, res);
