import mockQuote from "../__mocks__/quote.json";

// Currently returns a mock, ideally this method returns quote from Database or similar
export const getQuoteById = (id) => {
  return mockQuote;
};
