"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/modules/components/ui/separator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  title: string;
  description: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, description, className }) => {
  return (
    <div className={cn("space-y-4 py-10!", className)}>
      <h3 className="font-alexandria text-[18px] md:text-[32px] leading-[39px] font-normal uppercase text-black">
        {title}
      </h3>
      <p className="font-alexandria max-w-[650px] text-[16px] md:text-2xl leading-[30px] font-light text-[#4A4A4A]">
        {description}
      </p>
    </div>
  );
};

export default function AboutUs() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top 10%",
        end: "top center",
        once: true,
      },
    });

    tl.fromTo("#grid", { opacity: 0 }, { opacity: 1, duration: 0.6 });

    tl.fromTo(
      "#left-half",
      {
        x: 0,
        rotateY: 45,
        transformOrigin: "right center",
        duration: 0.8,
        opacity: 0,

        ease: "power2.inOut",
      },
      {
        x: -317,
        rotateY: 45,
        transformOrigin: "right center",
        duration: 0.8,
        opacity: 1,

        ease: "power2.inOut",
      }
    ).fromTo(
      "#right-half",
      {
        x: 0,
        rotateY: -45,
        transformOrigin: "left center",
        duration: 0.8,
        opacity: 0,
        ease: "power2.inOut",
      },
      {
        x: 317,
        rotateY: -45,
        transformOrigin: "left center",
        duration: 0.8,
        opacity: 1,

        ease: "power2.inOut",
      },
      "<"
    );
    tl.fromTo(
      "#bottom-half",
      {
        rotateX: 85,
        opacity: 0,
      },
      {
        y: 170,
        opacity: 1,
        rotateX: 85,
      },
      "<"
    );
    tl.fromTo(
      "#content",
      { opacity: 0, y: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out", y: 0 }
    );

    tl.fromTo(
      "#border-left",
      { scaleY: 0 },
      { scaleY: 1, duration: 0.4, ease: "power2.out" },
      "<"
    )
      .fromTo(
        "#border-right",
        { scaleY: 0 },
        { scaleY: 1, duration: 0.4, ease: "power2.out" },
        "<"
      )
      .fromTo(
        "#border-bottom",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: "power2.out" },
        "<0.1"
      )
      .fromTo(
        "#border-top",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );
  }, []);

  return (
    <div
      id="container"
      className="w-full xl:min-h-[1640px] h-max bg-white py-32 my-20 flex justify-center items-start relative overflow-x-hidden"
      style={{ perspective: "1200px" }}
    >
      <div
        id="grid"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          id="left-half"
          className="w-2/4  opacity-0  bg-white h-10/12 grid top-0 grid-cols-12 grid-rows-4 absolute  left-0"
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-black/40"></div>
          ))}
        </div>
        <div
          id="right-half"
          className="w-2/4   opacity-0 h-10/12 bg-white grid grid-cols-12 grid-rows-4 absolute top-0 right-0"
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-black/40"></div>
          ))}
        </div>
        <div
          id="bottom-half"
          className="w-full opacity-0 h-5/12 grid grid-cols-12 grid-rows-4 absolute bottom-0 -translate-x-1/2 left-1/2"
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-black/40"></div>
          ))}
        </div>
      </div>
      <div
        id="content"
        className="min-w-1/3 w-fit  max-full md:max-w-3/4 h-fit bg-white border px-4!  top-0  space-y-8  z-10"
        style={{ opacity: 0 }}
      >
        <div className="space-y-6! py-10! m-2">
          <h2 className="font-alexandria text-[20px] md:text-[32px] leading-[39px] font-normal uppercase text-black">
            ABOUT US
          </h2>
          <p className="font-alexandria text-[12px] max-w-[650px] sm:text-[16px] md:text-[23px] leading-[37px] font-normal capitalize text-[#160000] h-[397px]">
            K.CORP IS MORE THAN AN INVESTMENT HOLDING WE BUILD A BUSINESS
            ECOSYSTEM THAT CREATES VALUE Once established with a vision for
            long-term sustainability, K Corp Investment and Holding,
            headquartered in Saudi Arabia, has grown into a diversified group
            empowering subsidiaries across logistics, energy, facility
            management, F&B, and urban planning. Through a decentralized model
            and strategic support, we contribute to Saudi Arabia&apos;s Vision
            2030 by enabling businesses that deliver measurable impact.
          </p>
        </div>

        <button className="w-full h-[26px]  bg-primary flex items-center justify-center">
          <span className="font-alexandria text-[9.94px] leading-6 font-bold uppercase tracking-[1.2px] text-white">
            CONTACT
          </span>
        </button>

        <Separator />

        <div className="space-y-4 py-10!">
          <h3 className="font-alexandria text-[18px] md:text-[32px] leading-[39px] font-normal uppercase text-black">
            SHAPING THE FUTURE WITH PURPOSE
          </h3>
          <p className="font-alexandria text-[16px] max-w-[650px] md:text-2xl leading-[30px] font-light text-[#4A4A4A]">
            This text is an example of text that can be replaced in the same
            space, this text has been generated from the Arabic text generator,
            where you can generate such text
          </p>
        </div>

        <Separator />

        <Section
          title="ECONOMIC DIVERSIFICATION"
          description="We invest in high-potential non-oil sectors such as clean entertainment energy, and food to support a resilient national economy."
        />

        <Separator />

        <Section
          title="SUSTAINABILITY"
          description="We promote environmentally friendly initiatives and smart infrastructure solutions across our business ecosystem."
        />

        <Separator />

        <Section
          title="INNOVATION"
          description="Through advanced technologies and creative industries, we drive progress and shape a forward-looking economy"
        />

        <Separator />

        <Section
          title="TALENT EMPOWERMENT"
          description="We create job opportunities and invest in developing the skills of the Saudi workforce, building human capital for the future"
        />
      </div>
    </div>
  );
}
