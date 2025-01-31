import React, { useEffect } from "react";
import '../../style/pages/services/Services.css';
import { FaWordpress, FaShopify } from 'react-icons/fa';  // Import the icons

export default function EcommerceServices() {
   useEffect(() => {
            // Scroll to top when the component is loaded
            window.scrollTo(0, 0);
          }, []); 
  return (
    <div className="ecommerce-services">
      <header className="ecommerce-services__header">
        <h1 className="ecommerce-services__title">Our E-Commerce Services</h1>
        <p className="ecommerce-services__subtitle">
          At OKY Agency, we specialize in building dynamic, secure, and scalable e-commerce solutions using top platforms like WordPress and Shopify. Our expertise empowers businesses to elevate their online presence and drive success.
        </p>
      </header>

      <section className="ecommerce-services__content">
        <div className="ecommerce-services__platform">
          <h2 className="ecommerce-services__platform-title">
            <FaWordpress color='#77a1aa' /> WordPress E-Commerce Solutions  {/* Add the WordPress icon here */}
          </h2>
          <p className="ecommerce-services__platform-description">
            We leverage WordPress with WooCommerce to create versatile and user-friendly online stores. Whether you are launching a new business or enhancing your current e-commerce site, we ensure your platform is optimized for both performance and scalability.
          </p>
          <ul className="ecommerce-services__platform-benefits">
            <li>Custom Themes and Design</li>
            <li>Mobile-Responsive Layouts</li>
            <li>Secure Payment Gateway Integration</li>
            <li>Advanced SEO Optimization</li>
            <li>Easy Product Management</li>
          </ul>
        </div>

        <div className="ecommerce-services__platform">
          <h2 className="ecommerce-services__platform-title">
            <FaShopify color='#77a1aa' /> Shopify E-Commerce Solutions {/* Add the Shopify icon here */}
          </h2>
          <p className="ecommerce-services__platform-description">
            Shopify is one of the leading e-commerce platforms, and we are experts in building seamless online stores that deliver a superior shopping experience. Our Shopify solutions are tailored to help businesses grow and scale efficiently.
          </p>
          <ul className="ecommerce-services__platform-benefits">
            <li>Professional Custom Store Design</li>
            <li>Integrated Payment Solutions</li>
            <li>Seamless Inventory Management</li>
            <li>Robust Analytics and Reporting</li>
            <li>Optimized for Speed and Security</li>
          </ul>
        </div>
      </section>

      <section className="ecommerce-services__process">
        <h2 className="ecommerce-services__process-title">How OKY Agency Helps Level Up Your E-Commerce Project</h2>
        <p className="ecommerce-services__process-description">
          Our agency is dedicated to creating cutting-edge e-commerce experiences for our clients. We combine expert development with modern technologies to bring your vision to life. Here’s how we work:
        </p>

        <div className="ecommerce-services__process-steps">
          <div className="ecommerce-services__process-step">
            <h3>1. Discovery & Consultation</h3>
            <p>
              We begin by understanding your business, target market, and goals. Our team works closely with you to define your project scope, preferences, and required features.
            </p>
          </div>
          <div className="ecommerce-services__process-step">
            <h3>2. Platform Selection & Customization</h3>
            <p>
              Based on your needs, we recommend the best platform, either WordPress/WooCommerce or Shopify. We then customize the platform to ensure it aligns with your brand and functional requirements.
            </p>
          </div>
          <div className="ecommerce-services__process-step">
            <h3>3. Development & Implementation</h3>
            <p>
              Our expert developers integrate the necessary features, design custom themes, and implement all required functionalities. We also ensure that your site is fully optimized for speed and security.
            </p>
          </div>
          <div className="ecommerce-services__process-step">
            <h3>4. Testing & Launch</h3>
            <p>
              Before launch, we perform thorough testing to ensure everything works seamlessly across devices and browsers. After approval, we officially launch your e-commerce store.
            </p>
          </div>
          <div className="ecommerce-services__process-step">
            <h3>5. Ongoing Support & Optimization</h3>
            <p>
              After launch, we provide continuous support to ensure your store runs smoothly. We help with updates, feature enhancements, and SEO optimization to maximize performance.
            </p>
          </div>
        </div>
      </section>

      <div className="ecommerce-services__cta">
        <h3>Ready to Transform Your E-Commerce Business?</h3>
        <p>Contact OKY Agency today to discuss how we can help level up your online store with our e-commerce expertise.</p>
        <button className="ecommerce-services__cta-button">Get in Touch</button>
      </div>
    </div>
  );
};
