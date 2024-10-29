// NavBar.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";
import img from "../Images/acelogo.svg";
import img2 from "../Images/oitbanner.svg";
import { RiArrowRightLine } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#121212', // Changed to white for visibility on the background image
  };

  const buttonStyle = {
    backgroundColor: '#1D4ED8',
    borderColor: '#1D4ED8',
    borderRadius: '10px',
    marginLeft: '10px',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  };

  const toggleButtonStyle = {
    border: '1px solid #121212',
    backgroundColor: '#121212',
  };

  const toggleIconStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <Navbar 
      expand="lg" 
      className="navbar-dark" 
      style={{
        position: 'absolute',
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#FFFFFF'
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#FF7223' }}>
          <img src={img} alt="Swift Wings Logo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={toggleButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav style={centerNavStyle}>
            <Nav.Link href="#services" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link href="#portfolio" style={navLinkStyle}>Works</Nav.Link>
            <Nav.Link href="#contact" style={navLinkStyle}>About</Nav.Link>
            <Nav.Link href="#faq" style={navLinkStyle}>Testimonials</Nav.Link>
            <Nav.Link href="#faq" style={{color: "#1D4ED8"}}>Visit our store <RiArrowRightLine className="button-icon" /></Nav.Link>
          </Nav>
          <Button className="me-2" href="#signin" style={{ backgroundColor: '#1D4ED8', borderColor: '#1D4ED8' }}>Contact Us</Button>
          <Button className="btn-rounded-pill" style={{ backgroundColor: 'transparent', borderColor: '#274DF1', color:"#274DF1" }}>Call +23450958758 <RiArrowRightLine className="button-icon" /> </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;