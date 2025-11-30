import React from 'react';
import { Hero } from '../components/Hero';
import ContactUs from '../components/contact-us';

export const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
        <ContactUs />
    </main>
  );
};
