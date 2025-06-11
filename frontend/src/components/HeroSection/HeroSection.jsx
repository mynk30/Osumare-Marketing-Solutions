import React from 'react';
import './HeroSection.css';
import OrganizeSection from '../OrganizeSection/OrganizeSection';

const HeroSection = ({ setIsFormOpen }) => {
  return (
    <div className="hero-section">
      <div className="hero-content-container">
        <div className="hero-content">
          <h1>Simplify Your Life with Our Todo App</h1>
          <p className="hero-subtext">
            Stay organized and boost your productivity with our intuitive todo website.<br />
            Experience a modern approach to task management that fits your lifestyle.
          </p>
          <div className="hero-buttons">
            <button 
              className="primary-button"
              onClick={() => setIsFormOpen(true)}
            >
              Get Started
            </button>
            <button className="secondary-button">
              Learn More
            </button>
          </div>
          <OrganizeSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
