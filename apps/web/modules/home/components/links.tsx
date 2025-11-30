'use client';

import React from 'react';
import Image from 'next/image';

interface LinkItem {
  text: string;
  url: string;
}

const links: LinkItem[] = [
  { text: 'Green Roots', url: 'https://example.com/green-roots' },
  { text: 'Shortcut', url: 'https://example.com/shortcut' },
  { text: 'The Box Group', url: 'https://example.com/the-box-group' },
  { text: 'WeTransport', url: 'https://example.com/wetransport' },
];

export const RotatingLinks = () => {
  return (
    <section className="relative w-full h-[99px] sm:h-[99px] md:h-[99px] lg:h-[99px] xl:h-[99px] 2xl:h-[99px] 4xl:h-[99px] bg-[#03235D] overflow-visible flex items-center justify-center">
      <div className="absolute -top-[25px] -right-[125px] w-auto h-auto pointer-events-none z-10">
        <Image
          src="/home/Rectangle1.svg"
          alt="Decoration"
          width={249}
          height={49}
        />
      </div>

      <div className="absolute -bottom-[25px] -left-[125px] w-auto h-auto pointer-events-none z-10">
        <Image
          src="/home/Rectangle2 svg.svg"
          alt="Decoration"
          width={249}
          height={49}
        />
      </div> 

      <div className="relative w-full h-full flex items-center">
        <div className="scrolling-links-container group">
          <div className="scrolling-links-content">
            <div className="flex items-center gap-16 whitespace-nowrap h-full">
              {links.map((link, index) => (
                <a
                  key={`first-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src="/home/send.svg"
                    alt="Send icon"
                    width={40}
                    height={40}
                    className="w-10 h-10 "
                  />
                  <span className="audiowide-regular text-white text-[45px] leading-[64px] uppercase">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-16 whitespace-nowrap">
              {links.map((link, index) => (
                <a
                  key={`second-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src="/home/send.svg"
                    alt="Send icon"
                    width={40}
                    height={40}
                    className="w-10 h-10 rotate-180"
                  />
                  <span className="audiowide-regular text-white text-[45px] leading-[64px] uppercase">
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
