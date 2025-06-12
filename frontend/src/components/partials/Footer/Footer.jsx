import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="footer-row">
          {/* Newsletter Section */}
          <Col xs={12} md={4} className="footer-col footer-col-newsletter">
            <img src="../../../assets/logo.svg" alt="Do List Logo" className="footer-logo" />
            <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
            <Form className="newsletter-input-group">
              <Form.Group className="d-flex">
                <Form.Control 
                  type="email" 
                  placeholder="Your email here" 
                  className="newsletter-input"
                />
                <Button variant="danger" className="join-btn">Join</Button>
              </Form.Group>
            </Form>
            <p className="newsletter-consent">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </Col>

          {/* Useful Links */}
          <Col xs={6} md={2} className="footer-col">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="#">Home Page</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog Posts</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </Col>

          {/* Resources */}
          <Col xs={6} md={2} className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">User Guide</a></li>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </Col>

          {/* Connect With Us */}
          <Col xs={12} md={4} className="footer-col footer-col-social">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <p>© 2024 Osumare. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
