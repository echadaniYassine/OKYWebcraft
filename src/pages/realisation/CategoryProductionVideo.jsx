import React, { useEffect } from "react";
import '../../style/pages/CategoryProductionVideo.css'; // Import your CSS for styling

const projects = [
  {
    id: 1,
    title: 'Corporate Video 1',
    video: 'assets/video1.mp4', // Path to the video file
    description: 'This is a professional corporate video showcasing company highlights.',
  },
  {
    id: 2,
    title: 'Promotional Video 1',
    video: 'assets/video2.mp4',
    description: 'A creative promotional video for advertising purposes.',
  },
  {
    id: 3,
    title: 'Event Coverage 1',
    video: 'assets/video3.mp4',
    description: 'An engaging video covering a live event.',
  },
];

const CategoryProductionVideo = () => {
  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="category-production">
      <nav className="category-production__navbar">
        <div className="category-production__navbar-brand">Production Video</div>
      </nav>

      {/* Subcategory Sections */}
      <section className="category-production__subcategory">
        <h2 className="category-production__subcategory-title">Corporate Videos</h2>
        <div className="category-production__project-cards">
          {projects.filter(project => project.title.includes('Corporate Video')).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="category-production__subcategory">
        <h2 className="category-production__subcategory-title">Promotional Videos</h2>
        <div className="category-production__project-cards">
          {projects.filter(project => project.title.includes('Promotional Video')).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="category-production__subcategory">
        <h2 className="category-production__subcategory-title">Event Coverage</h2>
        <div className="category-production__project-cards">
          {projects.filter(project => project.title.includes('Event Coverage')).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="category-production__project-card">
      <div className="category-production__video-container">
        <video className="category-production__video-preview" src={project.video} muted loop />
      </div>
      <h3 className="category-production__project-title">{project.title}</h3>
      <p className="category-production__project-description">{project.description}</p>
    </div>
  );
};

export default CategoryProductionVideo;
