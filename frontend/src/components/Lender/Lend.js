import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

import "./L_CSS.css";
const Lend = () => {
  return (
    <div>
      <Container>
        <br />
        <div className="CSS2">
          <Card.Header>
            <div style={{ textAlign: "center" }}>
              <h3> Wallet </h3>
            </div>
          </Card.Header>
        </div>
        <br />
        <div className="CSS2">
          <div style={{ textAlign: "center" }}>
            <Form>
              <br />
              {/* <div className="CSS2"> */}
              <br />

              <Button variant="warning">Connect to Metamask</Button>

              <br />
              <br />
              <hr />

              <br />

              <br />
              <Form.Label>
                <h4>Amount available: </h4>
              </Form.Label>
              <Card>
                <Card.Body></Card.Body>
              </Card>
              <br />
              <br />
              <hr />
              <br />

              <br />
              <br />
              <Form.Label>
                <h4>Enter amount willing to lend: </h4>
              </Form.Label>
              <Form.Control type="number" placeholder="Amount" />
              <br />
              <Button variant="primary" type="submit">
                Lend
              </Button>
              <br />

              <br />
              <p>
                Your amount will be locked for a period of 30 days once lended.
              </p>
              <br />
              <hr />
              <br />

              <br />

              <Form.Label>
                <h4>Amount locked: </h4>
              </Form.Label>
              <Card>
                <Card.Body></Card.Body>
              </Card>
              <br />
              <br />
              <hr />

              <br />

              <br />
              <Form.Label>
                <h4>Enter withdrawal amount: </h4>
              </Form.Label>
              <br />
              <Form.Control type="number" placeholder="Amount" />
              <br />
              <Button variant="primary" type="submit">
                Withdraw
              </Button>
              <br />

              <br />
              <p>
                The rate of interest for your amount deposited is 14% which can
                be withdrawn only after the 30 days locking period.
              </p>
              <br />
            </Form>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Lend;
