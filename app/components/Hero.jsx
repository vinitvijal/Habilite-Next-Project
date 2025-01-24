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
    url: '/images/banner-5.webp',
  }
];

const Hero = () => {
  return (
    <div className="relative md:px-0 sm:pb-0 ">
      <div className="slide-container h-full">
      <Fade arrows={false}
        duration={2000}
        transitionDuration={1000}
        infinite={true}
        pauseOnHover={true}

        >
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img src={fadeImage.url} />
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
    <div className="App flex justify-center pt-20 pb-">
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
    whileHover={{ scale: 1.1 }}
    className="number bg-first md:p-10 p-6 rounded-lg flex flex-col gap-2 items-center">
      <span><CountUp duration={3} className="counter font-semibold md:text-5xl text-4xl text-white" end={number} /><span className='md:text-5xl text-4xl font-bold text-white'>+</span></span>
      <span className='text-lg text-white font-medium'>{title}</span>
    </motion.div>
  )
}


export default Hero;
