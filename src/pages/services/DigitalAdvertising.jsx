import React, { useEffect } from "react";
import { FaGoogle, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaBullseye, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../style/pages/services/DigitalAdvertising.css"; // Import CSS file

export default function DigitalAdvertising () {
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
          Digital Advertising
        </motion.h2>

        <p className="section-description">
          Maximize your reach with <strong>OKY Agency</strong>. We create high-converting <strong>digital ad campaigns</strong> tailored to your audience, ensuring <strong>maximum ROI</strong> and business growth.
        </p>

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
              <h3 className="benefit-title">Targeted Campaigns</h3>
              <p className="benefit-description">
                We deliver <strong>highly targeted ads</strong> to the right audience, increasing engagement and conversions.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaChartLine className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Data-Driven Strategies</h3>
              <p className="benefit-description">
                Using <strong>analytics & AI</strong>, we continuously optimize campaigns for better performance.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaMoneyBillWave className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Maximized ROI</h3>
              <p className="benefit-description">
                Get the <strong>best return on investment</strong> by reducing ad waste and increasing conversions.
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
          Launch Your Campaign
        </motion.a>
      </div>
    </section>
  );
};

