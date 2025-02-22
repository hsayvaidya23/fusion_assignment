import React from "react";
import CardSection from "./Card";  
import { cardsData } from "@/utils/cardsData";


const WhyJustLivSection = () => {
  return (
    <section className="container mx-auto px-5 py-20 md:px-20">
      <h2 className="md:text-center text-2xl font-primary mb-8 text-start font-lato">
        Why JustLiv?
      </h2>
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
  );
};

export default WhyJustLivSection;