import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/ProjectCard";
import "../../style/pages/RealisationStyle/CategoryApplication.css";

// Example projects data with translation keys
const projects = [
  { 
    id: 1, 
    titleKey: "project_title_1", 
    image: "assets/app2.png", 
    demoLinkKey: "demo_link_1" 
  },
  { 
    id: 2, 
    titleKey: "project_title_2", 
    image: "assets/app2.png", 
    demoLinkKey: "demo_link_2" 
  },
  { 
    id: 3, 
    titleKey: "project_title_3", 
    image: "assets/app2.png", 
    demoLinkKey: "demo_link_3" 
  }
];

const CategoryAppMobile = () => {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="category-application">
      <nav className="category-application__navbar">
        <div className="category-application__navbar-brand">{t('category_application.navbar')}</div>
      </nav>

      <section className="category-application__subcategory">
        <h2 className="category-application__subcategory-title">{t('category_application.applications')}</h2>
        <div className="category-application__project-cards">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={{
                title: t(`category_application.${project.titleKey}`),
                demoLink: t(`category_application.${project.demoLinkKey}`),
                image: project.image
              }} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryAppMobile;
