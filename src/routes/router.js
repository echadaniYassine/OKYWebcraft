import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from '../components/Header';
import About_US from "../pages/FastLinks/About_US";
import Benefits from "../pages/Benifits";
import CategoryWeb from "../pages/realisation/WebCategory";
import CategoryGraphicDesign from "../pages/realisation/CategoryGraphicDesign";
import CategoryProductionVideo from "../pages/realisation/CategoryProductionVideo";
import Footer from "../components/Footer";
import Careers from "../pages/FastLinks/Careers";
import TermsOfService from "../pages/FastLinks/Terms_of_Service";
import PrivacyPolicy from "../pages/FastLinks/Privacy_Policy";
import EcommerceServices from "../pages/services/EcommerceServices"; // Double-check the path here
import WebMobileDevelopment from "../pages/services/WebMobileDevelopment ";
import SocialMediaManagement from "../pages/services/SocialMediaManagement";
import CloudServices from "../pages/services/CloudServices ";
import DigitalAdvertising from "../pages/services/DigitalAdvertising";
import UIUXDesign from "../pages/services/UIUXDesign";
//import UIUXDesign from "../pages/services/UIUXDesign";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About_US />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/category-web" element={<CategoryWeb />} />
        <Route path="/category-graphic-design" element={<CategoryGraphicDesign />} />
        <Route path="/category-production-video" element={<CategoryProductionVideo />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services-ecommerce" element={<EcommerceServices />} />
        <Route path="/services-web-&-mobile-development" element={<WebMobileDevelopment />} />
        <Route path="/services-social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services-cloud-hosting" element={<CloudServices />} />
        <Route path="/services-digital-advertising" element={<DigitalAdvertising />} />
        <Route path="/services-ui-ux-design" element={<UIUXDesign />} />





      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
