import React, { useEffect } from "react";
import { MdDesignServices, MdCheckCircle } from "react-icons/md";
import { SiAdobexd, SiSketch, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"; // Fixed Photoshop icon
import { FaUsers, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import "../../style/pages/services/UIUXDesign.css";

export default function UIUXDesign() {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="uiux-section">
      <div className="background-overlay"></div>

      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t("uiux_design.title")}
        </motion.h2>

        <p 
          className="section-description"
          dangerouslySetInnerHTML={{ __html: t("uiux_design.description") }} 
        />

        {/* Design Tools */}
        <div className="technologies-grid">
          {[
            { name: t("uiux_design.tools.figma"), icon: <MdDesignServices />, class: "tech-figma" },
            { name: t("uiux_design.tools.adobe_xd"), icon: <SiAdobexd />, class: "tech-adobe" },
            { name: t("uiux_design.tools.sketch"), icon: <SiSketch />, class: "tech-sketch" },
            { name: t("uiux_design.tools.illustrator"), icon: <SiAdobeillustrator />, class: "tech-illustrator" },
            { name: t("uiux_design.tools.photoshop"), icon: <SiAdobephotoshop />, class: "tech-photoshop" }
          ].map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`technology-card ${tool.class}`}
            >
              <div className="tech-icon">{tool.icon}</div>
              <p className="tech-name">{tool.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="benefits-container">
          {[
            { icon: <FaUsers />, title: t("uiux_design.benefits.user_centered_design.title"), description: t("uiux_design.benefits.user_centered_design.description") },
            { icon: <FaLaptopCode />, title: t("uiux_design.benefits.prototyping_wireframing.title"), description: t("uiux_design.benefits.prototyping_wireframing.description") },
            { icon: <MdCheckCircle />, title: t("uiux_design.benefits.usability_testing.title"), description: t("uiux_design.benefits.usability_testing.description") }
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
          {t("uiux_design.cta_button")}
        </motion.a>
      </div>
    </section>
  );
}
