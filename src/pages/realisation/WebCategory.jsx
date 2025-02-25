import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import i18n translation hook
import ProjectCard from "../../components/ProjectCard"; // Common ProjectCard component
import "../../style/pages/RealisationStyle/CategoryWeb.css";

const projects = [
  { id: 1, subcategory: "application", titleKey: "project_title_1", image: "assets/home/HERO5.png", demoLink: "/project/1" },
  { id: 2, subcategory: "application", titleKey: "project_title_2", image: "assets/web/app2.png", demoLink: "https://trendify-frontend-nine.vercel.app/" },
  { id: 3, subcategory: "landing", titleKey: "project_title_3", image: "assets/web/landing1.png", demoLink: "https://asian-taste-one.vercel.app/" },
  { id: 4, subcategory: "landing", titleKey: "project_title_4", image: "assets/web/smartPath.png", demoLink: "https://smartpath2.netlify.app/" }
];

const CategoryWeb = () => {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="category-web">
      <nav className="navbar">
        <div className="navbar-brand">{t('category_web.navbar')}</div>
      </nav>

      {["application", "landing"].map((subcategory) => (
        <section key={subcategory} className="subcategory">
          <h2 className="subcategory-title">{t(`category_web.${subcategory}`)}</h2>
          <div className="project-cards">
            {projects.filter(project => project.subcategory === subcategory).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={{
                  title: t(`category_web.${project.titleKey}`),
                  image: project.image,
                  demoLink: project.demoLink
                }} 
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategoryWeb;
