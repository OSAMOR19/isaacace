import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  Button,
  Fade,
} from "react-bootstrap";
import NavBar from "./Nav";

import img1 from "../Images/ailogo.svg";
import img2 from "../Images/globalaccess.png";
import img3 from "../Images/timeicon.png";
import img4 from "../Images/securitylogo.svg";
import img6 from "../Images/teacher.svg";
import img5 from "../Images/curriculumpic.png";
import CountUp from "react-countup";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    background: "#FFFFFF",
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    background: "#FAF3DD",
    border: "none",
    transition: "background-color 0.3s ease-in-out",
    color: "#5C0632",
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  const handleButtonHover = (e, enter) => {
    e.currentTarget.style.backgroundColor = enter ? "#FF5500" : "#FF7223";
  };

  return (
    <React.Fragment>
      <section id="portfolio" className="py-5" style={{ background: "#100E33" }}>
        <Container className="py-4">
          <Row className="mb-5">
            <Col lg={5}>
              <div className="text-start text-light">
                <h1
                  className="fw-bold mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Our Service
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center g-4 pb-5">
            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-4 text-center">
                      <div className="mt-auto text-start">
                        <img
                          src={img1}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <h5 className="rounded-pill text-start fw-bold">
                        AI/IoT Software & Hardware Solutions
                      </h5>
                      <p
                        className="card-text mb-1 text-start "
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        AI/IoT Software & Hardware Solutions Explore
                        cutting-edge AI and IoT solutions crafted by our expert
                        developers to streamline operations and drive
                        innovation. Learn More
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-4 text-center">
                      <div className="mt-auto text-start">
                        <img
                          src={img4}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <h5 className="rounded-pill text-start fw-bold">
                        Smart Home Solutions
                      </h5>
                      <p
                        className="card-text mb-1 text-start "
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Upgrade your living space with our smart home
                        technology, delivering unparalleled convenience, robust
                        security, and exceptional efficiency for a truly modern
                        home experience. VISIT OUR STORE
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-4 text-center">
                      <div className="mt-auto text-start">
                        <img
                          src={img4}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <h5 className="rounded-pill text-start fw-bold">
                        AI/IoT Consultancy
                      </h5>
                      <p
                        className="card-text mb-1 text-start "
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        AI/IoT Consultancy Maximize your business's potential
                        with our expert AI and IoT consultancy, providing
                        customized insights and cutting-edge solutions to
                        accelerate innovation and growth. LEARN MORE
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;