import React from "react";
import { girls, girlMobile } from "@/app/assets";
import Image from "next/image";
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GirlsSection = () => {
    return (
        <section className="relative w-full h-[433px]">
            {/* Desktop Background */}
            <div className="absolute inset-0 w-full h-full hidden md:block">
                <Image
                    src={girls}
                    alt="Girls playing"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Mobile Background */}
            <div className="absolute inset-0 w-full h-full block md:hidden">
                <Image
                    src={girlMobile} 
                    alt="Girls playing"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content Section */}
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
                    <Button className="border-0 w-full px-8 py-2 cursor-pointer bg-[#FF97A8] hover:bg-[#FF97A8] text-black rounded-[50px] transition-colors duration-200 flex items-center justify-center space-x-2">
                        <Sparkles height={20} width={20} className='text-black'/>
                        <span id="target-element" className="text-[18px] font-medium font-lato tracking-[-0.5px]">
                            Join the waiting list
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default GirlsSection;