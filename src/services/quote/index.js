import mockQuote from "../../__mocks__/quote.json";

/**
 * Currently returns a mock quote.
 * Ideally quote would be fetched from the database (or a service) here
 * @param {string} quoteId
 */
export const getById = (quoteId) => mockQuote;
