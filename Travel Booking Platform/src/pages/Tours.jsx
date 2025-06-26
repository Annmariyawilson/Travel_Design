import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CommonSection from '../shared/CommonSection';
import SearchBar from './SearchBar';
import TourCard from './TourCard';

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  const activePageStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const pageStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    cursor: 'pointer',
  };

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <TourCard />
            <Col lg='12'>
              <div className='d-flex align-items-center justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    style={page === number ? activePageStyle : pageStyle}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Tours;
