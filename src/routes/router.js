import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from '../components/Header';
import About_US from "../pages/About_US";
import Benefits from "../pages/Benifits";
import CategoryWeb from "../pages/categories/WebCategory";
import CategoryGraphicDesign from "../pages/categories/CategoryGraphicDesign";
import CategoryProductionVideo from "../pages/categories/CategoryProductionVideo";
import Footer from "../components/Footer";
import Careers from "../pages/FastLinks/Careers";
import TermsOfService from "../pages/FastLinks/Terms_of_Service";
import PrivacyPolicy from "../pages/FastLinks/Privacy_Policy"
const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about_us" element={<About_US />} />
                <Route path="/Benefits" element={<Benefits />} />
                <Route path="/category_web" element={<CategoryWeb />} />
                <Route path="/category_graphic_design" element={<CategoryGraphicDesign />} />
                <Route path="/category_production_video" element={<CategoryProductionVideo />} />
                <Route path="/Careers" element={<Careers />} />
                <Route path="/Terms_of_Service" element={<TermsOfService />} />
                <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />

            </Routes>
            <Footer/>
        </Router>
    );
};

export default AppRouter;