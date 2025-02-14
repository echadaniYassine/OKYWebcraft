import React, { useState } from 'react';
import '../style/components/Footer.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';  // Importing useTranslation

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
  const [email, setEmail] = useState("");
  const { t } = useTranslation(); // Use the translation function

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success(t("footer.subscribe") + " " + t("footer.success_message"), {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* First Section */}
        <div className="footer__section">
          <div className="footer__logo">
            <img
              src="assets/logo-footer.png"
              alt="OKY Agency Logo"
              className="footer__logo__image"
            />
          </div>
          <form className="footer__short-subscription" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={t('footer.subscribe')}
              className="footer__short-subscription__input"
              required
            />
            <button type="submit" className="footer__short-subscription__button">
              {t('footer.subscribe')}
            </button>
          </form>
          <ToastContainer />
          <ul className="footer__social-links">
            {[
              { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: t("footer.social_links.facebook") },
              { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: t("footer.social_links.instagram") },
              { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: t("footer.social_links.linkedin") },
              { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: t("footer.social_links.whatsapp") },
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
          <h1 className="footer__title_">{t('footer.fast_links')}</h1>
          <ul className="footer__links">
            <li className="footer__links__item">
              <FaShieldAlt className="footer__links__icon" />
              <Link to="/privacy-policy" className="footer__links__link">{t('footer.privacy_policy')}</Link>
            </li>
            <li className="footer__links__item">
              <FaGavel className="footer__links__icon" />
              <Link to="/terms-of-service" className="footer__links__link">{t('footer.terms_of_service')}</Link>
            </li>
            <li className="footer__links__item">
              <FaBriefcase className="footer__links__icon" />
              <Link to="/Careers" className="footer__links__link">{t('footer.careers')}</Link>
            </li>
            <li className="footer__links__item">
              <FaInfoCircle className="footer__links__icon" />
              <Link to="/about-us" className="footer__links__link">{t('footer.about_us')}</Link>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="footer__section">
          <h1 className="footer__title_3">{t('footer.where_we_are')}</h1>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <FaPhone className="footer__contact-icon" />
              <span>{t('footer.contact_phone')}</span>
            </li>
            <li className="footer__contact-item">
              <FaEnvelope className="footer__contact-icon" />
              <a href="mailto:contact@okyagency.com" className="footer__contact-link">{t('footer.contact_email')}</a>
            </li>
            <li className="footer__contact-item">
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>{t('footer.contact_address')}</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer__copyright">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
