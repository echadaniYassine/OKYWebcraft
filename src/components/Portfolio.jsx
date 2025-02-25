import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import '../style/components/Portfolio.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';  // Importing useTranslation

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  const { t } = useTranslation();  // Using the translation function

  const projects = [
    {
      image: 'assets/Realisations/Realisation1.png',
      title: t('portfolio.web_development.title'),
      description: t('portfolio.web_development.description'),
      link: '/category-web',
    },
    {
      image: 'assets/Realisations/Realisation2.png',
      title: t('portfolio.ui_ux_design.title'),
      description: t('portfolio.ui_ux_design.description'),
      link: '/category-graphic-design',
    },
    {
      image: 'assets/Realisations/Realisation3.png',
      title: t('portfolio.mobile_app_development.title'),
      description: t('portfolio.mobile_app_development.description'),
      link: '/category-app-mobile',
    }
  ];

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className={`portfolio ${isVisible ? 'visible' : ''}`}
    >
      <div className="container-portfolio">
        <h2 className="portfolio-title">{t('portfolio.title')}</h2>
        <p className="portfolio-description">
          {t('portfolio.description')}
        </p>

        <div className="portfolio-items">
          {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
            <Link to={project.link} key={index} className="portfolio-item">
              <div className="portfolio-item-image-container">
                <img src={project.image} alt={`Project ${index + 1}`} className="portfolio-item-image" />
              </div>
              <h3 className="portfolio-item-title">{project.title}</h3>
              <p className="portfolio-item-description">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="view-all">
          <button className="show-more-button" onClick={handleToggle}>
            {showAll ? (
              <>
                {t('portfolio.show_less')} <FaAngleUp />
              </>
            ) : (
              <>
                {t('portfolio.see_all_realisations')} <FaAngleDown />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
