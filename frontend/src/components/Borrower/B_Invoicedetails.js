import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./B_CSS.css";
const B_Invoicedetails = () => {
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div className="CSS1">
            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3>Invoice details</h3>
              </div>
            </Card.Header>

            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3> Please fill the following:</h3>
              </div>
            </Card.Header>
          </div>
          <br />

          <div className="CSS1">
            <Card.Header>
              <h5> Customer details</h5>
            </Card.Header>
            <br />

            {/* <Form.Label>Customer Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Customer Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                (We'll never share your email with anyone else)
              </Form.Text>
            </Form.Group>

            <Form.Label>Contact contact number</Form.Label>
            <Form.Control type="number" placeholder="Phone n.o" />
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Customer address</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>

            <br /> */}

            {/* <Card.Header>
              <h5>Customer Company details</h5>
            </Card.Header> */}

            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                (We'll never share the email with anyone else)
              </Form.Text>
            </Form.Group>
            <Form.Label>Company contact number</Form.Label>
            <Form.Control type="number" placeholder="Phone n.o" />

            <br />
            <Form.Label>Company website</Form.Label>
            <Form.Control type="text" placeholder="Website" />
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Company address</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <br />
          </div>
        </Form>
      </Container>

      <div>
        <Container>
          <Form>
            <div className="CSS1">
              <Card.Header>
                <h5> Invoice details</h5>
              </Card.Header>
              <br />
              <Form.Label>Supplier invoice number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Supplier invoice number"
              />

              <br />
              <Form.Label>Invoice date</Form.Label>
              <Form.Control type="date" placeholder="Invoice date" />
              <br />

              <Form.Label>Invoice due date</Form.Label>
              <Form.Control type="date" placeholder="Due date" />
              <br />

              <Form.Label>Invoice amount</Form.Label>
              <Form.Control type="number" placeholder="Invoice amount" />
              <br />

              <Form.Label>Advance amount</Form.Label>
              <Form.Control type="number" placeholder="Advance amount" />
              <br />

              {/* <Form.Label>Amount available</Form.Label>
              <Form.Control type="number" placeholder="Amount available" />
              <br /> */}

              <Form.Label>Loan required</Form.Label>
              <Form.Control type="number" placeholder="Loan required" />
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <div className="CSS1">
              <Form.Group controlId="formFile" className="mb-3">
                <Card.Header>
                  <Form.Label>Upload INVOICE</Form.Label>
                </Card.Header>
                <br />
                <Form.Control type="file" />
              </Form.Group>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
            </div>

            <div className="CSS1">
              <Form.Group controlId="formFile" className="mb-3">
                <Card.Header>
                  <Form.Label>Upload ARPA</Form.Label>
                </Card.Header>
                <br />
                <h6>
                  {" "}
                  Click on the following for
                  <a
                    style={{ color: "blue", display: "table-cell" }}
                    href="https://docs.google.com/document/d/1kKeD6iXrpmGLJN2YpUbxqofUJHy23Gol/edit?usp=sharing&ouid=102850055254910073504&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sample ARPA document
                  </a>
                </h6>

                <br />
                <Form.Control type="file" />
              </Form.Group>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default B_Invoicedetails;
