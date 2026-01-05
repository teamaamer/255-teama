"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[200] bg-[#36454F]/80 text-white rounded-t-[3rem] border border-white border-b-0 transition-transform duration-500 ease-out ${
      isVisible ? "translate-y-0" : "translate-y-full"
    }`}>
      <div className="relative overflow-hidden rounded-t-[3rem]">
        <svg
          className="absolute top-0 left-0 w-full h-auto"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ transform: "translateY(-99%)" }}
        >
          <path
            d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z"
            fill="#ff5100"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            We value your privacy and would like you to note that we use cookies
            and related technologies to enhance your experience on our website,
            improve and customize the quality of our content and other marketing
            activities. We also share information about your use of our site with
            our social media, advertising and analytics partners. Some of these
            cookies are optional and are only used upon providing your own
            consent. You can click 'Approve All' or manage your own preferences
            through the 'Customize settings' link below.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleAcceptAll}
              className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Accept all
            </button>

            <button
              onClick={handleRejectAll}
              className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              reject all
            </button>

            <button
              onClick={handleAcceptAll}
              className="text-white font-bold text-base underline underline-offset-4 decoration-2 hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              customize settings
            </button>

            <button
              onClick={handleAcceptAll}
              className="text-white font-bold text-base underline underline-offset-4 decoration-2 hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              Cookie Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
