import React from 'react';
import '../style/components/Hero.css';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Change language function
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-container">
          {/* Left: Text Content */}
          <div className="hero-text fade-in-right">
            <h1 className="hero-title">{t('hero.hero_title')}</h1>
            <h3 className="hero-subtitle typing-animation">{t('hero.hero_subtitle')}</h3>
            <p className="hero-paragraph">{t('hero.hero_paragraph')}</p>
            <a href="#services" className="btn hero-btn">{t('hero.explore_services')}</a>
          </div>
          <div className="hero-image-container">
            <div className="hero-image fade-in-left">
              <img src="assets/hero5.png" alt="Digital Solutions" />
            </div>
          </div>
        </div>
      </section>
      <div className="hero-stats">
        <div className="hero-stat">
          <img src='assets/choseUs1.png' className="hero-stat-icon" />
          <h1 className="hero-stat-title">34+</h1>
          <p className="hero-stat-paragraph">{t('hero.projects_delivered')}</p>
        </div>
        <div className="hero-stat">
          <img src='assets/choseUs3.png' className="hero-stat-icon" />
          <h1 className="hero-stat-title">99%</h1>
          <p className="hero-stat-paragraph">{t('hero.satisfaction_rate')}</p>
        </div>
        <div className="hero-stat">
          <img src='assets/chose 2.png' className="hero-stat-icon" />
          <h1 className="hero-stat-title">6+</h1>
          <p className="hero-stat-paragraph">{t('hero.team_members')}</p>
        </div>
      </div>
      <div className="whatsapp-container">
        <a href="https://wa.me/+212717923103" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
          <span className="whatsapp-tooltip">Chat with us!</span>

        </a>
      </div>
    </>
  );
};

export default Hero;
