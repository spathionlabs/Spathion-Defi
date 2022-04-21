import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import spath from "./spath.png";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h3 className="title">Welcome to SPATHION</h3>
              <p className="subtitle">Choose your window.</p>
            </div>
            <div className="buttonContainer">
              <a href="/lender/info">
                <Button size="lg" className="landingbutton">
                  LENDER
                </Button>
              </a>
              <a href="/borrower/info">
                <Button size="lg" className="landingbutton">
                  BORROWER
                </Button>
              </a>
              <a href="/Validator/Lprofiles">
                <Button size="lg" className="landingbutton">
                  VALIDATOR
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
