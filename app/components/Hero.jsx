// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className=" md:h-[75vh] h-screen  bg-black relative md:mb-80 mb-[80vh] md:px-0 px-10">
      
<ul className="slideshow">
	<li><span></span></li>
  <li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
</ul>
<div>
  <Calculator />
</div>


      <style>
        {`
          .slideshow {
  list-style-type: none;
}

/** SLIDESHOW **/
.slideshow,
.slideshow:after { 
    width: 100%;
    height: 100%;
    left: 0px;
    z-index: 0; 
}

.slideshow li span { 
		position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 30s linear infinite 0s; 
}



.slideshow li:nth-child(1) span { 
    background-image: url("/images/banner-1.webp"); 
}
.slideshow li:nth-child(2) span { 
    background-image: url("/images/banner-2.webp");
    animation-delay: 6s; 
}
.slideshow li:nth-child(3) span { 
    background-image: url("/images/banner-3.webp");
    animation-delay: 12s; 
}
.slideshow li:nth-child(4) span { 
    background-image: url("/images/banner-4.webp");   
    animation-delay: 18s; 
}
.slideshow li:nth-child(5) span { 
    background-image: url("/images/banner-5.webp");
    animation-delay: 24s; 
}



@keyframes imageAnimation { 
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}


@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}


.no-cssanimations .cb-slideshow li span {
	opacity: 1;
}
        `}
      </style>
    </div>
  );
};

const Calculator = () => {
  return (
    <div className='md:mt-10 mt-12 md:px-40 px-2 flex justify-center pb-20'>
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
