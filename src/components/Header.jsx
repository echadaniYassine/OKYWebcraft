import React, { useState, useEffect, useRef } from "react";
import "../style/components/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false); // Fixed header state
  const [isNavOpen, setIsNavOpen] = useState(false); // Mobile menu state
  const navRef = useRef(null); // Reference for the navigation menu

  // Function to toggle the mobile menu
  const toggleNav = (event) => {
    event.stopPropagation(); // Prevent closing immediately after opening
    setIsNavOpen((prev) => !prev);
  };

  // Function to close menu when clicking outside
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  // Add event listener when menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavOpen]);

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
        <nav ref={navRef} className={`navigation ${isNavOpen ? "nav-open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setIsNavOpen(false)}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={() => setIsNavOpen(false)}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => setIsNavOpen(false)}>
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
