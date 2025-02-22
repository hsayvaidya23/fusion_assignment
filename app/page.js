import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero, heroMobile, star, sky, downArrow, twistedArrow, girls, logo } from "./assets";
import CardSection from "@/components/Card";
import { cardsData } from "@/utils/cardsData";
import MissionSection from "@/components/MissionSection";
import GirlsSection from "@/components/Girls";
import Link from "next/link";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyJustLivSection from "@/components/WhyJustliv";
import HowItWorksSection from "@/components/HowItWorks";


export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      {/* Hero Section */}
      <HeroSection />
      {/* Why JustLiv Section */}
      <WhyJustLivSection />

      {/* How it Works Section */}
      <section className="relative text-white py-20 px-4">
        <HowItWorksSection />
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
