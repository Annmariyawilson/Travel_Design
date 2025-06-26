import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section style={{ padding: '60px 0', background: 'linear-gradient(to bottom, #f4f4f4, #ffffff)' }}>
      <Container>

        <Row className="align-items-center mb-5">
          <Col lg="6" className="text-section">
            <h4 style={{ color: '#ff6347', fontWeight: '600', fontSize: '1.6rem', letterSpacing: '1px' }}>Who We Are</h4>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#343a40' }}>Explore Our Journey</h1>
            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.1rem' }}>
              We are passionate about creating unforgettable travel experiences. Our team is dedicated to delivering the best tours, with a focus on personalized service and unique adventures. From serene beaches to vibrant cities, we curate journeys that open new horizons.
            </p>
          </Col>

          <Col lg="6" className="image-section d-flex justify-content-center">
            <div style={{ position: 'relative' }}>
              <img
                src="https://img.freepik.com/free-vector/children-school-field-trip_18591-51145.jpg"
                alt="About Us"
                className="img-fluid rounded"
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  maxWidth: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
              />
            </div>
          </Col>
        </Row>


        <Row className="mt-5">
          <Col>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#343a40', fontWeight: '700', marginBottom: '20px' }}>Our Services</h2>
              <p style={{ color: '#555', fontSize: '1.1rem' }}>
                We offer a wide range of travel services tailored to meet your needs. Whether you're looking for adventure, relaxation, or cultural immersion, we have something for everyone.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md="4" className="mb-4">
            <Card
              style={{
                border: 'none',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
              }}
              className="service-card"
            >
              <Card.Img
                variant="top"
                src="https://orioly.com/wp-content/uploads/2024/10/summer-travel-season-407x270.png"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0',
                }}
              />
              <Card.Body style={{ flex: 1 }}>
                <Card.Title style={{ fontSize: '1.6rem', color: '#343a40' }}>Custom Tours</Card.Title>
                <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                  Customize your travel experience with our tailored tour packages that meet your specific interests and preferences, ensuring a personalized and memorable journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card
              style={{
                border: 'none',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
              }}
              className="service-card"
            >
              <Card.Img
                variant="top"
                src="https://precisa.in/wp-content/uploads/2022/04/Expert-Guide-to-Driving-Better-Conversions-in-Digital-Lending-1024x536.jpg"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0',
                }}
              />
              <Card.Body style={{ flex: 1 }}>
                <Card.Title style={{ fontSize: '1.6rem', color: '#343a40' }}>Expert Guides</Card.Title>
                <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                  Explore the world with our experienced guides, who bring valuable insights and unique perspectives, making every trip an enriching experience for you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card
              style={{
                border: 'none',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
              }}
              className="service-card"
            >
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGXGhjJ7HjBEQqpt9w_Xly2R7jWgAB9k-ow&s"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0',
                }}
              />
              <Card.Body style={{ flex: 1 }}>
                <Card.Title style={{ fontSize: '1.6rem', color: '#343a40' }}>Luxury Accommodations</Card.Title>
                <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                  Enjoy the highest standards of comfort with our carefully selected luxury accommodations, providing you with the perfect environment for relaxation and enjoyment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Row className="mt-5">
          <Col lg="12" className="text-center">
            <h2 style={{ color: '#343a40', fontWeight: '600', marginBottom: '20px' }}>Contact Us</h2>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              We're here to help! Get in touch with us for any inquiries or to plan your next adventure.
            </p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md="4" className="mb-4">
            <ListGroup>
              <ListGroupItem className="ps-0 border-0" style={{ padding: '8px 0' }}>
                <h6>Address:</h6>
                <p>Calicut, Kerala</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0" style={{ padding: '8px 0' }}>
                <h6>Email:</h6>
                <p>support@example.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0" style={{ padding: '8px 0' }}>
                <h6>Phone:</h6>
                <p>+91 123 456 7890</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="8">
            <Form>
              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write your message here..." />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
