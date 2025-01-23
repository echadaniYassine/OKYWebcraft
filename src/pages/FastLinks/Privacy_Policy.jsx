//privacy policy.jsx
import React, { useEffect } from 'react';
import '../../style/components/PrivacyPolicy.css'; // Import CSS for styling

const PrivacyPolicy = () => {
  useEffect(() => {
      // Scroll to top when the component is loaded
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="privacy-policy">
      <header className="privacy-policy__header">
        <h1 className="privacy-policy__title">Privacy Policy</h1>
      </header>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">Introduction</h2>
        <p className="privacy-policy__text">
          Welcome to [Your Company Name]! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our services.
        </p>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">Information We Collect</h2>
        <p className="privacy-policy__text">
          We may collect the following types of information:
        </p>
        <ul className="privacy-policy__list">
          <li>Personal Information (e.g., name, email address, phone number)</li>
          <li>Usage Data (e.g., pages you visit, time spent on the site)</li>
          <li>Device Information (e.g., browser type, IP address)</li>
        </ul>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">How We Use Your Information</h2>
        <p className="privacy-policy__text">
          The information we collect is used for:
        </p>
        <ul className="privacy-policy__list">
          <li>Providing and improving our services</li>
          <li>Communicating with you</li>
          <li>Ensuring security and preventing fraud</li>
        </ul>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">Sharing Your Information</h2>
        <p className="privacy-policy__text">
          We do not sell your personal information. We may share your information with third parties only in the following cases:
        </p>
        <ul className="privacy-policy__list">
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
        </ul>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">Your Rights</h2>
        <p className="privacy-policy__text">
          You have the right to access, update, or delete your personal information. If you have any questions or concerns, please contact us at [your email or contact information].
        </p>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">Changes to This Policy</h2>
        <p className="privacy-policy__text">
          We may update this Privacy Policy from time to time. Please check back periodically for updates.
        </p>
      </section>
      <footer className="privacy-policy__footer">
        <p className="privacy-policy__text">
          If you have any questions about this Privacy Policy, please contact us at [your email or contact information].
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
