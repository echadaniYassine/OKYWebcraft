import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaChartLine, FaUsers, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import "../../style/pages/services/SocialMediaManagement.css"; // Import CSS file

const SocialMediaManagement = () => {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="social-media-section">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t("social_media_management.title")}
        </motion.h2>

        <p
          className="section-description"
          dangerouslySetInnerHTML={{ __html: t("social_media_management.description") }}
        />

        {/* Social Media Platforms */}
        <div className="technologies-grid">
          {[
            { name: t("social_media_management.platforms.facebook"), icon: <FaFacebook />, class: "tech-facebook" },
            { name: t("social_media_management.platforms.instagram"), icon: <FaInstagram />, class: "tech-instagram" },
            { name: t("social_media_management.platforms.twitter"), icon: <FaTwitter />, class: "tech-twitter" },
            { name: t("social_media_management.platforms.linkedin"), icon: <FaLinkedin />, class: "tech-linkedin" },
            { name: t("social_media_management.platforms.tiktok"), icon: <FaTiktok />, class: "tech-tiktok" },
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
          {[
            { icon: <FaClipboardList />, title: t("social_media_management.benefits.content_strategy.title"), description: t("social_media_management.benefits.content_strategy.description") },
            { icon: <FaChartLine />, title: t("social_media_management.benefits.analytics_reporting.title"), description: t("social_media_management.benefits.analytics_reporting.description") },
            { icon: <FaUsers />, title: t("social_media_management.benefits.community_engagement.title"), description: t("social_media_management.benefits.community_engagement.description") }
          ].map((benefit, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index} className="benefit-card">
              {benefit.icon && <div className="benefit-icon">{benefit.icon}</div>}
              <div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p 
                  className="benefit-description"
                  dangerouslySetInnerHTML={{ __html: benefit.description }} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/+212717923103"
          whileHover={{ scale: 1.1 }}
          className="cta-button"
        >
          {t("social_media_management.cta_button")}
        </motion.a>
      </div>
    </section>
  );
};

export default SocialMediaManagement;
