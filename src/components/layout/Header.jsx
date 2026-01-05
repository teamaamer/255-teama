"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslation();

  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navMenu1 = [
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.portfolio, href: "/portfolio" },
  ];

  const navMenu2 = [
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-[200] w-screen fixed backdrop-blur-lg duration-500 ${
        isHomePage || isScrolled ? "  " : "text-primary "
      } ${isScrolled ? "bg-black/50 text-foreground h-20" : "h-28"} `}
    >
      <div className="h-full flex items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full flex items-center justify-between gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center justify-start flex-1">
            <NavMenu items={navMenu1} isScrolled={isScrolled} spread={false} />
          </div>

          <Link
            href="/"
            className="flex-shrink-0 flex items-center justify-center hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg"
            aria-label="255 Agency Home"
          >
            {isHomePage || isScrolled ? (
              <Image
                src="/255-logo-white.svg"
                alt="255 Agency Logo"
                width={120}
                height={120}
                className={`duration-300 ${
                  isScrolled ? "w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]" : "w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]"
                }`}
                priority
              />
            ) : (
              <Image
                src="/255-logo-primary.svg"
                alt="255 Agency Logo"
                width={120}
                height={120}
                className={`duration-300 ${
                  isScrolled ? "w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]" : "w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]"
                }`}
                priority
              />
            )}
          </Link>

          <div className="hidden lg:flex justify-end items-center gap-6 flex-1">
            <NavMenu items={navMenu2} isScrolled={isScrolled} />

            <div className="flex items-center gap-4">
              <div className="relative w-52">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.common.search || "Search..."}
                  className={`w-full px-4 py-2.5 pr-10 rounded-full border-2 bg-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm ${
                    isHomePage || isScrolled
                      ? "border-white text-white placeholder:text-white/60 focus:ring-white"
                      : "border-primary text-primary placeholder:text-primary/60 focus:ring-primary"
                  }`}
                />
                <Search
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                    isHomePage || isScrolled ? "text-white" : "text-primary"
                  }`}
                />
              </div>
              
              <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} />
            </div>
          </div>

          <nav className="lg:hidden">
            <MobileMenu
              items={navMenu1.concat(navMenu2)}
              isHomePage={isHomePage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isScrolled={isScrolled}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavMenu = ({ items, isScrolled, spread = false }) => {
  return (
    <nav className={`${spread ? 'w-full' : ''}`} aria-label="Main navigation">
      <ul className={`flex items-center font-bold text-base lg:text-lg ${spread ? 'justify-between w-full' : 'gap-6 lg:gap-8'}`}>
        {items.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className={`inline-block py-2 px-2 border-b-2 border-transparent transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded whitespace-nowrap ${
                !isScrolled
                  ? "hover:border-background hover:text-background focus:ring-background"
                  : "hover:border-primary hover:text-primary focus:ring-primary"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
