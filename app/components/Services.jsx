import React from 'react'

function Services() {
  return (
    <div className="min-h-screen w-screen bg-third py-10 flex flex-col items-center"> 
      <div className="container mx-auto px-6"> 
        <h1 className="text-5xl font-bold text-center mb-4 text-second">SERVICES & SPECIALIZATION</h1> 
        <h2 className="text-3xl text-center mb-8 text-first">Rapid Recovery Realized.</h2> 
      </div> 
      <div className='h-full w-5/6 flex justify-center items-center'>
        <div className='w-1/3 h-[80vh] bg-fourth flex flex-col justify-center items-center mx-10 border'>
          <div className='w-full h-[12vh] bg-second flex justify-center items-center text-3xl text-white'>
            Bariatrics / Weight loss
          </div>
          <div className='img w-full h-[28vh] flex justify-center items-center mt-3 mb-1'>
            <img src="/weightloss.jpg" alt="Surgery Image" className="h-full w-full px-3" />
          </div>
          <div className='w-full h-[40vh] flex justify-center items-center'>
            <ul className='w-full list-none flex flex-col items-center justify-center text-2xl text-second'>
              <li className='w-2/3 border-b border- text-center py-2'>Bariatric surgery</li>
              <li className='w-2/3 border-b border- text-center py-2'>Non-surgical weight loss program</li>
              <li className='w-2/3 border-b border- text-center py-2'>Surgery for diabetes</li>
              <li className='w-2/3 text-center py-2'>Intragastric Balloon</li>
            </ul>
          </div>
        </div>

        <div className='w-1/3 h-[80vh] bg-fourth flex flex-col justify-center items-center mx-10 border'>
          <div className='w-full h-[12vh] bg-second flex justify-center items-center text-3xl text-white'>
            Laparoscopic Surgery
          </div>
          <div className='img w-full h-[28vh] flex justify-center items-center my-3 '>
            <img src="/surgery.jpeg" alt="Surgery Image" className="h-full w-full px-3" />
          </div>
          <div className='w-full h-[40vh] flex justify-center items-center'>
            <ul className='w-full list-none flex flex-col items-center justify-center text-2xl text-second'>
              <li className='w-2/3 border-b border- text-center py-2'>Gall stones</li>
              <li className='w-2/3 border-b border- text-center py-2'>Hernia</li>
              <li className='w-2/3 border-b border- text-center py-2'>Rectal prolapse</li>
              <li className='w-2/3 border-b border- text-center py-2'>Appendix</li>
              <li className='w-2/3 text-center py-2'>Gerd</li>
            </ul>
          </div>
        </div>



        <div className='w-1/3 h-[80vh] bg-fourth flex flex-col justify-center items-center mx-10 border'>
          <div className='w-full h-[12vh] bg-second flex justify-center items-center text-3xl text-white'>
            Laser Surgery
          </div>
          <div className='img w-full h-[28vh] flex justify-center items-center mt-3 mb-1'>
            <img src="/laserSurgery.jpg" alt="Surgery Image" className="h-full w-full px-3" />
          </div>
          <div className='w-full h-[40vh] flex justify-center items-center'>
            <ul className='w-full list-none flex flex-col items-center justify-center text-2xl text-second'>
              <li className='w-2/3 border-b border- text-center py-2'>Hemorrhoids/Piles</li>
              <li className='w-2/3 border-b border- text-center py-2'>Anal fissure</li>
              <li className='w-2/3 border-b border- text-center py-2'>Pilonidal sinus</li>
              <li className='w-2/3 border-b border- text-center py-2'>Anal fistula</li>
              <li className='w-2/3 border-b border- text-center py-2'>Lipoma</li>
              <li className='w-2/3 text-center py-2'>Circumcision</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
