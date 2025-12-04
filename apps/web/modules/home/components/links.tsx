"use client";

import React from "react";
import Image from "next/image";

interface LinkItem {
  text: string;
  url: string;
  openInNewTab?: boolean | null;
}

interface MediaType {
  url?: string | null;
}

interface RotatingLinksProps {
  data?: {
    leftDecoration?: number | MediaType | null;
    rightDecoration?: number | MediaType | null;
    icon?: number | MediaType | null;
    links?: LinkItem[] | null;
  };
}

const defaultLinks: LinkItem[] = [
  { text: "Green Roots", url: "https://example.com/green-roots", openInNewTab: true },
  { text: "Shortcut", url: "https://example.com/shortcut", openInNewTab: true },
  { text: "The Box Group", url: "https://example.com/the-box-group", openInNewTab: true },
  { text: "WeTransport", url: "https://example.com/wetransport", openInNewTab: true },
];

export const RotatingLinks = ({ data }: RotatingLinksProps) => {
  const links = data?.links && data.links.length > 0 ? data.links : defaultLinks;
  const leftDecoSrc = typeof data?.leftDecoration === 'object' && data.leftDecoration?.url 
    ? data.leftDecoration.url 
    : "/home/Rectangle2 svg.svg";
  const rightDecoSrc = typeof data?.rightDecoration === 'object' && data.rightDecoration?.url 
    ? data.rightDecoration.url 
    : "/home/Rectangle1.svg";
  const iconSrc = typeof data?.icon === 'object' && data.icon?.url 
    ? data.icon.url 
    : "/home/send.svg";
  return (
    <section className="relative w-full h-[60px] md:h-[80px] lg:h-[99px] bg-primary overflow-visible flex items-center justify-center">
      <div className="absolute -top-[15px] md:-top-[25px] -right-[60px] md:-right-[125px] w-auto h-auto pointer-events-none z-10">
        <Image
          src={rightDecoSrc}
          alt="Decoration"
          width={249}
          height={49}
          className="w-[150px] md:w-[249px]"
        />
      </div>

      <div className="absolute -bottom-[15px] md:-bottom-[25px] -left-[60px] md:-left-[125px] w-auto h-auto pointer-events-none z-10">
        <Image
          src={leftDecoSrc}
          alt="Decoration"
          width={249}
          height={49}
          className="w-[150px] md:w-[249px]"
        />
      </div>

      <div className="relative w-full h-full flex items-center">
        <div className="scrolling-links-container">
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
            <div className="scrolling-links-content flex shrink-0 items-center justify-around gap-8 md:gap-12 lg:gap-16 min-w-full">
              {links.map((link, index) => (
                <a
                  key={`first-${index}`}
                  href={link.url}
                  target={link.openInNewTab !== false ? "_blank" : "_self"}
                  rel={link.openInNewTab !== false ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 md:gap-3 lg:gap-4 transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={iconSrc}
                    alt="Link icon"
                    width={40}
                    height={40}
                    className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                  <span className="audiowide-regular text-white text-[20px] md:text-[30px] lg:text-[45px] leading-tight lg:leading-[64px] uppercase">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>

            <div
              className="scrolling-links-content flex shrink-0 items-center justify-around gap-8 md:gap-12 lg:gap-16 min-w-full"
              aria-hidden="true"
            >
              {links.map((link, index) => (
                <a
                  key={`second-${index}`}
                  href={link.url}
                  target={link.openInNewTab !== false ? "_blank" : "_self"}
                  rel={link.openInNewTab !== false ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 md:gap-3 lg:gap-4 transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={iconSrc}
                    alt="Link icon"
                    width={40}
                    height={40}
                    className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                  <span className="audiowide-regular text-white text-[20px] md:text-[30px] lg:text-[45px] leading-tight lg:leading-[64px] uppercase">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
