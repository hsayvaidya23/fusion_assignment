import React from 'react';
import { Search, Calendar, Heart } from 'lucide-react';
import { sky, twistedArrow, downArrow } from '@/app/assets';
import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section className='text-white py-16 px-5 bg-cover bg-center h-[590px] md:h-[725px]' style={{ backgroundImage: `url('${sky.src}')` }}>
      <h2 className="text-start md:text-center text-2xl font-normal mb-8 font-primary">How it works</h2>
      <div className="container mx-auto relative">
        <div className="flex flex-col space-y-12 items-start mx-auto max-w-xl">

          <div className="flex items-start space-x-6 relative">
            <div className="flex-shrink-0 p-4 w-[60px] h-[60px] bg-[#51658E] bg-opacity-100 rounded-lg">
              <Search className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[18px] font-lato font-semibold mb-1">Browse</h3>
              <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
                Discover activities from our partner&nbsp;booking providers.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 relative">
            <div className="flex-shrink-0 p-4 w-[60px] h-[60px] bg-[#51658E] bg-opacity-100 rounded-lg">
              <Calendar className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[18px] font-lato font-semibold mb-1">Build</h3>
              <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
                Share your child’s interests,&nbsp;schedule, and preferences. Watch as
                JustLiv creates the perfect calendar filled with activities.
              </p>
            </div>
            <Image
                src={downArrow}
                alt="down arrow"
                className="absolute -top-11 left-14 w-[42px] h-[45px]"
                width={42}
                height={45}
              />
          </div>

          <div className="flex items-start space-x-6 relative">
            <div className="flex-shrink-0 p-4 w-[60px] h-[60px] bg-[#51658E] bg-opacity-100 rounded-lg">
              <Heart className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[18px] font-lato font-semibold mb-1">Book</h3>
              <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
                Finalize your selections with one&nbsp;click and enjoy peace of mind.
              </p>
            </div>
             <Image
                  src={twistedArrow}
                  alt="twisted arrow"
                  className="absolute -top-12 md:-top-10 left-28 w-[48px] h-[61px]"
                  width={48}
                  height={61}
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
