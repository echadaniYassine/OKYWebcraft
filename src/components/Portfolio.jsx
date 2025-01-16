import React from 'react';
import '../style/components/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-description">Explore some of our recent projects showcasing our expertise and creativity. We are passionate about delivering high-quality work for our clients.</p>
        <div className="portfolio-items">
          {/* Portfolio items with images, titles, and descriptions */}
          <div className="portfolio-item">
            <img src="project1.jpg" alt="Project 1" className="portfolio-item-image" />
            <h3 className="portfolio-item-title">Project 1</h3>
            <p className="portfolio-item-description">A web application designed for seamless user experience, built using React and Node.js.</p>
            <a href="project1-link" className="portfolio-item-link">View Project</a>
          </div>
          <div className="portfolio-item">
            <img src="project2.jpg" alt="Project 2" className="portfolio-item-image" />
            <h3 className="portfolio-item-title">Project 2</h3>
            <p className="portfolio-item-description">An e-commerce platform developed with Shopify and custom plugins for enhanced functionality.</p>
            <a href="project2-link" className="portfolio-item-link">View Project</a>
          </div>
          <div className="portfolio-item">
            <img src="project3.jpg" alt="Project 3" className="portfolio-item-image" />
            <h3 className="portfolio-item-title">Project 3</h3>
            <p className="portfolio-item-description">A beautiful and interactive landing page designed for a startup business, built using HTML, CSS, and JavaScript.</p>
            <a href="project3-link" className="portfolio-item-link">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
