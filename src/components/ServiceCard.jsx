import React, { useState } from 'react';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCogs, FaDatabase } from 'react-icons/fa'; // Import icons
import '../style/components/ServiceCard.css';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Modern, responsive, and scalable web applications tailored to your needs.',
      img: 'path-to-web-development-image.jpg',
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'User-friendly designs that enhance user experience.',
      img: 'path-to-uiux-design-image.jpg',
    },
    {
      id: 3,
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Boost your website’s search engine ranking to attract more visitors.',
      img: 'path-to-seo-optimization-image.jpg',
    },
    {
      id: 4,
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description: 'High-performance mobile apps for iOS and Android platforms.',
      img: 'path-to-mobile-development-image.jpg',
    },
    {
      id: 5,
      icon: <FaCogs />,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with automation tools.',
      img: 'path-to-automation-solutions-image.jpg',
    },
    {
      id: 6,
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Secure and efficient management of your data and databases.',
      img: 'path-to-database-management-image.jpg',
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="services">
      <div className="container">
        {/* Title and Description */}
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          Explore our range of services designed to help your business grow and succeed.
        </p>

        {/* Service Cards */}
        <div className="service-cards">
          {visibleServices.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <img src={service.img} alt={service.title} className="service-img" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="view-all">
          <button className="view-all-btn" onClick={handleToggle}>
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
