import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageTitle from "./components/PageTitle"; // Import PageTitle
import Home from "./pages/home/home";
import Header from './components/Header';
import About_US from "./pages/FastLinks/About_US";
import Benefits from "./pages/Benifits";
import CategoryWeb from "./pages/realisation/WebCategory";
import CategoryGraphicDesign from "./pages/realisation/CategoryGraphicDesign";
import CategoryAppMobill from "./pages/realisation/CategoryAppMobill";
import Footer from "./components/Footer";
import Careers from "./pages/FastLinks/Careers";
import TermsOfService from "./pages/FastLinks/Terms_of_Service";
import PrivacyPolicy from "./pages/FastLinks/Privacy_Policy";
import EcommerceServices from "./pages/services/EcommerceServices";
import WebMobileDevelopment from "./pages/services/WebMobileDevelopment ";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import CloudServices from "./pages/services/CloudServices ";
import DigitalAdvertising from "./pages/services/DigitalAdvertising";
import UIUXDesign from "./pages/services/UIUXDesign";
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  // Change language function
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <Header handleLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/" element={<><PageTitle title={t('page-titles.home')} /><Home /></>} />
        <Route path="/about-us" element={<><PageTitle title={t('page-titles.about-us')} /><About_US /></>} />
        <Route path="/Benefits" element={<><PageTitle title={t('page-titles.benefits')} /><Benefits /></>} />
        <Route path="/category-web" element={<><PageTitle title={t('page-titles.category-web')} /><CategoryWeb /></>} />
        <Route path="/category-graphic-design" element={<><PageTitle title={t('page-titles.category-graphic-design')} /><CategoryGraphicDesign /></>} />
        <Route path="/category-app-mobile" element={<><PageTitle title={t('page-titles.category-app-mobile')} /><CategoryAppMobill /></>} />
        <Route path="/Careers" element={<><PageTitle title={t('page-titles.careers')} /><Careers /></>} />
        <Route path="/terms-of-service" element={<><PageTitle title={t('page-titles.terms-of-service')} /><TermsOfService /></>} />
        <Route path="/privacy-policy" element={<><PageTitle title={t('page-titles.privacy-policy')} /><PrivacyPolicy /></>} />
        <Route path="/services-ecommerce" element={<><PageTitle title={t('page-titles.services-ecommerce')} /><EcommerceServices /></>} />
        <Route path="/services-web-&-mobile-development" element={<><PageTitle title={t('page-titles.services-web-mobile-development')} /><WebMobileDevelopment /></>} />
        <Route path="/services-social-media-management" element={<><PageTitle title={t('page-titles.services-social-media-management')} /><SocialMediaManagement /></>} />
        <Route path="/services-cloud-hosting" element={<><PageTitle title={t('page-titles.services-cloud-hosting')} /><CloudServices /></>} />
        <Route path="/services-digital-advertising" element={<><PageTitle title={t('page-titles.services-digital-advertising')} /><DigitalAdvertising /></>} />
        <Route path="/services-ui-ux-design" element={<><PageTitle title={t('page-titles.services-ui-ux-design')} /><UIUXDesign /></>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
