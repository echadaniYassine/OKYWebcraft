import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../../style/pages/RealisationStyle/CategoryWeb.css';
const projects = [
  {
    id: 1,
    subcategory: "application",
    title: 'Web Application 1',
    image: 'assets/HERO.png',
    demoLink: '/project/1',
    description: 'A fully responsive web application showcasing modern design.',
  },
  {
    id: 2,
    subcategory: "application",
    title: 'Trendify Store',
    image: 'assets/app2.png',
    demoLink: 'https://trendify-frontend-nine.vercel.app/login',
    description: 'This application is built with robust features for optimal performance.',
  },
  {
    id: 3,
    subcategory: "landing",
    title: 'Asian presentetion',
    image: 'assets/landing1.png',
    demoLink: 'https://asian-taste-one.vercel.app/',
    description: 'A sleek and engaging landing page designed to captivate your audience.',
  },
];

const CategoryWeb = () => {
  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  const filterSubcategory = "application"; // Change this to filter different subcategories
  const filterSubcategorylanding = "landing"; // Change this to filter different subcategories

  return (
      <div className="category-web">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-brand">Web Development</div>
        </nav>

        {/* Subcategory Sections */}
        <section className="subcategory">
          <h2 className="subcategory-title">Web Applications</h2>
          <div className="project-cards">
          {projects
            .filter((project) => project.subcategory === filterSubcategory)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="subcategory">
          <h2 className="subcategory-title">Landing Pages</h2>
          <div className="project-cards">
          {projects
            .filter((project) => project.subcategory === filterSubcategorylanding)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    

  );
};

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className={`project-card ${inView ? 'fade-in' : ''}`}>
      {/* Carousel */}
      <div className="carousel">
        <img src={project.image} alt={project.title} className="carousel-image"/>
        <div className="overlay">
          <Link to={project.demoLink} className="live-demo-icon">
            🔗 Live Demo
          </Link>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="project-title0">{project.title}</h3>
      {project.description && <p className="project-description">{project.description}</p>}
    </div>
  );
};

export default CategoryWeb;
