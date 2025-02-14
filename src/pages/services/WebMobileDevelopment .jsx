import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaLaravel, FaDatabase, FaMobileAlt, FaDesktop } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFlutter, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import "../../style/pages/services/WebMobileDevelopment.css"; // Import the external CSS file

const WebMobileDevelopment = () => {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="web-mobile-development-section">
      {/* Background Gradient */}
      <div className="web-mobile-development-background-overlay"></div>

      <div className="web-mobile-development-content-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="web-mobile-development-section-title"
        >
          {t("web_mobile_development.title")}
        </motion.h2>

        <p className="web-mobile-development-section-description"
          dangerouslySetInnerHTML={{ __html: t("web_mobile_development.description") }} 
        />

        {/* Technologies Used */}
        <div className="web-mobile-development-technologies-grid">
          {[
            { name: t("web_mobile_development.technologies.react"), icon: <FaReact />, class: "web-mobile-development-tech-react" },
            { name: t("web_mobile_development.technologies.node_js"), icon: <FaNodeJs />, class: "web-mobile-development-tech-node" },
            { name: t("web_mobile_development.technologies.express"), icon: <SiExpress />, class: "web-mobile-development-tech-express" },
            { name: t("web_mobile_development.technologies.mongodb"), icon: <SiMongodb />, class: "web-mobile-development-tech-mongodb" },
            { name: t("web_mobile_development.technologies.laravel"), icon: <FaLaravel />, class: "web-mobile-development-tech-laravel" },
            { name: t("web_mobile_development.technologies.tailwindcss"), icon: <SiTailwindcss />, class: "web-mobile-development-tech-tailwind" },
            { name: t("web_mobile_development.technologies.react_native"), icon: <SiReact />, class: "web-mobile-development-tech-react-native" },
            { name: t("web_mobile_development.technologies.flutter"), icon: <SiFlutter />, class: "web-mobile-development-tech-flutter" }
          ].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`web-mobile-development-technology-card ${tech.class}`}
            >
              <div className="web-mobile-development-tech-icon">{tech.icon}</div>
              <p className="web-mobile-development-tech-name">{tech.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="web-mobile-development-benefits-container">
          {[
            { icon: <FaDesktop />, title: t("web_mobile_development.benefits.custom_web_solutions.title"), description: t("web_mobile_development.benefits.custom_web_solutions.description") },
            { icon: <FaMobileAlt />, title: t("web_mobile_development.benefits.mobile_first_development.title"), description: t("web_mobile_development.benefits.mobile_first_development.description") },
            { icon: <FaDatabase />, title: t("web_mobile_development.benefits.powerful_backend_systems.title"), description: t("web_mobile_development.benefits.powerful_backend_systems.description") }
          ].map((benefit, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index} className="web-mobile-development-benefit-card">
              {benefit.icon && <div className="web-mobile-development-benefit-icon">{benefit.icon}</div>}
              <div>
                <h3 className="web-mobile-development-benefit-title">{benefit.title}</h3>
                <p 
                  className="web-mobile-development-benefit-description"
                  dangerouslySetInnerHTML={{ __html: benefit.description }} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="web-mobile-development-cta-button"
        >
          {t("web_mobile_development.cta_button")}
        </motion.a>
      </div>
    </section>
  );
};

export default WebMobileDevelopment;
