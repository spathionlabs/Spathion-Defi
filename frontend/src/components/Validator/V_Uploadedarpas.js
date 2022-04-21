import React from "react";
import { Table, Button, Form, Card, Container } from "react-bootstrap";

const V_Uploadedarpas = () => {
  return (
    <div>
      <Container>
        <br />
        <div className="CSS1">
          <Card.Header>
            <div style={{ textAlign: "center" }}>
              <h3>List of all uploaded ARPA's</h3>
            </div>
          </Card.Header>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>
              <th>ARPA's</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default V_Uploadedarpas;
