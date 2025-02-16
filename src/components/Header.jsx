import React, { useState, useEffect, useRef } from "react";
import "../style/components/Header.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const navRef = useRef(null); 
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false; 
  });
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const { t } = useTranslation();

  // Language change function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language using i18next
    
    // Change the direction of text based on the language
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
    
    // Close the language dropdown after selection
    setLanguageDropdown(false);
    // Store language preference in localStorage
    localStorage.setItem("lang", lang);
  };

  const toggleNav = (event) => {
    event.stopPropagation(); // Pprevent closing immediately after opening
    setIsNavOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

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

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newTheme = !prevMode ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.body.classList.toggle("dark-mode", !prevMode);
      return !prevMode;
    });
  };

  useEffect(() => {
    // Retrieve saved theme and language preferences
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");
  
    // Detect system preferences
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemLang = navigator.language.slice(0, 2);
    const supportedLangs = ["en", "fr", "ar"];
  
    // Determine the final values
    const theme = savedTheme || (prefersDarkMode ? "dark" : "light");
    const lang = savedLang || (supportedLangs.includes(systemLang) ? systemLang : "en");
  
    // Apply theme
    document.body.classList.toggle("dark-mode", theme === "dark");
    setDarkMode(theme === "dark");
  
    // Apply language settings
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
    // Store language in localStorage if not already saved
    if (!savedLang) {
      localStorage.setItem("lang", lang);
    }
  }, []);
  

  return (
    <header className="header-container">
      <div className={`logo-container ${isNavOpen ? "hide-logo" : ""}`}>
        <a href="/">
          <img
            src={darkMode ? "assets/dark-logo.png" : "assets/logo.jpg"}
            className="imageLogo"
            alt="OKY Logo"
          />
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
              {t('nav.home')}
            </Link>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsNavOpen(false)}>
              {t('nav.about')}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={() => setIsNavOpen(false)}>
              {t('nav.services')}
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link" onClick={() => setIsNavOpen(false)}>
              {t('nav.realization')}
            </a>
          </li>

          {/* Social Media Links */}
          <ul className="header-links">
            {[ 
              { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: "Facebook" },
              { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: "Instagram" },
              { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: "LinkedIn" },
              { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: "WhatsApp" },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="header-link">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>

      <div className="toggle-container">
        {/* Dark Mode Toggle */}
        <li className="dark-mode-toggle">
          <button className="dark-mode-btn" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>

        {/* Language Switcher */}
        <li className="language-switcher" style={{ position: "relative" }}>
          <button className="language-btn" onClick={() => setLanguageDropdown(!languageDropdown)} aria-label="Switch Language">
            <FaGlobe /> {i18n.language.toUpperCase()}
          </button>

          {/* Dropdown for Language Selection */}
          <div className={`language-dropdown ${languageDropdown ? "active" : ""}`}>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("fr")}>Français</button>
            <button onClick={() => changeLanguage("ar")}>العربية</button>
          </div>
        </li>
      </div>
    </header>
  );
};

export default Header;
