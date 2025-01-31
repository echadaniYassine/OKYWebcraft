import React, { useState, useEffect, useRef } from "react";
import "../style/components/Header.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
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
    <header className="header-container">
      <div className={`logo-container ${isNavOpen ? "hide-logo" : ""}`}>
        <a href="/">
          <img src="assets/logo.png" className="imageLogo" alt="OKY Logo" />
        </a>
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
          {/* Phone Number and Social Media Icons - Only visible on mobile */}
          <div className="numPhone">+212 771473306</div>
          <img src="assets/logoMobill.png" className="imageLogoMobill" alt="OKY Logo" />
          <ul className="header-links">
            {[
              { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: "Facebook" },
              { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: "Instagram" },
              { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: "LinkedIn" },
              { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: "WhatsApp" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="header-link"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
