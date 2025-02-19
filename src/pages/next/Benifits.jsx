import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';  // Import translation hook
import '../../style/pages/next/benefits.css';

const Benefits = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();  // Get translation function

    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);  // Unobserve once it’s in view
                }
            },
            { threshold: 0.5 }
        );

        const section = document.getElementById('benefitsSection');
        if (section) observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="benefitsSection" className={`benefits-container ${isVisible ? 'visible' : ''}`}>
            <div className="benefits-wrapper">
                <div className="benefits-content">
                    <div className="benefits-main">
                        <p className="benefits-subtitle">{t('benefits.subtitle')}</p>
                        <h1 className="benefits-title">{t('benefits.title')}</h1>
                    </div>

                    {/* Benefits Cards - Dynamically generated */}
                    <div className="benefits-grid">
                        {[
                            { key: 'tailoredSolutions', image: 'Benefits1.png' },
                            { key: 'reliableExpertise', image: 'Benefits2.png' },
                            { key: 'innovativeStrategies', image: 'Benefits3.png' },
                            { key: 'customerCentric', image: 'Benefits4.png' },
                            { key: 'scalableSolutions', image: 'Benefits5.png' },
                            { key: 'dataDrivenInsights', image: 'Benefits6.png' },
                            { key: 'support', image: 'Benefits7.png' },
                            { key: 'securityCompliance', image: 'Benefits8.png' },
                            { key: 'costEffectiveSolutions', image: 'Benefits9.png' },
                        ].map((benefit, index) => (
                            <div key={index} className="benefits-card">
                                <img
                                    src={`assets/${benefit.image}`}
                                    alt={t(`benefits.cards.${benefit.key}.title`)}
                                    className="benefits-image"
                                />
                                <h3 className="benefits-card-title">{t(`benefits.cards.${benefit.key}.title`)}</h3>
                                <p className="benefits-card-description">
                                    {t(`benefits.cards.${benefit.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
