import React from "react";
import Image from "next/image";
import { sky, downArrow, twistedArrow } from "@/app/assets";

const HowItWorksSection = () => {
  return (
    <div className="text-white py-16 px-5 bg-cover bg-center h-[390px] [@media(width>=1500px)]:h-[650px] flex items-center">
      {/* Background Image */}
      <Image
        src={sky}
        alt="Background image"
        fill
        className="object-cover -z-10 opacity-95"
        priority
      />

      {/* Content */}
      <div className="w-full">
        <h2 className="text-start md:text-center text-3xl mb-8 font-primary font-semibold z-10">
          How it works
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-col space-y-12 items-start mx-auto max-w-xl">
            {/* Step 1: Browse */}
            <div className="flex items-start space-x-6 relative">
              <div className="flex-shrink-0 p-4 w-17 h-17 bg-[#51658E] bg-opacity-40 brightness-125 rounded-lg shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search text-white h-6 w-6"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-lato font-semibold mb-1">Browse</h3>
                <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
                  Discover activities from our partner booking providers.
                </p>
              </div>
            </div>

            {/* Step 2: Build */}
            <div className="flex items-start space-x-6 relative">
            <div className="flex-shrink-0 p-4 w-17 h-17 bg-[#51658E] bg-opacity-40 brightness-125 rounded-lg shadow-sm">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar text-white h-6 w-6"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-lato font-semibold mb-1">Build</h3>
                <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
                  Share your child's interests, schedule, and preferences. Watch as
                  JustLiv creates the perfect calendar filled with activities.
                </p>
              </div>
              <Image
                src={downArrow}
                alt="down arrow"
                className="absolute -top-11 left-20 w-[42px] h-[45px]"
                width={42}
                height={45}
              />
            </div>

            {/* Step 3: Book */}
            <div className="flex items-start space-x-6 relative">
            <div className="flex-shrink-0 p-4 w-17 h-17 bg-[#51658E] bg-opacity-40 brightness-125 rounded-lg shadow-sm">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart text-white h-6 w-6"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-lato font-semibold mb-1">Book</h3>
                <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
                  Finalize your selections with one click and enjoy peace of mind.
                </p>
                <Image
                  src={twistedArrow}
                  alt="twisted arrow"
                  className="absolute -top-12 md:-top-10 left-36 w-[48px] h-[61px]"
                  width={48}
                  height={61}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;