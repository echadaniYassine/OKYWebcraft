import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import "../../style/pages/RealisationStyle/CategoryGraphicDesign.css";
import { useTranslation } from "react-i18next";

const projects = [
  { id: 1, category: "logoDesign", title: "Logo Design 1", image: "assets/logo1.jpg" },
  { id: 2, category: "logoDesign", title: "Logo Design 2", image: "assets/logo2.jpg" },
  { id: 3, category: "logoDesign", title: "Logo Design 3", image: "assets/logo3.jpg" },
  { id: 4, category: "posterDesign", title: "Poster Design 1", image: "assets/poster1.jpg" },
  { id: 5, category: "posterDesign", title: "Poster Design 2", image: "assets/poster2.jpg" },
  { id: 6, category: "posterDesign", title: "Poster Design 3", image: "assets/poster3.jpg" },
  { id: 7, category: "brandIdentity", title: "Brand Identity 1", image: "assets/brand1.jpg" },
  { id: 8, category: "brandIdentity", title: "Brand Identity 2", image: "assets/brand2.jpg" },
  { id: 9, category: "brandIdentity", title: "Brand Identity 3", image: "assets/brand3.jpg" }
];

const CategoryGraphicDesign = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { t } = useTranslation(); // Initialize translation

  return (
    <div className="graphic-design-container">
      <nav className="graphic-design-navbar">
        <div className="graphic-design-navbar-brand">{t('category_graphic_design.navbar')}</div>
      </nav>

      {["logoDesign", "posterDesign", "brandIdentity"].map((category) => (
        <section key={category} className="graphic-design-subcategory">
          <h2 className="subcategory-title">{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
          <div className="graphic-design-cards">
            {projects.filter(project => project.category === category).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategoryGraphicDesign;
