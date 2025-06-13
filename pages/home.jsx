import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 style={styles.title}>Welcome to EcoWaste ♻️</h1>
      <p style={styles.subtitle}>
        Empowering communities through smart waste and recycling management.
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.primaryButton}>Explore Services</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '90vh',
    background: 'linear-gradient(to right, #56ab2f, #a8e063)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '2.8rem',
    color: '#fff',
    marginBottom: '10px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1.4rem',
    color: '#f0f0f0',
    marginBottom: '30px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  primaryButton: {
    padding: '12px 28px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#56ab2f',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
    transition: '0.3s ease',
  },
};

export default Home;
