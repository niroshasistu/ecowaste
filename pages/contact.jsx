import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Later connect to backend or email service
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us 📞</h1>
      <p style={styles.subheading}>Have questions, suggestions, or want to get involved? We'd love to hear from you.</p>

      <div style={styles.content}>
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
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        {submitted && <p style={styles.thankYou}>✅ Thank you for reaching out! We'll get back to you shortly.</p>}

        <div style={styles.info}>
          <h3>EcoWaste Office</h3>
          <p>123 Green Street, CleanCity</p>
          <p>Email: support@ecowaste.org</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '900px',
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
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
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
    color: '#2f855a',
    fontSize: '1rem',
    marginTop: '10px',
  },
  info: {
    marginTop: '40px',
    backgroundColor: '#f0fff4',
    padding: '20px',
    borderRadius: '12px',
    color: '#2f855a',
    fontWeight: '500',
  },
};

export default Contact;
