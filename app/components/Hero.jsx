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
    // <div className=' pt-8 md:mt-13 mt-12 md:px-40 px-10 flex justify-center pb-20 '>
    //   <div className='grid md:grid-cols-3 grid-cols-1 md:gap-28 gap-10'>
    //     {/* BMI Calculator */}
    //     <div>
    //       <div className='max-w-xl space-y-2'>
    //         <div className='flex justify-between items-end'>
    //         <div><Avatar>
    //           <AvatarImage src="/doc1.jpg" />
    //           <AvatarFallback>CN</AvatarFallback>
    //         </Avatar></div>
    //         <div className='text-2xl font-semibold text-first/70'>150+</div>
    //         </div>
    //         <div className='text-xl'>Dr. Monika Desai</div>
    //         <div className='text-black/50 text-md'>Dr. Monika Desai has successfully performed 150 surgeries, specializing in orthopedic procedures.</div>
    //         <a href='/' className='text-black/40 flex gap-1 items-center text-md'>
    //           Read more 
    //           <button>
    //             <CalculateIcon className='ml-2 text-black/30' />
    //           </button>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Calorie Calculator */}
    //     <div>
    //       <div className='max-w-xl space-y-2'>
    //       <div className='flex justify-between items-end'>
    //         <div><Avatar>
    //           <AvatarImage src="/doc2.jpg" />
    //           <AvatarFallback>CN</AvatarFallback>
    //         </Avatar></div>
    //         <div className='text-2xl font-semibold text-first/70'>200+</div>
    //         </div>
    //         <div className='text-xl'>Dr. Ashu Mundotia</div>
    //         <div className='text-black/50 text-md'>With a total of 200 surgeries, Dr. Ashu Mundotia is renowned for her expertise in cardiovascular surgeries.</div>
    //         <a href='/' className='text-black/40 flex gap-1 items-center text-md'>
    //           Read more 
    //           <button>
    //             <CalculateIcon className='ml-2 text-black/30' />
    //           </button>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Exercise Calculator */}
    //     <div>
    //       <div className='max-w-xl space-y-2'>
    //       <div className='flex justify-between items-end'>
    //         <div><Avatar>
    //           <AvatarImage src="/doc3.jpg" />
    //           <AvatarFallback>CN</AvatarFallback>
    //         </Avatar></div>
    //         <div className='text-2xl font-semibold text-first/70'>120+</div>
    //         </div>
    //         <div className='text-xl'>Dr. Sudhir Kataria</div>
    //         <div className='text-black/50 text-md'>Dr. Sudhir Kataria has completed 120 surgeries, focusing primarily on general surgery and laparoscopic techniques.</div>
    //         <a href='/' className='text-black/40 flex gap-1 items-center text-md'>
    //           Read more 
    //           <button>
    //             <CalculateIcon className='ml-2 text-black/30' />
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//     <div className='pt-8 md:mt-13 mt-12 md:px-40 px-14 flex justify-center pb-20'>
//   <div className='grid md:grid-cols-3 grid-cols-1 md:gap-28 gap-10 justify-center'>
    
   
//     <div className='flex items-center gap-4'>
//       <div>
//         <div className='text-lg text-neutral-700'>Number of Patients</div>
//         <div className='md:text-4xl text-3xl font-bold'>31K</div>
//         <div className='text-sm text-neutral-500 md:w-[20vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolore.</div>
//       </div>
//       {/* Uncomment if needed
//       <div>
//         <Avatar>
//           <AvatarImage src="/doc1.jpg" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div> */}
//     </div>
    
//     <div className='bg-third h-[0.5px] w-full block lg:hidden'></div>

//     <div className='flex items-center gap-4'>
//       <div>
//         <div className='text-lg text-neutral-700'>Number of Surgeries done</div>
//         <div className='md:text-4xl text-3xl font-bold'>15K</div> 
//         <div className='text-sm text-neutral-500 md:w-[20vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolore.</div>
//       </div>
//       {/* Uncomment if needed
//       <div>
//         <Avatar>
//           <AvatarImage src="/doc2.jpg" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div> */}
//     </div>

//     <div className='bg-third h-[0.5px] w-full block lg:hidden'></div>

//     <div className='flex items-center gap-4'>
//       <div>
//         <div className='text-lg text-neutral-700'>Another Metric</div> 
//         <div className='md:text-4xl text-3xl font-bold'>20K</div> 
//         <div className='text-sm text-neutral-500 md:w-[20vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dolore.</div>
//       </div>
//       {/* Uncomment if needed
//       <div>
//         <Avatar>
//           <AvatarImage src="/doc3.jpg" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div> */}
//     </div>

//   </div>
// </div>
    <div className="App flex justify-center py-20">
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
    className="number bg-first p-10 rounded-lg flex flex-col gap-2 items-center">
      <span><CountUp duration={3} className="counter font-semibold text-5xl text-white" end={number} /><span className='text-5xl font-bold text-white'>+</span></span>
      <span className='text-lg text-white font-medium'>{title}</span>
    </motion.div>
  )
}


export default Hero;
