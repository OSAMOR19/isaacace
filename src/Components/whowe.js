import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

// Import images
import img1 from "../Images/smart1.svg";
import img2 from "../Images/smart2.svg";
import img3 from "../Images/smart3.svg";
import img4 from "../Images/smart3.svg";
import img6 from "../Images/teacher.svg";
import img5 from "../Images/curriculumpic.png";

const Serve = () => {
  const [selectedImage, setSelectedImage] = useState(img1);
  const [animateImage, setAnimateImage] = useState(false);

  const serviceAreas = [
    {
      id: "0",
      title: "Residential Home",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: img1
    },
    {
      id: "1",
      title: "Commercial Area",
      content: "Optimize your commercial space with intelligent building management systems. Our solutions help reduce operational costs, enhance security, and improve occupant comfort.",
      image: img2
    },
    {
      id: "2",
      title: "Industry Area",
      content: "Revolutionize your industrial operations with IoT-enabled monitoring and control systems. Improve efficiency, reduce downtime, and maintain optimal production conditions.",
      image: img3
    },
    {
      id: "3",
      title: "Governmental Area",
      content: "Support public sector innovation with secure, scalable smart city solutions. From traffic management to public safety, we help create more efficient urban environments.",
      image: img4
    },
    {
      id: "4",
      title: "Small Business and Startup",
      content: "Empower your growing business with affordable, scalable smart solutions. We provide the technology foundation you need to compete in the modern marketplace.",
      image: img2
    }
  ];

  const handleAccordionSelect = (eventKey) => {
    const selectedArea = serviceAreas.find(area => area.id === eventKey);
    if (selectedArea) {
      setAnimateImage(true); // Trigger animation
      setSelectedImage(selectedArea.image);
    }
  };

  return (
    <section id="Portfolio" className="py-5" style={{ background: "#FAF7EC" }}>
      <Container className="py-4">
        <Row className="g-4">
          <Col lg={6}>
            <div className="text-start text-dark">
              <h1 className="fw-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Who we serve
              </h1>
            </div>
            <Accordion onSelect={handleAccordionSelect}>
              {serviceAreas.map((area) => (
                <Accordion.Item 
                  key={area.id} 
                  eventKey={area.id}
                  className="border-0 mb-3"
                >
                  <Accordion.Header 
                    style={{ 
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {area.title}
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ 
                      fontFamily: "Poppins, sans-serif",
                      color: "#666"
                    }}
                  >
                    {area.content}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          
          <Col lg={6} className="d-flex p-2 align-items-center">
            <img
              src={selectedImage}
              alt="Service area illustration"
              className={`img-fluid ${animateImage ? 'fade-in' : ''}`}
              style={{
                maxHeight: '600px',
                objectFit: 'contain',
                transition: 'opacity 0.5s ease-in-out'
              }}
              onAnimationEnd={() => setAnimateImage(false)}
            /> 
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Serve;
