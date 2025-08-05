// src/components/Header.jsx

import React from 'react';

// A presentational component for the navigation bar
const Header = ({ setCurrentView }) => {
  return (
    <header className="header">
      <h1 className="main-title">
        Intern/Volunteer Portal
      </h1>
      <nav className="nav-container">
        <button onClick={() => setCurrentView('home')} className="button blue-button">
          Home
        </button>
        <button onClick={() => setCurrentView('register')} className="button green-button">
          Register
        </button>
        <button onClick={() => setCurrentView('admin')} className="button purple-button">
          Admin View
        </button>
      </nav>
    </header>
  );
};

export default Header;
