"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full relative text-white py-12 px-4 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#ff5722]"></div>
      
      {/* Animated gradient orbs for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50"></div>
      
      {/* Glassy overlay with blur */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Left: Logo and Description */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/255-logo-white.svg"
                alt="255 Agency Logo"
                width={80}
                height={80}
                loading="lazy"
                className="w-20 h-20"
              />
            </Link>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Our website is a gateway into a bold creative universe where design meets technology
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Creative Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Creative</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Design Trends
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Style Guide
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  UI/UX Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Behance
                </a>
              </li>
              <li>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm font-light">
                  Houston, Texas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a href="mailto:255@255.ps" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  255@255.ps
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a href="tel:+14248002025" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                  +1 (424) 800-2025
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-white/60 text-sm font-light text-center md:text-left">
            255 advertising agency {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
