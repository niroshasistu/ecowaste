import React from 'react';

const impactData = [
  {
    title: '50+ Tons of Waste Collected',
    description: 'We have helped collect and responsibly dispose of over 50 tons of waste in our community.',
    icon: '🚛',
  },
  {
    title: '10,000+ kg Recycled',
    description: 'Our recycling efforts have processed thousands of kilograms of paper, plastic, and metal.',
    icon: '♻️',
  },
  {
    title: '500+ Happy Households',
    description: 'EcoWaste proudly serves hundreds of homes with eco-friendly waste solutions.',
    icon: '🏡',
  },
  {
    title: '30+ Community Cleanups',
    description: 'We’ve organized local cleanups and education drives across neighborhoods and schools.',
    icon: '🌍',
  },
];

const CommunityImpact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Community Impact</h1>
      <p style={styles.subheading}>
        Together with citizens and volunteers, EcoWaste is building a cleaner, greener world.
      </p>

      <div style={styles.grid}>
        {impactData.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2f855a',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#4a5568',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  },
  card: {
    backgroundColor: '#f0fff4',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#276749',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#4a5568',
  },
};

export default CommunityImpact;
