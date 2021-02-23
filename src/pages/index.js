import { useEffect, useState } from "react";
import { Button, Header } from "semantic-ui-react";

import { Customer, Cart, Layout } from "../components";
import { LatitudeInterestFree } from "../payment";
import { getQuote } from "../services/quote";

const CompleteOrder = ({ quoteId }) => {
  const [id, setId] = useState(quoteId);

  return (
    <form action="/api/checkout" method="post">
      <input type="hidden" name="quoteId" value={id} />

      <Button secondary size="big" type="submit">
        Complete order
      </Button>
    </form>
  );
};

const Home = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const mockQuote = getQuote();
    setQuote(mockQuote);
  }, []);

  return (
    <Layout>
      <Layout.Summary>
        <Cart
          lineItems={quote?.lineItems}
          shippingAmount={quote?.shipping?.amount}
          totalAmount={quote?.total}
        />
      </Layout.Summary>

      <Layout.Content>
        <Customer
          customer={quote?.customer}
          shipping={quote?.shipping}
          billing={quote?.billing}
        />

        <Header>Payment</Header>

        <LatitudeInterestFree />

        <CompleteOrder quoteId={quote?.id} />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
