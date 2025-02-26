import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';  // Import translation hook
import '../../style/pages/next/benefits.css';

const ProfessionalBenefits = () => {
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

        const section = document.getElementById('professionalBenefitsSection');
        if (section) observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="professionalBenefitsSection" className={`professional-benefits-container ${isVisible ? 'visible' : ''}`}>
            <div className="professional-benefits-wrapper">
                <div className="professional-benefits-content">
                    <div className="professional-benefits-header">
                        <p className="professional-benefits-subtitle">{t('benefits.subtitle')}</p>
                        <h1 className="professional-benefits-title">{t('benefits.title')}</h1>
                    </div>

                    {/* Benefits Cards - Dynamically generated */}
                    <div className="professional-benefits-grid">
                        {[
                            { key: 'tailoredSolutions', image: "benefits/benefits1.png"},
                            { key: 'reliableExpertise', image: "benefits/benefits2.png"},
                            { key: 'innovativeStrategies', image: "benefits/benefits3.png"},
                            { key: 'customerCentric', image: "benefits/benefits4.png"},
                            { key: 'scalableSolutions', image: "benefits/benefits5.png"},
                            { key: 'dataDrivenInsights', image: "benefits/benefits6.png"},
                            { key: 'support', image: "benefits/benefits7.png"},
                            { key: 'securityCompliance', image: "benefits/benefits8.png"},
                            { key: 'costEffectiveSolutions', image: "benefits/benefits9.png"},
                        ].map((benefit, index) => (
                            <div key={index} className="professional-benefits-card">
                                <img
                                    src={`assets/${benefit.image}`}
                                    alt={t(`benefits.cards.${benefit.key}.title`)}
                                    className="professional-benefits-image"
                                />
                                <h3 className="professional-benefits-card-title">{t(`benefits.cards.${benefit.key}.title`)}</h3>
                                <p className="professional-benefits-card-description">
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

export default ProfessionalBenefits;
