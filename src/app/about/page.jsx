"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-500px)] bg-foreground py-24">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .svg-container {
          transition: transform 0.3s ease;
        }
        .svg-container:hover {
          transform: scale(1.1);
        }
        .svg-container svg > *:nth-child(2) {
          animation: float 3s ease-in-out infinite;
        }
        .svg-container svg > *:nth-child(3) {
          animation: pulse 2s ease-in-out infinite;
        }
        .svg-container-rotate svg > *:nth-child(2) {
          animation: spin-slow 20s linear infinite;
        }
        .svg-container-rotate svg > *:nth-child(3) {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
      <section className="h-[400px] md:h-[700px] bg-primary flex flex-col drop-shadow-lg justify-center items-center overflow-hidden relative">
        <Image
          className="absolute min-w-screen h-[200px] object-cover bottom-0"
          src="/designs/heroPattern.webp"
          width={2000}
          height={1000}
          alt=""
          loading="lazy"
          quality={70}
        />
        <Container className={"z-10"}>
          <h1 className="text-4xl md:text-8xl font-bold z-20">
            UNLEASH BOLD IDEAS
          </h1>
          <p className="text-2xl md:text-5xl pt-2 z-20">
            CREATE THE UNEXPECTED
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
            <div className="w-full md:w-1/2 flex justify-center svg-container">
              <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF6B2E', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#FFA366', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.2"/>
                <path d="M200 80 L320 200 L200 320 L80 200 Z" fill="url(#grad1)" opacity="0.8"/>
                <circle cx="200" cy="200" r="60" fill="#FF6B2E"/>
                <path d="M200 140 L230 200 L200 260 L170 200 Z" fill="white" opacity="0.9"/>
              </svg>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Who We Are</h2>
              <ul className="space-y-4 text-lg md:text-xl text-primary">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Established in 2020 with a vision to elevate marketing standards in Palestine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Creative powerhouse specializing in innovative, results-driven strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Rapidly grown into a leading name known for fresh ideas and dynamic campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Serving diverse clients from startups to established brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Committed to staying at the forefront of digital trends</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32">
            <div className="w-full md:w-1/2 flex justify-center svg-container-rotate">
              <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF6B2E', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#FFB380', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="300" height="300" rx="20" fill="url(#grad2)" opacity="0.2"/>
                <circle cx="120" cy="120" r="40" fill="#FF6B2E" opacity="0.8"/>
                <circle cx="280" cy="120" r="40" fill="#FF6B2E" opacity="0.8"/>
                <circle cx="120" cy="280" r="40" fill="#FF6B2E" opacity="0.8"/>
                <circle cx="280" cy="280" r="40" fill="#FF6B2E" opacity="0.8"/>
                <rect x="150" y="150" width="100" height="100" fill="url(#grad2)"/>
                <path d="M200 170 L220 200 L200 230 L180 200 Z" fill="white"/>
              </svg>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Our Approach</h2>
              <ul className="space-y-4 text-lg md:text-xl text-primary">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Integrated approach combining marketing, events, and social media solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Tailored strategies designed for businesses across various sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Strong focus on building meaningful client relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Creating impactful brand experiences and audience engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Passionate team dedicated to client growth, visibility, and success</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
            <div className="w-full md:w-1/2 flex justify-center svg-container">
              <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF6B2E', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#FFC299', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#grad3)" opacity="0.1"/>
                <path d="M200 50 L350 200 L200 350 L50 200 Z" stroke="#FF6B2E" strokeWidth="3" fill="none" opacity="0.6"/>
                <circle cx="200" cy="50" r="20" fill="#FF6B2E"/>
                <circle cx="350" cy="200" r="20" fill="#FF6B2E"/>
                <circle cx="200" cy="350" r="20" fill="#FF6B2E"/>
                <circle cx="50" cy="200" r="20" fill="#FF6B2E"/>
                <circle cx="200" cy="200" r="80" fill="url(#grad3)" opacity="0.9"/>
                <path d="M200 140 L240 180 L240 220 L200 260 L160 220 L160 180 Z" fill="white" opacity="0.8"/>
              </svg>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Our Values</h2>
              <ul className="space-y-4 text-lg md:text-xl text-primary">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Social and environmental responsibility as a core value since 2020</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Building a more sustainable and inclusive society</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Marketing that drives positive change and supports communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Empowering local businesses and supporting creative talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Promoting purpose-driven initiatives for stronger foundations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center svg-container-rotate">
              <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF6B2E', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#FFD1B3', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <polygon points="200,30 370,150 320,350 80,350 30,150" fill="url(#grad4)" opacity="0.2"/>
                <polygon points="200,80 320,160 290,300 110,300 80,160" fill="url(#grad4)" opacity="0.6"/>
                <polygon points="200,130 270,180 250,270 150,270 130,180" fill="#FF6B2E" opacity="0.9"/>
                <circle cx="200" cy="200" r="40" fill="white" opacity="0.9"/>
                <path d="M200 180 L210 200 L200 220 L190 200 Z" fill="#FF6B2E"/>
              </svg>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Our Commitment</h2>
              <ul className="space-y-4 text-lg md:text-xl text-primary">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Helping clients and communities thrive in challenging times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Awareness campaigns and community engagement events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Strategic collaborations that open new doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Ethical practices and inclusive storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  <span>Catalyst for cultural, social, and economic development in Palestine</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default page;
