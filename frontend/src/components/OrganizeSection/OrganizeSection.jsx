import React from 'react';
import './OrganizeSection.css';

const OrganizeSection = () => {
  return (
    <section className="organize-section flex flex-col items-center justify-center">
      {/* Main Heading Section */}
      <div className="main-heading">
        <h1>Organize.</h1>
        <h1>Achieve.</h1>
        <h1>Relax.</h1>
        <p className="subheading">
          Turn clutter into clarity, chaos into control, and dreams into done <span className="bold">bold visions into market success</span>
        </p>
      </div>


      {/* Buttons Section */}
      <div className="buttons-section">
        <button className="primary-btn">Get Started Today</button>
        <button className="secondary-btn">Discover Features</button>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Testimonial Section */}
      <div className="testimonial">
        <h2>Your Tasks. Our Tools.</h2>
        <div className="testimonial-content">
          <div className="logo">logoipsum</div>
          <div className="author-info">
            <p className="author-name">Freddie Halvorson</p>
            <p className="author-title">Chief Productivity Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizeSection;
