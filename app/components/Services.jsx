import React from 'react';
import * as Separator from "@radix-ui/react-separator";
import Link from 'next/link';

function Services() {
  return (
    <section className="min-h-screen w-screen bg-white py-10 flex flex-col items-center"> 
      <div className="container mx-auto px-6 tracking-in-contract"> 
        <h1 className="text-4xl font-bold text-center mb-4 text-second">SERVICES & SPECIALIZATION</h1> 
        <h2 className="text-2xl text-center mb-8 text-first">Rapid Recovery Realized.</h2> 
      </div> 
      <div className=' max-w-5/6 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 h-full justify-center gap-20 '>
      
      <div className='w-80 h-auto bg-white shadow-md flex-col justify-center items-center rounded-2xl hover:scale-105 hover:duration-300 hover:shadow-xl border-1'>
          <Link href='#' className='w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-2xl text-white'>
            Bariatrics / Weight loss
          </Link>
          <div className='img w-full h-[28vh]  justify-center items-center container'>
            <img src="/weightloss.jpg" alt="Surgery Image" className="h-full object-cover w-full curved-image"/>
          </div>
          <div className=' flex w-full flex-col flex-1 justify-center items-center my-6 gap-2'>
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Bariatric surgery</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center' href="#">Non-surgical weight loss <br></br> program</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Surgery for diabetes</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Intragastric Balloon</Link>
            {/* <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" /> */}
          </div>
        </div>

        <div className='w-80 h-auto bg-white shadow-md flex-col justify-center items-center rounded-2xl hover:scale-105 hover:duration-300 hover:shadow-xl border-1'>
          <Link href='#' className='w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-2xl text-white '>
            Laparoscopic Surgery
          </Link>
          <div className='img w-full h-[28vh] justify-center items-center '>
            <img src="/surgery.jpeg" alt="Surgery Image" className="h-full object-cover w-full curved-image" />
          </div>
          <div className=' flex flex-col items-center my-6 gap-2'>
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Gall stones</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Hernia</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Rectal prolapse</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Appendix</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Gerd</Link>
          </div>
        </div>

        <div className='w-80 h-auto bg-white shadow-md flex-col justify-center items-center rounded-2xl hover:scale-105 hover:duration-300 hover:shadow-xl border-1' >
          <Link href='#' className='w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-2xl text-white '>
            Laser Surgery
          </Link>
          <div className='img w-full h-[28vh] justify-center items-center '>
            <img src="/laserSurgery.jpg" alt="Surgery Image" className="h-full object-cover w-full curved-image" />
          </div>
          <div className=' flex flex-col items-center my-6 gap-2'>
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Hemorrhoids/Piles</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Anal fissure</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Pilonidal sinus</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Anal fistula</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Lipoma</Link>
            <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" />
            <Link className='text-xl font-medium text-second/70 hover:text-second hover:scale-105 duration-300' href="#">Circumcision</Link>
            {/* <Separator.Root orientation="horizontal" className="w-3/4 h-[1px] bg-third" /> */}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
