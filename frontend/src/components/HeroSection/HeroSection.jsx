import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from '../Forms/ContactForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setIsFormOpen(false);
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Todo App Header Section */}
      <div className="text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <h1 className="display-2 fw-bold mb-4" style={{ color: '#2c3e50' }}>
          Simplify Your Life with Our<br />Todo App
        </h1>
        <div className="container">
          <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
            Stay organized and boost your productivity with our intuitive todo website. 
            Experience a modern approach to task management that fits your lifestyle.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              className="btn btn-lg px-5 py-3 fw-semibold text-white" 
              style={{ backgroundColor: '#ff4757', border: 'none', borderRadius: '50px' }}
              onClick={() => setIsFormOpen(true)}
            >
              Get started
            </button>
            <button className="btn btn-outline-danger btn-lg px-5 py-3 fw-semibold" style={{ borderRadius: '50px', borderWidth: '2px' }}>
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Original Hero Section */}
      <div className="container-fluid d-flex flex-column justify-content-center py-5">
        <div className="row flex-grow-1 mx-3 rounded-4 overflow-hidden shadow" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Left Side */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-white p-5" style={{ backgroundColor: '#ff4b5c' }}>
            <h1 className="display-3 fw-bold">Organize.<br />Achieve.<br />Relax.</h1>
            <p className="lead mt-3">
              Turn clutter into clarity, chaos into control, and dreams into done.
              <br />Bold visions into market success.
            </p>
            <div className="mt-4 d-flex gap-3">
              <button 
                className="btn btn-light text-dark px-4 py-2 fw-semibold" 
                onClick={() => setIsFormOpen(true)}
              >
                Get Started Today
              </button>
              <button className="btn btn-outline-light px-4 py-2 fw-semibold">Discover Features</button>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="col-md-6 p-0 position-relative">
            <div className="h-100 w-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 text-white text-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="testimonial"
                className="img-fluid h-100 w-100"
                style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
              />
              <div className="position-absolute text-white px-4" style={{ top: '20px', left: '20px' }}>
                <h4 className="fw-bold">Your Tasks.<br /><span className="text-white-50">Our Tools.</span></h4>
              </div>
              <div className="position-absolute text-start text-white px-4" style={{ bottom: '20px', left: '20px' }}>
                <p className="mb-1 fw-semibold">Freddie Halvorson</p>
                <p className="small text-white-50 mb-2">Chief Productivity Enthusiast</p>
              </div>
              <div className="position-absolute" style={{ bottom: '20px', right: '20px' }}>
                <button className="btn btn-dark rounded-circle p-3">
                  <i className="bi bi-play-fill fs-4 text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Logos Footer */}
        <div className="text-center mt-5">
          <img
            src="../../assets/images/socialMedia.svg"
            alt="Social Media Logos"
            className="img-fluid"
            style={{ maxWidth: '600px' }}
          />
        </div>
      </div>

      {/* Contact Form Modal */}
      <Modal
        show={isFormOpen}
        onHide={() => setIsFormOpen(false)}
        backdrop="static"
        keyboard={false}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleFormSubmit}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeroSection;