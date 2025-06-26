import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import SearchBar from './SearchBar';
import TourCard from './TourCard';
function Home() {
  return (
    <>
      <section className="home-section" style={{ padding: '60px 0', backgroundColor: '#f4f4f4', position: 'relative' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="text-section mb-4 mb-lg-0">
              <h4 style={{ color: '#ff6347', fontWeight: '600', fontSize: '1.5rem' }}>Your Journey Begins Here</h4>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px' }}>
                Embrace New Horizons, Uncover Hidden Gems
              </h1>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1rem' }}>
                Every destination holds a unique story waiting to be told, and with every step,
                you add a new chapter to your own. Whether you're dreaming of serene beaches,
                vibrant cities, or tranquil mountains, let us be your guide to unforgettable experiences
                and cherished memories. Start your journey, and find yourself where the world meets wonder.
              </p>
            </Col>

            <Col lg="6" className="image-section d-flex justify-content-center">
              <div style={{ position: 'relative' }}>
                <img
                  src="https://t3.ftcdn.net/jpg/08/34/79/42/360_F_834794269_JlRZ5Wvlc8Cv2wRLuqQrf2XQpzbrcLi1.jpg"
                  alt="Traveling"
                  className="img-fluid rounded"
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    maxWidth: '100%',
                    height: 'auto',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#343a40', fontWeight: '600', marginBottom: '20px' }}>Search Your Next Adventure</h2>
                <SearchBar />
              </div>
            </Col>
          </Row>
        </Container>

        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          zIndex: '-1',
        }} />
      </section>

      <section style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h4 style={{ color: '#ff6347', fontWeight: '600', fontSize: '1.5rem' }}>Our Services</h4>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#343a40' }}>We Offer Our Best Services</h2>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-4">
              <Card style={{ border: 'none', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.5rem', color: '#343a40' }}>Calculate Weather</Card.Title>
                  <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                    Get accurate weather forecasts to plan your trips effectively and enjoy every moment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card style={{ border: 'none', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
                <Card.Img
                  variant="top"
                  src="https://orioly.com/wp-content/uploads/2016/12/qualities-of-a-good-tour-guide-cover-illustration.png"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.5rem', color: '#343a40' }}>Best Tour Guide</Card.Title>
                  <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                    Experience unforgettable journeys with our professional tour guides who know the best spots.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card style={{ border: 'none', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
                <Card.Img
                  variant="top"
                  src="https://st2.depositphotos.com/1038076/5225/i/450/depositphotos_52254693-stock-photo-customization.jpg"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.5rem', color: '#343a40' }}>Customization</Card.Title>
                  <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                    Tailor your travel experience with our customized plans that cater to your unique preferences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <TourCard />


      <section style={{ padding: '60px 0', position: 'relative', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, rgba(40, 167, 69, 0.1), rgba(0, 123, 255, 0.1))',
            zIndex: '1',
            pointerEvents: 'none',
          }}
        />

        <Container style={{ position: 'relative', zIndex: '2' }}>
          <Row>
            <Col lg="6">
              <div>
                <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#343a40', fontWeight: '600' }}>Experience</h1>
                <h4 style={{ fontSize: '1.7rem', marginBottom: '15px', color: '#6c757d', fontStyle: 'italic' }}>
                  Exceptional Journeys Await You
                </h4>
                <p style={{ fontSize: '1.1rem', color: '#495057', lineHeight: '1.6' }}>
                  With over 15 years of experience in the travel industry, we pride ourselves on delivering unforgettable
                  experiences. Our dedicated team ensures that every trip is meticulously planned, providing our clients with
                  personalized service and memorable adventures.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="text-center" style={{ flex: '1' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745' }}>12k+</span>
                  <h6 style={{ margin: '5px 0', color: '#6c757d' }}>Successful Trips</h6>
                </div>
                <div className="text-center" style={{ flex: '1' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745' }}>2k+</span>
                  <h6 style={{ margin: '5px 0', color: '#6c757d' }}>Regular Clients</h6>
                </div>
                <div className="text-center" style={{ flex: '1' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745' }}>15</span>
                  <h6 style={{ margin: '5px 0', color: '#6c757d' }}>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://www.maverickhelicopter.com/images/tours/tour-hana-rainforest-experience/hana-rainforest-experience-tour-lg8.jpg"
                  alt="Helicopter Tour"
                  className="img-fluid"
                  style={{
                    maxWidth: '100%',
                    borderRadius: '15px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s ease-in-out',
                    zIndex: '2',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="12 mt-5">
              <h1
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  color: '#343a40',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                  paddingBottom: '10px',
                  position: 'relative',
                }}
              >
                Visit Our Customers Tour Gallery
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#ff5733',
                    borderRadius: '2px',
                  }}
                ></span>
              </h1>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '15px',
                  padding: '20px',
                }}
              >
                {[
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwYr855E5V5qnrmRA6LBRhMHxADzuUyMJEA&s",
                  "https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.jpg?s=612x612&w=0&k=20&c=HvhbHZ8HH_lAjAAI2pmqL4mUipyyAwy31qp5jjKQTO0=",
                  "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-846.jpg?semt=ais_hybrid",
                  "https://images.unsplash.com/photo-1508608725026-673848eb006c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
                  "https://img.freepik.com/free-photo/stylish-couple-love-walking-embracing-street-romantic-trip-taking-photo_285396-9890.jpg",
                  "https://www.bontravelindia.com/wp-content/uploads/2022/08/Best-Places-to-Visit-in-Nainital-1000x565.jpg",
                  "https://ihplb.b-cdn.net/wp-content/uploads/2021/06/Most-Beautiful-Places-in-the-World-750x430.jpg",
                  "https://assets-news.housing.com/news/wp-content/uploads/2022/06/28101529/15-worlds-best-places-to-visit-25.jpg",
                  "https://www.sotc.in/blog/wp-content/uploads/2020/02/Places-To-Visit-In-April.jpg",
                  "https://worldwildschooling.com/wp-content/uploads/2024/02/Iconic-Places_Pyramids-of-Giza_AlexAnton_AdobeStock_258519703.jpg",
                  "https://wallpapers.com/images/hd/most-beautiful-places-in-the-world-ixted75dnonldfh8.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUt5dWgxC4AzhqxbAqeDAm7xE880AqvBohBw&s",
                ].map((src, index) => (
                  <Link to="/gallery" key={index} style={{ textDecoration: 'none' }}>
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.parentNode.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.parentNode.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        width: '100%',
                        padding: '10px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        color: 'white',
                        fontSize: '1rem',
                        textAlign: 'center',
                        opacity: '0',
                        transition: 'opacity 0.3s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                    >
                      Explore the World
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials-section" style={{ backgroundColor: '#f8f9fa', padding: '3rem 1rem' }}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 style={{ fontSize: '2.8rem', color: '#343a40', fontWeight: '600', marginBottom: '2rem', textTransform: 'uppercase' }}>
                What Our Travelers Say
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {[
              { comment: "An unforgettable experience! The scenic views were breathtaking, and the guides were incredibly knowledgeable.", name: "Max", rating: 5 },
              { comment: "I loved every moment of this trip. The itinerary was well-organized, and I got to explore places I had only dreamed of!", name: "Niya", rating: 4 },
              { comment: "This was by far the best vacation I’ve ever had! I felt safe, and every detail was taken care of seamlessly.", name: "Jilson", rating: 5 },
              { comment: "The trip was well-planned, and the accommodations were top-notch. I can’t wait to book my next adventure with them!", name: "Riya", rating: 4 },
              { comment: "Absolutely amazing! From the food to the activities, everything exceeded my expectations.", name: "Alex", rating: 5 },
              { comment: "The cultural immersion and authentic experiences made this journey truly unique. I felt like a local!", name: "Sophie", rating: 4 }
            ].map((testimonial, index) => (
              <Col lg="4" md="6" className="mb-4" key={index}>
                <div
                  className="testimonial-card p-4 shadow-lg rounded-lg"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e9ecef',
                    height: '300px', // Ensures uniform card height
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <p style={{ fontSize: '1rem', color: '#495057', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {testimonial.comment}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
                      alt="User"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: '2px solid #adb5bd',
                      }}
                    />
                    <div>
                      <h6 className="mb-0" style={{ fontSize: '1rem', fontWeight: '600', color: '#343a40' }}>
                        {testimonial.name}
                      </h6>
                      <div className="rating" style={{ color: '#ffd700' }}>
                        {Array(testimonial.rating).fill().map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                        {Array(5 - testimonial.rating).fill().map((_, i) => (
                          <i key={i} className="far fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section style={{ padding: '50px 0', background: '#ffffff' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="order-lg-2 text-center mb-4">
              <img
                src="https://cdn.dribbble.com/users/4624437/screenshots/14580831/media/59e1863a52c9d135685f7d2fd054d4db.gif"
                className="img-fluid rounded-circle shadow-sm"
                alt="Travel Subscription"
                style={{ maxWidth: '80%', border: '3px solid #17a2b8' }}
              />
            </Col>

            <Col lg="6" className="order-lg-1 text-lg-right text-center">
              <h2 style={{ fontSize: '28px', color: '#17a2b8', fontWeight: 'bold', marginBottom: '15px' }}>
                Get Travel Updates Straight to Your Inbox!
              </h2>
              <p style={{ color: '#6c757d', fontSize: '16px', marginBottom: '30px' }}>
                Sign up for our newsletter to receive tips, destination guides, and exclusive travel deals. Never miss out on the latest travel trends and updates!
              </p>
              <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto', justifyContent: 'center' }}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  style={{ flex: 1, padding: '12px', border: '2px solid #17a2b8', borderRadius: '30px', textAlign: 'center' }}
                />
                <button
                  className="btn"
                  style={{ padding: '12px 25px', borderRadius: '30px', backgroundColor: '#17a2b8', color: '#ffffff' }}
                >
                  Sign Up
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
