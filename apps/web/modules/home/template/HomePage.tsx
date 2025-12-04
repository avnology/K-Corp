import React from "react";
import { Hero } from "../components/Hero";
import { RotatingLinks } from "../components/links";
import ContactUs from "../components/contact-us";
import AboutUs from "../components/about-us";
import Companies from "../components/Companies";
import TitleContainer from "@/modules/components/common/TitleContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Partners from "../components/partners";
import type { Home } from "@/payload-types";

interface HomePageProps {
  heroData?: Home["hero"];
  titleContainerData?: Home["titleContainer"];
  aboutData?: Home["about"];
  rotatingLinksData?: Home["rotatingLinks"];
  companiesData?: Home["companies"];
  partnersData?: Home["partners"];
  contactData?: Home["contact"];
}

export const HomePage = ({ heroData, titleContainerData, aboutData, rotatingLinksData, companiesData, partnersData, contactData }: HomePageProps) => {
  return (
    <main className="w-full">
      <NavBar />
      <Hero 
        title={heroData?.title}
        subtitle={heroData?.subtitle}
        buttonText={heroData?.buttonText}
        videoUrl={typeof heroData?.video === "object" ? heroData?.video?.url ?? undefined : undefined}
      />
      <TitleContainer title={titleContainerData?.title || "K.Corp A Trusted"} />

      <AboutUs data={aboutData} />
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <RotatingLinks data={rotatingLinksData} />
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <Companies data={companiesData} />
      <Partners data={partnersData} />
      <TitleContainer title={partnersData?.titleContainerAfter || "Contact us"} />
      <ContactUs data={contactData} />
      <Footer />
    </main>
  );
};
