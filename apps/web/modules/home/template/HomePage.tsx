import React from 'react';
import { Hero } from '../components/Hero';
import { RotatingLinks } from '../components/links';
import ContactUs from '../components/contact-us';

export const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <RotatingLinks />
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <ContactUs />
    </main>
  );
};
