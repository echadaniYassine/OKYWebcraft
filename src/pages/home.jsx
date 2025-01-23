import React from 'react';
import Header from '../components/Header';  
import About from '../components/About';        
import Services from '../components/ServiceCard';
import Hero from '../components/Hero';           
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import ChoseUs from '../components/choseUs';

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <ChoseUs />
            <Services />
            <Portfolio />
        </div>
    );
}

export default HomePage;
