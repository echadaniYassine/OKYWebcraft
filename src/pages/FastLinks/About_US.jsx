import React from "react";
import { FaUsers, FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import "../../style/pages/FastLinksStyle/About_US.css";

const AboutUs = () => {
  return (
    <section id="about-us-section" className="about-us-section">
      <div className="about-us-container">
        {/* About Us Section */}
        <div className="about-us-content">
          <div className="about-us-image-container">
            <img src="assets/who-we-are.png" alt="About Us" className="about-us-image" />
          </div>
          <div className="about-us-text-container">
            <h2 className="about-us-heading"><FaUsers className="about-us-icon" /> Who We Are</h2>
            <p className="about-us-text">
              We are a team of passionate developers and designers committed to delivering high-quality web
              and mobile solutions. Our expertise spans across modern technologies, ensuring innovative
              and efficient digital products.
            </p>
            <ul className="about-us-list">
              <li><FaCheckCircle className="check-icon" /> Experienced in Full Stack Development</li>
              <li><FaCheckCircle className="check-icon" /> Focused on UX/UI & Performance Optimization</li>
              <li><FaCheckCircle className="check-icon" /> Creating Scalable and Secure Applications</li>
            </ul>
          </div>

        </div>

        {/* Our Vision Section */}
        <div className="about-us-vision">
          <div className="about-us-image-container">
            <img src="assets/our-vision.png" alt="Our Vision" className="about-us-image" />
          </div>
          <div className="about-us-text-container">
            <h2 className="about-us-heading"><FaEye className="about-us-icon" /> Our Vision</h2>
            <p className="about-us-text">
              Our vision is to shape the future of digital experiences by building cutting-edge, user-friendly
              applications. We aim to enhance business growth through technology, offering seamless
              digital transformations.
            </p>
            <ul className="about-us-list">
              <li><FaCheckCircle className="check-icon" /> Leading with Innovation & AI</li>
              <li><FaCheckCircle className="check-icon" /> Providing Seamless Digital Transformation</li>
              <li><FaCheckCircle className="check-icon" /> Empowering Businesses with Technology</li>
            </ul>
          </div>
        </div>

        {/* Our Goal Section */}
        <div className="about-us-goal">
          <div className="about-us-image-container">
            <img src="assets/our-goal.png" alt="Our Goal" className="about-us-image" />
          </div>
          <div className="about-us-text-container">
            <h2 className="about-us-heading"><FaBullseye className="about-us-icon" /> Our Goal</h2>
            <p className="about-us-text">
              Our goal is to empower businesses with state-of-the-art technology solutions that boost efficiency,
              engagement, and revenue. We prioritize performance, accessibility, and user satisfaction in
              every project.
            </p>
            <ul className="about-us-list">
              <li><FaCheckCircle className="check-icon" /> Building High-Performance Applications</li>
              <li><FaCheckCircle className="check-icon" /> Enhancing User Engagement & Satisfaction</li>
              <li><FaCheckCircle className="check-icon" /> Delivering Scalable & Cost-Effective Solutions</li>
            </ul>
          </div>

        </div>

        {/* Image Carousel */}
        <div className="about-us-carousel">
          <h2 className="about-us-heading-work">Our Work</h2>
          <div className="carousel">
            <img src="assets/smartPath.png" alt="Project 1" className="carousel-image" />
            <img src="assets/landing1.png" alt="Project 2" className="carousel-image" />
            <img src="assets/app2.png" alt="Project 3" className="carousel-image" />
            <img src="assets/brand1.jpg" alt="Project 4" className="carousel-image" />
            <img src="assets/brand2.jpg" alt="Project 5" className="carousel-image" />
            <img src="assets/brand3.jpg" alt="Project 6" className="carousel-image" />
            <img src="assets/logo1.jpg" alt="Project 7" className="carousel-image" />
            <img src="assets/logo2.jpg" alt="Project 8" className="carousel-image" />
            <img src="assets/logo3.jpg" alt="Project 9" className="carousel-image" />
            <img src="assets/poster1.jpg" alt="Project 10" className="carousel-image" />
            <img src="assets/poster2.jpg" alt="Project 11" className="carousel-image" />
            <img src="assets/poster3.jpg" alt="Project 12" className="carousel-image" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
