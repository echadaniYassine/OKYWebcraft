import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import "../../style/pages/RealisationStyle/CategoryGraphicDesign.css";
import { useTranslation } from "react-i18next";

const projects = [
  { id: 1, category: "logoDesign", title: "Modern 3D Logo", image: "assets/design/logo1.jpg" },
  { id: 2, category: "logoDesign", title: "Minimalist Shield Logo", image: "assets/design/logo2.jpg" },
  { id: 3, category: "logoDesign", title: "Abstract Square Logo", image: "assets/design/logo3.jpg" },
  { id: 4, category: "posterDesign", title: "Cold Coffee Poster", image: "assets/design/poster1.jpg" },
  { id: 5, category: "posterDesign", title: "Pasta Promotion Poster", image: "assets/design/poster2.jpg" },
  { id: 6, category: "posterDesign", title: "Gourmet Burger Poster", image: "assets/design/poster3.jpg" },
  { id: 7, category: "brandIdentity", title: "Corporate Branding Pack", image: "assets/design/brand1.jpg" },
  { id: 8, category: "brandIdentity", title: "Luxury Brand Identity", image: "assets/design/brand2.jpg" },
  { id: 9, category: "brandIdentity", title: "Tech Startup Branding", image: "assets/design/brand3.jpg" }
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
