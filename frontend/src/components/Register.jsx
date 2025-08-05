// src/components/Register.jsx

import React, { useState } from 'react';
import { submitApplicant } from '../api/api.js';

// The registration form component
const Register = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setStatusMessage('Submitting...');

    const applicantData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    const result = await submitApplicant(applicantData);

    if (result.success) {
      setStatusMessage('✅ ' + result.message);
      form.reset();
    } else {
      setStatusMessage('❌ ' + result.message);
    }
  };

  return (
    <div className="content-container">
      <h2 className="title">Registration Form</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Why are you interested?</label>
          <textarea id="message" name="message" rows="4" required className="form-input"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="button green-button">
            Submit Application
          </button>
        </div>
      </form>
      <div className="status-message-container">
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Register;
