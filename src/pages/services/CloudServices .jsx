import React, { useEffect, useState } from "react";
import { FaAws, FaGoogle, FaMicrosoft, FaDigitalOcean, FaServer, FaShieldAlt, FaRocket } from "react-icons/fa";
import { SiVercel, SiNetlify } from "react-icons/si";
import { motion } from "framer-motion";
import "../../style/pages/services/CloudServices.css"; // Import CSS file

export default function CloudServices () {
    useEffect(() => {
        // Scroll to top when the component is loaded
        window.scrollTo(0, 0);
      }, []); 
  return (
    <section className="cloud-section-unique">
      {/* Background Overlay */}
      <div className="background-overlay-unique"></div>

      <div className="content-container-unique">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title-unique"
        >
          Cloud Services & Hosting
        </motion.h2>

        <p className="section-description-unique">
          Optimize your infrastructure with <strong>OKY Agency</strong>. We provide reliable <strong>cloud hosting & services</strong> ensuring <strong>scalability, security, and high performance</strong>.
        </p>

        {/* Cloud Platforms */}
        <div className="technologies-grid-unique">
          {[ 
            { name: "AWS", icon: <FaAws />, class: "tech-aws-unique" },
            { name: "Google Cloud", icon: <FaGoogle />, class: "tech-gcloud-unique" },
            { name: "Azure", icon: <FaMicrosoft />, class: "tech-azure-unique" },
            { name: "DigitalOcean", icon: <FaDigitalOcean />, class: "tech-digitalocean-unique" },
            { name: "Vercel", icon: <SiVercel />, class: "tech-vercel-unique" },
            { name: "Netlify", icon: <SiNetlify />, class: "tech-netlify-unique" },
          ].map((platform, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`technology-card-unique ${platform.class}`}
            >
              <div className="tech-icon-unique">{platform.icon}</div>
              <p className="tech-name-unique">{platform.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="benefits-container-unique">
          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card-unique">
            <FaServer className="benefit-icon-unique" />
            <div>
              <h3 className="benefit-title-unique">Scalable Hosting</h3>
              <p className="benefit-description-unique">
                Ensure <strong>high availability</strong> with cloud-based solutions that <strong>scale with demand</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card-unique">
            <FaShieldAlt className="benefit-icon-unique" />
            <div>
              <h3 className="benefit-title-unique">Robust Security</h3>
              <p className="benefit-description-unique">
                Advanced security measures for <strong>data protection, encryption, and DDoS mitigation</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card-unique">
            <FaRocket className="benefit-icon-unique" />
            <div>
              <h3 className="benefit-title-unique">Performance Optimization</h3>
              <p className="benefit-description-unique">
                Utilize <strong>CDNs, caching, and global data centers</strong> for <strong>blazing-fast performance</strong>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a 
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="cta-button-unique"
        >
          Deploy with OKY
        </motion.a>
      </div>
    </section>
  );
};
