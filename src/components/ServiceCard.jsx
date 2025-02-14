import React, { useState, useEffect, useRef } from 'react';
import { FaBullhorn, FaLaptopCode, FaShareAlt, FaPaintBrush, FaCloud, FaShoppingCart, FaAngleDown, FaAngleUp, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../style/components/ServiceCard.css';

const Services = () => {
  const { t, i18n } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Change language function
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      img: "/assets/service_1.png",
      title: t('services.web_mobile_development.title'),
      description: t('services.web_mobile_development.description'),
      link: "/services-web-&-mobile-development",
    },
    {
      id: 2,
      icon: <FaShareAlt />,
      img: "/assets/service_2.png",
      title: t('services.social_media_management.title'),
      description: t('services.social_media_management.description'),
      link: "/services-social-media-management",
    },
    {
      id: 3,
      icon: <FaShoppingCart />,
      img: "/assets/service_3.png",
      title: t('services.ecommerce_stores.title'),
      description: t('services.ecommerce_stores.description'),
      link: "/services-ecommerce", 
    },
    {
      id: 4,
      icon: <FaPaintBrush />,
      img: "/assets/service_4.png",
      title: t('services.ui_ux_design.title'),
      description: t('services.ui_ux_design.description'),
      link: "/services-ui-ux-design",
    },
    {
      id: 5,
      icon: <FaBullhorn />,
      img: "/assets/service_5.png",
      title: t('services.digital_advertising.title'),
      description: t('services.digital_advertising.description'),
      link: "/services-digital-advertising",
    },
    {
      id: 6,
      icon: <FaCloud />,
      img: "/assets/service_6.png",
      title: t('services.cloud_services_hosting.title'),
      description: t('services.cloud_services_hosting.description'),
      link: "/services-cloud-hosting",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <h2 className="services-title">{t('services.title')}</h2>
        <p className="services-description">
          {t('services.description')}
        </p>

        <div className="service-cards">
          {visibleServices.map((service, index) => (
            <div
              className={`service-card ${index % 2 === 0 ? "icon-right" : "icon-left"}`}
              key={service.id}
            >
              <div className="service-icon-container">
                <div className="service-image-wrapper">
                  <img src={service.img} alt={service.title} className="service-image" />
                </div>
              </div>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="explore-more">
                  {t('services.explore_more')} <FaAngleRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="view-all-btn" onClick={handleToggle}>
            {showAll ? (
              <>
                {t('services.show_less')} <FaAngleUp />
              </>
            ) : (
              <>
                {t('services.view_all_services')} <FaAngleDown />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
