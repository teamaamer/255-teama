import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-foreground space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground hover:scale-105 transition-transform duration-300 bg-white/10 rounded-full px-4 py-2 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          
          <h1 className="text-5xl lg:text-7xl font-bold">
            THANK YOU
          </h1>
          
          <p className="text-xl lg:text-2xl">
            We respond back as soon as possible
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="auto"
            viewBox="0 0 577.847 941.003"
            className="max-w-md lg:max-w-lg"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_235"
                  data-name="Rectangle 235"
                  width="577.847"
                  height="941.003"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g id="Group_100" data-name="Group 100" clipPath="url(#clip-path)">
              <path
                id="Path_23"
                data-name="Path 23"
                d="M0,685.074V397.14a288.924,288.924,0,1,1,575.75,34.778c-.226,2.078-.52,4.167-.878,6.227a370.376,370.376,0,0,1-11.954,50.345c-.588,1.908-1.142,3.576-1.622,4.994-.559,1.733-1.168,3.461-1.818,5.153A289.107,289.107,0,0,1,318.329,684.576l-4.917.5Z"
                transform="translate(0 13.009)"
                fill="#606060"
              />
              <path
                id="Path_24"
                data-name="Path 24"
                d="M48.918,386.679a191.472,191.472,0,0,1,361.663-87.715,190.969,190.969,0,0,1,21.249,87.715,187.138,187.138,0,0,1-1.518,24.073.96.96,0,0,1-.036.317,271.626,271.626,0,0,1-9,38.087c-.388,1.27-.812,2.506-1.234,3.742a3.15,3.15,0,0,1-.177.529,191.637,191.637,0,0,1-159.935,123.72H48.918Z"
                transform="translate(5.881 23.469)"
                fill="#fff"
              />
              <rect
                id="Rectangle_230"
                data-name="Rectangle 230"
                width="105.031"
                height="165.768"
                transform="translate(188.286 333.479)"
                fill="#ff5100"
              />
              <rect
                id="Rectangle_231"
                data-name="Rectangle 231"
                width="105.031"
                height="165.768"
                transform="translate(47.98 333.479)"
                fill="#ff5100"
              />
              <rect
                id="Rectangle_232"
                data-name="Rectangle 232"
                width="125.692"
                height="285.557"
                transform="translate(0.65 655.446)"
                fill="#606060"
              />
              <path
                id="Path_25"
                data-name="Path 25"
                d="M529.324,898.163H403.633V529.688L529.324,356.366Z"
                transform="translate(48.523 42.841)"
                fill="#606060"
              />
              <path
                id="Path_26"
                data-name="Path 26"
                d="M455.642,878.285H103.829L93.977,624.558l361.665-102.84Z"
                transform="translate(11.298 62.719)"
                fill="#606060"
              />
              <path
                id="Path_27"
                data-name="Path 27"
                d="M137.662,196.947l5.772,42.14L11.859,258.737,6.087,216.6Z"
                transform="translate(0.732 23.676)"
                fill="#ff5100"
              />
              <rect
                id="Rectangle_233"
                data-name="Rectangle 233"
                width="42.533"
                height="202.827"
                transform="translate(164.588 285.495) rotate(-79.861)"
                fill="#ff5100"
              />
              <rect
                id="Rectangle_234"
                data-name="Rectangle 234"
                width="53.702"
                height="256.085"
                transform="translate(250.462 86.332) rotate(-79.862)"
                fill="#606060"
              />
              <path
                id="Path_28"
                data-name="Path 28"
                d="M340.319,70.122,361.1,0,485.471,8.38,471.089,78.545l-4.14,10.983Z"
                transform="translate(40.912 0)"
                fill="#606060"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
