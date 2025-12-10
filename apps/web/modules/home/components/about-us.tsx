"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/modules/components/ui/separator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LinkData {
  text?: string | null;
  url?: string | null;
  openInNewTab?: boolean | null;
}

interface SectionData {
  title: string;
  description: string;
  link?: LinkData | null;
}

interface SectionProps extends SectionData {
  className?: string;
}

interface AboutUsProps {
  data?: {
    title?: string | null;
    mainDescription?: string | null;
    buttonText?: string | null;
    buttonLink?: string | null;
    secondaryTitle?: string | null;
    secondaryDescription?: string | null;
    sections?: SectionData[] | null;
  };
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  link,
  className,
}) => {
  return (
    <div className={cn("space-y-4 py-10", className)}>
      <h3 className="font-alexandria text-[30px] md:text-[36px] leading-tight md:leading-[43.9px] font-normal uppercase text-black">
        {title}
      </h3>
      <p className="font-alexandria max-w-[650px] text-lg md:text-[24px] leading-normal md:leading-[29.3px] font-extralight text-black">
        {description}
      </p>
      {link?.text && link?.url && (
        <Link
          href={link.url}
          target={link.openInNewTab ? "_blank" : "_self"}
          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
          className="inline-block mt-4 font-alexandria text-sm md:text-base font-medium text-primary hover:underline transition-all"
        >
          {link.text} →
        </Link>
      )}
    </div>
  );
};

export default function AboutUs({ data }: AboutUsProps) {
  const defaultSections: SectionData[] = [
    {
      title: "ECONOMIC DIVERSIFICATION",
      description:
        "We invest in high-potential non-oil sectors such as logistics, entertainment, energy, and food to support a resilient national economy.",
    },
    {
      title: "SUSTAINABILITY",
      description:
        "We promote environmentally friendly initiatives and smart infrastructure solutions across our business ecosystem.",
    },
    {
      title: "INNOVATION",
      description:
        "Through advanced technologies and creative industries, we drive progress and shape a forward-looking economy.",
    },
    {
      title: "TALENT EMPOWERMENT",
      description:
        "We create job opportunities and invest in developing the skills of the Saudi workforce, building human capital for the future.",
    },
  ];

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
        className="min-w-1/3 w-fit max-full md:max-w-3/4 h-fit bg-white border px-4 top-0 space-y-8 z-10"
        style={{ opacity: 0 }}
      >
        <div className="space-y-6 py-10 m-2">
          <h2 className="font-alexandria text-xl md:text-[32px] leading-tight md:leading-[39px] font-normal uppercase text-black">
            {data?.title || "ABOUT US"}
          </h2>

          <p className="font-alexandria text-sm max-w-[650px] md:text-[23px] leading-relaxed md:leading-[37px] font-normal capitalize text-[#160000] min-h-[200px] md:min-h-[397px]">
            {data?.mainDescription ||
              "K.CORP IS MORE THAN AN INVESTMENT HOLDING WE BUILD A BUSINESS ECOSYSTEM THAT CREATES VALUE Once established with a vision for long-term sustainability, K Corp Investment and Holding, headquartered in Saudi Arabia, has grown into a diversified group empowering subsidiaries across logistics, energy, facility management, F&B, and urban planning. Through a decentralized model and strategic support, we contribute to Saudi Arabia’s Vision 2030 by enabling businesses that deliver measurable impact."}
          </p>
        </div>

        <Link
          href={data?.buttonLink || "#contact"}
          className="w-full h-[26px] bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
        >
          <span className="font-alexandria text-[9.94px] leading-6 font-bold uppercase tracking-[1.2px] text-white">
            {data?.buttonText || "CONTACT"}
          </span>
        </Link>

        <Separator className="bg-gray-300" />

        <div className="space-y-4 py-10">
          <h3 className="font-alexandria text-lg md:text-[24px] leading-tight md:leading-[30px] font-light uppercase text-[#4A4A4A]">
            {data?.secondaryTitle || "SHAPING THE FUTURE WITH PURPOSE"}
          </h3>
          
          <p className="font-alexandria text-base max-w-[650px] md:text-2xl leading-[30px] font-light text-gray-600">
            {data?.secondaryDescription ||
              "This text is an example of text that can be replaced in the same space, this text has been generated from the Arabic text generator, where you can generate such text"}
          </p>
        </div>

        <Separator className="bg-gray-300" />

        {(data?.sections && data.sections.length > 0
          ? data.sections
          : defaultSections
        ).map((section, index) => (
          <React.Fragment key={index}>
            <Section
              title={section.title}
              description={section.description}
              link={section.link}
            />
            {index < (data?.sections?.length || defaultSections.length) - 1 && (
              <Separator className="bg-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}