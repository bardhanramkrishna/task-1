// src/components/Home.jsx

import React from 'react';

// The home page component
const Home = () => {
  return (
    <div className="content-container text-center">
      <h2 className="title">Welcome to the Portal!</h2>
      <p className="description">
        This is a simple application for interns and volunteers to register their information.
      </p>
      <p className="description">
        Use the "Register" button to submit your details or the "Admin View" to see all registered applicants.
      </p>
    </div>
  );
};

export default Home;
