import React from 'react'
import { FaSquareXTwitter, FaSquareYoutube, FaSquareFacebook } from "react-icons/fa6";
import { FaPinterestSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
      <section id='footer' className='bg-second flex h-full flex-col w-screen ' > 
        <div className='flex justify-center items-center bg-white h-[12vh] w-screen' style={{clipPath: "ellipse(120vh 90% at top)"}} ></div>
        <div className='flex justify-center items-start px-10 md:px-12 py-12 gap-8'>
        <div className='flex-col justify-center items-center lg:w-1/4'>
            <h1 className='font-bold text-3xl text-white'>Habilite Clinic.</h1>
            <h1 className='font-semibold text-md text-white/50'>Weight Loss | Laprosy | Laser</h1>
            <div className='flex items-center gap-4 py-5'>
            <FaLinkedin className='h-7 w-7 cursor-pointer' color='#d0def5'/>
            <FaSquareFacebook className='h-7 w-7 cursor-pointer' color='#d0def5'/>
            <FaSquareYoutube className='h-7 w-7 cursor-pointer' color='#d0def5'/>
            <FaPinterestSquare className='h-7 w-7 cursor-pointer' color='#d0def5'/>
            <FaSquareXTwitter className='h-7 w-7 cursor-pointer' color='#d0def5'/>
            </div>
            <div className='flex flex-col pt-6 gap-4'>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/call.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light '>+(91) 9999456455</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/call.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light'>+(91) 9910024564</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/mail.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light'>contact@habiliteclinics.com</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/location.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light text-wrap'>M 11, Block M, Lajpat Nagar Road,Lajpat Nagar 2, Lajpat Nagar, New Delhi, Delhi 110024</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/location.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light '>C-7/186, SDA, Hauz Khas, New Delhi, Delhi 110016</h1>
            </div>
            </div>
        </div>
        <div className='flex items-start justify-center gap-10 py-10'>
        <div className='flex-col items-center text-left hidden lg:block'>
          <h1 className='text-xl text-white/90 text-semibold pb-8'>Laparoscopic Surgery</h1>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Gall Stones Treatment</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Laparoscopic Hernia Treatment</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Rectal prolapse</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Appendix</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Gerd</p></a>
        </div>
        <div className='flex-col items-center text-left hidden lg:block'>
        <h1 className='text-xl text-white/90 text-semibold pb-8'>Bariatric Surgery</h1>
        <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Best Bariatric surgeon in Delhi</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Non-surgical weight loss program</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Surgery for diabetes</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Intragastric Balloon For Weight Loss</p></a>
        </div>
        <div className='flex-col items-center text-left hidden lg:block'>
        <h1 className='text-xl text-white/90 text-semibold pb-8'>Laser Surgery</h1>
        <a><p className='text-md text-white/70 text-light py-2 hover:text-white'>Hemorrhoids / Piles Treatment</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Anal fistula Treatment</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Pilonidal Sinus</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Anal fissure Treatment</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Lipoma</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Circumcision</p></a>
        </div>
        <div className='flex-col items-center text-left hidden lg:block'>
        <h1 className='text-xl text-white/90 text-semibold pb-8'>Calculate</h1>
        <a><p className='text-md text-white/70 text-light py-2 hover:text-white'>BMI Calculator</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Calorie Calculator</p></a>
          <a><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Exercise Calculator</p></a>
        </div>
        </div>
        </div>
        <div className='bg-blue-800 justify-center items-center flex'>
        <h1 className='md:text-sm px-4 md:px-0 text-xs py-3 text-semibold text-white'>Copyright©2024 HABILITE Clinics.&nbsp;&nbsp;&nbsp; All Rights Reserved!&nbsp;&nbsp;&nbsp; Privacy Policy</h1>
        </div>
      </section>
  )
}

export default Footer
