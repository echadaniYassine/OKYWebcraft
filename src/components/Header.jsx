import React, { useEffect, useState } from "react";
import "../style/components/Header.css";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header-container ${isFixed ? "fixed" : ""}`}>
        <div className={`logo-container ${isFixed ? "hide-logo" : ""}`}>
          <img src="assets/logo.png" className="imageLogo" />
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => scrollToSection("portfolio")}>
                Realisation
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={() => scrollToSection("services")}>
                Services
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
