// src/pages/Home.js
import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks';
import PropertyShowcase from '../Components/PropertyShowcase';
import Benefits from '../Components/Benefits';
import Demo from '../Components/Demo';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';



const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <PropertyShowcase />
        <Benefits />
        <Demo />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Home;