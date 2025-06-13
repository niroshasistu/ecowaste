import React, { useState } from 'react';

const SchedulePickup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
    wasteType: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/pickups/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', address: '', date: '', wasteType: '' });
      } else {
        console.error('Submission failed');
      }
    } catch (err) {
      console.error('Error connecting to backend:', err);
    }
  };
 return (
    <div style={styles.container}>
      <h2 style={styles.title}>Schedule a Waste Pickup</h2>

      {submitted && <p style={styles.success}>Your pickup has been scheduled ✅</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="address"
          placeholder="Pickup Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="wasteType"
          value={formData.wasteType}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Waste Type</option>
          <option value="recyclable">Recyclable</option>
          <option value="organic">Organic</option>
          <option value="hazardous">Hazardous</option>
          <option value="e-waste">E-Waste</option>
        </select>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#f0fff4',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '40px',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#2f855a',
    textAlign: 'center',
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#38a169',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
};

export default SchedulePickup;
