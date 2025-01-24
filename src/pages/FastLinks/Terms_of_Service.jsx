import React, { useEffect } from 'react';
import '../../style/pages/TermsOfService .css'; // Import CSS for styling

const TermsOfService = () => {
  useEffect(() => {
    // Scroll to top when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <p>Last updated: January 23, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to [Your App Name]. By using our services, you agree to the following terms and conditions.</p>
      </section>

      <section>
        <h2>2. Use of Service</h2>
        <p>You agree to use our services only for lawful purposes. You must not use our services in any way that violates any applicable laws or regulations.</p>
      </section>

      <section>
        <h2>3. Account Responsibility</h2>
        <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
      </section>

      <section>
        <h2>4. Content Ownership</h2>
        <p>All content provided by you remains your property. However, by using our services, you grant us a license to use, display, and distribute your content within the platform.</p>
      </section>

      <section>
        <h2>5. Termination</h2>
        <p>We may suspend or terminate your access to the service at any time if you violate these terms or engage in inappropriate conduct.</p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.</p>
      </section>

      <section>
        <h2>7. Privacy Policy</h2>
        <p>Your use of the service is also governed by our <a href="/privacy-policy">Privacy Policy</a>.</p>
      </section>

      <section>
        <h2>8. Changes to Terms</h2>
        <p>We may update these terms from time to time. Any changes will be posted on this page with an updated date.</p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>If you have any questions about these terms, please contact us at [contact@yourapp.com].</p>
      </section>
    </div>
  );
};

export default TermsOfService;

