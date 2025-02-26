import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { FaUsers, FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import "../../style/pages/FastLinksStyle/About_US.css";

const AboutUs = () => {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about-us-section" className="about-us-section">
      <div className="about-us-container">
        {/* About Us Section */}
        <div className="about-us-content">
          <div className="about-us-image-container">
            <img src="assets/about/who-we-are.png" alt="About Us" className="about-us-image" />
          </div>
          <div className="about-us-text-container">
            <h2 className="about-us-heading">
              <FaUsers className="about-us-icon" /> {t("about-us.who-we-are.title")}
            </h2>
            <p className="about-us-text">{t("about-us.who-we-are.description")}</p>
            <ul className="about-us-list">
              {t("about-us.who-we-are.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" /> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="about-us-vision">
          <div className="about-us-image-container">
            <img src="assets/about/our-vision.png" alt="Our Vision" className="about-us-image" />
          </div>
          <div className="about-us-text-container">
            <h2 className="about-us-heading">
              <FaEye className="about-us-icon" /> {t("about-us.our-vision.title")}
            </h2>
            <p className="about-us-text">{t("about-us.our-vision.description")}</p>
            <ul className="about-us-list">
              {t("about-us.our-vision.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" /> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Goal Section */}
        <div className="about-us-goal">
          <div className="about-us-image-container">
            <img src="assets/about/our-goal.png" alt="Our Goal" className="about-us-image" />
          </div>
          <div className="about-us-text-container">
            <h2 className="about-us-heading">
              <FaBullseye className="about-us-icon" /> {t("about-us.our-goal.title")}
            </h2>
            <p className="about-us-text">{t("about-us.our-goal.description")}</p>
            <ul className="about-us-list">
              {t("about-us.our-goal.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" /> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="about-us-carousel">
          <h2 className="about-us-heading-work">{t("about-us.our-work")}</h2>
          <div className="carousel">
            <img src="assets/web/smartPath.png" alt="Project 1" className="carousel-image" />
            <img src="assets/web/landing1.png" alt="Project 2" className="carousel-image" />
            <img src="assets/web/app2.png" alt="Project 3" className="carousel-image" />
            <img src="assets/design/brand1.jpg" alt="Project 4" className="carousel-image" />
            <img src="assets/design/brand2.jpg" alt="Project 5" className="carousel-image" />
            <img src="assets/design/brand3.jpg" alt="Project 6" className="carousel-image" />
            <img src="assets/design/logo1.jpg" alt="Project 7" className="carousel-image" />
            <img src="assets/design/logo2.jpg" alt="Project 8" className="carousel-image" />
            <img src="assets/design/logo3.jpg" alt="Project 9" className="carousel-image" />
            <img src="assets/design/poster1.jpg" alt="Project 10" className="carousel-image" />
            <img src="assets/design/poster2.jpg" alt="Project 11" className="carousel-image" />
            <img src="assets/design/poster3.jpg" alt="Project 12" className="carousel-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
