import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

// Import images
import img1 from "../Images/smart1.svg";
import img2 from "../Images/blackwoman.svg";  // Image for the right column
import img3 from "../Images/smart3.svg";
import img4 from "../Images/smart3.svg";
import img6 from "../Images/rightcheck.svg";  // Icon for list items

const Transform = () => {
  const [selectedImage, setSelectedImage] = useState(img1);

  const serviceAreas = [
    {
      id: "0",
      title: "Residential Home",
      content: "Optimize your living spaces with intelligent AI solutions.",
      image: img1,
    },
    {
      id: "1",
      title: "Commercial Area",
      content: "Enhance security and reduce costs in commercial areas.",
      image: img2,
    },
    {
      id: "2",
      title: "Industry Area",
      content: "Monitor and control industrial operations with IoT.",
      image: img3,
    },
    {
      id: "3",
      title: "Governmental Area",
      content: "Innovate public spaces with smart city solutions.",
      image: img4,
    },
  ];

  return (
    <section
      id="Portfolio"
      className="py-5"
      style={{ background: "#FAF7EC" }}
    >
      <Container className="py-1">
        <Row className="align-items-center gy-1">
          {/* Text Column */}
          <Col lg={6} className="order-2 order-lg-1 text-dark">
            <h1
              className="mb-3 fw-bold"
              style={{
                fontFamily: "Aleo",
                fontSize: "50px",
                fontWeight: 500,
                lineHeight: "60px",
                textAlign: "left",
              }}
            >
              Transforming AI and IoT Ideas into Reality
            </h1>
            <p
              className="mb-4"
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
              }}
            >
              We help startups and businesses develop their AI and IoT ideas
              into innovative solutions.
            </p>

            {/* List with Icons */}
            <ListGroup className="my-4">
              {[
                "24/7 Assistance",
                "Team Management",
                "Advanced Analytics",
              ].map((text, idx) => (
                <ListGroup.Item
                  key={idx}
                  className="d-flex text-dark align-items-center"
                  style={{
                    background: "none",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                  }}
                >
                  <img
                    src={img6}
                    alt="icon"
                    style={{ width: "24px", height: "24px", marginRight: "10px" }}
                  />
                  {text}
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Learn More Button */}
            <Button
              style={{
                backgroundColor: "#06102B",
                color: "white",
                padding: "10px 30px",
                border: "none",
                minWidth: "200px",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Learn More <i className="ri-arrow-right-line ms-1"></i>
            </Button>
          </Col>

          {/* Image Column */}
          <Col lg={6} className="order-1 order-lg-2">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={img2}
                alt="Black woman"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(0deg, #100E33 0%, #100E3300 100%)",
                  pointerEvents: "none",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Transform;
