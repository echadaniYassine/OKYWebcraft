import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "../style/components/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className={`project-card ${inView ? "fade-in" : ""}`}>
      <div className="project-carousel">
        <img
          src={project.image || "/default-image.jpg"} // Add a fallback image
          alt={project.title}
          className="project-carousel-image"
        />
        {project.demoLink && ( // Only show overlay if demoLink exists
          <div className="project-overlay">
            <Link 
              to={project.demoLink} 
              className="project-demo-icon" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </Link>
          </div>
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
    </div>
  );
};

export default ProjectCard;
