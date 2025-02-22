import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero, heroMobile, star, sky, downArrow, twistedArrow, girls, logo } from "./assets";
import CardSection from "@/components/Card";
import { cardsData } from "@/utils/cardsData";
import MissionSection from "@/components/MissionSection";
import GirlsSection from "@/components/Girls";
import Link from "next/link";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      {/* Hero Section */}
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
        <div className="absolute inset-0 flex flex-col items-start lg:items-center justify-end text-white pb-20 md:items-start leading-tight px-5 py-10">
          <h1 className="text-left lg:text-center text-[27px] md:text-[38px] font-normal mb-4 font-serif leading-tight">
            Your Child's Perfect Schedule &nbsp;
            <br className="hidden sm:block" />
            in Just a Few Clicks
          </h1>
          <p className="mb-8 text-[18px] sm:text-xl font-normal">Less Planning, More Living.</p>

          <Button className="cursor-pointer items-center px-8 py-7 rounded-[50px] bg-[#FF97A8] hover:bg-[#FF97A8] transition-colors duration-200 text-white font-semibold text-lg">
            <Image
              src={star}
              alt="star Logo"
              className="mx-auto"
            />
            <span className="text-black font-medium text-[18px] font-lato tracking-[-0.5px]">Join the waiting list</span>
          </Button>
        </div>
      </section>

      {/* Why JustLiv Section */}
      <section className="py-20 px-4 items-center">
        <h2 className="md:text-center text-3xl font-serif mb-16 text-left">Why JustLiv?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <CardSection
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
            />
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative text-white py-20 px-4">
        {/* Background Image */}
        <div className="text-white py-16 px-5 bg-cover  h-[590px]">

          <Image
            src={sky}
            alt="Background image"
            fill
            priority
          />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto">
            <h2 className="md:text-center text-3xl font-serif mb-16 text-left">How it works</h2>
            <div className="flex flex-col space-y-12 items-start mx-auto max-w-xl">
              {/* Step 1: Browse */}
              <div className="flex items-start space-x-6 relative">
                <div className="flex-shrink-0 p-4 w-15 h-15 bg-[#51658E] bg-opacity-10 rounded-lg shadow-lg">
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
                <div className="flex-shrink-0 p-4 w-15 h-15 bg-[#51658E] bg-opacity-10 rounded-lg shadow-lg">
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
                    Share your child’s interests, schedule, and preferences. Watch as
                    JustLiv creates the perfect calendar filled with activities.
                  </p>
                </div>
                <Image
                  src={downArrow}
                  alt="down arrow"
                  className="absolute -top-11 left-20 w-[42px] h-[45px]"
                />
              </div>

              {/* Step 3: Book */}
              <div className="flex items-start space-x-6 relative">
                <div className="flex-shrink-0 p-4 w-15 h-15 bg-[#51658E] bg-opacity-10 rounded-lg shadow-lg">
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
                    className="absolute -top-12 md:-top-10 left-32 w-[48px] h-[61px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Waitlist Section */}
      <GirlsSection />
      {/* Footer */}
      <Footer />
    </main>
  );
}
