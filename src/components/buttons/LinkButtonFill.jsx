import Link from "next/link";
import React from "react";

const LinkButtonFill = ({ href, children, blank, className }) => {
  return (
    <Link
      href={href}
      {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        className +
        " px-8 py-4 flex gap-3 justify-center text-base md:text-lg font-semibold items-center rounded-full bg-white text-primary shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95 relative overflow-hidden group"
      }
    >
      {children}
    </Link>
  );
};

export default LinkButtonFill;
