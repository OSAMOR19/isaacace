import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: 5, label: 'Years In Industry' },
    { value: 150, label: 'Projects Completed' },
    { value: 500, label: 'Happy Customers' }
  ];

  return (
    <section id="portfolio" style={{ background: '#274DF1' }}>
      <Container className="py-4">
        <Row className="text-light fw-bold g-4 pb-5 text-center">
          {stats.map((stat, index) => (
            <Col 
              md={4} 
              key={index}
              style={{
                fontFamily: 'Aleo',
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : '20px'})`,
                transition: 'all 0.6s ease-out',
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <h1>
                <CountUp
                  end={stat.value}
                  suffix="+"
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} />
                  )}
                </CountUp>
              </h1>
              <p>{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsCounter;