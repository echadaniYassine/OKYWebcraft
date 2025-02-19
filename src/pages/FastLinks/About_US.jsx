import React from "react";
// import { useTranslation } from "react-i18next";
import "../../style/pages/FastLinksStyle/About_US.css";

const AboutUs = () => {
  // const { t } = useTranslation();
  // const [isSectionVisible, setIsSectionVisible] = useState(false);

  // useEffect(() => {
  //   const section = document.getElementById("about_us-section");
  //   if (!section) return;

  //   const observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       if (entries[0].isIntersecting) {
  //         setIsSectionVisible(true);
  //         observer.unobserve(entries[0].target);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(section);
  //   return () => observer.disconnect();
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <section id="about_us_section" className="about_us_section">
      <div className="about_us_container">
        {/* Maintenance Message */}
        <div className="maintenance_message">
          <h1 className="maintenance_heading">🚧 We'll be back soon! 🚧</h1>
          <p className="maintenance_text">Our site is currently undergoing maintenance. Please check back later!</p>
        </div>
      </div>
    </section>

  );
};

export default AboutUs;
