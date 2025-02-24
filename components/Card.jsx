import React from "react";
import Image from "next/image";

const CardSection = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_0_16px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col">
      {/* Sparkles Icon */}
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
        className="lucide lucide-sparkles w-6 h-6 mb-2"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </svg>

      {/* Title */}
      <h3 className="text-[21px] text-[#384252] font-normal mb-2 font-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[16px] font-lato font-normal text-[#959AA2] mb-4">
        {description}
      </p>

      {/* Image */}
      <div className="mt-auto">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={400}
          height={300}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default CardSection;
