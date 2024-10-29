import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import NavBar from "./Nav";
import CountUp from "react-countup";
import bgimage from "../Images/homepagebg.svg";
import Img2 from "../Images/oitbanner.svg";
import { FaPlane, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="home-wrapper">
      <NavBar />
      <div className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div
                className={`text-wrapper ${animate ? "animate-slide-in" : ""}`}
              >
                <h1
                  className="hero-title fw-bold"
                  style={{ fontFamily: "Aleo" }}
                >
                  Your Partner in AI and IoT Excellence
                </h1>
                <p className="hero-description">
                  Your one-stop agency for AI and IoT software development,
                  smart home technology, and expert consultancy services
                </p>

                <Button
                  className="  me-3"
                  style={{ backgroundColor: "#1D4ED8", borderColor: "#1D4ED8" }}
                >
                  Get Started
                </Button>
                <Button
                  className=""
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#ffffff",
                  }}
                >
                  Check Work
                  <RiArrowRightLine className="button-icon" />
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <div className="image-wrapper">
                {/* Replace with your actual hero image */}
                <img
                  src={Img2}
                  alt="AI and IoT Solutions"
                  className="main-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>{`
        .home-wrapper {
          background-image: url(${bgimage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
          position: relative;
        }

        .home-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            #274df1 0%,
            /* Top color start */ #100e337a 15%,
            /* Midpoint fade */ transparent 30%,
            /* Center transparent */ #100e337a 80%,
            /* Midpoint fade */ #274df1 100% /* Bottom color start */
          );
          z-index: 1;
        }

        .hero-section {
          position: relative;
          z-index: 2;
          padding: 80px 0;
        }

        .hero-content {
          color: white;
          padding: 2rem;
        }

        .text-wrapper {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-slide-in {
          animation: slideIn 1s forwards;
        }

        .hero-title {
          font-family: "Aleo", serif;
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-description {
          font-family: "Mulish", sans-serif;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 2rem;
          color: #5c0632;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .cta-button {
          background: #274df1;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #7c083f;
          transform: translateY(-2px);
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 600px;
        }

        .main-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 0;
          }

          .hero-content {
            text-align: center;
            padding: 1rem;
          }

          .hero-stats {
            justify-content: center;
          }

          .image-wrapper {
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
