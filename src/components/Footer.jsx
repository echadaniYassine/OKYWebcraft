import React, { useState } from 'react';
import '../style/components/Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaGavel,
  FaInfoCircle,
  FaBriefcase,
  FaWhatsapp,
  FaLinkedinIn

} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* First Section */}
        <div className="footer__section">
          <div className="footer__logo">
            <img
              src="assets/logo.png"
              alt="OKY Agency Logo"
              className="footer__logo__image"
            />
          </div>
          <form className="footer__short-subscription" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
              className="footer__short-subscription__input"
            />
            <button type="submit" className="footer__short-subscription__button">
              Subscribe
            </button>
          </form>
          <ul className="footer__social-links">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
              { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
              { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
              { href: "https://wa.me/1234567890", icon: <FaWhatsapp />, label: "WhatsApp" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="footer__social-link"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Second Section */}
        <div className="footer__section">
          <h1 className="footer__title_">Fast Links</h1>
          <ul className="footer__links">
            <li className="footer__links__item">
              <FaShieldAlt className="footer__links__icon" />
              <Link to="/privacy-policy" className="footer__links__link">Privacy Policy</Link>
            </li>
            <li className="footer__links__item">
              <FaGavel className="footer__links__icon" />
              <Link to="/terms-of-service" className="footer__links__link">Terms of Service</Link>
            </li>
            <li className="footer__links__item">
              <FaBriefcase className="footer__links__icon" />
              <Link to="/Careers" className="footer__links__link">Careers</Link>
            </li>
            <li className="footer__links__item">
              <FaInfoCircle className="footer__links__icon" />
              <Link to="/about-us" className="footer__links__link">About Us</Link>
            </li>
          </ul>
        </div>
        {/* Third Section */}
        <div className="footer__section">
          <h1 className="footer__title_3">Where We Are</h1>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <FaPhone className="footer__contact-icon" />
              <span>+212 717-923103</span>
            </li>
            <li className="footer__contact-item">
              <FaEnvelope className="footer__contact-icon" />
              <a href="mailto:contact@okyagency.com" className="footer__contact-link">okywebcraft@gmail.com</a>
            </li>
            <li className="footer__contact-item">
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>Rabat, Morocco</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer__copyright">
      <p>© 2025 OKY WebCraft. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;