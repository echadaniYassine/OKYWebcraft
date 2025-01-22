import React, { useState, useEffect, useRef } from 'react';
import '../style/components/Portfolio.css';

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  const images = [
    'assets/HERO.png',
    'assets/HERO.png',
    'assets/HERO.png',
    'assets/HERO.png',
    'assets/HERO.png',
    'assets/HERO.png',
  ];

  const toggleShowMore = () => setShowMore(!showMore);

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
      <div className="container">
        <h2 className="portfolio-title">Our Realisations</h2>
        <p className="portfolio-description">
          Explore some of our recent projects showcasing our expertise and creativity.
        </p>

        <div className="portfolio-items">
          {images.slice(0, showMore ? images.length : 3).map((image, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-item-image-container">
                <img src={image} alt={`Project ${index + 1}`} className="portfolio-item-image" />
              </div>
              <h3 className="portfolio-item-title">Project {index + 1}</h3>
              <p className="portfolio-item-description">
                A description of project {index + 1}. Built with modern technologies.
              </p>
              <a href={`#`} className="portfolio-item-link">
                View Project
              </a>
            </div>
          ))}
        </div>

        <button onClick={toggleShowMore} className="show-more-button">
          {showMore ? 'Show Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
