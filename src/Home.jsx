import React, { useState, useEffect } from 'react';
import Tradingvideo from '../src/Assests/Trading.mp4';
import Freelancingvideo from '../src/Assests/Freelancing.mp4';
import Amazonvideo from '../src/Assests/Amazon.mp4';
import Typed from 'typed.js';
import { Container, Row, Col } from 'react-bootstrap';
import "../src/Style/Home.css"
const videos = [Tradingvideo, Freelancingvideo, Amazonvideo];

function HomePage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next video index (cyclically)
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 4000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Trading Courses', 'FreeLancing Courses', 'Amazon Courses'],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <Container className='mt-5 home'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="text-container Homeheading">
            <h1>WELCOME TO ASK COUCHING</h1>
            <h3>
              ASK Provides You{' '}
              <span className="auto-type text-success"></span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="image-container">
            <video style={{ width: '90%' }} src={videos[currentVideoIndex]} muted autoPlay loop type="video/mp4"></video>
          </div>
        </Col>
        </Row>
    </Container>
  );
}

export default HomePage;
