import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style/components/Portfolio.css';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  const projects = [
    {
      image: 'assets/HERO.png',
      title: 'Web Development',
      description: 'A comprehensive web application built with modern technologies.',
      link: '/category_web',
    },
    {
      image: 'assets/HERO.png',
      title: 'UI / UX Design',
      description: 'Creative designs for branding and marketing materials.',
      link: '/category_graphic_design',
    },
    {
      image: 'assets/HERO.png',
      title: 'Mobile App Development',
      description: 'Intuitive mobile app design focused on user experience and engagement.',
      link: '/category_graphic_design',
    },
    {
      image: 'assets/HERO.png',
      title: 'Production Video',
      description: 'High-quality video production for corporate and promotional use.',
      link: '/category_production_video',
    },
    // Add more projects as needed
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
      <div className="container">
        <h2 className="portfolio-title">Our Realisations</h2>
        <p className="portfolio-description">
          Explore some of our recent projects showcasing our expertise and creativity.
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
                Show Less <FaAngleUp /> {/* Icon for "Show Less" */}
              </>
            ) : (
              <>
                See All Realisation <FaAngleDown /> {/* Icon for "View All Services" */}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;