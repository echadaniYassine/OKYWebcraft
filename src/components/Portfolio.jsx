import React, { useState, useEffect, useRef } from 'react';
import '../style/components/Portfolio.css';

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false); // State for toggling visibility
  const [isVisible, setIsVisible] = useState(false);

  // Create a reference to the section for IntersectionObserver
  const portfolioRef = useRef(null);

  const images = [
    'assets/HERO.png', // Project 1
    'assets/HERO.png', // Project 2
    'assets/HERO.png', // Project 3
    'assets/HERO.png', // Project 4 (hidden initially)
    'assets/HERO.png', // Project 5 (hidden initially)
    'assets/HERO.png', // Project 6 (hidden initially)
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore); // Toggle "See More" functionality
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it is visible
        }
      },
      { threshold: 0.5 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.disconnect(); // Clean up observer
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      ref={portfolioRef} // Attach the reference here
      className={`portfolio ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <h2 className="portfolio-title">Our Realisations</h2>
        <p className="portfolio-description">
          Explore some of our recent projects showcasing our expertise and creativity. We are passionate about delivering high-quality work for our clients.
        </p>

        {/* Render the first 3 projects */}
        <div className="portfolio-items">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-item-image-container">
                <img src={image} alt={`Project ${index + 1}`} className="portfolio-item-image" />
              </div>
              <h3 className="portfolio-item-title">Project {index + 1}</h3>
              <p className="portfolio-item-description">
                A description of project {index + 1}. This project was built using different technologies.
              </p>
              <a href={`project${index + 1}-link`} className="portfolio-item-link">
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Conditionally render additional 3 projects if showMore is true */}
        {showMore && (
          <div className="portfolio-items">
            {images.slice(3).map((image, index) => (
              <div key={index + 3} className="portfolio-item">
                <div className="portfolio-item-image-container">
                  <img src={image} alt={`Project ${index + 4}`} className="portfolio-item-image" />
                </div>
                <h3 className="portfolio-item-title">Project {index + 4}</h3>
                <p className="portfolio-item-description">
                  A description of project {index + 4}. This project was built using different technologies.
                </p>
                <a href={`project${index + 4}-link`} className="portfolio-item-link">
                  View Project
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Show More / Show Less Button */}
        <button onClick={toggleShowMore} className="show-more-button">
          {showMore ? 'Show Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
