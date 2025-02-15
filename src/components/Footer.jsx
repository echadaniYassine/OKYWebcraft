import React, { useState } from 'react';
import '../style/components/Footer.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, 
  FaGavel, FaBriefcase, FaInfoCircle 
} from 'react-icons/fa';
import { color } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const notify = (type, message) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      notify('error', 'Please enter a valid email.');
      return;
    }

    try {
      const response = await axios.post('https://trendify-backend.vercel.app/api/Trendify/subscribe', { email });

      if (response?.data?.message === "Successfully subscribed") {
        notify('success', 'Subscription successful! 🎉');
      } else {
        notify('error', 'Something went wrong, please try again.');
      }
      setEmail("");
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      notify('error', 'An error occurred. Please try again later.');
    }
  };

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: t("footer.social_links.facebook") },
    { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: t("footer.social_links.instagram") },
    { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: t("footer.social_links.linkedin") },
    { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: t("footer.social_links.whatsapp") },
  ];

  const footerLinks = [
    { to: "/privacy-policy", icon: <FaShieldAlt />, label: t('footer.privacy_policy') },
    { to: "/terms-of-service", icon: <FaGavel />, label: t('footer.terms_of_service') },
    { to: "/Careers", icon: <FaBriefcase />, label: t('footer.careers') },
    { to: "/about-us", icon: <FaInfoCircle />, label: t('footer.about_us') },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: t('footer.contact_phone') },
    { icon: <FaEnvelope />, text: <a href="mailto:contact@okyagency.com" className="footer__contact-link">{t('footer.contact_email')}</a> },
    { icon: <FaMapMarkerAlt />, text: t('footer.contact_address') },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <div className="footer__logo">
            <img src="assets/logo-footer.png" alt="OKY Agency Logo" className="footer__logo__image" />
          </div>
          <form className="footer__short-subscription" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={t('footer.input-Subscribe')}
              className="footer__short-subscription__input"
              required
            />
            <button type="submit" className="footer__short-subscription__button">
              {t('footer.subscribe')}
            </button>
          </form>
          <ToastContainer />
          <ul className="footer__social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="footer__social-link">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <h1 className="footer__title_">{t('footer.fast_links')}</h1>
          <ul className="footer__links">
            {footerLinks.map((link, index) => (
              <li key={index} className="footer__links__item">
                {link.icon && <span className="footer__links__icon">{link.icon}</span>}
                <Link to={link.to} className="footer__links__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <h1 className="footer__title_3">{t('footer.where_we_are')}</h1>
          <ul className="footer__contact-list">
            {contactInfo.map((item, index) => (
              <li key={index} className="footer__contact-item">
                {item.icon && <span className="footer__contact-icon">{item.icon}</span>}
                <span>{item.text}</span>
              </li>
            ))}
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
