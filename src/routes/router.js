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
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
