import { Button } from "semantic-ui-react";
import { Layout } from "../components";

const Complete = () => {
  return (
    <Layout>
      <Layout.Content>
        <Button
          basic
          color="blue"
          onClick={() => {
            window.location.href = "/cart";
          }}
        >
          Navigate to cart
        </Button>
      </Layout.Content>
    </Layout>
  );
};

export default Complete;
