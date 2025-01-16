import React, { useEffect, useState } from 'react';
import '../style/components/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the section is visible
      }
    );

    const section = document.getElementById('about');
    observer.observe(section);

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, []);

  return (
    <section
      id="about"
      className={`about ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">About OKY</h2>
          <p className="about-intro">
            Your trusted partner for innovative and impactful digital solutions.
          </p>
        </div>
        <div className="about-content">
          {/* Left: Text Content */}
          <div className="about-text">
            <h3 className="about-subtitle">Who We Are</h3>
            <p className="about-description">
              At <span className="highlight">OKY Agency</span>, we specialize in providing top-notch web development and design services.
              Our team is dedicated to delivering <span className="highlight">innovative solutions</span> tailored to your needs.
            </p>
            <h3 className="about-subtitle">What We Do</h3>
            <ul className="about-services">
              <li>Custom Web Development</li>
              <li>Responsive UI/UX Design</li>
              <li>Full-Stack Applications</li>
              <li>Optimized E-Commerce Platforms</li>
              <li>Continuous Maintenance and Support</li>
            </ul>
            <p className="about-vision">
              We aim to empower businesses with cutting-edge technology to achieve their goals efficiently and effectively.
            </p>
          </div>
          {/* Right: Image Content */}
          <div className="about-image">
            <img src="https://via.placeholder.com/400" alt="OKY Agency Team" />
            <figcaption className="image-caption">
              A glimpse of our creative team at OKY Agency
            </figcaption>
          </div>
        </div>
        <div className="about-footer">
          <p className="about-mission">
            Our mission is to transform ideas into reality through technical excellence and a client-centric approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
