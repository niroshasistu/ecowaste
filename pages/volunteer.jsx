import React, { useState } from 'react';

const Volunteer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can later connect this to your backend or an email service
    console.log('Volunteer Form Submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Become an EcoWaste Volunteer 🌿</h1>
      <p style={styles.subheading}>
        Join our mission to build cleaner neighborhoods and spread awareness on sustainable waste practices.
      </p>

      {!submitted ? (
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={form.message}
            onChange={handleChange}
            rows="4"
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      ) : (
        <p style={styles.thankYou}>Thank you for volunteering! 💚 We’ll be in touch soon.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '600px',
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
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
  },
  textarea: {
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    backgroundColor: '#38a169',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  thankYou: {
    fontSize: '1.2rem',
    color: '#2f855a',
    marginTop: '20px',
  },
};

export default Volunteer;
