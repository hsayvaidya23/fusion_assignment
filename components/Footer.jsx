import React from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/app/assets"; 

const Footer = () => {
  return (
    <footer className="bg-[#3A4E78] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <Image
            src={logo}
            alt="JustLiv Logo"
            width={116} 
            height={40} 
            className="w-29" 
          />
        </div>

        {/* Instagram Link */}
        <p className="mb-4 flex justify-center items-center space-x-2">
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
            className="lucide lucide-instagram w-6 h-6"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <span className="text-white text-[16px] font-medium font-lato">
            <Link
              href="https://www.instagram.com/justlivatx?igsh=MWo3czd1MXh3cQ%3D%3D&amp;utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with us on Instagram ♡
            </Link>
          </span>
        </p>

        {/* Links and Copyright */}
        <div className="flex flex-col gap-4 items-center pt-16 space-y-4">
          {/* Privacy Policy and Accessibility Statement */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[16px] font-lato">
              <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy policy
              </Link>
            </p>
            <p className="text-[16px] font-lato">
              <Link href="/accessibility-statement" target="_blank" rel="noopener noreferrer">
                Accessibility Statement
              </Link>
            </p>
          </div>

          {/* LinkedIn Link */}
          <p className="flex justify-center items-center">
            <Link
              href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                className="lucide lucide-linkedin w-6 h-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </p>

          {/* Copyright */}
          <p className="text-white text-[16px] font-normal font-lato">
            © 2024 by JustLiv
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;