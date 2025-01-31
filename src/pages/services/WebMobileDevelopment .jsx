import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaLaravel, FaDatabase, FaMobileAlt, FaDesktop } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFlutter, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import "../../style/pages/services/WebMobileDevelopment.css"; // Import the external CSS file

const WebMobileDevelopment = () => {
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
          Web & Mobile Development
        </motion.h2>

        <p className="web-mobile-development-section-description">
          Elevate your digital presence with <strong>OKY Agency</strong>. We craft high-performance
          <strong> web & mobile</strong> applications using the latest technologies, ensuring
          <strong> scalability, security, and a seamless user experience</strong>.
        </p>

        {/* Technologies Used */}
        <div className="web-mobile-development-technologies-grid">
          {[
            { name: "React", icon: <FaReact />, class: "web-mobile-development-tech-react" },
            { name: "Node.js", icon: <FaNodeJs />, class: "web-mobile-development-tech-node" },
            { name: "Express", icon: <SiExpress />, class: "web-mobile-development-tech-express" },
            { name: "MongoDB", icon: <SiMongodb />, class: "web-mobile-development-tech-mongodb" },
            { name: "Laravel", icon: <FaLaravel />, class: "web-mobile-development-tech-laravel" },
            { name: "TailwindCSS", icon: <SiTailwindcss />, class: "web-mobile-development-tech-tailwind" },
            { name: "React Native", icon: <SiReact />, class: "web-mobile-development-tech-react-native" },
            { name: "Flutter", icon: <SiFlutter />, class: "web-mobile-development-tech-flutter" }
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="web-mobile-development-benefit-card"
          >
            <FaDesktop className="web-mobile-development-benefit-icon web-mobile-development-benefit-web" />
            <div>
              <h3 className="web-mobile-development-benefit-title">Custom Web Solutions</h3>
              <p className="web-mobile-development-benefit-description">From <strong>corporate websites</strong> to <strong>SaaS platforms</strong>, we build tailored solutions that <strong>scale with your business</strong>.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="web-mobile-development-benefit-card"
          >
            <FaMobileAlt className="web-mobile-development-benefit-icon web-mobile-development-benefit-mobile" />
            <div>
              <h3 className="web-mobile-development-benefit-title">Mobile-First Development</h3>
              <p className="web-mobile-development-benefit-description">We create <strong>lightweight, fast, and intuitive mobile apps</strong> using <strong>React Native & Flutter</strong> for seamless <strong>iOS and Android</strong> experiences.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="web-mobile-development-benefit-card"
          >
            <FaDatabase className="web-mobile-development-benefit-icon web-mobile-development-benefit-backend" />
            <div>
              <h3 className="web-mobile-development-benefit-title">Powerful Backend Systems</h3>
              <p className="web-mobile-development-benefit-description">Leveraging <strong>Node.js, Express, Laravel, and MongoDB</strong>, we design <strong>scalable & secure backends</strong> to handle complex operations.</p>
            </div>
          </motion.div>
        </div>
        {/* CTA Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="web-mobile-development-cta-button"
        >
          Start Your Project
        </motion.a>
      </div>

    </section>
  );
};

export default WebMobileDevelopment;
