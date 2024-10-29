import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../Images/acelogo.svg";

const Footer = () => {
  const footerStyle = {
    background: "#274DF1",
    color: "#ffffff",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const textCenter = {
    textAlign: "start",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "15px",
  };

  const linkColumnStyle = {
    display: "flex",
    flexDirection: "column",
  };

 

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col lg={4}>
            <div>
            <img src={img} alt=""  />
              <p style={textCenter}>© 2024. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col sm={3}>
                <div style={linkColumnStyle}>
                  <a href="#home" style={linkStyle}>Services</a>
                  <a href="#portfolio" style={linkStyle}>Luxirious trips</a>
                  <a href="#contact" style={linkStyle}>Inflight catering</a>
                  <a href="#faq" style={linkStyle}>Air ambulance</a>
                </div>
              </Col>
              <Col sm={3}>
                <div style={linkColumnStyle}>
                  <a href="#about" style={linkStyle}>Company</a>
                  <a href="#blog" style={linkStyle}>About Us</a>
                  <a href="#testimonials" style={linkStyle}>Contact us</a>
                  <a href="#pricing" style={linkStyle}>Career</a>
                  <a href="#pricing" style={linkStyle}>Outreach</a>
                </div>
              </Col>
              <Col sm={3}>
                <div style={linkColumnStyle}>
                  <a href="#about" style={linkStyle}>Legal</a>
                  <a href="#blog" style={linkStyle}>Privacy Policy</a>
                  <a href="#testimonials" style={linkStyle}>Terms & Condition</a>
                  <a href="#pricing" style={linkStyle}>Usage rights</a>
                </div>
              </Col>
              <Col sm={3}>
                <div style={linkColumnStyle}>
                  <a href="#about" style={linkStyle}>Contact and Socials</a>
                  <a href="#blog" style={linkStyle}>charter@swiftwingsjet.com</a>
                  <a href="#testimonials" style={linkStyle}>swiftwingsjet</a>
                  <a href="#pricing" style={linkStyle}>swiftwingsjet</a>
                  <a href="#pricing" style={linkStyle}>09028792910</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;