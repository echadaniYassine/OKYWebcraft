import React, { useEffect, useState } from 'react';
import '../style/components/chooseUs.css';
import { Link } from 'react-router-dom';
const Benefits = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing after it's visible
                }
            },
            {
                threshold: 0.5, // Trigger animation when 50% of the section is visible
            }
        );

        const section = document.getElementById('chooseUs');
        observer.observe(section);

        return () => {
            observer.disconnect(); // Clean up observer
        };
    }, []);

    return (
        <section
            id="chooseUs" className={`about ${isVisible ? 'visible' : ''}`}>
            <div className="why-choose-us">
                <div className="features">
                    <div className="feature1 feature-main">
                        <p className="feature-subtitle">Why choose us?</p>
                        <h1 className="feature-title">Our Goals & <br />Benefits</h1>
                        <Link to="/Benefits"><button className="feature-button">Explore More</button>
                        </Link>
                    </div>
                    <div className="feature feature-card">
                        <img src="assets/Benefits1.png" alt="Tailored Solutions" className="feature-image" />
                        <h3 className="feature-card-title">Tailored Solutions</h3>
                        <p className="feature-card-description">
                            We provide customized strategies that align perfectly with your business objectives, ensuring maximum impact.
                        </p>
                    </div>
                    <div className="feature feature-highlight">
                        <img src="assets/Benefits2.png" alt="Reliable Expertise" className="feature-image" />
                        <h3 className="feature-card-title">Reliable Expertise</h3>
                        <p className="feature-card-description">
                            Backed by years of experience, our team delivers consistent, high-quality results that you can count on.
                        </p>
                    </div>
                    <div className="feature feature-card">
                        <img src="assets/Benefits3.png" alt="Innovative Strategies" className="feature-image" />
                        <h3 className="feature-card-title3">Innovative Strategies</h3>
                        <p className="feature-card-description3">
                            We embrace innovation to provide cutting-edge solutions that keep you ahead of the competition.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
