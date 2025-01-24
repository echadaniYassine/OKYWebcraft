import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../../style/pages/CategoryWeb.css';
const projects = [
  {
    id: 1,
    title: 'Web Application 1',
    images: ['assets/HERO.png', 'assets/project1-2.png', 'assets/project1-3.png'],
    demoLink: '/project/1',
    description: 'A fully responsive web application showcasing modern design.',
  },
  {
    id: 2,
    title: 'Web Application 2',
    images: ['assets/project2-1.png', 'assets/project2-2.png', 'assets/project2-3.png'],
    demoLink: '/project/2',
    description: 'This application is built with robust features for optimal performance.',
  },
  {
    id: 3,
    title: 'Landing Page 1',
    images: ['assets/landing1-1.png', 'assets/landing1-2.png', 'assets/landing1-3.png'],
    demoLink: '/project/3',
    description: 'A sleek and engaging landing page designed to captivate your audience.',
  },
];

const CategoryWeb = () => {
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
              .filter((project) => project.title.includes('Web Application'))
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        <section className="subcategory">
          <h2 className="subcategory-title">Landing Pages</h2>
          <div className="project-cards">
            {projects
              .filter((project) => project.title.includes('Landing Page'))
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
        {project.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1} of ${project.title}`}
              className="carousel-image"
            />
          ))
        ) : (
          <div className="no-image">No Images Available</div>
        )}
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
