import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/components/About.css"; // Import CSS

const About_US = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about");
    observer.observe(section);

    return () => observer.disconnect();
  }, []);
   useEffect(() => {
      // Scroll to top when the component is loaded
      window.scrollTo(0, 0);
    }, []);

  return (
    <section id="about" className={`about ${isVisible ? "visible" : ""}`}>
      <div className="containerAbout">
        {/* Left: Text Content */}
        <div className="about-text">
          <h3 className="about-intro">INTRODUCTION ABOUT US</h3>
          <h1 className="about-title">Optimize Social Efforts For Greater Impact.</h1>
          <p className="about-description">
            Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti,
            est arcu, felis, molestiae impedit vel felis eget.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="checkmark">✔</span>
              <div>
                <h4 className="highlight-title">Target Oriented Work</h4>
                <p className="highlight-description">
                  Laboriosam tempus eu imperdiet pedes.
                </p>
              </div>
            </div>
            <div className="highlight-card">
              <span className="checkmark">✔</span>
              <div>
                <h4 className="highlight-title">Project Success Guarantee</h4>
                <p className="highlight-description">
                  Laboriosam tempus eu imperdiet pedes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image Content */}
        <div className="about-image">
          <img
            src="assets/about.png"
            alt="About Us"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About_US;
