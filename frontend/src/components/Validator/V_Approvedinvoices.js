import React from "react";
import { Table, Button, Form, Card, Container } from "react-bootstrap";
const V_Approvedinvoices = () => {
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div className="CSS1">
            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3>List of all approved innvoices</h3>
              </div>
            </Card.Header>
          </div>
        </Form>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>

              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>--</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default V_Approvedinvoices;
