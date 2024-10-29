import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Card,
  CardBody,
  Col,
} from "reactstrap";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <Fragment>
      <section
        className="section py-5"
        id="contact"
        style={{ backgroundColor: "#274DF1" }}
      >
        <Container className="">
          <Row className="justify-content-center">
            <div className="text-center" style={{ maxWidth: "1000px" }}>
              <Card
                className="mt-4"
                style={{
                  borderRadius: "20px",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                <CardBody>
                  <Row>
                    <Col lg={6}>
                      <div
                        className="text-start mb-3"
                        style={{ color: "#274DF1" }}
                      >
                        <h6>Newsletter</h6>
                        <p className="text-small">
                          Be the first one to know about discounts, offers, and
                          events
                        </p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <Form onSubmit={handleSubmit}>
                        <InputGroup
                          style={{
                            backgroundColor: "#112F82",
                            borderRadius: "20px",
                            padding: "10px",
                          }}
                        >
                          {" "}
                          {/* Background color for the input group */}
                          <InputGroupText
                            style={{
                              backgroundColor: "#112F82",
                              border: "none",
                              color: "#ffffff",
                            }}
                          >
                            <FaEnvelope />
                          </InputGroupText>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                              backgroundColor: "#112F82", // Match the Input background color
                              color: "#ffffff", // Input text color
                              border: "none", // Remove default border
                              borderRadius: "0", // No rounded corners for the input itself
                            }}
                            placeholderStyle={{ color: "#ffffff", opacity: 0.7 }}
                          />
                          <Button
                            type="submit"
                            style={{
                              backgroundColor: "#ffffff",
                              border: "none",
                              color: "#274DF1",
                              fontWeight: "bold",
                              borderRadius: "20px", // Rounded corners
                              padding: "10px 20px", // Add padding for button
                            }}
                          >
                            Submit
                          </Button>
                        </InputGroup>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact;
