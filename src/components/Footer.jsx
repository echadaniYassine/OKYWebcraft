import React from 'react';
import '../style/components/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p>&copy; 2025 OKY Agency. All rights reserved.</p>
          <ul className="social-links">
            <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
            <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
            <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="contact-info">
            <p><FaEnvelope /> <a href="mailto:contact@okyagency.com">contact@okyagency.com</a></p>
            <p><FaMapMarkerAlt /> <span>123 OKY Street, City, Country</span></p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
