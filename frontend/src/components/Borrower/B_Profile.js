import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./B_CSS.css";
const B_Profile = () => {
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div className="CSS1">
            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3> Profile </h3>
              </div>
            </Card.Header>

            <div style={{ textAlign: "center" }}>
              <Card.Header>
                <h3> Please fill the following details:</h3>
              </Card.Header>
            </div>
          </div>
          <br />

          <div className="CSS1">
            <Card.Header>
              <h5> Personal details</h5>
            </Card.Header>
            <br />
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                (We'll never share your email with anyone else)
              </Form.Text>
            </Form.Group>

            <Form.Label>Nationality</Form.Label>
            <Form.Control type="text" placeholder="Country name" />
            <br />
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Designation" />
            <br />
            <Form.Label>Contact number</Form.Label>
            <Form.Control type="number" placeholder="Phone n.o" />

            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an identity proof</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an address proof</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />
            {/* <Button variant="primary" type="submit">
              Submit
            </Button>

            <br /> */}
            {/* </div> */}
            {/* </Form>

        <Form>
          <br /> */}

            <Card.Header>
              <h5> Company details</h5>
            </Card.Header>
            <br />
            {/* <div className="CSS1"> */}
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
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload certificate of incorporation</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload MOA/AOA</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload audit report</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload GST</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Director-1 </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Director-2 </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Director-3 </Form.Label>
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
  );
};

export default B_Profile;
