import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="container"> 
    <section>
      <div className="container testimonial-text-body">
        <div className="testimonials-section">
          <h1 className="testimonials-title">Customer Testimonials</h1>
          <p className="testimonial-text">This tool has transformed my productivity and organization!</p>
        </div>
      </div>
    </section>
    <section>
      <div className="container position-relative mb-5">
        <div className="testimonial-div"></div>
        <div className="container-testimonial">
          <div className="testimonial-container mt-5">
            <div className="testimonial-content">
              <div className="testimonial-quote">
                Using this website has made my tasks so much easier! I can't imagine my day without it.
              </div>
              
              <div className="testimonial-author">
                <div className="author-indicator"></div>
                <div className="author-info">
                  <h4>Sherri Cronin</h4>
                  <p>Project Manager, TechCorp</p>
                </div>
              </div>
              
              <div className="navigation-arrows">
                <button className="nav-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button className="nav-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="testimonial-image">
              <div className="image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Professional woman portrait" 
                  className="testimonial-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
