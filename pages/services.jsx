import React from 'react';

const services = [
  {
    title: 'Household Waste Collection',
    description: 'We provide door-to-door pickup of household waste on scheduled days.',
    icon: '🏠',
  },
  {
    title: 'Recyclable Waste Pickup',
    description: 'Get your paper, plastic, glass, and metal items recycled responsibly.',
    icon: '♻️',
  },
  {
    title: 'E-Waste Disposal',
    description: 'Safely dispose of electronics and gadgets to reduce environmental harm.',
    icon: '💻',
  },
  {
    title: 'Organic Waste Composting',
    description: 'Convert food and garden waste into eco-friendly compost.',
    icon: '🌱',
  },
  {
    title: 'Hazardous Waste Handling',
    description: 'Proper handling of paints, chemicals, and batteries to avoid pollution.',
    icon: '☣️',
  },
];

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our EcoWaste Services</h1>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#2f855a',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f7fafc',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '12px',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#2c7a7b',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#4a5568',
  },
};

export default Services;
