import React, { useState, useEffect } from 'react';
import Tradingvideo from '../src/Assests/Trading.mp4';
import Freelancingvideo from '../src/Assests/Freelancing.mp4';
import Amazonvideo from '../src/Assests/Amazon.mp4';
import Typed from 'typed.js';
import { Container, Row, Col } from 'react-bootstrap';
import '../src/Style/Home.css';

const videos = [Tradingvideo, Freelancingvideo, Amazonvideo];

function HomePage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000); // Duration of the fade out transition
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Trading Course', 'Freelance Course', 'Amazon Course'],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container className="my-0 md:mt-5 home ">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="text-container Homeheading">
            <h1>WELCOME TO ASK COACHING</h1>
            <h3>
              ASK Provides <span className="auto-type text-success"></span>
            </h3>
            <p className="description-text">
              Master new skills and achieve your goals with our expert-led courses in trading, freelancing, and e-commerce.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="image-container">
            <video
              style={{ width: '90%', opacity: isTransitioning ? 0 : 1, transition: 'opacity 1s' }}
              src={videos[currentVideoIndex]}
              muted
              autoPlay
              loop
              type="video/mp4"
            ></video>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
