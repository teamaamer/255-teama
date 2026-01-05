import React from "react";

export const PortfolioCardSkeleton = () => {
  return (
    <div className="w-full max-w-[350px] mx-auto animate-pulse">
      <div className="w-full h-[250px] md:h-[300px] bg-foreground/10 rounded-xl" />
      <div className="flex w-full justify-between items-center my-4 px-2">
        <div className="h-6 bg-foreground/10 rounded w-2/3" />
        <div className="h-5 w-5 bg-foreground/10 rounded-full" />
      </div>
    </div>
  );
};

export const ServiceItemSkeleton = () => {
  return (
    <div className="py-6 md:py-8 animate-pulse">
      <div className="h-12 md:h-16 lg:h-20 bg-foreground/10 rounded w-3/4 mx-auto" />
    </div>
  );
};

export const ClientCardSkeleton = () => {
  return (
    <div className="p-4 md:p-6 bg-white/5 rounded-xl aspect-square animate-pulse">
      <div className="w-full h-full bg-foreground/10 rounded" />
    </div>
  );
};

export const TeamCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-foreground/5 p-6 md:p-8 animate-pulse">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground/10 mb-4 mx-auto" />
      <div className="h-6 bg-foreground/10 rounded w-3/4 mx-auto mb-2" />
      <div className="h-4 bg-foreground/10 rounded w-1/2 mx-auto" />
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="min-h-screen py-12 md:py-20 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen items-center px-4 md:px-8 lg:px-16">
        <div className="lg:col-span-12 text-center pt-8 md:pt-16">
          <div className="h-16 md:h-24 bg-foreground/10 rounded w-3/4 mx-auto" />
        </div>
        <div className="lg:col-span-5 xl:col-span-4 space-y-6 md:space-y-8">
          <div className="h-8 bg-foreground/10 rounded w-full" />
          <div className="h-24 bg-foreground/10 rounded w-full" />
          <div className="flex gap-4">
            <div className="h-12 bg-foreground/10 rounded w-1/2" />
            <div className="h-12 bg-foreground/10 rounded w-1/2" />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-span-4 flex justify-center">
          <div className="h-[50vh] w-[300px] bg-foreground/10 rounded" />
        </div>
        <div className="lg:col-span-5 xl:col-span-4 space-y-6 md:space-y-8">
          <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 h-32" />
          <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 h-32" />
        </div>
      </div>
    </div>
  );
};
