import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
const B_Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <a
          style={{ display: "table-cell" }}
          href="https://spathion.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navbar.Brand>SPATHION</Navbar.Brand>
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Borrower/info">Instructions</Nav.Link>
            <Nav.Link href="/Borrower/profile">Profile</Nav.Link>
            {/* <Nav.Link href="/Borrower/customer">Customer</Nav.Link> */}
            <Nav.Link href="/Borrower/invoicedetails">Invoice-details</Nav.Link>
            <Nav.Link href="/Borrower/mint">Invoice-list</Nav.Link>

            <Nav.Link href="/Borrower/invoices">Loans </Nav.Link>

            <Nav.Link href="/">Logout</Nav.Link>
            {/* <NavDropdown title="Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default B_Header;
