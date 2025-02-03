import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; // Assuming you are using react-router for linking
import { useInView } from 'react-intersection-observer'; // For scroll animations
import '../../style/pages/RealisationStyle/CategoryProductionVideo.css'; // Import your CSS for styling

const projects = [
  {
    id: 1,
    title: 'Application Mobile 1',
    image: 'assets/app2.png',
    description: 'A professional mobile app showcasing company highlights.',
    demoLink: '/demo/app1', // Assuming you have a demo link
  },
  {
    id: 2,
    title: 'Application Mobile 2',
    image: 'assets/app2.png',
    description: 'A creative mobile app for promotional purposes.',
    demoLink: '/demo/app2', // Assuming you have a demo link
  },
  {
    id: 3,
    title: 'Application Mobile 3',
    image: 'assets/app2.png',
    description: 'An engaging mobile app covering live events.',
    demoLink: '/demo/app3', // Assuming you have a demo link
  },
];

const CategoryAppMobill = () => {
  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="category-production">
      <nav className="category-production__navbar">
        <div className="category-production__navbar-brand">Mobile Applications</div>
      </nav>

      {/* Subcategory Sections */}
      <section className="category-production__subcategory">
        <h2 className="category-production__subcategory-title">Applications</h2>
        <div className="category-production__project-cards">
          {projects.map(project => (
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
      <div className="carousel">
        <img src={project.image} alt={project.title} className="carousel-image" />
        <div className="overlay">
          <Link to={project.demoLink} className="live-demo-icon" target="_blank">
            🔗 Live Demo
          </Link>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="project-title">{project.title}</h3>
      {project.description && <p className="project-description">{project.description}</p>}
    </div>
  );
};

export default CategoryAppMobill;
