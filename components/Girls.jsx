import React from "react";
import { girls } from "@/app/assets";
import Image from "next/image";
import { Button } from '@/components/ui/button';

const GirlsSection = () => {
    return (
        <section className="relative w-full h-[433px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={girls}
                    alt="Girls playing"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    {/* Heading and Description */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-normal text-white mb-2 font-primary">
                            Ready to Simplify Your Life?
                        </h1>
                        <p className="text-[16px] text-white font-lato">
                            Be the first to know when we launch! Join our waiting list and get
                            exclusive updates and early access to our journey.
                        </p>
                    </div>

                    {/* Join Waiting List Button */}
                    <div className="space-y-4">
                        <Button className="btn border-0 w-full px-8 py-3 cursor-pointer bg-[#FF97A8] hover:bg-[#FF97A8] text-black rounded-[50px] transition-colors duration-200 flex items-center justify-center space-x-2">
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
                                className="lucide lucide-sparkles w-5 h-5"
                            >
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>
                            <span
                                id="target-element"
                                className="text-[18px] font-medium font-lato tracking-[-0.5px] rounded-"
                            >
                                Join the waiting list
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GirlsSection;