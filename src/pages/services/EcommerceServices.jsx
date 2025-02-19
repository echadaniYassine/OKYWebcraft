import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import '../../style/pages/services/Services.css';
import { FaWordpress, FaShopify } from 'react-icons/fa';  // Import the icons
import { motion } from "framer-motion";

export default function EcommerceServices() {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecommerce-services">
      <header className="ecommerce-services__header">
        <h1 className="ecommerce-services__title">{t('ecommerce_services.title')}</h1>
        <p
          className="ecommerce-services__subtitle"
          dangerouslySetInnerHTML={{ __html: t('ecommerce_services.description') }}
        />
      </header>

      <section className="ecommerce-services__content">
        <div className="ecommerce-services__platform">
          <h2 className="ecommerce-services__platform-title">
            <FaWordpress className="iconStore" /> {t('ecommerce_services.wordpress_ecommerce_title')}
          </h2>
          <p
            className="ecommerce-services__platform-description"
            dangerouslySetInnerHTML={{ __html: t('ecommerce_services.wordpress_ecommerce_description') }}
          />
        </div>

        <div className="ecommerce-services__platform">
          <h2 className="ecommerce-services__platform-title">
            <FaShopify className="iconStore" /> {t('ecommerce_services.shopify_ecommerce_title')}
          </h2>
          <p
            className="ecommerce-services__platform-description"
            dangerouslySetInnerHTML={{ __html: t('ecommerce_services.shopify_ecommerce_description') }}
          />
        </div>
      </section>

      <section className="ecommerce-services__process">
        <h2 className="ecommerce-services__process-title">{t('ecommerce_services.process_title')}</h2>
        <p
          className="ecommerce-services__process-description"
          dangerouslySetInnerHTML={{ __html: t('ecommerce_services.process_description') }}
        />

        <div className="ecommerce-services__process-steps">
          <div className="ecommerce-services__process-step">
            <h3>{t('ecommerce_services.discovery_consultation_title')}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t('ecommerce_services.discovery_consultation_description') }}
            />
          </div>
          <div className="ecommerce-services__process-step">
            <h3>{t('ecommerce_services.platform_selection_customization_title')}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t('ecommerce_services.platform_selection_customization_description') }}
            />
          </div>
          <div className="ecommerce-services__process-step">
            <h3>{t('ecommerce_services.development_implementation_title')}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t('ecommerce_services.development_implementation_description') }}
            />
          </div>
          <div className="ecommerce-services__process-step">
            <h3>{t('ecommerce_services.testing_launch_title')}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t('ecommerce_services.testing_launch_description') }}
            />
          </div>
          <div className="ecommerce-services__process-step">
            <h3>{t('ecommerce_services.ongoing_support_optimization_title')}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t('ecommerce_services.ongoing_support_optimization_description') }}
            />
          </div>
        </div>
      </section>

      <div className="ecommerce-services__cta">
        <h3>{t('ecommerce_services.cta_button')}</h3>
        <motion.a
          href="https://wa.me/+212717923103?text=Hello,%20I'm%20interested%20in%20your%20E-commerce%20services.%20Can%20we%20discuss%20more?"
          whileHover={{ scale: 1.1 }}
          className="ecommerce-services__cta-button-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ecommerce-services__cta-button">
            {t('ecommerce_services.cta_button')}
          </button>
        </motion.a>

      </div>
    </div>
  );
}
