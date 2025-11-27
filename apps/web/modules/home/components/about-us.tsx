"use client";

import React, { useEffect, useRef } from "react";
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
    <div className={cn("space-y-4", className)}>
      <h3 className="font-alexandria text-[32px] leading-[39px] font-normal uppercase text-black">
        {title}
      </h3>
      <p className="font-alexandria text-2xl leading-[30px] font-light text-[#4A4A4A]">
        {description}
      </p>
    </div>
  );
};

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const borderTopRef = useRef<HTMLDivElement>(null);
  const borderLeftRef = useRef<HTMLDivElement>(null);
  const borderRightRef = useRef<HTMLDivElement>(null);
  const borderBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top center",
          once: true,
          onEnter: () => {
            tl.play();
          },
        },
      });

      tl.pause();

      tl.fromTo(
        gridRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      tl.to(leftHalfRef.current, {
        x: -300,
        rotateY: -45,
        transformOrigin: "right center",
        duration: 0.8,
        ease: "power2.inOut",
      }, "+=0.2")
      .to(rightHalfRef.current, {
        x: 300,
        rotateY: 45,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power2.inOut",
      }, "<");

      tl.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        borderLeftRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );

      tl.fromTo(
        borderRightRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );

      tl.fromTo(
        borderBottomRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.4, ease: "power2.out" },
        "<0.1"
      );

      tl.fromTo(
        borderTopRef.current,
        { scaleX: 0, transformOrigin: "right" },
        { scaleX: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[1299px] bg-white py-32 my-20 flex justify-center items-center relative overflow-hidden" style={{ perspective: '1200px' }}>
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ 
          opacity: 0,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          ref={leftHalfRef} 
          className="absolute inset-y-0 left-0 w-1/2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`v-left-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-gray-300"
              style={{ left: `${(i + 1) * 16.66}%` }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-left-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-gray-300"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>

        <div 
          ref={rightHalfRef} 
          className="absolute inset-y-0 right-0 w-1/2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`v-right-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-gray-300"
              style={{ left: `${i * 16.66}%` }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-right-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-gray-300"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>
      </div>

      <div 
        ref={contentRef}
        className="w-[652px] bg-white p-8 pb-16 space-y-8 relative z-10"
        style={{ opacity: 0 }}
      >
        <div ref={borderTopRef} className="absolute top-0 left-0 right-0 h-[1px] bg-black" style={{ transformOrigin: "right" }} />
        <div ref={borderLeftRef} className="absolute top-0 left-0 bottom-0 w-[1px] bg-black" style={{ transformOrigin: "top" }} />
        <div ref={borderRightRef} className="absolute top-0 right-0 bottom-0 w-[1px] bg-black" style={{ transformOrigin: "top" }} />
        <div ref={borderBottomRef} className="absolute bottom-0 left-0 right-0 h-[1px] bg-black" style={{ transformOrigin: "left" }} />
        <div className="space-y-6">
          <h2 className="font-alexandria text-[32px] leading-[39px] font-normal uppercase text-black">
            ABOUT US
          </h2>
          <p className="font-alexandria text-[23px] leading-[37px] font-normal capitalize text-[#160000] h-[397px]">
            K.CORP IS MORE THAN AN INVESTMENT HOLDING WE BUILD A BUSINESS ECOSYSTEM THAT CREATES VALUE
            <br /><br />
            Once established with a vision for long-term sustainability, K Corp Investment and Holding,
            headquartered in Saudi Arabia, has grown into a diversified group empowering subsidiaries across
            logistics, energy, facility management, F&B, and urban planning. Through a decentralized model and strategic
            support, we contribute to Saudi Arabia&apos;s Vision 2030 by enabling businesses that deliver measurable impact.
          </p>
        </div>

        <button className="w-full h-[26px] bg-[#012569] flex items-center justify-center">
          <span className="font-alexandria text-[9.94px] leading-6 font-bold uppercase tracking-[1.2px] text-white">
            CONTACT
          </span>
        </button>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-alexandria text-[32px] leading-[39px] font-normal uppercase text-black">
            SHAPING THE FUTURE WITH PURPOSE
          </h3>
          <p className="font-alexandria text-2xl leading-[30px] font-light text-[#4A4A4A]">
            This text is an example of text that can be replaced in the same space, this text has been generated from the
            Arabic text generator, where you can generate such text
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