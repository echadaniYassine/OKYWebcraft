import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../style/pages/RealisationStyle/CategoryGraphicDesign.css'; // Import your CSS for styling

// Corrected Projects Data Structure
const projects = [
  {
    id: 1,
    category: "logoDesign",
    title: 'Logo Design 1',
    images: ['assets/logo1.jpg'],
    description: 'Creative and unique logo design to enhance your brand identity.',
  },
  {
    id: 2,
    category: "logoDesign",
    title: 'Logo Design 2',
    images: ['assets/logo2.jpg'],
    description: 'Creative and unique logo design to enhance your brand identity.',
  },
  {
    id: 3,
    category: "logoDesign",
    title: 'Logo Design 3',
    images: ['assets/logo3.jpg'],
    description: 'Creative and unique logo design to enhance your brand identity.',
  },
  {
    id: 4,
    category: "posterDesign",
    title: 'Poster Design 1',
    images: ['assets/poster1.jpg'],
    description: 'High-quality posters tailored to your needs.',
  },
  {
    id: 5,
    category: "posterDesign",
    title: 'Poster Design 2',
    images: ['assets/poster2.jpg'],
    description: 'High-quality posters tailored to your needs.',
  },
  {
    id: 6,
    category: "posterDesign",
    title: 'Poster Design 3',
    images: ['assets/poster3.jpg'],
    description: 'High-quality posters tailored to your needs.',
  },
  {
    id: 7,
    category: "brandIdentity",
    title: 'Brand Identity 1',
    images: ['assets/brand1.jpg'],
    description: 'Comprehensive brand identity solutions for your business.',
  },
  {
    id: 8,
    category: "brandIdentity",
    title: 'Brand Identity 2',
    images: ['assets/brand2.jpg'],
    description: 'Comprehensive brand identity solutions for your business.',
  },
  {
    id: 9,
    category: "brandIdentity",
    title: 'Brand Identity 3',
    images: ['assets/brand3.jpg'],
    description: 'Comprehensive brand identity solutions for your business.',
  }
];

const CategoryGraphicDesign = () => {
  useEffect(() => {
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
            .filter((project) => project.category === 'logoDesign')
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section className="graphic-design-subcategory">
        <h2 className="subcategory-title">Poster Designs</h2>
        <div className="graphic-design-cards">
          {projects
            .filter((project) => project.category === 'posterDesign')
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section className="graphic-design-subcategory">
        <h2 className="subcategory-title">Brand Identity</h2>
        <div className="graphic-design-cards">
          {projects
            .filter((project) => project.category === 'brandIdentity')
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
