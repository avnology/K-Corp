"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/modules/components/ui/carousel";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "Partner 1", logo: "/partners/partner1.png" },
  { id: 2, name: "Partner 2", logo: "/partners/partner2.png" },
  { id: 3, name: "Partner 3", logo: "/partners/partner3.png" },
  { id: 4, name: "Partner 4", logo: "/partners/partner4.png" },
  { id: 5, name: "Partner 5", logo: "/partners/partner5.png" },
  { id: 6, name: "Partner 6", logo: "/partners/partner6.png" },
  { id: 7, name: "Partner 7", logo: "/partners/partner7.png" },
  { id: 8, name: "Partner 8", logo: "/partners/partner8.png" },
  { id: 9, name: "Partner 9", logo: "/partners/partner9.png" },
  { id: 10, name: "Partner 10", logo: "/partners/partner10.png" },
];

const groupPartnersIntoSlides = (partners: Partner[], perSlide: number) => {
  const slides: Partner[][] = [];
  for (let i = 0; i < partners.length; i += perSlide) {
    slides.push(partners.slice(i, i + perSlide));
  }
  return slides;
};

export default function Partners() {
  const desktopSlides = groupPartnersIntoSlides(partners, 5);
  const mobileSlides = groupPartnersIntoSlides(partners, 3);

  return (
    <section className="w-full max-lg:px-5! bg-[#002569]">
      <div className="py-24! container mx-auto!">
        <h2
          className="text-white w-fit font-light md:text-[50px] text-[35px] lg:text-[60px] leading-[48.8px] mb-4!"
          style={{
            fontFamily: "Alexandria, sans-serif",
            fontWeight: 300,
          }}
        >
          Partners In Success
        </h2>

        <p
          className="text-[#FDFDF0] font-light text-[14px] md:text-[20px] leading-[23px] mb-12! max-w-[1251px]"
          style={{
            fontFamily: "Alexandria, sans-serif",
            fontWeight: 300,
          }}
        >
          We don&apos;t move alone. Our growth is powered by strategic partnerships
          with those who share our vision and ambition. Together, we create
          lasting value and real market impact.
        </p>

        <div className="w-full hidden md:block">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {desktopSlides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                    {slide.map((partner: Partner) => (
                      <div
                        key={partner.id}
                        className="partner-box flex items-center justify-center bg-transparent border border-white w-[200px] md:w-[220px] lg:w-[240px] h-[135px] md:h-[147px] lg:h-[160px]"
                      >
                        <div className="text-white text-center">
                          <span className="text-sm font-light">
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDots style={{ marginTop: "20px" }} />
          </Carousel>
        </div>

        <div className="w-full md:hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {mobileSlides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="flex justify-center gap-2">
                    {slide.map((partner: Partner) => (
                      <div
                        key={partner.id}
                        className="partner-box flex items-center justify-center bg-transparent border border-white w-[129px] h-[86px]"
                      >
                        <div className="text-white text-center">
                          <span className="text-xs font-light">
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDots  style={{ marginTop: "20px" }}  />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
