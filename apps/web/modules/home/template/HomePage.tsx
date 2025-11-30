import React from "react";
import { Hero } from "../components/Hero";
import { RotatingLinks } from '../components/links';
import ContactUs from "../components/contact-us";
import AboutUs from "../components/about-us";
import Companies from "../components/Companies";
import TitleContainer from "@/modules/components/common/TitleContainer";

export const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <TitleContainer title="K.Corp A Trusted " />

      <AboutUs />
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <RotatingLinks />
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <Companies />
      <TitleContainer title="Contact us" />
      <ContactUs />
    </main>
  );
};
