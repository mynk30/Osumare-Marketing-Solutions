import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white border-top py-5"
    >
      <div className="container">
        <div className="row">
          {/* Newsletter Section */}
          <div className="col-md-4 mb-4">
            <img src="../../assets/logo.png" alt="OrganizePro Logo" className="mb-4" style={{ width: '100px' }} />
            <p className="text-dark">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            <div className="d-flex mb-3">
              <input
                type="email"
                placeholder="Your email here"
                className="form-control me-2"
              />
              <button
                className="btn btn-danger"
              >
                Join
              </button>
            </div>
            <p className="text-dark small">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

          {/* Quick Links (renamed to Useful Links) */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-4">Useful Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#process" className="text-dark text-decoration-none">
                  Process
                </a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-dark text-decoration-none">
                  Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a href="#join" className="text-dark text-decoration-none">
                  Join
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (renamed to Resources) */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-4">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">Email: info@organizepro.com</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">Phone: (555) 123-4567</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">Address: 123 Business St</a>
              </li>
            </ul>
          </div>

          {/* Social Media (renamed to Connect With Us) */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-4">Connect With Us</h5>
            <div className="d-flex">
              <a href="#" className="text-danger me-3 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-danger me-3 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-danger me-3 fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-danger me-3 fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-danger me-3 fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-top pt-4 d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0 text-dark">© {new Date().getFullYear()} OrganizePro. All rights reserved.</p>
          <div className="d-flex">
            <a href="#" className="text-dark text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-dark text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-dark text-decoration-none">Cookie Settings</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;