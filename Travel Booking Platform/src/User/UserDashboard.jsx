import React from 'react';

function UserDashboard() {
  const styles = {
    container: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '2rem',
      color: '#007bff',
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: '1rem',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '300px',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '0.5rem',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '1rem',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Your Dashboard</h1>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>My Bookings</h2>
          <p style={styles.cardDescription}>
            View and manage your tour bookings with ease.
          </p>
          <button style={styles.button}>View Bookings</button>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Edit Profile</h2>
          <p style={styles.cardDescription}>
            Update your personal information and preferences.
          </p>
          <button style={styles.button}>Edit Profile</button>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Support</h2>
          <p style={styles.cardDescription}>
            Contact support for help with your account or bookings.
          </p>
          <button style={styles.button}>Get Support</button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
