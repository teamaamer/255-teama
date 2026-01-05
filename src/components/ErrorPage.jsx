"use client";

import Link from "next/link";

export default function ErrorPage({ 
  title = "We're Sorry!", 
  message = "We couldn't connect to this website.",
  showButton = true 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <div className="relative flex items-center justify-center w-full">
            {/* Left Cable/Arm */}
            <div className="absolute -left-[30px] sm:-left-[50px] md:-left-[150px] lg:-left-[200px] top-[75%] md:top-[80%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="946.209" height="62.796" viewBox="0 0 946.209 62.796" className="w-[180px] sm:w-[220px] md:w-[500px] lg:w-[650px] h-auto">
                <rect id="Rectangle_214" data-name="Rectangle 214" width="116" height="14" transform="matrix(-0.996, -0.087, 0.087, -0.996, 924.558, 59.933)" fill="#4a4a4a"/>
                <rect id="Rectangle_215" data-name="Rectangle 215" width="116" height="14" transform="matrix(-0.982, 0.191, -0.191, -0.982, 925, 13.743)" fill="#4a4a4a"/>
                <rect id="Rectangle_213" data-name="Rectangle 213" width="116" height="14" transform="translate(946.209 37.268) rotate(178)" fill="#4a4a4a"/>
                <rect id="Rectangle_209" data-name="Rectangle 209" width="852" height="59" transform="translate(0 3.796)" fill="#ff3600"/>
              </svg>
            </div>

            {/* Character */}
            <div className="relative z-10 mx-auto">
              <svg id="Group_99" data-name="Group 99" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="405.654" height="702.59" viewBox="0 0 405.654 702.59" className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_228" data-name="Rectangle 228" width="405.654" height="702.59" fill="none"/>
                  </clipPath>
                </defs>
                <g id="Group_98" data-name="Group 98" clipPath="url(#clip-path)">
                  <path id="Path_19" data-name="Path 19" d="M0,587.412V385.278a202.827,202.827,0,1,1,404.182,24.415c-.159,1.459-.365,2.925-.616,4.371a260.074,260.074,0,0,1-8.392,35.343c-.412,1.339-.8,2.51-1.138,3.505-.392,1.217-.821,2.43-1.276,3.617A202.959,202.959,0,0,1,223.47,587.062l-3.452.35Z" transform="translate(0 -55.355)" fill="#606060"/>
                  <path id="Path_20" data-name="Path 20" d="M98.224,415.08a134.4,134.4,0,1,1,268.808,0,131.488,131.488,0,0,1-1.065,16.9.677.677,0,0,1-.025.223,190.719,190.719,0,0,1-6.319,26.737c-.272.892-.57,1.76-.867,2.627a2.18,2.18,0,0,1-.125.371A134.53,134.53,0,0,1,246.356,548.79H98.224Z" transform="translate(-29.801 -85.155)" fill="#fff"/>
                  <rect id="Rectangle_223" data-name="Rectangle 223" width="73.733" height="116.371" transform="translate(209.945 276.102)" fill="#ff5100"/>
                  <rect id="Rectangle_224" data-name="Rectangle 224" width="73.733" height="116.371" transform="translate(118.022 276.102)" fill="#ff5100"/>
                  <rect id="Rectangle_225" data-name="Rectangle 225" width="88.237" height="148.418" transform="translate(0.456 502.125)" fill="#606060"/>
                  <path id="Path_21" data-name="Path 21" d="M543.9,790.891H455.663V567.615L543.9,462.59Z" transform="translate(-138.246 -140.347)" fill="#606060"/>
                  <path id="Path_22" data-name="Path 22" d="M359.984,847.524H113.008l-6.917-141.083,253.893-57.184Z" transform="translate(-32.187 -196.981)" fill="#606060"/>
                  <rect id="Rectangle_226" data-name="Rectangle 226" width="142.387" height="29.859" transform="translate(50.388 216.199) rotate(-7.8)" fill="#ff5100"/>
                  <rect id="Rectangle_227" data-name="Rectangle 227" width="29.859" height="142.387" transform="translate(209.847 242.417) rotate(-79.862)" fill="#ff5100"/>
                </g>
              </svg>
            </div>

            {/* Right Cable/Arm */}
            <div className="absolute -right-[30px] sm:-right-[50px] md:-right-[150px] lg:-right-[200px] top-[75%] md:top-[80%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="949.54" height="62.796" viewBox="0 0 949.54 62.796" className="w-[180px] sm:w-[220px] md:w-[500px] lg:w-[650px] h-auto">
                <rect id="Rectangle_217" data-name="Rectangle 217" width="116" height="14" transform="matrix(0.996, -0.087, 0.087, 0.996, 20.43, 45.987)" fill="#4a4a4a"/>
                <rect id="Rectangle_218" data-name="Rectangle 218" width="116" height="14" transform="translate(23.88) rotate(11)" fill="#4a4a4a"/>
                <rect id="Rectangle_216" data-name="Rectangle 216" width="116" height="14" transform="matrix(0.999, 0.035, -0.035, 0.999, 0.489, 23.276)" fill="#4a4a4a"/>
                <rect id="Rectangle_208" data-name="Rectangle 208" width="852" height="59" transform="translate(97.54 3.796)" fill="#ff3600"/>
              </svg>
            </div>

            {/* X in the middle */}
            <div className="absolute top-[75%] md:top-[80%] left-1/2 -translate-x-1/2 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="91.924" height="91.924" viewBox="0 0 91.924 91.924" className="w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-auto">
                <rect id="Rectangle_219" data-name="Rectangle 219" width="116" height="14" rx="7" transform="translate(0 82.024) rotate(-45)" fill="#ff3600"/>
                <rect id="Rectangle_220" data-name="Rectangle 220" width="116" height="14" rx="7" transform="translate(9.899) rotate(45)" fill="#ff3600"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {message}
          </p>
          
          {showButton && (
            <div className="pt-4">
              <Link 
                href="/"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                TRY AGAIN
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
