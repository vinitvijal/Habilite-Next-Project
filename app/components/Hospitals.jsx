import React from 'react'
import hp1 from '@/public/image1.png'
import hp2 from '@/public/image2.png'
import hp3 from '@/public/image3.png'
import hp4 from '@/public/image4.png'
import hp5 from '@/public/image5.png'
import hp6 from '@/public/image6.png'
import Image from 'next/image'

function Hospitals() {
  return (
    <div className='w-screen justify-center items-center text-center flex-col'>
      <div className='justify-center items-center flex p-2'>
        <h1 className='text-[#1463f3] font-extrabold text-4xl p-2'>AFFILIATIONS</h1>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-2 justify-center items-center md:px-20 px-10 md:gap-8 gap-6 w-full'>
        <div className='bg-white rounded-2xl hover:translate-y-1 hover:scale-105 justify-center hover:shadow-md hover:shadow-slate-500 shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
          <Image src={hp1} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
          <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80 justify-end items-center z-10 w-full grid grid-rows-2 px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
          <h1 className='md:text-2xl text-xl font-semibold text-white z-10'>Hospital Name</h1>
          <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
          <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='bg-white rounded-2xl hover:translate-y-1 hover:scale-105 justify-center hover:shadow-md hover:shadow-slate-500 shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
          <Image src={hp2} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
          <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80 justify-end items-center z-10 w-full grid grid-rows-2 px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
          <h1 className='md:text-2xl text-xl font-semibold text-white z-10'>Hospital Name</h1>
          <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
          <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>    
        <div className='bg-white rounded-2xl hover:translate-y-1 hover:scale-105 justify-center hover:shadow-md hover:shadow-slate-500 shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
          <Image src={hp3} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
          <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80 justify-end items-center z-10 w-full grid grid-rows-2 px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
          <h1 className='md:text-2xl text-xl font-semibold text-white z-10'>Hospital Name</h1>
          <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
          <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>  
        <div className='bg-white rounded-2xl hover:translate-y-1 hover:scale-105 justify-center hover:shadow-md hover:shadow-slate-500 shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
          <Image src={hp4} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
          <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80 justify-end items-center z-10 w-full grid grid-rows-2 px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
          <h1 className='md:text-2xl text-xl font-semibold text-white z-10'>Hospital Name</h1>
          <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
          <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>  
        <div className='bg-white rounded-2xl hover:translate-y-1 hover:scale-105 justify-center hover:shadow-md hover:shadow-slate-500 shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
          <Image src={hp5} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
          <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80 justify-end items-center z-10 w-full grid grid-rows-2 px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
          <h1 className='md:text-2xl text-xl font-semibold text-white z-10'>Hospital Name</h1>
          <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
          <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>  
        <div className='bg-white rounded-2xl hover:translate-y-1 hover:scale-105 justify-center hover:shadow-md hover:shadow-slate-500 shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
          <Image src={hp6} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
          <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80 justify-end items-center z-10 w-full grid grid-rows-2 px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
          <h1 className='md:text-2xl text-xl font-semibold text-white z-10'>Hospital Name</h1>
          <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
          <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Hospitals
