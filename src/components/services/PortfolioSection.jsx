'use client';
import React from "react";
import Container from "../layout/Container";
import PortfolioCarousel from "../PortfolioCarousel";
import LinkButtonFill from "../buttons/LinkButtonFill";
import { ArrowRightCircle } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import FadeInRight from "../animations/FadeInRight";
import FadeInLeft from "../animations/FadeInLeft";
import { useTranslation } from "@/contexts/LanguageContext";

const PortfolioSection = () => {
  const t = useTranslation();
  return (
    <section className="flex flex-col gap-8" aria-labelledby="portfolio-heading">
      <FadeIn>
        <div className="overflow-hidden bg-background/30 -mt-12">
          <h2 id="portfolio-heading" className="sr-only">{t.portfolio.title}</h2>
          <div className="text-4xl md:text-5xl lg:text-[70px] h-[80px] md:h-[100px] flex items-center text-foreground tracking-[.15em] md:tracking-[.25em] whitespace-nowrap" aria-hidden="true">
            <span className="inline-block animate-marquee">
              {t.portfolio.title} • {t.portfolio.title} • {t.portfolio.title} • {t.portfolio.title} • {t.portfolio.title} • {t.portfolio.title}
            </span>
          </div>
        </div>
      </FadeIn>
      <div className="w-full mb-16 md:mb-20">
        <PortfolioCarousel />
        <Container>
          <FadeInRight>
            <p className="text-center text-lg md:text-xl mt-6 mb-4 text-foreground/95">{t.portfolio.seeFullPortfolio || "See our full Portfolio!"}</p>
          </FadeInRight>
          <FadeInLeft>
            <LinkButtonFill href="/portfolio" className={"w-full sm:w-auto mx-auto"}>
              {t.portfolio.viewAll}
              <ArrowRightCircle size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </LinkButtonFill>
          </FadeInLeft>
        </Container>
      </div>
    </section>
  );
};

export default PortfolioSection;
