import React from 'react';
import HeroSection from '../Components/Herosection';
import ProductShowcase from '../Components/ProductShowcase';
import Categories from '../Components/Categories';

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductShowcase />
      <Categories />
    </div>
  );
}

export default Home;