import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `First Name: ${firstName}%0ALast Name: ${lastName}%0AContact Number: ${contactNumber}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/+27731027145?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            style={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            style={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="contactNumber" style={styles.label}>
            Contact Number:
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            style={styles.input}
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            style={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}

const styles = {
  formGroup: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    minWidth: '150px',
    marginRight: '10px',
    textAlign: 'left',
  },
  input: {
    padding: '5px',
    width: '25%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '5px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ContactForm;


