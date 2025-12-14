"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { gsap } from "gsap";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  videoUrl?: string;
}

export const Hero = ({
  title = "K.CORP BEYOND INVESTMENT",
  subtitle = "This text is an example of text that can be replaced in the same space, this text has been generated from the Arabic text generator.",
  buttonText = "Contact Us",
  videoUrl = "/home/hero.mp4",
}: HeroProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const chars = title.split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(".char", { autoAlpha: 0, y: 40 });
      gsap.set([descriptionRef.current, buttonRef.current], { autoAlpha: 0, y: 20 });

      tl.to(".char", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power2.out",
      });

      const charElements = gsap.utils.toArray<HTMLElement>(".char");
      const totalChars = charElements.length;
      
      const targetIndices = [0, totalChars - 1];
      
      let found = 0;
      while (found < 2) {
        const r = Math.floor(Math.random() * (totalChars - 2)) + 1;
        if (chars[r] !== " " && !targetIndices.includes(r)) {
          targetIndices.push(r);
          found++;
        }
      }

      targetIndices.forEach((index, i) => {
        const targetChar = charElements[index];
        if (!targetChar) return;

        gsap.set(targetChar, { transformOrigin: "center center" });

        gsap.to(targetChar, {
          rotationY: 360, 
          color: "#002569",
          textShadow: "0px 0px 15px rgba(0, 37, 105, 0.8)",
          
          duration: 3,
          ease: "power2.inOut",
          
          repeat: -1,
          repeatDelay: Math.random() * 2 + 1,
          delay: i * 0.5,
          
          onRepeat: () => {
             gsap.to(targetChar, { color: "white", textShadow: "none", duration: 0.5 });
          }
        });
        
        gsap.to(targetChar, {
            color: "white",
            textShadow: "none",
            duration: 1.5,
            delay: 1.5,
            repeat: -1,
            repeatDelay: (Math.random() * 2 + 1) + 1.5
        });
      });

      tl.to([descriptionRef.current, buttonRef.current], {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, [title, chars]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-4 max-w-[1400px] mx-auto w-full">
        
        <h1 
          className="alexandria flex flex-wrap justify-center text-center font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85px] leading-tight"
          style={{ perspective: "800px" }}
        >
          {chars.map((char, i) => (
            <span 
              key={i} 
              className="char inline-block will-change-transform"
              style={{ minWidth: char === " " ? "0.3em" : "auto" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          ref={descriptionRef}
          className="alexandria text-center font-light text-white/80 max-w-[90%] md:max-w-[800px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
        >
          {subtitle}
        </p>

        <div ref={buttonRef}>
          <Button variant="transparent" className="px-10 py-6 text-lg border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 rounded-full">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};