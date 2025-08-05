// src/App.jsx

import React, { useState } from 'react';
import './index.css'; // Import the global styles

// Import the components
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Admin from './components/Admin';

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState('home');

  // Renders the correct component based on the current view state
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'register':
        return <Register />;
      case 'admin':
        return <Admin />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-background">
      <div className="app-container">
        <Header setCurrentView={setCurrentView} />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
