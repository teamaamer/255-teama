'use client';

import Image from "next/image";
import React from "react";

const clientImages = [
  "/clients1.webp",
  "/clients2.webp",
  "/clients3.webp",
];

const ClientsGrid = () => {
  return (
    <div className="w-full py-4 md:py-6">
      <div className="relative overflow-hidden w-full">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex animate-scroll gap-12 md:gap-16">
          {/* First set of images */}
          {clientImages.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0"
            >
              <Image
                src={image}
                alt={`Clients ${index + 1}`}
                width={800}
                height={400}
                className="h-[80px] md:h-[120px] w-auto object-contain"
                loading="lazy"
                quality={80}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientImages.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0"
            >
              <Image
                src={image}
                alt={`Clients ${index + 1}`}
                width={800}
                height={400}
                className="h-[80px] md:h-[120px] w-auto object-contain"
                loading="lazy"
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-xs md:text-sm text-foreground/60 mt-3 px-4">
        And many more trusted brands...
      </p>
    </div>
  );
};

export default ClientsGrid;
