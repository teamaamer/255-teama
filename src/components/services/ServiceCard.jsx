import React from "react";
import LinkButtonFill from "../buttons/LinkButtonFill";
import Link from "next/link";

const ServiceCard = ({ title, description, image, slug }) => {
  return (
    <Link
      href={"/services/" + slug}
      className="group w-full mx-auto bg-foreground rounded-3xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 p-6">
        <div className="md:w-1/2 h-full relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="object-cover w-full transform transition duration-500 ease-in-out group-hover:scale-125"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h3 className="text-3xl font-semibold text-primary leading-tight transform transition-all duration-500 group-hover:translate-y-[-10px]">
            {title}
          </h3>
          <p className="text-lg text-background opacity-80 group-hover:opacity-100 transform transition-opacity duration-500">
            {description}
          </p>

          <button className="group-hover:translate-y-[10px] duration-300 w-fit px-8 py-4 flex gap-4 justify-center text-xl font-bold items-center rounded-xl text-slate-800 bg-gradient-to-t from-primary to-orange-500 transition drop-shadow-md hover:scale-105 hover:from-secondary hover:to-yellow-200">
            Learn More!
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
