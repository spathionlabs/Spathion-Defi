import React from "react";
import { Form, Card, Container, Button } from "react-bootstrap";
const V_Transfer = () => {
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div className="CSS1">
            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3>Transfer Window</h3>
              </div>
            </Card.Header>
          </div>
        </Form>
      </Container>
      <div>
        <Container>
          <br />

          <div className="CSS2">
            <div style={{ textAlign: "center" }}>
              <Form>
                <br />

                <Button variant="warning">Connect to Metamask</Button>

                <br />
                <br />
                <br />

                <hr />
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
                <Form.Label>
                  <h4>Enter address: </h4>
                </Form.Label>
                <Form.Control type="alphanumeric" placeholder="Address" />
                <br />

                <br />
                <br />

                <Form.Label>
                  <br />
                  <h4>Enter amount: </h4>
                </Form.Label>
                <Form.Control type="number" placeholder="Amount" />
                <br />
                <Button variant="primary" type="submit">
                  Send
                </Button>

                <br />
                <br />
                <br />
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default V_Transfer;
