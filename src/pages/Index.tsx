
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import InvestmentOptions from '@/components/InvestmentOptions';
import FarmerSection from '@/components/FarmerSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <InvestmentOptions />
      <FarmerSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
