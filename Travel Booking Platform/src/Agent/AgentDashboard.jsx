import React, { useState } from 'react';

function AgentDashboard() {
  const [tours, setTours] = useState([]);

  const handleAddTour = () => {
  };

  const handleEditTour = (id) => {
  };

  const handleDeleteTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Agent Dashboard</h2>
      
      <section>
        <h4>Manage Tours</h4>
        <button onClick={handleAddTour} className="btn btn-primary mb-3">Add Tour</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Tour ID</th>
              <th>Name</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id}>
                <td>{tour.id}</td>
                <td>{tour.name}</td>
                <td>{tour.destination}</td>
                <td>${tour.price}</td>
                <td>
                  <i
                    className="fa-regular fa-pen-to-square"
                    style={{ color: "#FFD43B", cursor: 'pointer' }}
                    onClick={() => handleEditTour(tour.id)}
                  ></i>
                  {' '}
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#b51212", cursor: 'pointer' }}
                    onClick={() => handleDeleteTour(tour.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AgentDashboard;
