import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import tourData from '../tourData';

function TourCard() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#ffffff' }}>
      <Container>
        <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
          OUR FEATURED TOURS
        </h1>
        <Row>
          {tourData.map((tour) => (
            <Col lg="4" md="6" className="mb-4 d-flex justify-content-center" key={tour.id}>
              <Card style={{ width: '100%', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '0.5rem', transition: 'transform 0.2s' }} className="hover-effect">
                <Card.Img
                  variant="top"
                  src={tour.photo}
                  style={{ borderRadius: '0.5rem 0.5rem 0 0' }}
                />
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>
                      <i className="fa-solid fa-location-dot" /> {tour.address}
                    </span>
                    <span>
                      <i className="fa-solid fa-star" style={{ color: 'yellow' }} /> {tour.reviews.length > 0 ? (tour.reviews.reduce((acc, review) => acc + review.rating, 0) / tour.reviews.length).toFixed(1) : "Not rated"}
                    </span>
                  </div>
                  <h5 className="mt-2">
                    <Link to={`/tours/${tour.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>{tour.title}</Link>
                  </h5>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h5 style={{ margin: 0 }}>
                      ${tour.price} <span style={{ fontSize: '0.8rem' }}>/per person</span>
                    </h5>
                    <button className="btn btn-primary">
                      <Link to={`/tours/${tour.id}`} style={{ color: '#fff', textDecoration: 'none' }}>Book Now</Link>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TourCard;
