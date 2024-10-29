import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import work1 from "../Images/blog1.svg";  // Keep only if this file exists
import work2 from "../Images/work1.svg";  // Keep only if this file exists

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      img: work1 || "/api/placeholder/800/600",  // Fallback to placeholder if work1 import fails
      title: "CurateLearn",
      description: "In the world of AI, every product out here in 2024 is laced with aiI to help make life easier..."
    },
    {
      img: work1 || "/api/placeholder/800/600",
      title: "SkyEyez",
      description: "Specialized charter services tailored to meet your group's specific needs with premium amenities and professional service."
    },
    {
      img: work1 || "/api/placeholder/800/600",
      title: "Medical Evacuation",
      description: "Fast and reliable medical evacuation services with state-of-the-art equipment and trained medical professionals."
    },
    {
      img: "/api/placeholder/800/600",
      title: "Air Helicopters",
      description: "Modern helicopter fleet available for various purposes including emergency services, aerial tours, and private transportation."
    },
    {
      img: "/api/placeholder/800/600",
      title: "Cargo Services",
      description: "Reliable air cargo services for time-sensitive deliveries and specialized transportation needs."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">Blog</h1>
          <p className="text-muted">
          Discover Insights and Updates from our Latest Blog Posts
          </p>
        </div>

        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4">
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <h2 className="fw-bold mb-3">
                  {services[currentIndex].title}
                </h2>
                <p className="text-muted mb-4">
                  {services[currentIndex].description}
                </p>
                <div className="d-flex gap-2 mb-3">
                  <Button 
                    variant="outline-secondary"
                    onClick={prevSlide}
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', padding: '0' }}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={nextSlide}
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', padding: '0' }}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </Button>
                </div>
                <div className="d-flex gap-2">
                  {services.map((_, index) => (
                    <Button
                      key={index}
                      variant="link"
                      onClick={() => setCurrentIndex(index)}
                      className="p-0"
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: index === currentIndex ? '#0d6efd' : '#dee2e6',
                      }}
                    />
                  ))}
                </div>
              </Col>
              
              <Col md={6}>
                <div className="position-relative overflow-hidden rounded" style={{ height: '400px' }}>
                  <div 
                    className="transition-all duration-500"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: 'transform 0.5s ease-in-out'
                    }}
                  >
                    <img
                      src={services[currentIndex].img}
                      alt={services[currentIndex].title}
                      style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Blog;