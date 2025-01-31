import React, { useEffect } from "react";
import { MdDesignServices, MdCheckCircle } from "react-icons/md";
import { SiAdobexd, SiSketch, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"; // Added correct Photoshop icon
import { FaUsers, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../style/pages/services/UIUXDesign.css";

export default function UIUXDesign() {
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
          UI/UX Design
        </motion.h2>

        <p className="section-description">
          Create stunning, user-friendly interfaces with <strong>OKY Agency</strong>. We focus on <strong>user experience, intuitive navigation, and modern aesthetics</strong> to elevate your digital presence.
        </p>

        {/* Design Tools - Fixed Photoshop icon */}
        <div className="technologies-grid">
          {[ 
            { name: "Figma", icon: <MdDesignServices />, class: "tech-figma" },
            { name: "Adobe XD", icon: <SiAdobexd />, class: "tech-adobe" },
            { name: "Sketch", icon: <SiSketch />, class: "tech-sketch" },
            { name: "Illustrator", icon: <SiAdobeillustrator />, class: "tech-illustrator" },
            { name: "Photoshop", icon: <SiAdobephotoshop />, class: "tech-photoshop" }
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
          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaUsers className="benefit-icon" />
            <div>
              <h3 className="benefit-title">User-Centered Design</h3>
              <p className="benefit-description">
                We design with <strong>user experience in mind</strong>, ensuring accessibility and seamless interactions.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <FaLaptopCode className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Prototyping & Wireframing</h3>
              <p className="benefit-description">
                Get a <strong>visual blueprint</strong> of your application before development starts.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card">
            <MdCheckCircle className="benefit-icon" />
            <div>
              <h3 className="benefit-title">Usability Testing</h3>
              <p className="benefit-description">
                Improve user interactions with <strong>real feedback and iterative design</strong>.
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
          Improve Your UI/UX
        </motion.a>
      </div>
    </section>
  );
}