import React from 'react'

function Footer() {
  return (
      <section id='footer' className='bg-blue-700 flex h-full flex-col '> 
        {/* <div className='flex justify-center items-center bg-white rounded-b-full h-[5vh] w-full'></div> */}
        <img src='/foot-design.png' className='w-full'/>
        <div className='flex justify-center items-center gap-20 px-52 py-10'>
        <div className='flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl text-white'>Habilite Clinic.</h1>
            <h1 className='font-semibold text-md text-white/50'>Weight Loss | Laprosy | Laser</h1>
            <div className='flex items-center gap-4 py-5'>
            <img src="/social-media-icons/linkedIn.svg" className='h-6 w-6'/>
            <img src="/social-media-icons/facebook.png" className='h-6 w-6'/>
            <img src="/social-media-icons/Youtube.png" className='h-6 w-6'/>
            <img src="/social-media-icons/pinterest.svg" className='h-7 w-7'/>
            <img src="/social-media-icons/twitter.svg" className='h-7 w-7'/>
            </div>
            <div className='flex flex-col pt-6 gap-4'>
            <div className='flex items-center gap-2'>
              <img src="/call.png" className='h-5 w-5'/>
              <h1 className='text-md text-white/80 text-light'>+(91) 9999456455</h1>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/call.png" className='h-5 w-5'/>
              <h1 className='text-md text-white/80 text-light'>+(91) 9910024564</h1>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/mail.png" className='h-5 w-5'/>
              <h1 className='text-md text-white/80 text-light '>contact@habiliteclinics.com</h1>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/location.png" className='h-5 w-5'/>
              <h1 className='text-md text-white/80 text-light'>M 11, Block M, Lajpat Nagar Road,Lajpat Nagar 2, Lajpat Nagar, New Delhi, Delhi 110024</h1>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/location.png" className='h-5 w-5'/>
              <h1 className='text-md text-white/80 text-light'>C-7/186, SDA, Hauz Khas, New Delhi, Delhi 110016</h1>
            </div>
            </div>
        </div>
        <div className='flex-col items-center text-left'>
          <h1 className='text-xl text-white/60 text-extrabold pb-8'>Laparoscopic Surgery</h1>
          <p className='text-md text-white/80 text-light py-2'>Gall Stones Treatment</p>
          <p className='text-md text-white/80 text-light py-2'>Laparoscopic Hernia Treatment</p>
          <p className='text-md text-white/80 text-light py-2'>Rectal prolapse</p>
          <p className='text-md text-white/80 text-light py-2'>Appendix</p>
          <p className='text-md text-white/80 text-light py-2'>Gerd</p>
        </div>
        <div className='flex-col items-center text-left'>
          <h1 className='text-xl text-white/60 text-extrabold pb-8'>Laparoscopic Surgery</h1>
          <p className='text-md text-white/80 text-light py-2'>Gall Stones Treatment</p>
          <p className='text-md text-white/80 text-light py-2'>Laparoscopic Hernia Treatment</p>
          <p className='text-md text-white/80 text-light py-2'>Rectal prolapse</p>
          <p className='text-md text-white/80 text-light py-2'>Appendix</p>
          <p className='text-md text-white/80 text-light py-2'>Gerd</p>
        </div>
        <div className='flex-col items-center text-left'>
          <h1 className='text-xl text-white/60 text-extrabold pb-8'>Laparoscopic Surgery</h1>
          <p className='text-md text-white/80 text-light py-2'>Gall Stones Treatment</p>
          <p className='text-md text-white/80 text-light py-2'>Laparoscopic Hernia Treatment</p>
          <p className='text-md text-white/80 text-light py-2'>Rectal prolapse</p>
          <p className='text-md text-white/80 text-light py-2'>Appendix</p>
          <p className='text-md text-white/80 text-light py-2'>Gerd</p>
        </div>
        </div>
        <div className='bg-blue-800 justify-center items-center flex'>
        <h1 className='text-sm text-end py-3 text-semibold text-white'>Copyright©2024 HABILITE Clinics. All Rights Reserved ! Privacy Policy</h1>
        </div>
      </section>
  )
}

export default Footer
