import React from "react";
import BacktoHome from "./BacktoHome";
import HeroSection from "./HeroSection";

const PageOverlayed = ({ title, image, children }) => {
  return (
    <>
      <HeroSection image={image} title={title} />
      <div className="bg-background/80 rounded-[40px] mt-4 mb-4">
        <BacktoHome />
        <section className="z-50 min-h-[800px] max-w-screen-xl mx-auto flex flex-col py-12 gap-12 px-8 ">
          {children}
        </section>
      </div>
    </>
  );
};

export default PageOverlayed;
