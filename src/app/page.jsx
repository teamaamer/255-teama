'use client';
import FadeIn from "@/components/animations/FadeIn";
import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import ContactUsSection from "@/components/ContactUsSection";
import Container from "@/components/layout/Container";
import PortfolioSection from "@/components/services/PortfolioSection";
import ServicesSection from "@/components/services/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ScrollVideo from "@/components/ScrollVideo";
import SplashCursor from "@/components/SplashCursor";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  return (
    <>
      <SplashCursor 
        DENSITY_DISSIPATION={8}
        VELOCITY_DISSIPATION={5}
        PRESSURE={0.02}
        CURL={1}
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={1500}
      />
      <FadeIn>
        <section className="relative min-h-screen overflow-visible lg:overflow-hidden">
          {/* Modern Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#ff5722] -z-20" />
          
          {/* Subtle Decorative Arc Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Large Arc - Top Left */}
            <div className="absolute -left-96 top-32 w-[800px] h-[800px]">
              <div className="w-full h-full border-[60px] md:border-[120px] border-white/8 rounded-full" />
            </div>
            
            {/* Large Arc - Top Right */}
            <div className="absolute -right-80 top-40 w-[900px] h-[900px]">
              <div className="w-full h-full border-[70px] md:border-[140px] border-white/10 rounded-full" />
            </div>
            
            {/* Medium Arc - Bottom Center */}
            <div className="absolute left-1/4 -bottom-48 w-[700px] h-[700px]">
              <div className="w-full h-full border-[50px] md:border-[100px] border-white/9 rounded-full" />
            </div>
          </div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Main Content Container - Fits Viewport */}
          <div className="relative z-10 min-h-screen flex flex-col justify-start px-3 md:px-8 lg:px-16 py-12 md:py-24 pb-8 lg:pb-24">
            
            {/* Hero Title - Full Viewport Width */}
            <div className="text-center mb-0 mt-24 md:mt-8 lg:mt-12 relative z-[5] w-full px-4">
              <div className="relative inline-block lg:w-full">
                {/* Mobile Only: Left Floating Glasses */}
                <div className="lg:hidden absolute -left-12 sm:-left-16 md:-left-20 top-1/2 -translate-y-1/2 animate-float z-10">
                    <Image
                      src="/designs/glasses.webp"
                      alt=""
                      width={120}
                      height={60}
                      className="h-[40px] sm:h-[50px] md:h-[60px] w-auto object-contain opacity-90"
                      aria-hidden="true"
                      priority
                      quality={60}
                    />
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem] font-extrabold tracking-[0.15em] w-full" style={{ fontWeight: 800 }}>
                  <span className="inline-block text-white/80 drop-shadow-lg">
                    {t.hero.creativity}
                  </span>
                </h1>
                
                {/* Mobile Only: Right Floating Glasses */}
                <div className="lg:hidden absolute -right-12 sm:-right-16 md:-right-20 top-1/2 -translate-y-1/2 animate-float z-10" style={{animationDelay: '0.5s'}}>
                  <Image
                    src="/designs/glasses.webp"
                    alt=""
                    width={120}
                    height={60}
                    className="h-[40px] sm:h-[50px] md:h-[60px] w-auto object-contain opacity-90"
                    aria-hidden="true"
                    priority
                    quality={60}
                  />
                </div>
              </div>
            </div>

            {/* Mobile: Camel as Background - Layered */}
            <div className="lg:hidden flex justify-center pointer-events-none relative z-[3] -mt-16">
              <div className="relative group">
                <Image
                  src="/designs/camel.webp"
                  alt="255 Agency mascot - camel wearing sunglasses"
                  width={600}
                  height={900}
                  className="relative h-[70vh] w-auto drop-shadow-2xl object-contain"
                  priority
                />
              </div>
            </div>

            {/* Responsive Grid Layout - Green Spot */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto w-full relative lg:static -mt-[42vh] lg:mt-0 px-3 lg:px-0 z-[15]">
              
              {/* Left Card - Description with Liquid Glass Effect - Hidden on Mobile */}
              <div className="relative hidden lg:block">
                  {/* Floating Glasses - Top Right Corner - Desktop Only */}
                  <div className="hidden lg:block absolute -top-8 -right-8 md:-top-10 md:-right-10 lg:-top-12 lg:-right-12 animate-float z-50">
                    <Image
                      src="/designs/glasses.webp"
                      alt=""
                      width={120}
                      height={60}
                      className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[90px] w-auto object-contain opacity-95 drop-shadow-xl"
                      aria-hidden="true"
                    />
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-xl md:rounded-3xl p-3 md:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] z-20 lg:z-auto">
                  {/* Liquid Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.05] backdrop-blur-3xl" />
                  
                  {/* Animated Liquid Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.2] via-transparent to-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  {/* Border with Gradient */}
                  <div className="absolute inset-0 rounded-xl md:rounded-3xl border border-white/[0.3] shadow-[0_8px_32px_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.25)]" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 md:gap-3 mb-1 md:mb-3">
                      <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                      <span className="text-[8px] md:text-xs font-semibold text-white/80 uppercase tracking-wide">{t.hero.stats.awards}</span>
                    </div>
                    <h3 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-0.5 md:mb-2 drop-shadow-sm">
                      240+
                    </h3>
                    <p className="text-[10px] md:text-base lg:text-lg text-white/95 font-medium leading-tight">{t.hero.stats.industryAwards}</p>
                  </div>
                  </div>
                </div>
              
              {/* Mobile: 2-Column Stat Cards Grid - Now with z-index */}
              <div className="lg:hidden order-first relative z-20">
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {/* Stat Card 1 - Customer Satisfaction with Liquid Glass */}
                    <div className="group relative overflow-hidden rounded-xl lg:rounded-3xl p-2.5 md:p-5 lg:p-6 transition-all duration-500 hover:scale-[1.02]">
                    {/* Floating Glasses - Top Center - Desktop Only */}
                    <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 md:-top-8 animate-float z-50" style={{animationDelay: '0.5s'}}>
                      <Image
                        src="/designs/glasses.webp"
                        alt=""
                        width={120}
                        height={60}
                        className="h-[45px] sm:h-[50px] md:h-[60px] w-auto object-contain opacity-95 drop-shadow-xl"
                        aria-hidden="true"
                      />
                    </div>
                    
                    {/* Liquid Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.05] backdrop-blur-3xl" />
                    
                    {/* Animated Liquid Gradient with Yellow Tint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.15] via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    {/* Border with Gradient */}
                    <div className="absolute inset-0 rounded-xl lg:rounded-3xl border border-white/[0.3] shadow-[0_8px_32px_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.25)]" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-1 md:gap-3 mb-1 md:mb-3">
                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-secondary shadow-[0_0_12px_rgba(254,247,1,0.8)]" />
                        <span className="text-[8px] md:text-xs font-semibold text-white/80 uppercase tracking-wide">{t.hero.stats.success}</span>
                      </div>
                      <h3 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-0.5 md:mb-2 drop-shadow-sm">
                        90%
                      </h3>
                      <p className="text-[10px] md:text-base lg:text-lg text-white/95 font-medium leading-tight">{t.hero.stats.customerSatisfaction}</p>
                    </div>
                  </div>

                  {/* Stat Card 2 - Industry Awards - Now visible on mobile */}
                  <div className="group relative overflow-hidden rounded-xl lg:rounded-3xl p-2.5 md:p-5 lg:p-6 transition-all duration-500 hover:scale-[1.02]">
                    {/* Liquid Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.05] backdrop-blur-3xl" />
                    
                    {/* Animated Liquid Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.2] via-transparent to-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    {/* Border with Gradient */}
                    <div className="absolute inset-0 rounded-xl lg:rounded-3xl border border-white/[0.3] shadow-[0_8px_32px_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.25)]" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-1 md:gap-3 mb-1 md:mb-3">
                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                        <span className="text-[8px] md:text-xs font-semibold text-white/80 uppercase tracking-wide">{t.hero.stats.awards}</span>
                      </div>
                      <h3 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-0.5 md:mb-2 drop-shadow-sm">
                        240+
                      </h3>
                      <p className="text-[10px] md:text-base lg:text-lg text-white/95 font-medium leading-tight">{t.hero.stats.industryAwards}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Buttons - Below the cards */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <LinkButtonFill href="/contact" className="px-6 py-2.5 whitespace-nowrap bg-white/95 text-primary shadow-lg relative overflow-hidden group/btn hover:bg-gradient-to-r hover:from-primary hover:to-[#ff5722] hover:text-white hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] hover:scale-105 transition-all duration-500">
                    <span className="relative z-10 transition-transform duration-500 group-hover/btn:scale-110">{t.hero.contactUs}</span>
                    <ArrowRightCircle size={16} className="ml-2 relative z-10 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:rotate-[360deg]" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-[#ff5722] to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></span>
                  </LinkButtonFill>
                  <LinkButtonFill href="/#services" className="px-6 py-2.5 whitespace-nowrap bg-white/[0.25] border border-white/50 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] relative overflow-hidden group/services hover:bg-white/90 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-500 text-white">
                    <span className="relative z-10 transition-all duration-500 group-hover/services:tracking-wider group-hover/services:text-primary text-white">{t.hero.ourServices}</span>
                    <ArrowRightCircle size={16} className="ml-2 relative z-10 transition-all duration-500 group-hover/services:translate-x-1 group-hover/services:scale-125 text-white" />
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/services:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  </LinkButtonFill>
                </div>
              </div>
              
              {/* Desktop: Camel Center */}
              <div className="hidden lg:flex flex-col justify-center items-center order-none -mt-48">
                <div className="relative group">
                    {/* Subtle Glow */}
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                    
                    <Image
                      src="/designs/camel.webp"
                      alt="255 Agency mascot - camel wearing sunglasses"
                      width={600}
                      height={900}
                      className="relative z-30 h-[80vh] w-auto drop-shadow-2xl object-contain transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    
                    {/* CTA Buttons - Positioned on camel's foot */}
                    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 flex gap-4 z-40">
                      <LinkButtonFill href="/contact" className="px-8 py-2.5 whitespace-nowrap bg-white/95 text-primary shadow-lg relative overflow-hidden group/btn hover:bg-gradient-to-r hover:from-primary hover:to-[#ff5722] hover:text-white hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] hover:scale-110 transition-all duration-500">
                        <span className="relative z-10 transition-transform duration-500 group-hover/btn:scale-110">{t.hero.contactUs}</span>
                        <ArrowRightCircle size={16} className="ml-2 relative z-10 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:rotate-[360deg]" />
                        <span className="absolute inset-0 bg-gradient-to-r from-primary via-[#ff5722] to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></span>
                      </LinkButtonFill>
                      <LinkButtonFill href="/#services" className="px-8 py-2.5 whitespace-nowrap bg-white/[0.25] border border-white/50 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] relative overflow-hidden group/services hover:bg-white/90 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-500 text-white">
                        <span className="relative z-10 transition-all duration-500 group-hover/services:tracking-wider group-hover/services:text-primary text-white">{t.hero.ourServices}</span>
                        <ArrowRightCircle size={16} className="ml-2 relative z-10 transition-all duration-500 group-hover/services:translate-x-1 group-hover/services:scale-125 text-white" />
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/services:translate-x-full transition-transform duration-700 ease-in-out"></span>
                      </LinkButtonFill>
                    </div>
                </div>
              </div>

              {/* Desktop: Right Stats Column */}
              <div className="hidden lg:block">
                <div className="space-y-8">
                    {/* Stat Card 1 - Desktop */}
                    <div className="relative">
                      {/* Floating Glasses - Top Center */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-float z-50" style={{animationDelay: '0.5s'}}>
                        <Image
                          src="/designs/glasses.webp"
                          alt=""
                          width={120}
                          height={60}
                          className="h-[80px] w-auto object-contain opacity-95 drop-shadow-xl"
                          aria-hidden="true"
                        />
                      </div>
                      
                      <div className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02]">
                      {/* Liquid Glass Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.05] backdrop-blur-3xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.15] via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                      <div className="absolute inset-0 rounded-3xl border border-white/[0.3] shadow-[0_8px_32px_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.25)]" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_rgba(254,247,1,0.8)]" />
                          <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">{t.hero.stats.success}</span>
                        </div>
                        <h3 className="text-6xl font-black text-white mb-2 drop-shadow-sm">90%</h3>
                        <p className="text-lg text-white/95 font-medium">{t.hero.stats.customerSatisfaction}</p>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="relative min-h-[600px] lg:min-h-screen py-16 lg:py-32 flex items-center justify-center bg-primary" aria-label="Creative tagline">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {/* WHO WE ARE Section */}
          <div className="hidden lg:block text-center mb-12 space-y-4">
            <h2 className="text-3xl xl:text-4xl font-bold text-white uppercase tracking-wide">
              {t.tagline.whoWeAre}
            </h2>
            <p className="text-base xl:text-lg text-white/60 max-w-4xl mx-auto" style={{ fontWeight: 400 }}>
              {t.tagline.description}
            </p>
          </div>

          {/* Mobile/Tablet: Stacked Layout */}
          <div className="lg:hidden text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground">
              {t.tagline.makeYourAdAnAd}
            </h2>
          </div>

          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block relative h-[650px] xl:h-[750px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] bg-foreground rounded-full flex justify-center items-center px-16 xl:px-24">
              <p className="text-6xl xl:text-8xl leading-tight font-bold text-primary text-center">
                {t.tagline.make}
              </p>
              {/* Cursor arrow at bottom */}
              <div className="absolute bottom-[40px] xl:bottom-[50px] left-1/2 -translate-x-1/2">
                <img
                  src="/Cursor C.webp"
                  alt=""
                  className="w-auto h-auto scale-[3]"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] rounded-full flex border-4 xl:border-8 border-foreground items-center px-16 xl:px-24 ${isRTL ? 'mr-[250px] xl:mr-[360px]' : '-ml-[250px] xl:-ml-[360px]'}`} aria-hidden="true">
              <p className={`text-6xl xl:text-8xl w-fit leading-tight font-bold text-foreground mb-[70px] xl:mb-[100px] ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.tagline.we}
              </p>
            </div>
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] rounded-full flex flex-col justify-center border-4 xl:border-8 border-foreground px-16 xl:px-24 ${isRTL ? '-ml-[250px] xl:-ml-[360px] items-start' : 'ml-[250px] xl:ml-[360px] items-end'}`} aria-hidden="true">
              <p className={`text-6xl xl:text-8xl leading-tight font-bold text-foreground ${isRTL ? 'text-left' : 'text-right'}`}>
                {t.tagline.an}
              </p>
              <p className={`text-6xl xl:text-8xl leading-tight font-bold text-foreground ${isRTL ? 'text-left' : 'text-right'}`}>
                {t.tagline.ad}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollVideo />

      <FadeIn>
        <section aria-label="Our team" className="w-screen overflow-hidden">
          <div className="w-full">
            <Image
              src="/designs/website-team-banner.jpg"
              alt="Our team"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              loading="lazy"
              quality={75}
            />
          </div>
        </section>
      </FadeIn>

      <ServicesSection />

      <PortfolioSection />

      <FadeIn>
        <section aria-label="Our clients" className="w-screen h-screen overflow-hidden">
          <div className="w-full h-full">
            <Image
              src="/designs/ourClients.webp"
              alt="Our clients"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
              loading="lazy"
              quality={75}
            />
          </div>
        </section>
      </FadeIn>

      {/* <FeaturedWorks /> */}

      <section className="py-16 lg:py-24 bg-foreground">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/sOq2Yt83gE0?autoplay=1&mute=1&loop=1&playlist=sOq2Yt83gE0&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Container>
      </section>

      <TeamSection />

      <ContactUsSection />
    </>
  );
}
