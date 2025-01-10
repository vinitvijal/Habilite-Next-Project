'use client'
// Hero.jsx
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



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
    <div className=' pt-8 md:mt-13 mt-12 md:px-40 px-10 flex justify-center pb-20 '>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10'>
        {/* BMI Calculator */}
        <div>
          <div className='max-w-xl space-y-2'>
            <div className='-translate-x-2'>
              <img src='/images/c1.png' className='w-12' alt="BMI Calculator Icon" />
            </div>
            <div className='text-xl'>BMI Calculator</div>
            <div className='text-black/50 text-md'>A standard tool to gauge obesity levels based on ratio of height and weight.</div>
            <div className='text-black/40 flex gap-1 items-center text-md'>
              Calculate 
              <button>
                <CalculateIcon className='ml-2 text-black/30' />
              </button>
            </div>
          </div>
        </div>

        {/* Calorie Calculator */}
        <div>
          <div className='max-w-xl space-y-2'>
            <div className='-translate-x-2'>
              <img src='/images/c3.png' className='w-12' alt="Calorie Calculator Icon" />
            </div>
            <div className='text-xl'>Calorie Calculator</div>
            <div className='text-black/50 text-md'>A tool to assess your daily calorie requirements for ideal body weight.</div>
            <div className='text-black/40 flex gap-1 items-center text-md'>
              Calculate 
              <button>
                <CalculateIcon className='ml-2 text-black/30' />
              </button>
            </div>
          </div>
        </div>

        {/* Exercise Calculator */}
        <div>
          <div className='max-w-xl space-y-2'>
            <div className='-translate-x-2'>
              <img src='/images/c2.png' className='w-12' alt="Exercise Calculator Icon" />
            </div>
            <div className='text-xl'>Exercise Calculator</div>
            <div className='text-black/50 text-md'>A tool to determine calorie consumption during a particular task.</div>
            <div className='text-black/40 flex gap-1 items-center text-md'>
              Calculate 
              <button>
                <CalculateIcon className='ml-2 text-black/30' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalculateIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right">
      <path d="M18 8L22 12L18 16"/>
      <path d="M2 12H22"/>
    </svg>  
  );
};

export default Hero;
