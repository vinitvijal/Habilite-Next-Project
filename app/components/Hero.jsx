'use client'
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar';
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
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-28 gap-10'>
        {/* BMI Calculator */}
        <div>
          <div className='max-w-xl space-y-2'>
            <div className='flex justify-between items-end'>
            <div><Avatar>
              <AvatarImage src="/doc1.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar></div>
            <div className='text-2xl font-semibold text-first/70'>150+</div>
            </div>
            <div className='text-xl'>Dr. Monika Desai</div>
            <div className='text-black/50 text-md'>Dr. Monika Desai has successfully performed 150 surgeries, specializing in orthopedic procedures.</div>
            <a href='/' className='text-black/40 flex gap-1 items-center text-md'>
              Read more 
              <button>
                <CalculateIcon className='ml-2 text-black/30' />
              </button>
            </a>
          </div>
        </div>

        {/* Calorie Calculator */}
        <div>
          <div className='max-w-xl space-y-2'>
          <div className='flex justify-between items-end'>
            <div><Avatar>
              <AvatarImage src="/doc2.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar></div>
            <div className='text-2xl font-semibold text-first/70'>200+</div>
            </div>
            <div className='text-xl'>Dr. Ashu Mundotia</div>
            <div className='text-black/50 text-md'>With a total of 200 surgeries, Dr. Ashu Mundotia is renowned for her expertise in cardiovascular surgeries.</div>
            <a href='/' className='text-black/40 flex gap-1 items-center text-md'>
              Read more 
              <button>
                <CalculateIcon className='ml-2 text-black/30' />
              </button>
            </a>
          </div>
        </div>

        {/* Exercise Calculator */}
        <div>
          <div className='max-w-xl space-y-2'>
          <div className='flex justify-between items-end'>
            <div><Avatar>
              <AvatarImage src="/doc3.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar></div>
            <div className='text-2xl font-semibold text-first/70'>120+</div>
            </div>
            <div className='text-xl'>Dr. Sudhir Kataria</div>
            <div className='text-black/50 text-md'>Dr. Sudhir Kataria has completed 120 surgeries, focusing primarily on general surgery and laparoscopic techniques.</div>
            <a href='/' className='text-black/40 flex gap-1 items-center text-md'>
              Read more 
              <button>
                <CalculateIcon className='ml-2 text-black/30' />
              </button>
            </a>
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
