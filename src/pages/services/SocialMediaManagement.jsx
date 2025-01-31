import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaChartLine, FaUsers, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../style/pages/services/SocialMediaManagement.css"; // Import CSS file

const SocialMediaManagement = () => {
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
          Social Media Management
        </motion.h2>

        <p className="section-description">
          Boost your brand’s online presence with <strong>OKY Agency</strong>. We handle your <strong>social media strategy, content, and engagement</strong> to ensure maximum reach and impact.
        </p>

        {/* Social Media Platforms */}
        <div className="technologies-grid">
          {[
            { name: "Facebook", icon: <FaFacebook />, class: "tech-facebook" },
            { name: "Instagram", icon: <FaInstagram />, class: "tech-instagram" },
            { name: "Twitter", icon: <FaTwitter />, class: "tech-twitter" },
            { name: "LinkedIn", icon: <FaLinkedin />, class: "tech-linkedin" },
            { name: "TikTok", icon: <FaTiktok />, class: "tech-tiktok" },
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
            <FaClipboardList className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Content Strategy</h3>
              <p className="benefit-description">
                We create <strong>engaging content</strong> tailored to your audience, ensuring consistency and brand alignment.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaChartLine className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Analytics & Reporting</h3>
              <p className="benefit-description">
                Track your <strong>social media performance</strong> with detailed insights to refine your strategy.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaUsers className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Community Engagement</h3>
              <p className="benefit-description">
                Build <strong>strong connections</strong> with your audience through active interactions and timely responses.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a 
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="cta-button"
        >
          Boost Your Social Media
        </motion.a>
      </div>
    </section>
  );
};

export default SocialMediaManagement;
