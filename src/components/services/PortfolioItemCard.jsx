import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightCircle } from "lucide-react";

const PortfolioItemCard = ({ img, title, link, textStyle }) => {
  // Fallback if img is undefined or empty
  if (!img) {
    return null;
  }

  return (
    <div className="group w-full max-w-[350px] mx-auto">
      <Link 
        href={`/portfolio/${link}`}
        className="block transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-xl"
      >
        <Image
          src={img}
          alt={`${title} portfolio project showcase`}
          width={350}
          height={350}
          className="w-full h-[250px] md:h-[300px] object-cover drop-shadow-xl rounded-xl bg-white transition-shadow duration-300 group-hover:shadow-2xl"
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
        />
        <div className="flex w-full justify-between items-center my-4 px-2">
          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary ${textStyle}`}>{title}</h3>
          <ArrowRightCircle size={20} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItemCard;
