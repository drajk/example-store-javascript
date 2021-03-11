import mockQuote from "../../__mocks__/quote.json";

/**
 * Currently returns a mock quote.
 * Ideally quote would be fetched from the database (or a service) here
 * @param {string} quoteId
 */
export const getById = (quoteId) => mockQuote;

/**
 * Currently returns a mock order id.
 * Ideally this function is expected to
 * - change status to "Paid" (or similar)
 * - store transactionReference gatewayReference in DB for future reference
 * @param {string} quoteId
 * @param {string} transactionReference
 * @param {string} gatewayReference
 */
export const markAsPaid = ({
  quoteId,
  transactionReference,
  gatewayReference,
}) => ({
  orderId: 30440,
  quoteId,
  transactionReference,
  gatewayReference,
});
