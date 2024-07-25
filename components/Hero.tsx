import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='#FFFFE0' />
      <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw]' fill='#FFFFE0' />


      </div>
      <div className="h-screen w-full bg-white dark:bg-[#e2edee] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#e2edee] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-x-[60vw] flex flex-col items-center justify-center'>
          
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Anytime, anywhere—ideal for E.ON business customers'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Olha, and here is my version of your website.
          </p>
          <a href="#about">
            <MagicButton title="See More" position={''} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
