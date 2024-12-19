'use client'
import React, { useCallback, useEffect, useState } from 'react'

function Hero() {
  // Update the slides array to include image URLs
  const slides = [
    "/images/i1.jpg",  // Image 1
    "/images/i2.jpg",  // Image 2
    "/images/i3.jpg"   // Image 3
  ];
  
  return (
    <div className='relative w-screen h-full mt-10 px-10 flex justify-center overflow-hidden'>
      <div className='flex flex-col'>
        <Carousel slides={slides} />
        <Calculator />
        <div className='h-[0.2px] bg-third'></div>
      </div>
    </div>
  )
}

export default Hero

const Carousel = ({ slides }) => {
  const [cur, setCur] = useState(0);
  const len = slides.length;

  const leftHandle = () => {
    setCur(cur - 1 < 0 ? len - 1 : cur - 1);
  };

  const rightHandle = useCallback(() => {
    setCur(cur + 1 > len - 1 ? 0 : cur + 1);
  }, [cur, len]);

  // Uncomment this section if you want automatic slide transitions
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     rightHandle();
  //   }, 5000);
  //   return () => clearTimeout(interval);
  // }, [rightHandle]);

  return (
    <div className='relative md:w-screen h-full flex justify-center'>
      <div className='flex justify-between w-screen md:px-[8.5vw] px-[5vw] absolute mt-[25vh]'>
        <button onClick={leftHandle} className='bg-first p-3 text-white rounded-full'><ChevronLeftIcon /></button>
        <button onClick={rightHandle} className='bg-first p-3 text-white rounded-full'><ChevronRightIcon /></button>
      </div>
      {slides.map((slide, index) => (
        <div key={index}>{cur === index && <SlideItem slide={slide} />}</div>
      ))}
    </div>
  );
};

const SlideItem = ({ slide }) => {
  return (
    <div className="item flex h-[60vh] items-center justify-center bg-neutral-900 rounded-lg w-[80vw] shadow fade-in">
      {/* Render the image */}
      <img src={slide} alt="Slide" className="h-full w-full md:object-fit object-cover rounded-lg" />
    </div>
  );
};

const styles = `
.fade-in {
  opacity: 0;
  transition: opacity 0.1s ease-in;
}

.fade-in img {
  opacity: 1;
}
`;

const ChevronRightIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
    );
};

const ChevronLeftIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
    );
};

const Calculator = () => {
    return (
      <div className='md:mt-10 mt-12 md:px-40 px-2 flex justify-center pb-20'>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10'>
          <div>
            <div className='max-w-xl space-y-2'>
              <div className='-translate-x-2'><img src='/images/c1.png' className='w-12' /></div>
              <div className='text-xl'>BMI Calculator</div>
              <div className='text-black/50 text-md'>A standard tool to gauge obesity levels based on ratio of height and weight.</div>
              <div className='text-black/40 flex gap-1 items-center text-md'>Calculate <button><CalculateIcon className='ml-2 text-black/30' /></button></div>
            </div>
          </div>
          <div>
            <div className='max-w-xl space-y-2'>
              <div className='-translate-x-2'><img src='/images/c3.png' className='w-12' /></div>
              <div className='text-xl'>Calorie Calculator</div>
              <div className='text-black/50 text-md'>A tool to assess your daily calorie requirements for ideal body weight.</div>
              <div className='text-black/40 flex gap-1 items-center text-md'>Calculate <button><CalculateIcon className='ml-2 text-black/30' /></button></div>
            </div>
          </div>
          <div>
          <div className='max-w-xl space-y-2'>
              <div className='-translate-x-2'><img src='/images/c2.png' className='w-12' /></div>
              <div className='text-xl'>Exercise Calculator</div>
              <div className='text-black/50 text-md'>A tool to determine calorie consumption during a particular task.</div>
              <div className='text-black/40 flex gap-1 items-center text-md'>Calculate <button><CalculateIcon className='ml-2 text-black/30' /></button></div>
            </div>
          </div>
        </div>
      </div>
    )
}


const CalculateIcon = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>  );
};
