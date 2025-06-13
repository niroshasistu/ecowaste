import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 EcoWaste. All rights reserved.</p>
      <div style={styles.footerLinks}>
        <a href="#about" style={styles.link}>About Us</a>
        <a href="#contact" style={styles.link}>Contact</a>
        <a href="#terms" style={styles.link}>Terms & Conditions</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2e7d32', // Eco-friendly green
    padding: '20px 40px',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '40px',
    boxShadow: '0px -4px 10px rgba(0,0,0,0.2)',
  },
  text: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
};

// Add hover effect with inline styling workaround
const addFooterHoverEffect = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    footer a:hover {
      color: #c8e6c9;
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);
};

addFooterHoverEffect();

export default Footer;