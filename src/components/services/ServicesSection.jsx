'use client';
import React from "react";
import FishTankAnimation from "./FishTankAnimation";
import { useTranslation } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const t = useTranslation();
  
  const services = [
    { name: t.services.socialMedia, icon: "Ai", align: "center", slug: "social-media" },
    { name: t.services.videoProduction, icon: null, align: "center", slug: "video-production" },
    { name: t.services.printables, icon: null, align: "center", slug: "printables" },
    { name: t.services.marketing, icon: "Ps", align: "center", slug: "marketing-campaigns" },
    { name: t.services.socialShort || "SOCIAL", icon: null, align: "left", slug: "social-media" },
    { name: t.services.events, icon: null, align: "center", slug: "events" },
  ];

  return (
    <section id="services" className="relative bg-primary text-white py-16 px-4 overflow-hidden">
      <FishTankAnimation topElementId="social-media-text" bottomElementId="events-text" />
      {/* Large "SERVICES" background text - spans full width */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none text-center">
        <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-black text-white/20 leading-none tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em] lg:tracking-[0.12em]">
          {t.services.title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-32 md:pt-40 lg:pt-48">
        {/* Services List */}
        <div className="-space-y-2 md:-space-y-4 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative flex items-center ${
                service.align === 'center' ? 'justify-center' : 'justify-start'
              } ${index === 4 ? 'pl-[15%] md:pl-[20%] lg:pl-[25%]' : ''}`}
            >
              {/* Icon on the left for Social Media */}
              {service.icon && index === 0 && (
                <div className="absolute left-8 md:left-12 lg:left-16 -top-12 sm:-top-14 md:top-1/2 md:-translate-y-1/2 w-10 h-10 md:w-14 md:h-14">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" 
                    alt="Adobe Illustrator"
                    className="w-full h-full"
                  />
                </div>
              )}
              
              {/* Service Name */}
              <h3 
                id={index === 0 ? 'social-media-text' : index === 5 ? 'events-text' : undefined}
                className={`font-black text-white tracking-tight leading-tight whitespace-nowrap ${
                  index === 0 
                    ? 'text-5xl md:text-7xl lg:text-8xl xl:text-9xl' 
                    : 'text-4xl md:text-6xl lg:text-7xl xl:text-8xl'
                }`}
                style={{
                  WebkitTextStroke: '2px black',
                  paintOrder: 'stroke fill'
                }}
              >
                {service.name}
              </h3>
              
              {/* Icon on the right for Marketing */}
              {service.icon && index === 3 && (
                <div className="absolute right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
                    alt="Adobe Photoshop"
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center space-y-4 mt-12">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
            {t.services.tagline || "CAPTURE, COMMUNICATE, AND CONNECT."}
          </h4>
          <p className="text-white/90 text-xs md:text-sm lg:text-base max-w-4xl mx-auto leading-relaxed uppercase" style={{ fontFamily: 'MadaniArabic-Light, sans-serif', fontWeight: 300 }}>
            {t.services.description || "We create impactful graphics that convey your brand's message and resonate with your audience, from logos to marketing materials."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
