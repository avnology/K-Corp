import React from "react";
import { Hero } from "../components/Hero";
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
      <Companies />
      <TitleContainer title="Contact us" />
      <ContactUs />
    </main>
  );
};
