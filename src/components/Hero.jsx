import React from 'react';
import '../style/components/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left: Text Content */}
        <div className="hero-text fade-in-right">
          <h1 className="hero-title">Let`s Work<br />Together to Create<br />Wonders with OKY</h1>
          <h3 className="hero-subtitle typing-animation">Innovative Digital Solutions</h3>
          <p className="hero-paragraph">
            At OKY Agency, we specialize in crafting professional and optimized digital solutions tailored to meet your unique needs.
            From modern websites to full-stack applications, our team is dedicated to delivering exceptional results that drive success.
          </p>
          <a href="#services" className="btn hero-btn">Explore Services</a>

          <div className="hero-stats">
            <div className="hero-stat">
              <h1 className="hero-stat-title">120+</h1>
              <p className="hero-stat-paragraph">Projects Delivered</p>
            </div>
            <div className="hero-stat">
              <h1 className="hero-stat-title">50+</h1>
              <p className="hero-stat-paragraph">Happy Clients</p>
            </div>
            <div className="hero-stat">
              <h1 className="hero-stat-title">99%</h1>
              <p className="hero-stat-paragraph">Satisfaction Rate</p>
            </div>
          </div>

        </div>
        {/* Right: Image */}
        <div className="hero-image-container">
          <div className="hero-image fade-in-left">
            <img src="assets/HERO.png" alt="Digital Solutions" />
            <div className="hero-overlay-text1">
              <h1 className='hero-overlay-text-title'></h1>
            </div>
            <div className="hero-overlay-text2">
              <h1  className='hero-overlay-text-title'></h1>
            </div><div className="hero-overlay-text3">
              <h1  className='hero-overlay-text-title'></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;