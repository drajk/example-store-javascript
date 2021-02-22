import React, { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Image,
  Menu,
} from "semantic-ui-react";

import loadLatitudeContent from "../utils/loadLatitudeContent";

export const Layout = () => {
  const activeIndex = 0;

  useEffect(() => {
    loadLatitudeContent(() => console.log("latitude content loaded."));
  });

  return (
    <Container>
      <Menu fixed="top" inverted pointing size="large">
        <Container>
          <Header
            inverted
            as="h2"
            icon
            textAlign="center"
            style={{ padding: "10px" }}
          >
            Example JS Store
          </Header>
        </Container>
      </Menu>

      <Grid reversed="computer" stackable style={{ marginTop: "4em" }}>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <Card fluid header="Cart">
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
          </Grid.Column>

          <Grid.Column width={10}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
