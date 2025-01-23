import React, { useEffect, useState } from "react";
import "../style/components/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false); // State to manage fixed header

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


  return (
    <>
      <header className="header-container">
        <div className={`logo-container ${isFixed ? "hide-logo" : ""}`}>
          <img src="assets/logo.png" className="imageLogo" />
        </div>
        <nav className="navigation">
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
