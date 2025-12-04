"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/modules/components/ui/carousel";
import type { Home, Media } from "@/payload-types";

interface Partner {
  id?: string | number | null;
  name?: string;
  logo?: number | Media | null;
}

interface PartnersProps {
  data?: Home["partners"];
}

const defaultPartners: Partner[] = [
  { id: "1", name: "Partner 1", logo: null },
  { id: "2", name: "Partner 2", logo: null },
  { id: "3", name: "Partner 3", logo: null },
  { id: "4", name: "Partner 4", logo: null },
  { id: "5", name: "Partner 5", logo: null },
  { id: "6", name: "Partner 6", logo: null },
  { id: "7", name: "Partner 7", logo: null },
  { id: "8", name: "Partner 8", logo: null },
  { id: "9", name: "Partner 9", logo: null },
  { id: "10", name: "Partner 10", logo: null },
];

const groupPartnersIntoSlides = (partners: Partner[], perSlide: number) => {
  const slides: Partner[][] = [];
  for (let i = 0; i < partners.length; i += perSlide) {
    slides.push(partners.slice(i, i + perSlide));
  }
  return slides;
};

export default function Partners({ data }: PartnersProps) {
  const title = data?.title || "Partners In Success";
  const description = data?.description || "We don't move alone. Our growth is powered by strategic partnerships with those who share our vision and ambition. Together, we create lasting value and real market impact.";
  const partners = data?.partnersList || defaultPartners;
  
  const desktopSlides = groupPartnersIntoSlides(partners, 5);
  const mobileSlides = groupPartnersIntoSlides(partners, 3);

  const getLogoUrl = (logo?: number | Media | null): string | null => {
    if (!logo) return null;
    if (typeof logo === 'object' && logo.url) {
      return logo.url;
    }
    return null;
  };

  return (
    <section className="w-full max-lg:px-5! px-4! bg-primary">
      <div className="py-24! container mx-auto!">
        <h2
          className="text-white w-fit font-light md:text-[50px] text-[35px] lg:text-[60px] leading-[48.8px] mb-4!"
          style={{
            fontFamily: "Alexandria, sans-serif",
            fontWeight: 300,
          }}
        >
          {title}
        </h2>

        <p
          className="text-[#FDFDF0] font-light text-[14px] md:text-[20px] leading-[23px] mb-12! max-w-[1251px]"
          style={{
            fontFamily: "Alexandria, sans-serif",
            fontWeight: 300,
          }}
        >
          {description}
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
                  <div className="grid grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                    {slide.map((partner: Partner) => {
                      const logoUrl = getLogoUrl(partner.logo);
                      return (
                        <div
                          key={partner.id}
                          className="partner-box flex items-center justify-center bg-transparent border border-white w-full h-[135px] md:h-[147px] lg:h-[160px] p-4"
                        >
                          {logoUrl ? (
                            <div className="relative w-full h-full">
                              <Image
                                src={logoUrl}
                                alt={partner.name || 'Partner logo'}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="text-white text-center">
                              <span className="text-sm font-light">
                                {partner.name}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
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
                    {slide.map((partner: Partner) => {
                      const logoUrl = getLogoUrl(partner.logo);
                      return (
                        <div
                          key={partner.id}
                          className="partner-box flex items-center justify-center bg-transparent border border-white w-[129px] h-[86px] p-3"
                        >
                          {logoUrl ? (
                            <div className="relative w-full h-full">
                              <Image
                                src={logoUrl}
                                alt={partner.name || 'Partner logo'}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="text-white text-center">
                              <span className="text-xs font-light">
                                {partner.name}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDots style={{ marginTop: "20px" }} />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
