"use client";
import ImageOverLay from "@/modules/components/common/ImageOverLay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

interface MediaType {
  url?: string | null;
}

interface ContentSlide {
  image?: number | MediaType | null;
  description: string;
}

interface CompaniesProps {
  data?: {
    title?: string | null;
    titleLink?: string | null;
    video?: number | MediaType | null;
    contentSlides?: ContentSlide[] | null;
  };
}

const defaultSlides: ContentSlide[] = [
  {
    description: "From infrastructure to entertainment, we collaborate, invest, and transform industries for tomorrow.",
  },
  {
    description: "From infrastructure to entertainment, we collaborate, invest, and transform industries for tomorrow.",
  },
];

export default function Companies({ data }: CompaniesProps) {
  const title = data?.title || "COMPANIES";
  const titleLink = data?.titleLink || "/companies";
  const videoUrl = typeof data?.video === 'object' && data.video?.url ? data.video.url : "/home/Companies.mp4";
  const slides = data?.contentSlides && data.contentSlides.length > 0 ? data.contentSlides : defaultSlides;
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      "#companies",
      {
        scale: 1,
        opacity: 1,
      },
      { scale: 1.2, opacity: 0 }
    );

    tl.to("#top-web", {
      scale: 1.2,
      rotateX: -88,
      translateY: -100,
    });

    tl.to(
      "#bottom-web",
      {
        scale: 1.2,
        rotateX: 89.5,
        translateY: 100,
        ease: "power1.out",
      },
      "<"
    );

    tl.to("#top-web", {
      scale: 1,
      opacity: 0.4,
      rotateX: -89,
      translateY: -180,
    });

    tl.to(
      "#bottom-web",
      {
        scale: 1,
        rotateX: 89,
        translateY: 180,
        ease: "power1.out",
      },
      "<"
    );
    tl.from(".content-item", {
      opacity: 0,
      xPercent: 500,
    });
    tl.to(".content-item", {
      xPercent: -120 * 3,
      opacity: 1,
    });
    tl.to("#top-web", {
      scale: 1,
      rotateX: 0,
      translateY: -0,
    });

    tl.to(
      "#bottom-web",
      {
        scale: 1,
        rotateX: 0,
        translateY: 0,
        ease: "power1.out",
      },
      "<"
    );
    tl.fromTo(
      "#companies",
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div
      id="wrapper"
      className="bg-primary relative flex flex-col h-screen w-full overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <div
        id="top-web"
        className="w-full h-1/2 grid grid-cols-12 grid-rows-4 absolute top-0 left-0 z-10"
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="border border-white/40"></div>
        ))}
      </div>

      <div
        className="2xl:h-[80vh] h-[40vh] max-md:w-[100px]  md:h-[70vh] absolute top-1/2 p-2! -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[250px] aspect-918/150 rounded-t-full rounded-b-full border outline outline-white border-white flex items-center justify-center z-20"
        id="companies"
      >
        <div className="relative w-full h-full border border-white rounded-t-full rounded-b-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute rounded-t-full rounded-b-full  inset-0 w-full h-full object-cover z-0"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <a
            href={titleLink}
            className="flex flex-col items-center justify-center text-white hover:text-gray-200 transition-colors relative z-30"
          >
            {title.split("").map((letter, index) => (
              <span
                key={index}
                className="text-[4vh] text-white md:text-[7vh] 2xl:text-[8vh] font-bold leading-none"
              >
                {letter}
              </span>
            ))}
          </a>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex gap-32 content-track">
          {slides.map((slide, index) => (
            <div key={index} className="content-item flex flex-col items-center">
              {typeof slide.image === 'object' && slide.image?.url ? (
                <div className="relative w-full aspect-video mb-4">
                  <Image
                    src={slide.image.url}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImageOverLay />
              )}
              <p className="text-white text-center text-[8px] md:text-[18px] xl:text-[33px] font-extralight">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="bottom-web"
        className="w-full h-1/2 grid grid-cols-12 grid-rows-4 absolute bottom-0 left-0 z-10"
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="border border-white/40"></div>
        ))}
      </div>
    </div>
  );
}
