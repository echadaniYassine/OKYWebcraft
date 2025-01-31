import React, { useState, useEffect, useRef } from 'react';
import { FaBullhorn, FaLaptopCode, FaShareAlt, FaPaintBrush, FaCloud, FaShoppingCart, FaServer, FaAngleDown, FaAngleUp, FaAngleRight } from 'react-icons/fa';
import '../style/components/ServiceCard.css';
import { Link } from 'react-router-dom';

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
      title: "Web & Mobile Development",
      description:
        "We build responsive websites and high-performance mobile applications tailored to your business needs.",
      link: "/services-web-mobile-development", // Link to the service page
    },
    {
      id: 2,
      icon: <FaShareAlt />,
      img: "/assets/service_2.png",
      title: "Social Media Management",
      description:
        "Boost your online presence with our expert strategies for managing and growing your social media channels.",
      link: "/services-social-media-management",
    },
    {
      id: 3,
      icon: <FaShoppingCart />,
      img: "/assets/service_3.png",
      title: "E-Commerce Stores",
      description:
        "Empower your online store with secure, scalable, and user-friendly e-commerce platforms that drive sales.",
      link: "/services-ecommerce", 
    }
    ,
    {
      id: 4,
      icon: <FaPaintBrush />,
      img: "/assets/service_4.png",
      title: "UI / UX Design",
      description:
        "Deliver visually compelling designs that resonate with your target audience and reinforce your brand identity.",
      link: "/services-ui-ux-design",
    },
    {
      id: 5,
      icon: <FaBullhorn />,
      img: "/assets/service_5.png",
      title: "Digital Advertising",
      description:
        "Reach the right audience with targeted campaigns across multiple platforms to maximize your ROI.",
      link: "/services-digital-advertising",
    },
    {
      id: 6,
      icon: <FaCloud />,
      img: "/assets/service_6.png",
      title: "Cloud Services & Hosting",
      description:
        "Ensure seamless scalability and high availability with our reliable cloud hosting and management solutions.",
      link: "/services-cloud-hosting",
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
          Discover innovative solutions tailored to meet your business needs and drive growth effectively.
        </p>

        <div className="service-cards">
          {visibleServices.map((service, index) => (
            <div
              className={`service-card ${index % 2 === 0 ? "icon-right" : "icon-left"}`}
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
                <Link to={service.link} className="explore-more">
                  Explore More <FaAngleRight />
                </Link>
              </div>
            </div>
          ))}
        </div>


        <div className="view-all">
          <button className="view-all-btn" onClick={handleToggle}>
            {showAll ? (
              <>
                Show Less <FaAngleUp /> {/* Icon for "Show Less" */}
              </>
            ) : (
              <>
                View All Services <FaAngleDown /> {/* Icon for "View All Services" */}
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;