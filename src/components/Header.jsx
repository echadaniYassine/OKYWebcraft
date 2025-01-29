import React, { useState } from "react";
import "../style/components/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false); // State to manage fixed header
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage mobile nav toggle

  // Scroll to a section with smooth scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll event to toggle fixed header
  const handleScroll = () => {
    setIsFixed(window.scrollY > 50);
  };

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="header-container">
        <div className={`logo-container ${isFixed ? "hide-logo" : ""}`}>
          <img src="assets/logo.png" className="imageLogo" alt="OKY Logo" />
        </div>
        
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleNav}>
          <div className={`bar ${isNavOpen ? "active" : ""}`} />
          <div className={`bar ${isNavOpen ? "active" : ""}`} />
          <div className={`bar ${isNavOpen ? "active" : ""}`} />
        </div>
        
        {/* Navigation */}
        <nav className={`navigation ${isNavOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => scrollToSection("home")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={() => scrollToSection("services")}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => scrollToSection("portfolio")}>
                Realisation
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
