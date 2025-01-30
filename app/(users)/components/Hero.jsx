'use client'
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { motion } from "motion/react"

const fadeImages = [
  {
    url: '/images/banner-1.webp',
  },
  {
    url: '/images/banner-2.webp',
  },
  {
    url: '/images/banner-3.webp',
  },
  {
    url: '/images/banner-4.webp',
  },
  {
    url: '/images/banner-5.jpg',
  }
];

const Hero = () => {
  return (
    <div className="relative md:px-0 sm:pb-0 ">
      <div className="h-full">
        <Fade arrows={false}
        duration={2000}
        transitionDuration={1000}
        infinite={true}
        pauseOnHover={true}

        >
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img src={fadeImage.url} className='md:h-full h-[40vh] object-cover md:w-full w-[160vw]' />
          </div>
        ))}
      </Fade>
    </div>
      <div>
        <Calculator />
      </div>

      
    </div>
  );
};

const Calculator = () => {
  return (
    <div className="flex justify-center pt-20 md:pb-32 pb-24">
        <div className="flex md:flex-row flex-col md:gap-16 gap-10">
          <Counter number={150} title="Patients treated" />
          <Counter number={200} title="Surgeries done" />
          <Counter number={160} title="Other" />
        </div>
    </div>
  );
};

import CountUp from "react-countup";

const Counter = ({ number, title }) => {
  return (
    <motion.div
    initial={{ scale: 1}}
    whileHover={{ scale: 1.05 }}
    className="number bg-third md:p-10 p-6 rounded-lg flex flex-col gap-2 items-center">
      <span><CountUp duration={3} className="counter font-semibold md:text-6xl text-4xl text-first" end={number} /><span className='md:text-5xl text-5xl font-bold text-first'>+</span></span>
      <span className='text-lg text-black font-semibold'>{title}</span>
    </motion.div>
  )
}


export default Hero;
