import React, { useState, useEffect, useRef } from 'react';
import { FaBullhorn, FaLaptopCode, FaShareAlt, FaVideo, FaPaintBrush, FaCloud } from 'react-icons/fa';
import '../style/components/ServiceCard.css';

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      img: "/assets/service_1.png",
      title: 'Web & Mobile Development',
      description: 'We build responsive websites and high-performance mobile applications tailored to your business needs.',
    },
    {
      id: 2,
      icon: <FaShareAlt />,
      img: "/assets/service_2.png",
      title: 'Social Media Management',
      description: 'Boost your online presence with our expert strategies for managing and growing your social media channels.',
    },
    {
      id: 3,
      icon: <FaVideo />,
      img: "/assets/service_3.png",
      title: 'Video Editing & Production',
      description: 'Create stunning videos that captivate your audience and bring your brand to life.',
    },
    {
      id: 4,
      icon: <FaPaintBrush />,
      img: "/assets/service_4.png",
      title: 'Graphic Design',
      description: 'Deliver visually compelling designs that resonate with your target audience and reinforce your brand identity.',
    },
    {
      id: 5,
      icon: <FaBullhorn />,
      img: "/assets/service_5.png",
      title: 'Digital Advertising',
      description: 'Reach the right audience with targeted campaigns across multiple platforms to maximize your ROI.',
    },
    {
      id: 6,
      icon: <FaCloud />,
      img: "/assets/service_6.png",
      title: 'Cloud Services & Hosting',
      description: 'Ensure seamless scalability and high availability with our reliable cloud hosting and management solutions.',
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services ${isVisible ? 'visible' : ''}`}
    >
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
              <div className="service-icon-container">
                <div className="service-image-wrapper">
                  <img src={service.img} alt={service.title} className="service-image" />
                </div>
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