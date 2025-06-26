import React, { useRef, useState } from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import tourData from '../tourData';
import Booking from '../components/Booking';

function TourDetails() {
  const { id } = useParams();
  const usernameRef = useRef('');
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const tour = tourData.find(tour => tour.id === id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const { photo, title, desc, price, address, city, distance, maxGroupSize } = tour;

  const calculateAvgRating = (reviews) => {
    const totalRating = reviews.length;
    const avgRating = totalRating ? (reviews.reduce((acc, review) => acc + review.rating, 0) / totalRating).toFixed(1) : 0;
    return { totalRating, avgRating };
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const generateStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? '#FFD700' : '#ddd' }}>★</span>
    ));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    const username = usernameRef.current.value;

    const newReview = { name: username || 'Anonymous', rating: Number(tourRating), text: reviewText };
    setReviews((prevReviews) => [...prevReviews, newReview]);

    reviewMsgRef.current.value = '';
    usernameRef.current.value = '';
    setTourRating(null);

    setShowToast(true);
  };

  return (
    <section style={{ padding: '2rem 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row>
          <Col lg='8'>
            <div style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <img src={photo} alt={title} style={{ width: '100%', height: 'auto' }} />
              <div style={{ padding: '1.5rem', backgroundColor: '#ffffff' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</h2>
                <div className='d-flex justify-content-between'>
                  <h4 style={{ color: '#6c757d' }}>{address}</h4>
                  <span style={{ fontWeight: 'bold' }}>{avgRating} ({totalRating} reviews)</span>
                </div>
                <p style={{ lineHeight: '1.5' }}>{desc}</p>
                <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '0.5rem' }}>Details</h3>
                <p>City: {city}</p>
                <p>Distance: {distance} km</p>
                <p>Max Group Size: {maxGroupSize}</p>

                {/* Display reviews like comments */}
                <div style={{ marginTop: '1.5rem' }}>
                  <h4 style={{ color: '#007bff' }}>Reviews</h4>
                  {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to review!</p>
                  ) : (
                    reviews.map((review, index) => (
                      <div key={index} style={{ padding: '1rem', backgroundColor: '#f1f1f1', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                          <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {review.name}
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s" alt="Reviewer Avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                          </h5>
                          <p>Rating: {generateStars(review.rating)}</p>
                          <p>{review.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>Leave a Review</h3>
            <form onSubmit={submitHandler} style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div className="mb-3">
                <label style={{ fontWeight: 'bold' }}>
                  Username:
                  <input ref={usernameRef} type="text" className='form-control mt-3' placeholder="Your Name" style={{ marginLeft: '0.5rem', width: '100%' }} />
                </label>
              </div>
              <div className="mb-3">
                <label style={{ fontWeight: 'bold' }}>
                  Your Rating:
                  <input type="number" min="1" max="5" onChange={(e) => setTourRating(e.target.value)} required style={{ marginLeft: '0.5rem', width: '60px' }} />
                </label>
              </div>
              <div className="mb-3">
                <textarea ref={reviewMsgRef} placeholder='Your Review' required style={{ width: '100%', height: '80px', borderRadius: '0.25rem', border: '1px solid #ced4da', padding: '0.5rem' }} />
              </div>
              <button type='submit' style={{ backgroundColor: '#007bff', color: '#ffffff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', cursor: 'pointer' }}>
                Submit Review
              </button>
            </form>
            <Booking tour={tour}/>
          </Col>
        </Row>

        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <Toast.Body>Thank you for your review!</Toast.Body>
        </Toast>
      </Container>
    </section>
  );
}

export default TourDetails;
