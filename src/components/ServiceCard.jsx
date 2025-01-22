import React, { useState, useEffect } from 'react';
import { FaBullhorn, FaLaptopCode, FaShareAlt, FaVideo, FaPaintBrush, FaCloud } from 'react-icons/fa';
import '../style/components/ServiceCard.css';

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: 'Web & Mobile Development',
      description: 'We build responsive websites and high-performance mobile applications tailored to your business needs.',
    },
    {
      id: 2,
      icon: <FaShareAlt />,
      title: 'Social Media Management',
      description: 'Boost your online presence with our expert strategies for managing and growing your social media channels.',
    },
    {
      id: 3,
      icon: <FaVideo />,
      title: 'Video Editing & Production',
      description: 'Create stunning videos that captivate your audience and bring your brand to life.',
    },
    {
      id: 4,
      icon: <FaPaintBrush />,
      title: 'Graphic Design',
      description: 'Deliver visually compelling designs that resonate with your target audience and reinforce your brand identity.',
    },
    {
      id: 5,
      icon: <FaBullhorn />,
      title: 'Digital Advertising',
      description: 'Reach the right audience with targeted campaigns across multiple platforms to maximize your ROI.',
    },
    {
      id: 6,
      icon: <FaCloud />,
      title: 'Cloud Services & Hosting',
      description: 'Ensure seamless scalability and high availability with our reliable cloud hosting and management solutions.',
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className={`services ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="services-title">Providing Best Services</h2>
        <p className="services-description">
          Dolorum tempor quis dictum tempore, curabitur commoding sec inventore aute maecenas commodo, nibh.
        </p>
        <div className="service-cards">
          {visibleServices.map((service, index) => (
            <div
              className={`service-card ${index % 2 === 0 ? 'icon-right' : 'icon-left'}`}
              key={service.id}
            >
              <div className="service-icon-container">{service.icon}</div>
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
