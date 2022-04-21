import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        color: "white",
        backgroundColor: "black",
        width: "100%",

        position: "relative",
        bottom: "0",
        display: "inline-block",
        justifyContent: "center",
        padding: "8.5px",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright © 2020 Spathion - All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
