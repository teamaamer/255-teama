"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = ({ isScrolled, isHomePage, isMobile = false }) => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLang = languages[currentLanguage];

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs font-semibold uppercase">
              {currentLang.code}
            </span>
          </div>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col mt-2 overflow-hidden bg-white rounded-lg shadow-2xl border border-gray-200"
            >
              {Object.values(languages).map((lang, index) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center justify-between w-full px-4 py-3 transition-all duration-200 ${
                      currentLanguage === lang.code
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    } ${index !== 0 ? "border-t border-gray-100" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase min-w-[42px] text-center ${
                        currentLanguage === lang.code
                          ? "bg-white/20 text-white"
                          : "bg-primary/15 text-primary"
                      }`}>
                        {lang.code}
                      </span>
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-base leading-tight">{lang.nativeName}</span>
                        <span className={`text-xs leading-tight ${
                          currentLanguage === lang.code ? "text-white/60" : "text-gray-600"
                        }`}>
                          {lang.name}
                        </span>
                      </div>
                    </div>
                    {currentLanguage === lang.code && <Check className="w-5 h-5" />}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isHomePage || isScrolled
            ? "border-white text-white hover:bg-white/10 focus:ring-white"
            : "border-primary text-primary hover:bg-primary/10 focus:ring-primary"
        }`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${
          isHomePage || isScrolled
            ? "bg-white/20 text-white"
            : "bg-primary/20 text-primary"
        }`}>
          {currentLang.code}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl overflow-hidden z-50 border border-gray-200"
          >
            {Object.values(languages).map((lang, index) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 ${
                    currentLanguage === lang.code
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } ${index !== 0 ? "border-t border-gray-100" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase min-w-[42px] text-center ${
                      currentLanguage === lang.code
                        ? "bg-white/20 text-white"
                        : "bg-primary/15 text-primary"
                    }`}>
                      {lang.code}
                    </span>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-base leading-tight">{lang.nativeName}</span>
                      <span className={`text-xs leading-tight ${
                        currentLanguage === lang.code ? "text-white/60" : "text-gray-600"
                      }`}>
                        {lang.name}
                      </span>
                    </div>
                  </div>
                  {currentLanguage === lang.code && (
                    <Check className="w-5 h-5" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
