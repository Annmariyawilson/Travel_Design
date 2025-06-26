import React, { useState, useEffect } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';

function Booking({ tour }) {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    guests: 1,
    date: ''
  });
  const [showToast, setShowToast] = useState(false);
  const basePrice = 99; 
  const serviceCharge = 10; 
  const [totalCost, setTotalCost] = useState(basePrice + serviceCharge);

  useEffect(() => {
    setTotalCost(bookingDetails.guests * basePrice + serviceCharge);
  }, [bookingDetails.guests]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
    console.log('Total Cost:', totalCost);

    setBookingDetails({ name: '', email: '', guests: 1, date: '' });
    setShowToast(true);
  };

  const styles = {
    heading: {
      marginBottom: '1rem',
      color: '#007bff',
      fontSize: '1.5rem',
      textAlign: 'center'
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      maxWidth: '500px',
      margin: '0 auto'
    },
    formLabel: {
      fontWeight: 'bold'
    },
    formControl: {
      padding: '0.75rem',
      borderRadius: '0.25rem',
      border: '1px solid #ced4da',
      fontSize: '1rem'
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
      width: '100%'
    },
    totalCost: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '1rem 0'
    },
    costDetails: {
      fontSize: '1rem',
      color: '#555',
      textAlign: 'center',
      margin: '0.5rem 0'
    },
    toast: {
      position: 'absolute',
      top: '20px',
      right: '20px'
    }
  };

  return (
    <>
      <h3 style={styles.heading}>Book Your Tour</h3>
      <Form onSubmit={handleBookingSubmit} style={styles.form}>
        <Form.Group className="mb-3">
          <Form.Label style={styles.formLabel}>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            style={styles.formControl}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={styles.formLabel}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={styles.formControl}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={styles.formLabel}>Phone</Form.Label>
          <Form.Control
            type="text"
            name="num"
            value={bookingDetails.num || ''}
            onChange={handleChange}
            required
            placeholder="Enter your Phone Number"
            style={styles.formControl}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={styles.formLabel}>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            name="guests"
            value={bookingDetails.guests}
            onChange={handleChange}
            required
            min="1"
            max={tour.maxGroupSize}
            style={styles.formControl}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={styles.formLabel}>Date of Travel</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleChange}
            required
            style={styles.formControl}
          />
        </Form.Group>
        <p style={styles.costDetails}>Price per person: $99 | Service Charge: $10</p>
        <h5 style={styles.totalCost}>Total Cost: ${totalCost}</h5>
        <Button type="submit" style={styles.button}>
          Confirm Booking
        </Button>
      </Form>

      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={styles.toast}>
        <Toast.Body>Your booking is confirmed!</Toast.Body>
      </Toast>
    </>
  );
}

export default Booking;
