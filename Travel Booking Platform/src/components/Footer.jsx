import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const quick_links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const quick_links2 = [
  { path: '/gallery', display: 'Gallery' },
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 0', marginTop: '40px', borderTop: '1px solid #dee2e6' }}>
      <Container>
        <Row>
          <Col lg='3' style={{ padding: '10px' }}>
            <div style={{ textAlign: 'left' }}>
              <i className="fa-solid fa-person-walking-luggage fa-2xl" aria-hidden="true" />
              <span className="ms-2 brand" style={{ marginLeft: '10px' }}>TravelSite</span>
              <p style={{ fontSize: '14px', marginTop: '10px', color: '#6c757d' }}>
                Explore the world with us! Our travel site offers unique experiences, stunning destinations, and personalized itineraries to make your journey unforgettable.
              </p>
              <div className='d-flex align-items-center gap-4' style={{ fontSize: '20px' }}>
                <span>
                  <Link to='#' aria-label='YouTube'><i className="fa-brands fa-youtube" style={{ color: "#a0170d" }} /></Link>
                </span>
                <span>
                  <Link to='#' aria-label='Facebook'><i className="fa-brands fa-facebook" /></Link>
                </span>
                <span>
                  <Link to='#' aria-label='GitHub'><i className="fa-brands fa-github" style={{ color: "#000000" }} /></Link>
                </span>
                <span>
                  <Link to='#' aria-label='Instagram'><i className="fa-brands fa-instagram" style={{ color: "#3f2a7e" }} /></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3' style={{ padding: '10px' }}>
            <h5 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Discover</h5>
            <ListGroup>
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0' style={{ padding: '8px 0' }}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: '#007bff' }}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3' style={{ padding: '10px' }}>
            <h5 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Quick Links</h5>
            <ListGroup>
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0' style={{ padding: '8px 0' }}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: '#007bff' }}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3' style={{ padding: '10px' }}>
            <h5 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Contact</h5>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ padding: '8px 0' }}>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className="fa-solid fa-location-dot" style={{ color: "#000000" }} /></span>
                  Address:
                </h6>
                <p className='mb-0' style={{ color: '#6c757d' }}>Calicut, Kerala</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ padding: '8px 0' }}>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className="fa-solid fa-envelope" style={{ color: "#000000" }} /></span>
                  Email:
                </h6>
                <p className='mb-0' style={{ color: '#6c757d' }}>travelsitecalicut@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ padding: '8px 0' }}>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className="fa-solid fa-phone" style={{ color: "#000000" }} /></span>
                  Phone:
                </h6>
                <p className='mb-0' style={{ color: '#6c757d' }}>+91 9446435622</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className="copyright" style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>
              &copy; {year} designed and developed by <span style={{ fontStyle: 'italic' }}>Annmariya Wilson</span>. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
