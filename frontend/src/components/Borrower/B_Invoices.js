import React from "react";
import { Button, Card, Table, Container, Form } from "react-bootstrap";
import "./B_CSS.css";
const B_Invoices = () => {
  return (
    <div>
      <Container>
        <br />

        <Form>
          <br />
          <div className="CSS1">
            <Card.Header>
              <div style={{ textAlign: "center" }}>
                <h3>List of all invoices</h3>
              </div>
            </Card.Header>
          </div>
          <br />
          <div className="CSS1" style={{ textAlign: "center" }}>
            <br />

            <Button variant="warning">Connect to Metamask</Button>

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
          </div>
          <br />
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>
              <th>The Invoice</th>
              <th>Amount</th>
              <th>Repayment date</th>
              <th>Repay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <Button variant="primary">Repay</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>

              <td>
                <Button variant="primary">Repay</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <Button variant="primary">Repay</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default B_Invoices;
