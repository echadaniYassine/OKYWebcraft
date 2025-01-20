import React, { useState } from 'react';
import '../style/components/Footer.css';
import {
  FaFacebookF,
  FaTwitter,
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
              src="assets/HERO.png"
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
              <a href="#" className="footer__links__link">Privacy Policy</a>
            </li>
            <li className="footer__links__item">
              <FaGavel className="footer__links__icon" />
              <a href="#" className="footer__links__link">Terms of Service</a>
            </li>
            <li className="footer__links__item">
              <FaBriefcase className="footer__links__icon" />
              <a href="#" className="footer__links__link">Careers</a>
            </li>
            <li className="footer__links__item">
              <FaInfoCircle className="footer__links__icon" />
              <a href="#" className="footer__links__link">About Us</a>
            </li>
          </ul>
        </div>
        {/* Third Section */}
        <div className="footer__section">
          <h1 className="footer__title_3">Where We Are</h1>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <FaPhone className="footer__contact-icon" />
              <span>+123 456 7890</span>
            </li>
            <li className="footer__contact-item">
              <FaEnvelope className="footer__contact-icon" />
              <a href="mailto:contact@okyagency.com" className="footer__contact-link">contact@okyagency.com</a>
            </li>
            <li className="footer__contact-item">
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>123 OKY Street, City, Country</span>
            </li>
          </ul>
          <div className="footer__map">
            <iframe
              title="Short Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.843544374667!2d-122.08424968467992!3d37.42199977982414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c7c2b1234f%3A0x87654321abcd!2s123%20OKY%20Street%2C%20City%2C%20Country!5e0!3m2!1sen!2s!4v1636472566710!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;