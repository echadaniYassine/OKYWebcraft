import React, { useEffect } from "react";
import { FaAws, FaGoogle, FaMicrosoft, FaDigitalOcean, FaServer, FaShieldAlt, FaRocket } from "react-icons/fa";
import { SiVercel, SiNetlify } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import "../../style/pages/services/CloudServices.css"; // Import CSS file

export default function CloudServices() {
  const { t } = useTranslation(); // Initialize translation

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
          {t('cloud_services.title')}
        </motion.h2>

        {/* Description with HTML Rendering */}
        <p 
          className="section-description-unique"
          dangerouslySetInnerHTML={{ __html: t('cloud_services.description') }} 
        />

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

        {/* Key Benefits with HTML Rendering */}
        <div className="benefits-container-unique">
          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card-unique">
            <FaServer className="benefit-icon-unique" />
            <div>
              <h3 className="benefit-title-unique">{t('cloud_services.scalable_hosting_title')}</h3>
              <p 
                className="benefit-description-unique"
                dangerouslySetInnerHTML={{ __html: t('cloud_services.scalable_hosting_description') }} 
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card-unique">
            <FaShieldAlt className="benefit-icon-unique" />
            <div>
              <h3 className="benefit-title-unique">{t('cloud_services.robust_security_title')}</h3>
              <p 
                className="benefit-description-unique"
                dangerouslySetInnerHTML={{ __html: t('cloud_services.robust_security_description') }} 
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="benefit-card-unique">
            <FaRocket className="benefit-icon-unique" />
            <div>
              <h3 className="benefit-title-unique">{t('cloud_services.performance_optimization_title')}</h3>
              <p 
                className="benefit-description-unique"
                dangerouslySetInnerHTML={{ __html: t('cloud_services.performance_optimization_description') }} 
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a 
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="cta-button-unique"
        >
          {t('cloud_services.cta_button')}
        </motion.a>
      </div>
    </section>
  );
}
