import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TourCard from './TourCard';
import tourData from '../tourData';

function SearchResultList() {
  const [filteredTours, setFilteredTours] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const searchCriteria = {
    location: queryParams.get('location') || '',
    distance: queryParams.get('distance') || 0,
    maxGroupSize: queryParams.get('maxGroupSize') || 0
  };

  useEffect(() => {
    // Filter tours based on search criteria
    const filtered = tourData.filter(tour => {
      const isLocationMatch = tour.city.toLowerCase().includes(searchCriteria.location.toLowerCase());
      const isDistanceMatch = tour.distance <= searchCriteria.distance;
      const isGroupSizeMatch = tour.maxGroupSize <= searchCriteria.maxGroupSize;
      
      return isLocationMatch && isDistanceMatch && isGroupSizeMatch;
    });
    
    setFilteredTours(filtered);
  }, [searchCriteria]);

  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#f4f4f4' }}>
      <Container>
        <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
          Search Results
        </h1>
        <Row>
          {filteredTours.length > 0 ? (
            filteredTours.map(tour => (
              <Col lg="4" md="6" className="mb-4 d-flex justify-content-center" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <h4>No tours found matching your criteria</h4>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default SearchResultList;
