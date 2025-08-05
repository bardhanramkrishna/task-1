// src/components/Admin.jsx

import React, { useState, useEffect } from 'react';
import { fetchApplicants } from '../api/api.js';

// The admin view component to display all applicants
const Admin = () => {
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const getApplicants = async () => {
      setIsLoading(true);
      const result = await fetchApplicants();
      if (result.success) {
        setApplicants(result.data);
      } else {
        setStatusMessage(result.message);
      }
      setIsLoading(false);
    };
    getApplicants();
  }, []); // The empty dependency array ensures this runs only once on mount

  let content;
  if (isLoading) {
    content = <p className="text-center loading-message">Loading applicants...</p>;
  } else if (applicants.length === 0) {
    content = <p className="text-center loading-message">No applicants have registered yet.</p>;
  } else {
    content = (
      <ul className="applicant-list-container">
        {applicants.map(applicant => (
          <li key={applicant._id} className="applicant-item">
            <p className="applicant-name">{applicant.name}</p>
            <p className="applicant-detail"><span className="detail-label">Email:</span> {applicant.email}</p>
            <p className="applicant-detail"><span className="detail-label">Phone:</span> {applicant.phone || 'N/A'}</p>
            <p className="applicant-detail"><span className="detail-label">Message:</span></p>
            <p className="applicant-message">{applicant.message}</p>
            <p className="applicant-timestamp">Submitted on: {new Date(applicant.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="content-container">
      <h2 className="title purple-title">Admin View: Applicants</h2>
      {statusMessage && <p className="status-message-container">{statusMessage}</p>}
      {content}
    </div>
  );
};

export default Admin;
