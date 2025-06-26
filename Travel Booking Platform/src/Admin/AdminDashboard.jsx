import React, { useState } from 'react';

function AdminDashboard() {
  const [agents, setAgents] = useState([]);
  const [users, setUsers] = useState([]);
  
  const handleAddAgent = () => {
  };

  const handleEditAgent = (id) => {
  };

  const handleDeleteAgent = (id) => {
    setAgents(agents.filter(agent => agent.id !== id));
  };

  const handleAddUser = () => {
  };

  const handleEditUser = (id) => {
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      
      <section className="mb-5">
        <h4>Manage Agents</h4>
        <button onClick={handleAddAgent} className="btn btn-primary mb-3">Add Agent</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.name}</td>
                <td>{agent.email}</td>
                <td>
                  <i
                    className="fa-regular fa-pen-to-square"
                    style={{ color: "#FFD43B", cursor: 'pointer' }}
                    onClick={() => handleEditAgent(agent.id)}
                  ></i>
                  {' '}
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#b51212", cursor: 'pointer' }}
                    onClick={() => handleDeleteAgent(agent.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h4>Manage Users</h4>
        <button onClick={handleAddUser} className="btn btn-primary mb-3">Add User</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <i
                    className="fa-regular fa-pen-to-square"
                    style={{ color: "#FFD43B", cursor: 'pointer' }}
                    onClick={() => handleEditUser(user.id)}
                  ></i>
                  {' '}
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#b51212", cursor: 'pointer' }}
                    onClick={() => handleDeleteUser(user.id)}
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

export default AdminDashboard;
