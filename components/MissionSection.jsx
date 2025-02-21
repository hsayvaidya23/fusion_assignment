import React from "react";
import Image from "next/image";
import { family } from "@/app/assets";

const MissionSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
    <div className="container mx-auto [@media(width<=350px)]:w-[340px] md:w-[550px] w-[360px] md:px-0 px-6 text-center relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 flex md:justify-center justify-start md:items-center items-start space-x-1 relative">
          <span className="text-2xl font-normal font-primary">Our Mission</span>
          <div className="absolute md:right-15 right-1 -top-3">
            <svg
              width="45"
              height="49"
              viewBox="0 0 45 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0497 45.5727C28.4988 38.654 29.8625 31.4818 27.5505 27.607C25.2385 23.7322 19.3963 24.1961 17.0432 27.8665C16.9546 23.5074 12.2157 20.0595 8.21977 22.1553C4.22389 24.2512 1.63929 31.0791 12.0497 45.5727Z"
                fill="#FF8197"
              />
              <path
                d="M36.308 27.9505C44.9503 21.7783 44.802 17.4359 42.952 15.4895C41.102 13.5431 37.7713 14.5781 36.8863 17.0172C36.2636 14.4983 33.0607 13.1177 31.0156 14.8581C28.9706 16.5985 28.365 20.901 36.308 27.9505Z"
                fill="#FF8197"
              />
              <path
                d="M25.4004 9.84594C31.9953 8.27897 32.9534 5.67652 32.3286 4.08047C31.7039 2.48443 29.4859 2.29404 28.3753 3.52267C28.6139 1.88379 27.0531 0.296399 25.4252 0.832616C23.7973 1.36883 22.4031 3.76616 25.4004 9.84594Z"
                fill="#FF8197"
              />
            </svg>
          </div>
        </h2>
        {/* Paragraph 1 */}
        <p className="font-lato text-[16px] text-[#384252] px-0 md:px-4 mb-6 md:text-center text-start">
          Parents need a simple way to find, book, and track their kids' activities.
          <br className="hidden md:block" /> {/* Line break for desktop only */}
          Businesses need a better way to be found and to keep families coming back.
        </p>
        {/* Highlighted Purpose */}
        <p className="text-xl font-medium mb-6 md:text-center text-start">
          <span className="text-[16px] font-normal font-lato">Our purpose is to</span>{" "}
          <br />
          <span className="font-bold font-lato text-[22px]">make parents lives</span>{" "}
          <span className="text-[#FF8095] text-[22px] font-bold font-lato">
            easier<span className="text-black font-lato">,</span> happier
            <span className="text-black font-lato">,</span>
            <span className="text-black font-lato"> and </span>less stressful
          </span>
        </p>
        {/* Italicized Note */}
        <p className="text-[16px] font-lato text-[#384252] mb-6 md:text-center text-start">
          As parents and business owners, we get it.
        </p>
        {/* Family Image */}
        <Image
          alt="Family"
          src={family}
          width={2041}
          height={1104}
          className="w-full max-w-lg mx-auto rounded-lg shadow-md"
          priority
        />
      </div>
      </div>
    </section>
  );
};

export default MissionSection;