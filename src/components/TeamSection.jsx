'use client';

import Image from "next/image";
import { teamData } from "@/data/data";
import FadeInBottom from "./animations/FadeInBottom";
import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const nextSlide = currentSlide === teamData.length - 1 ? 0 : currentSlide + 1;
    scrollToSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? teamData.length - 1 : currentSlide - 1;
    scrollToSlide(prevSlide);
  };

  return (
    <section className="w-full pt-8 pb-16 md:pt-12 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeInBottom>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.team.title}
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">
              {t.team.subtitle || "Meet the creative minds behind 255 Agency"}
            </p>
          </div>
        </FadeInBottom>

        {/* Mobile: Carousel */}
        <div className="lg:hidden relative">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-100 hover:bg-primary hover:scale-110 active:scale-95"
            aria-label="Previous team member"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-100 hover:bg-primary hover:scale-110 active:scale-95"
            aria-label="Next team member"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamData.map((member, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="relative max-w-sm mx-auto">
                  <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-lg">
                    <div className="aspect-square relative overflow-hidden bg-white flex items-center justify-center p-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain"
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                      />
                    </div>
                    
                    <div className="p-6 relative bg-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                        {member.nameKey && t.team.members?.[member.nameKey] ? t.team.members[member.nameKey] : member.name}
                      </h3>
                      <p className="text-primary/80 text-sm md:text-base">
                        {member.roleKey && t.team.roles?.[member.roleKey] ? t.team.roles[member.roleKey] : member.role}
                      </p>
                    </div>

                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute bottom-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 ${isRTL ? 'left-4' : 'right-4'}`}
                      aria-label={`${member.nameKey && t.team.members?.[member.nameKey] ? t.team.members[member.nameKey] : member.name} LinkedIn profile`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary w-8' 
                    : 'bg-foreground/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3x3 Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
          {teamData.map((member, index) => (
            <FadeInBottom key={index} delay={index * 0.1}>
              <div className="group relative">
                <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-lg">
                  <div className="aspect-square relative overflow-hidden bg-white flex items-center justify-center p-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                    />
                  </div>
                  
                  <div className="p-6 relative bg-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                      {member.nameKey && t.team.members?.[member.nameKey] ? t.team.members[member.nameKey] : member.name}
                    </h3>
                    <p className="text-primary/80 text-sm md:text-base">
                      {member.roleKey && t.team.roles?.[member.roleKey] ? t.team.roles[member.roleKey] : member.role}
                    </p>
                  </div>

                  <a
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 z-10 ${isRTL ? 'left-4' : 'right-4'}`}
                    aria-label={`${member.nameKey && t.team.members?.[member.nameKey] ? t.team.members[member.nameKey] : member.name} LinkedIn profile`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </FadeInBottom>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
