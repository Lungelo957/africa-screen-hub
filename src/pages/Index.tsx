
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Training from '@/components/Training';
import Showcase from '@/components/Showcase';
import Members from '@/components/Members';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Training />
        <Showcase />
        <Members />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
