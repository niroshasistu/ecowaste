import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>🌿 EcoWaste</div>
      <nav style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/schedule-pickup" style={styles.link}>Schedule Pickup</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/community-impact" style={styles.link}>Community Impact</Link>
        <Link to="/volunteer" style={styles.link}>Volunteer</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#0077ff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
};

// Add a simple hover effect
const addHoverEffect = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    a:hover {
      color: #ffe600;
    }
  `;
  document.head.appendChild(style);
};

addHoverEffect();

export default Header;