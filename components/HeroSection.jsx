import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero, heroMobile, star } from "../app/assets";

export default function HeroSection() {
    return (
        <section className="relative h-screen max-h-full w-full overflow-hidden rounded-b-[40px]">
            <Image
                src={heroMobile}
                alt="Children playing with colorful parachute"
                fill
                className="md:hidden"
                priority
            />
            <Image
                src={hero}
                alt="Children playing with colorful parachute"
                fill
                className="hidden md:block"
                priority
            />
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-end px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-start md:text-center max-w-4xl mx-auto container">
                    <div className="absolute inset-0 flex flex-col items-start md:items-center  lg:items-center justify-end text-white pb-20 leading-tight px-5 py-10">
                        <h1 className="text-left md:text-center text-[27px] md:text-[38px] font-normal mb-4 font-serif leading-tight">
                            Your Child's Perfect Schedule &nbsp;
                            <br className="hidden sm:block" />
                            in Just a Few Clicks
                        </h1>
                        <p className="text-white  text-[18px] md:text-center text-left sm:text-xl mb-8 font-normal font-lato">Less Planning, More Living.</p>

                        <Button className="cursor-pointer items-center px-8 py-7 rounded-[50px] bg-[#FF97A8] hover:bg-[#FF97A8] transition-colors duration-200 text-white font-semibold text-lg">
                            <Image
                                src={star}
                                alt="star Logo"
                                className="mx-auto"
                            />
                            <span className="text-black font-medium text-[18px] font-lato tracking-[-0.5px]">Join the waiting list</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}