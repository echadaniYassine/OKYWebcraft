import React, { useEffect } from 'react';
import '../../style/components/Careers.css'; // Import CSS for styling

const jobListings = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a talented Frontend Developer to join our team and work on exciting projects using ReactJS.',
    requirements: [
      'Proficiency in HTML, CSS, and JavaScript',
      'Experience with ReactJS and Redux',
      'Knowledge of responsive design principles',
    ],
    applyLink: '/apply/frontend-developer', // Replace with your application link
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'New York, USA',
    type: 'Full-Time',
    description: 'Join our backend development team to build scalable and secure APIs using Node.js and MongoDB.',
    requirements: [
      'Proficiency in Node.js and Express.js',
      'Experience with MongoDB and SQL databases',
      'Understanding of RESTful APIs and GraphQL',
    ],
    applyLink: '/apply/backend-developer',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'On-Site, San Francisco',
    type: 'Part-Time',
    description: 'We are looking for a creative UI/UX Designer to enhance user experiences and design stunning interfaces.',
    requirements: [
      'Proficiency in design tools like Figma or Adobe XD',
      'Strong understanding of user-centered design principles',
      'Portfolio showcasing previous design projects',
    ],
    applyLink: '/apply/ui-ux-designer',
  },
];

const Careers = () => {
  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers">
      <header className="careers__header">
        <h1 className="careers__title">Join Our Team</h1>
        <p className="careers__subtitle">
          At [Your Company Name], we believe in building a team of passionate, talented, and innovative individuals. Explore our job openings and find your next career opportunity!
        </p>
      </header>
      <section className="careers__listings">
        {jobListings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <div className="careers__job-card">
      <h2 className="careers__job-title">{job.title}</h2>
      <p className="careers__job-location"><strong>Location:</strong> {job.location}</p>
      <p className="careers__job-type"><strong>Type:</strong> {job.type}</p>
      <p className="careers__job-description">{job.description}</p>
      <h3 className="careers__job-requirements-title">Requirements:</h3>
      <ul className="careers__job-requirements">
        {job.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <a href={job.applyLink} className="careers__apply-link">Apply Now</a>
    </div>
  );
};

export default Careers;
