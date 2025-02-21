import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero, heroMobile, star } from "./assets";
import CardSection from "@/components/Card";
import { cardsData } from "@/utils/cardsData";


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
    </main>
  );
}