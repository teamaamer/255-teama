"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/translations";

const LanguageContext = createContext();

export const languages = {
  en: { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  ar: { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
  es: { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("preferred-language");
      if (savedLanguage && languages[savedLanguage]) {
        setCurrentLanguage(savedLanguage);
        document.documentElement.lang = savedLanguage;
        document.documentElement.dir = languages[savedLanguage].dir;
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }
    } catch (error) {
      console.error("Error loading language:", error);
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
      try {
        localStorage.setItem("preferred-language", langCode);
      } catch (error) {
        console.error("Error saving language:", error);
      }
      document.documentElement.lang = langCode;
      document.documentElement.dir = languages[langCode].dir;
    }
  };

  const t = translations[currentLanguage] || translations.en;

  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t } = useLanguage();
  return t;
}
