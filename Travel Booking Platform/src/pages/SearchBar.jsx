import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SearchBar() {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate(); // Initialize the navigate function

  const searchHandler = (e) => {
    e.preventDefault(); 
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxPeople = maxGroupSizeRef.current.value;

    if (!location || !distance || !maxPeople) {
      toast.warning("All fields are required");
    } else {
      // Navigate to the SearchResultList page with query parameters
      navigate(`/search-results?location=${location}&distance=${distance}&maxGroupSize=${maxPeople}`);
    }
  };

  return (
    <Col lg="12">
      <div 
        className="search-bar-container" 
        style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}
      >
        <Form onSubmit={searchHandler} className="d-flex flex-wrap align-items-center gap-3 gap-md-4">
          <FormGroup className="d-flex align-items-center gap-2" style={{ flex: '1 1 200px' }}>
            <i className="fa-solid fa-map-pin" style={{ fontSize: '1.2rem', color: '#ff6347' }} />
            <div style={{ width: '100%' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Location</h5>
              <input 
                type="text" 
                placeholder="Where are you going?" 
                ref={locationRef}
                className="form-control"
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-2" style={{ flex: '1 1 200px' }}>
            <i className="fa-solid fa-route" style={{ fontSize: '1.2rem', color: '#ff6347' }} />
            <div style={{ width: '100%' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Distance</h5>
              <input 
                type="number" 
                placeholder="Distance (km)" 
                ref={distanceRef}
                className="form-control" 
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-2" style={{ flex: '1 1 200px' }}>
            <i className="fa-solid fa-people-group" style={{ fontSize: '1.2rem', color: '#ff6347' }} />
            <div style={{ width: '100%' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Max People</h5>
              <input 
                type="number" 
                placeholder="0"  
                ref={maxGroupSizeRef}
                className="form-control" 
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
              />
            </div>
          </FormGroup>

          <button
            type="submit"
            className="search-icon d-flex justify-content-center align-items-center"
            style={{ 
              fontSize: '1.5rem', 
              color: '#fff', 
              backgroundColor: '#ff6347', 
              padding: '10px', 
              borderRadius: '50%', 
              cursor: 'pointer',
              flex: '0 0 50px',
              border: 'none'
            }}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
