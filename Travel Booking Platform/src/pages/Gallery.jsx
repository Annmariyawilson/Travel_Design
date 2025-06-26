import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Gallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwYr855E5V5qnrmRA6LBRhMHxADzuUyMJEA&s",
      description: "Beautiful sunset view",
      likes: 0,
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.jpg?s=612x612&w=0&k=20&c=HvhbHZ8HH_lAjAAI2pmqL4mUipyyAwy31qp5jjKQTO0=",
      description: "Scenic view of Gadisar Lake, Jaisalmer",
      likes: 0,
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-846.jpg?semt=ais_hybrid",
      description: "Girl enjoying the view at Ratchaprapha Dam",
      likes: 0,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1508608725026-673848eb006c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
      description: "Mountain view in the evening",
      likes: 0,
    },
    {
      id: 5,
      src: "https://img.freepik.com/free-photo/stylish-couple-love-walking-embracing-street-romantic-trip-taking-photo_285396-9890.jpg",
      description: "Couple enjoying a romantic walk",
      likes: 0,
    },
    {
      id: 6,
      src: "https://www.bontravelindia.com/wp-content/uploads/2022/08/Best-Places-to-Visit-in-Nainital-1000x565.jpg",
      description: "Nainital's serene beauty",
      likes: 0,
    },
    {
      id: 7,
      src: "https://ihplb.b-cdn.net/wp-content/uploads/2021/06/Most-Beautiful-Places-in-the-World-750x430.jpg",
      description: "One of the world's most beautiful places",
      likes: 0,
    },
    {
      id: 8,
      src: "https://assets-news.housing.com/news/wp-content/uploads/2022/06/28101529/15-worlds-best-places-to-visit-25.jpg",
      description: "Famous tourist spot",
      likes: 0,
    },
    {
      id: 9,
      src: "https://www.sotc.in/blog/wp-content/uploads/2020/02/Places-To-Visit-In-April.jpg",
      description: "Top destinations to visit in April",
      likes: 0,
    },
    {
      id: 10,
      src: "https://worldwildschooling.com/wp-content/uploads/2024/02/Iconic-Places_Pyramids-of-Giza_AlexAnton_AdobeStock_258519703.jpg",
      description: "Pyramids of Giza",
      likes: 0,
    },
    {
      id: 11,
      src: "https://wallpapers.com/images/hd/most-beautiful-places-in-the-world-ixted75dnonldfh8.jpg",
      description: "Beautiful landscapes of the world",
      likes: 0,
    },
    {
      id: 12,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUt5dWgxC4AzhqxbAqeDAm7xE880AqvBohBw&s",
      description: "Breathtaking mountain views",
      likes: 0,
    },
  ]);
  
  const [imageData, setImageData] = useState({ file: null, description: '' });

  // Handle file input change
  const handleFileChange = (e) => {
    setImageData({ ...imageData, file: e.target.files[0] });
  };

  // Handle description input change
  const handleDescriptionChange = (e) => {
    setImageData({ ...imageData, description: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageData.file || !imageData.description) return;

    const newImage = {
      id: Date.now(),
      src: URL.createObjectURL(imageData.file),
      description: imageData.description,
      likes: 0,
    };

    setImages([...images, newImage]);
    setImageData({ file: null, description: '' });
  };

  // Handle like button click
  const handleLike = (id) => {
    const updatedImages = images.map((img) =>
      img.id === id ? { ...img, likes: img.likes + 1 } : img
    );
    setImages(updatedImages);
  };

  return (
    <section style={{ backgroundColor: '#f1f3f5', padding: '5rem 0' }}>
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4" style={{ color: '#343a40', fontWeight: '600' }}>
              Upload Your Favorite Tour Moments
            </h2>

            {/* Form for uploading image and description */}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={imageData.description}
                  onChange={handleDescriptionChange}
                  required
                />
              </Form.Group>

              <Button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', width: '100%' }}>
                Upload
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="12">
            <h3 className="text-center mb-4" style={{ color: '#343a40', fontWeight: '600' }}>
              Tour Gallery
            </h3>

            {/* Gallery display */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              {images.map((image) => (
                <Card key={image.id} style={{ width: '100%', border: 'none', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease-in-out' }}>
                  <div
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '12px',
                    }}
                  >
                    <img
                      src={image.src}
                      alt="Uploaded"
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        borderRadius: '12px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '1rem',
                      }}
                    >
                      {image.description}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: '#343a40', fontSize: '1rem', fontWeight: 'bold' }}>
                      ❤️ {image.likes}
                    </span>
                    <Button
                      variant="outline-primary"
                      onClick={() => handleLike(image.id)}
                      style={{
                        padding: '5px 15px',
                        fontSize: '0.9rem',
                        borderRadius: '20px',
                      }}
                    >
                      Like
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;
