"use client";

import React, { useEffect, useState } from "react";

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;
      setIsVisible(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToBottom}
        className="fixed z-50 bottom-10 right-10 text-3xl font-semibold px-6 py-2 text-white bg-primary/70 backdrop-blur-md hover:bg-orange-500 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
        aria-label="Scroll to Bottom"
      >
        ⬇
      </button>
    )
  );
};

export default ScrollToBottomButton;
