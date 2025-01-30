import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../style/pages/CategoryGraphicDesign.css'; // Import your CSS for styling

const projects = [
  {
    id: 1,
    title: 'Logo Design 1',
    images: ['assets/logo1-1.png', 'assets/logo1-2.png', 'assets/logo1-3.png'],
    description: 'Creative and unique logo design to enhance your brand identity.',
  },
  {
    id: 2,
    title: 'Poster Design 1',
    images: ['assets/poster1-1.png', 'assets/poster1-2.png', 'assets/poster1-3.png'],
    description: 'High-quality posters tailored to your needs.',
  },
  {
    id: 3,
    title: 'Brand Identity 1',
    images: ['assets/brand1-1.png', 'assets/brand1-2.png', 'assets/brand1-3.png'],
    description: 'Comprehensive brand identity solutions for your business.',
  },
];


const CategoryGraphicDesign = () => {
  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="graphic-design-container">
      {/* Navigation Bar */}
      <nav className="graphic-design-navbar">
        <div className="graphic-design-navbar-brand">Graphic Design</div>
      </nav>

      {/* Subcategory Sections */}
      <section className="graphic-design-subcategory">
        <h2 className="subcategory-title">Logo Designs</h2>
        <div className="graphic-design-cards">
          {projects
            .filter((project) => project.title.includes('Logo Design'))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section className="graphic-design-subcategory">
        <h2 className="subcategory-title">Poster Designs</h2>
        <div className="graphic-design-cards">
          {projects
            .filter((project) => project.title.includes('Poster Design'))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section className="graphic-design-subcategory">
        <h2 className="subcategory-title">Brand Identity</h2>
        <div className="graphic-design-cards">
          {projects
            .filter((project) => project.title.includes('Brand Identity'))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="graphic-design-card">
      <div className="graphic-design-carousel">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${project.id} Image ${index + 1}`}
            className="graphic-design-carousel-image"
          />
        ))}
        <div className="graphic-design-overlay">
          <Link to="/project/demo" className="graphic-design-demo-icon">
            🔗 Live Demo
          </Link>
        </div>
      </div>
      <h3 className="graphic-design-title">{project.title}</h3>
      <p className="graphic-design-description">{project.description}</p>
    </div>
  );
};

export default CategoryGraphicDesign;
