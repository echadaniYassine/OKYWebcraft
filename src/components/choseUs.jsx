import React, { useEffect, useState } from 'react';
import '../style/components/About.css';

const ChoseUs = () => {
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

        const section = document.getElementById('about');
        observer.observe(section);

        return () => {
            observer.disconnect(); // Clean up observer
        };
    }, []);

    return (
        <section
            id="about" className={`about ${isVisible ? 'visible' : ''}`}>
            <div class="why-choose-us">
                <div class="features">
                    <div class="feature1 feature-main">
                        <p class="feature-subtitle">Why choose us</p>
                        <h1 class="feature-title">Why Choose Us?</h1>
                        <button class="feature-button">More Benefits</button>
                    </div>
                    <div class="feature feature-card">
                        <img src="path" alt="Digital Marketing" class="feature-image" />
                        <h3 class="feature-card-title">Digital Marketing</h3>
                        <p class="feature-card-description">
                            Leverage cutting-edge strategies to maximize your online presence and drive customer engagement.
                        </p>
                    </div>
                    <div class="feature feature-highlight">
                        <img src="path" alt="SEO Management" class="feature-image" />
                        <h3 class="feature-card-title">SEO Management</h3>
                        <p class="feature-card-description">
                            Optimize your website for search engines and improve your rankings to attract more organic traffic.
                        </p>
                    </div>
                    <div class="feature feature-card">
                        <img src="path" alt="Content Creation" class="feature-image" />
                        <h3 class="feature-card-title">Content Creation</h3>
                        <p class="feature-card-description">
                            Develop compelling and creative content tailored to your audience to build brand trust and loyalty.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ChoseUs;
