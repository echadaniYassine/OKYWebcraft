import React, { useState } from 'react';
import { FaSearch, FaChartLine, FaUsers, FaHandHoldingUsd } from 'react-icons/fa';
import '../style/components/ServiceCard.css';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const services = [
    {
      id: 1,
      icon: <FaSearch />,
      title: 'Business Marketing Strategy',
      description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
      img: 'assets/HERO.png',
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: 'Social Campaign Management',
      description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
      img: 'assets/HERO.png',
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'SEO & Advertisement Placement',
      description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
      img: 'assets/HERO.png',
    },
    {
      id: 4,
      icon: <FaHandHoldingUsd />,
      title: 'Business Market Collaboration',
      description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
      img: 'assets/HERO.png',
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-title">Providing Best Services</h2>
        <p className="services-description">
          Dolorum tempor quis dictum tempore, curabitur commoding sec inventore aute maecenas commodo, nibh.
        </p>
        <div className="service-cards">
          {visibleServices.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-img-container">
                <div className="service-icon">{service.icon}</div>
                <img src={service.img} alt={service.title} className="service-img" />
              </div>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

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
