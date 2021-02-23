// Returns a mock quote, ideally this method would fetch quote from your backend apis
export const getQuote = () => ({
  id: "some-unique-identifier",
  customer: {
    firstName: "Fake",
    lastName: "Doe",
    email: "fake.doe@email.com",
    mobile: "+61 400 000 000",
  },
  lineItems: [
    {
      quantity: 1,
      title: "Blue Tuxedo",
      price: 640,
      color: "Blue",
      size: "L",
    },
  ],
  shipping: {
    type: "express",
    description: "Express shipping",
    amount: 13,
    address: "100 Spencer Street, Melbourne, VIC, 3000",
  },
  billing: {
    address: "200 Bridge Road, Richmond, VIC, 3121",
  },
  total: 653,
});
