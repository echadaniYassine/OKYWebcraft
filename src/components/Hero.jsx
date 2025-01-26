import React from 'react';
import '../style/components/Hero.css';

const Hero = () => {
  return (<>
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left: Text Content */}
        <div className="hero-text fade-in-right">
          <h1 className="hero-title">Let`s Work<br />Together to Create<br />Wonders with OKY</h1>
          <h3 className="hero-subtitle typing-animation">Innovative Digital Solutions</h3>
          <p className="hero-paragraph">At OKY WebCraft, we create professional and optimized digital solutions tailored to your needs. From modern websites to full-stack applications, our team delivers exceptional results that drive success. </p>
          <a href="#services" className="btn hero-btn">Explore Services</a>

        </div>
        <div className="hero-image-container">
          <div className="hero-image fade-in-left">
            <img src="assets/HERO.png" alt="Digital Solutions" />
          </div>
        </div>
      </div>
    </section>
    <div className="hero-stats">
      <div className="hero-stat">
        <img src='assets/choseUs1.png' className="hero-stat-icon" />
        <h1 className="hero-stat-title">34+</h1>
        <p className="hero-stat-paragraph">Projects Delivered</p>
      </div>
      <div className="hero-stat">
        <img src='assets/choseUs3.png' className="hero-stat-icon" />
        <h1 className="hero-stat-title">99%</h1>
        <p className="hero-stat-paragraph">Satisfaction Rate</p>
      </div>
      <div className="hero-stat">
        <img src='assets/chose 2.png' className="hero-stat-icon" />
        <h1 className="hero-stat-title">6+</h1>
        <p className="hero-stat-paragraph">Team Members</p>
      </div>
    </div>
  </>
  );
};

export default Hero;