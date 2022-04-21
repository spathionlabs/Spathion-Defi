import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
const L_Header = () => {
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
            <Nav.Link href="/Lender/info">Instructions</Nav.Link>
            <Nav.Link href="/Lender/profile">Profile</Nav.Link>
            <Nav.Link href="/Lender/lend">Wallet</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default L_Header;
