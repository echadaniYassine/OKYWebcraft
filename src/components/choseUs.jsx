import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../style/components/chooseUs.css';
import { Link } from 'react-router-dom';

const ChoseUs = () => {
    const { t } = useTranslation(); // Initialize translation hook
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
        <section id="chooseUs" className={`about ${isVisible ? 'visible' : ''}`}>
            <div className="why-choose-us">
                <div className="features">
                    <div className="feature1 feature-main">
                        <p className="feature-subtitle">{t('chooseUs.why_choose_us')}</p>
                        <h1 className="feature-title">{t('chooseUs.goals_benefits')}</h1>
                        <Link to="/Benefits">
                            <button className="feature-button">{t('chooseUs.explore_more')}</button>
                        </Link>
                    </div>
                    <div className="feature feature-card">
                        <img src="assets/benefits/benefits1.png" alt="Tailored Solutions" className="feature-image" />
                        <h3 className="feature-card-title">{t('chooseUs.tailored_solutions')}</h3>
                        <p className="feature-card-description">
                            {t('chooseUs.tailored_description')}
                        </p>
                    </div>
                    <div className="feature feature-highlight">
                        <img src="assets/benefits/benefits2.png" alt="Reliable Expertise" className="feature-image" />
                        <h3 className="feature-card-title">{t('chooseUs.reliable_expertise')}</h3>
                        <p className="feature-card-description">
                            {t('chooseUs.reliable_description')}
                        </p>
                    </div>
                    <div className="feature feature-card">
                        <img src="assets/benefits/benefits3.png" alt="Innovative Strategies" className="feature-image" />
                        <h3 className="feature-card-title">{t('chooseUs.innovative_strategies')}</h3>
                        <p className="feature-card-description">
                            {t('chooseUs.innovative_description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChoseUs;
