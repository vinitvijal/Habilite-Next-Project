'use client'
import React from 'react'
import { FaSquareXTwitter, FaSquareYoutube, FaSquareFacebook } from "react-icons/fa6";
import { FaPinterestSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link'


function Footer() {
  const handleCall1 = () => {
    window.location.href = "tel:+919999456455";
  };
  const handleCall2 = () => {
    window.location.href = "tel:+919910024564";
  };
  const handleMailClick = () => {
    window.location.href = "mailto:contact@habiliteclinics.com";
  };
  return (
      <section id='footer' className='bg-second flex h-full flex-col w-screen ' > 
        <div className='flex justify-center items-center bg-white h-[12vh] w-screen' style={{clipPath: "ellipse(120vh 90% at top)"}} ></div>
        <div className='flex justify-center items-start px-10 md:px-12 py-12 gap-8'>
        <div className='flex-col justify-center items-center lg:w-1/4'>
            <h1 className='font-bold text-3xl text-white'>Habilite Clinic.</h1>
            <h1 className='font-semibold text-md text-white/50'>Weight Loss | Laprosy | Laser</h1>
            <div className='flex items-center gap-4 py-5'>
            <a href='https://www.linkedin.com/company/habilite-bariatrics'><FaLinkedin className='h-7 w-7 cursor-pointer' color='#d0def5'/></a>
            <a href='https://www.facebook.com/habilite/'><FaSquareFacebook className='h-7 w-7 cursor-pointer' color='#d0def5'/></a>
            <a href='https://www.youtube.com/channel/UCN_a7LtJzwFz5iBb2_6_5xg'><FaSquareYoutube className='h-7 w-7 cursor-pointer' color='#d0def5'/></a>
            <a href='https://www.pinterest.com/habiliteclinics/'><FaPinterestSquare className='h-7 w-7 cursor-pointer' color='#d0def5'/></a>
            <a href='https://twitter.com/habilitecare'><FaSquareXTwitter className='h-7 w-7 cursor-pointer' color='#d0def5'/></a>
            </div>
            <div className='flex flex-col pt-6 gap-4'>
            <div className='flex items-center gap-2 cursor-pointer group' onClick={handleCall1}>
              <img src="/call.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light '>+(91) 9999456455</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group ' onClick={handleCall2}>
              <img src="/call.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light'>+(91) 9910024564</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group' onClick={handleMailClick}>
              <img src="/mail.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <h1 className='text-sm text-white/80 text-light'>contact@habiliteclinics.com</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/location.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <a href='https://www.google.com/maps/place/Habilite+Clinics+%E2%80%93+Best+Bariatric+Surgeon+in+Delhi,+Weight+Loss+Surgery+in+India,+Laparoscopic+Hernia/@28.5689478,77.245657,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce20bd545063b:0xbe2384d68cb7235!8m2!3d28.5689478!4d77.2478457'><h1 className='text-sm text-white/80 text-light text-wrap'>M 11, Block M, Lajpat Nagar Road,Lajpat Nagar 2, Lajpat Nagar, New Delhi, Delhi 110024</h1></a>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
              <img src="/location.png" className='h-5 w-5 transform transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:w-6 group-hover:h-6'/>
              <a href='https://www.google.com/maps/place/Dr+Kapil+Agrawal+-+Best+Bariatric+Surgeon+in+Delhi+NCR,+Laparoscopic+Surgeon/@28.5454359,77.1947228,15z/data=!4m6!3m5!1s0x390ce22d245eb6f1:0xb718bd81ad84df4f!8m2!3d28.5454359!4d77.1947228!16s%2Fg%2F11cs66s18n?hl=en&entry=ttu'><h1 className='text-sm text-white/80 text-light '>C-7/186, SDA, Hauz Khas, New Delhi, Delhi 110016</h1></a>
            </div>
            </div>
        </div>
        <div className='flex items-start justify-center gap-10 py-10'>
        <div className='flex-col items-center text-left hidden lg:block'>
          <h1 className='text-xl text-white/90 text-semibold pb-8'>Laparoscopic Surgery</h1>
          <Link href="/surgery/gall-stone"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Gall Stones Treatment</p></Link>
          <Link href="/surgery/hernia"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Laparoscopic Hernia Treatment</p></Link>
          <Link href="/surgery/rectal-prolapse"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Rectal prolapse</p></Link>
          <Link href="/surgery/appendix"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Appendix</p></Link>
          <Link href="/surgery/gerd"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Gerd</p></Link>
        </div>
        <div className='flex-col items-center text-left hidden lg:block'>
        <h1 className='text-xl text-white/90 text-semibold pb-8'>Bariatric Surgery</h1>
          <Link href="/surgery/bariatric-surgery"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Best Bariatric surgeon in Delhi</p></Link>
          <Link href="/surgery/medical-weight-loss-program"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Non-surgical weight loss program</p></Link>
          <Link href="/surgery/surgery-for-diabetes"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Surgery for diabetes</p></Link>
          <Link href="/surgery/intraGastric-balloon"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Intragastric Balloon For Weight Loss</p></Link>
        </div>
        <div className='flex-col items-center text-left hidden lg:block'>
        <h1 className='text-xl text-white/90 text-semibold pb-8'>Laser Surgery</h1>
          <Link href="/surgery/piles"><p className='text-md text-white/70 text-light py-2 hover:text-white'>Hemorrhoids / Piles Treatment</p></Link>
          <Link href="/surgery/anal-fistula"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Anal fistula Treatment</p></Link>
          <Link href="/surgery/pilonidal"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Pilonidal Sinus</p></Link>
          <Link href="/surgery/anal-fissure"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Anal fissure Treatment</p></Link>
          <Link href="/surgery/lipoma"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Lipoma</p></Link>
          <Link href="/surgery/circumcision"><p className='text-md text-white/70 text-light py-2 cursor-pointer hover:text-white'>Circumcision</p></Link>
        </div>
        <div className='flex-col items-center text-left hidden lg:block'>
        <h1 className='text-xl text-white/90 text-semibold pb-8'>Calculate</h1>
        <Link href="/calculators/bmi"><p className='text-md text-white/70 text-light py-2 hover:text-white'>BMI Calculator</p></Link>
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
