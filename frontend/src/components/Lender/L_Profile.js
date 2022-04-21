import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./L_CSS.css";
const L_Profile = () => {
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div className="CSS2">
            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3> Profile.</h3>
              </div>
            </Card.Header>

            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3> Please fill the following details:</h3>
              </div>
            </Card.Header>
          </div>
          <br />
          <div className="CSS2">
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
            {/* <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an identity proof</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an address proof</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br /> */}

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an identity proof</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
          </div>
          <br />
        </Form>
      </Container>
    </div>
  );
};

export default L_Profile;
