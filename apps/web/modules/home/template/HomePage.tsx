import React from 'react';
import { Hero } from '../components/Hero';
import AboutUs from '../components/about-us';

export const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <AboutUs />
      
    </main>
  );
};
