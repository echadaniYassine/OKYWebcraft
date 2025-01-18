import React, { useState } from 'react';
import '../style/components/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Handle subscription logic here
      alert(`Subscribed with: ${email}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <p className="footer__top__text">&copy; 2025 OKY Agency. All rights reserved.</p>
          <ul className="footer__social-links">
            <li className="footer__social-links__item"><a href="#" className="footer__social-links__link" aria-label="Facebook"><FaFacebookF /></a></li>
            <li className="footer__social-links__item"><a href="#" className="footer__social-links__link" aria-label="Twitter"><FaTwitter /></a></li>
            <li className="footer__social-links__item"><a href="#" className="footer__social-links__link" aria-label="Instagram"><FaInstagram /></a></li>
          </ul>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <div className="footer__contact-info">
            <p><FaEnvelope /> <a href="mailto:contact@okyagency.com" className="footer__contact-info__link">contact@okyagency.com</a></p>
            <p><FaMapMarkerAlt /> <span className="footer__contact-info__address">123 OKY Street, City, Country</span></p>
          </div>
          <div className="footer__links">
            <ul className="footer__links__ul">
              <li><a href="#" className="footer__links__link">Privacy Policy</a></li>
              <li><a href="#" className="footer__links__link">Terms of Service</a></li>
              <li><a href="#" className="footer__links__link">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer__newsletter">
          <h3 className="footer__newsletter__title">Subscribe to Our NewsOffre</h3>
          <form className="footer__newsletter__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="footer__newsletter__input"
            />
            <button type="submit" className="footer__newsletter__button">Subscribe</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;