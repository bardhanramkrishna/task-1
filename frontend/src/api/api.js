// src/api/api.js

const API_BASE_URL = 'http://localhost:5000/api/applicants';

// Function to fetch all applicants from the backend
export const fetchApplicants = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch applicants from the server.');
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching applicants:', error);
    return { success: false, message: 'Failed to load applicants. Please check if the backend server is running.' };
  }
};

// Function to submit a new applicant
export const submitApplicant = async (applicantData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit application.');
    }

    return { success: true, message: 'Application submitted successfully!' };
  } catch (error) {
    console.error('Error submitting application:', error);
    return { success: false, message: 'Submission failed. Please check if the backend server is running.' };
  }
};
