import React, { useEffect } from "react";
import { FaGoogle, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaBullseye, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import "../../style/pages/services/DigitalAdvertising.css"; // Import CSS file

export default function DigitalAdvertising() {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="digital-ad-section">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('digital_advertising.title')}
        </motion.h2>

        <p 
          className="section-description"
          dangerouslySetInnerHTML={{ __html: t('digital_advertising.description') }} 
        />

        {/* Advertising Platforms */}
        <div className="technologies-grid">
          {[ 
            { name: "Google Ads", icon: <FaGoogle />, class: "tech-google" },
            { name: "Facebook Ads", icon: <FaFacebook />, class: "tech-facebook" },
            { name: "Instagram Ads", icon: <FaInstagram />, class: "tech-instagram" },
            { name: "LinkedIn Ads", icon: <FaLinkedin />, class: "tech-linkedin" },
            { name: "YouTube Ads", icon: <FaYoutube />, class: "tech-youtube" },
            { name: "TikTok Ads", icon: <FaTiktok />, class: "tech-tiktok" },
          ].map((platform, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`technology-card ${platform.class}`}
            >
              <div className="tech-icon">{platform.icon}</div>
              <p className="tech-name">{platform.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="benefits-container">
          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaBullseye className="benefit-icon" />
            <div>
              <h3 className="benefit-title">{t('digital_advertising.targeted_campaigns_title')}</h3>
              <p 
                className="benefit-description"
                dangerouslySetInnerHTML={{ __html: t('digital_advertising.targeted_campaigns_description') }} 
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaChartLine className="benefit-icon" />
            <div>
              <h3 className="benefit-title">{t('digital_advertising.data_driven_strategies_title')}</h3>
              <p 
                className="benefit-description"
                dangerouslySetInnerHTML={{ __html: t('digital_advertising.data_driven_strategies_description') }} 
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaMoneyBillWave className="benefit-icon" />
            <div>
              <h3 className="benefit-title">{t('digital_advertising.maximized_roi_title')}</h3>
              <p 
                className="benefit-description"
                dangerouslySetInnerHTML={{ __html: t('digital_advertising.maximized_roi_description') }} 
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a 
          href="https://wa.me/+212717923103"
          whileHover={{ scale: 1.1 }}
          className="cta-button"
        >
          {t('digital_advertising.cta_button')}
        </motion.a>
      </div>
    </section>
  );
}
