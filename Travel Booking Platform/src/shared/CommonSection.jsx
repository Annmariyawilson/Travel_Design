import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CommonSection({ title }) {
  return (
    <section style={{
      position: 'relative',
      backgroundImage: `url('https://t3.ftcdn.net/jpg/06/91/09/42/360_F_691094234_BjkS4zQ1puZ5czU0CkYDtyc4ZTd3qSR1.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '150px 0', 
      color: '#fff',
      textAlign: 'center',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
      }}></div>
      
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row>
          <Col lg='12'>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
            }}>
              {title}
            </h1>
            <p style={{
              marginTop: '20px',
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: 'auto',
              lineHeight: '1.6',
              color: '#e0e0e0',
            }}>
              Discover breathtaking destinations, immersive experiences, and unforgettable journeys. Embrace the adventure with us and create memories that last a lifetime.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CommonSection;
