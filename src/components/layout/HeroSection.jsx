import React from "react";

const HeroSection = ({ image, title }) => {
  return (
    <section className="rounded-[40px] mt-24 relative overflow-hidden">
      <div className="z-50 min-h-[200px] max-w-screen-xl mx-auto">
        <div className="z-50 relative h-[200px] flex items-end">
          <h1 className="text-5xl font-bold text-foreground drop-shadow-lg p-8">{title}</h1>
        </div>
        <div className="absolute w-full z-10 top-0 bottom-0 right-0 left-0 h-[200px] bg-gradient-to-t from-background/60 to-background/50" />
        <img
          src={image}
          alt={title}
          className="absolute w-full top-0 bottom-0 right-0 left-0 h-[200px] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
