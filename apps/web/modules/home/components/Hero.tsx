'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '../../components/ui/button';
import { gsap } from 'gsap';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'back.out(1.7)',
        },
      });

      tl.from(titleRef.current, {
        scale: 0.3,
        opacity: 0,
        rotation: -5,
        y: 50,
        duration: 1.2,
        ease: 'elastic.out(1, 0.6)',
      });

      tl.from(
        descriptionRef.current,
        {
          scale: 0.4,
          opacity: 0,
          y: 30,
          rotation: 3,
          duration: 1,
          ease: 'back.out(2)',
        },
        '-=0.6'
      );

      tl.from(
        buttonRef.current,
        {
          scale: 0.5,
          opacity: 0,
          y: 20,
          rotation: -3,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
        },
        '-=0.5'
      );

      const button = buttonRef.current;
      if (button) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.1,
            rotation: 2,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/home/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1210px] 2xl:max-w-[1400px] 4xl:max-w-[1800px] mx-auto w-full">
        <h1
          ref={titleRef}
          className="alexandria text-center uppercase font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px] 2xl:text-[85px] 4xl:text-[100px] leading-tight sm:leading-tight md:leading-tight lg:leading-[39px] xl:leading-[39px] 2xl:leading-[45px] 4xl:leading-[55px]"
        >
          K.CORP BEYOND INVESTMENT
        </h1>

        <p
          ref={descriptionRef}
          className="alexandria text-center font-light text-white max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1000px] xl:max-w-[1210px] 2xl:max-w-[1400px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[22px] 4xl:text-[26px] leading-relaxed sm:leading-relaxed md:leading-[25px] lg:leading-[25px] xl:leading-[25px] 2xl:leading-[28px] 4xl:leading-[32px]"
        >
          This text is an example of text that can be replaced in the same space, this text has been generated from the Arabic text generator, where you can generate such text
        </p>

        <div ref={buttonRef}>
          <Button variant="transparent">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
