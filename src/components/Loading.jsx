import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Spinning Circle with Logo */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Animated spinning circle */}
          <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-8 border-primary border-t-transparent rounded-full animate-spin"></div>
          
          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/255-logo-primary.svg"
              alt="255 Agency"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            LOADING
          </h2>
          <p className="text-sm md:text-base text-primary/80 font-medium">
            CREATIVITY IS UPLOADING...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
