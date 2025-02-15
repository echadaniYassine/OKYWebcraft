import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/components/About.css"; // Import CSS
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
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

  return (
    <section id="about" className={`about ${isVisible ? "visible" : ""}`}>
      <div className="containerAbout">
        {/* Left: Text Content */}
        <div className="about-text">
          <h3 className="about-intro">{t("about.about_intro")}</h3>
          <h1 className="about-title">{t("about.about_title")}</h1>
          <p className="about-description">{t("about.about_description")}</p>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="checkmark">✔</span>
              <div>
                <h4 className="highlight-title">{t("about.target_oriented_work")}</h4>
                <p className="highlight-description">
                  {t("about.target_description")}
                </p>
              </div>
            </div>
            <div className="highlight-card">
              <span className="checkmark">✔</span>
              <div>
                <h4 className="highlight-title">{t("about.project_success")}</h4>
                <p className="highlight-description">
                  {t("about.project_description")}
                </p>
              </div>
            </div>
          </div>
          <Link to={"/about-us"}>
            <button className="about-btn">{t("about.more_about_us")}</button>
          </Link>
        </div>

        {/* Right: Image Content */}
        <div className="about-image">
          <img src="assets/about5.png" alt="About Us" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
