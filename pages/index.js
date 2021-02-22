import { useEffect } from "react";
import { Button, Card, Header, Image } from "semantic-ui-react";

import { Layout } from "../components";
import loadLatitudeContent from "../utils/loadLatitudeContent";

const Cart = () => (
  <Card fluid>
    <Card.Content>
      <Card.Header>Order Summary</Card.Header>
      <Card.Meta>1 item</Card.Meta>
    </Card.Content>
    <Card.Content>
      <Header as="h5" floated="left">
        1 x Blue Tuxedo
      </Header>
      <Header as="h5" floated="right">
        $640.00
      </Header>
      <Card.Description>Color - Blue</Card.Description>
      <Card.Description>Size - L</Card.Description>
    </Card.Content>
    <Card.Content>
      <Header as="h5" floated="left">
        Shipping
      </Header>
      <Header as="h5" floated="right">
        $13.00
      </Header>
    </Card.Content>

    <Card.Content>
      <Header as="h3" floated="left">
        Total
        <Header.Subheader>Including $58.18 in taxes</Header.Subheader>
      </Header>
      <Header as="h3" floated="right">
        $653.00
      </Header>
    </Card.Content>
  </Card>
);

const Purchase = () => (
  <>
    <Card.Group>
      <Card fluid>
        <Card.Content>
          <Card.Header>Customer</Card.Header>
          <Card.Description>Fake Doe</Card.Description>
          <Card.Description>fake.doe@email.com</Card.Description>
          <Card.Description>+61 400 000 000</Card.Description>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Shipping</Card.Header>
          <Card.Meta>
            Express shipping <strong>13.00</strong>
          </Card.Meta>
          <Card.Description>
            100 Spencer Street, Melbourne, VIC, 3000
          </Card.Description>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Billing</Card.Header>
          <Card.Description>
            200 Bridge Road, Richmond, VIC, 3121
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>

    <Header>Payment</Header>

    <Card fluid>
      <Card.Content>
        <Card.Header>
          Latitude interest free
          <Image
            src="https://assets.latitudefinancial.com/merchant-services/latitude/icon/latitude-interest-free.svg"
            size="small"
            floated="right"
          />
        </Card.Header>
        <Card.Description>
          <div id="latitude-payment--main"></div>
          <div id="latitude-payment--footer"></div>
        </Card.Description>
      </Card.Content>
    </Card>

    <Button secondary size="big">
      Complete order
    </Button>
  </>
);

const Home = () => {
  useEffect(() => {
    loadLatitudeContent(() => console.log("latitude content loaded."));
  });

  return (
    <Layout>
      <Layout.Summary>
        <Cart />
      </Layout.Summary>

      <Layout.Content>
        <Purchase />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
