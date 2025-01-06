import React from 'react'

function Team() {
  return (
     
    <div className="w-screen p-20 "> 
    <div>
       {/* {heading} */}
       
      <div className="flex flex-col items-center relative pt-20">
       
        <div className="relative flex flex-col items-center mt-5 md:mt-10">
       
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-first">Meet The Team</h1>
          <div className="md:w-32 w-16 md:h-[4px] h-[2px] bg-gray-700 mt-2"></div>
        </div>
    </div> <br />
      <p className=' text-gray-500 flex items-center justify-center text-center mx-auto mb-10 text-2xl px-10'> <b>We are a team of qualified psychiatrists and psychologists from premier institutions of the country. <br />We are highly motivated to provide cutting egde evidence based management for mental health issues tailored to individual needs.</b>
      </p>
      </div>
      <div className='container flex items-center justify-center mx-auto m-10 border-gray-500 border-gray-200 border-t-2 mt-10 mb-10' >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-h-xl p-4 m-16">

        
      {/* {card1} */}
      <div className="bg-white mt-24 cursor-pointer rounded-lg p-3 border-2 border-gray-100 transform hover:scale-105 transition-transform duration-300">
         <div className="mx-auto w-60 h-60 relative -mt-28 shadow-third shadow-lg border-4 border-gray rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300  ">
        <img
          src = {"/doc1.jpg"}
          className="object-cover object-center h-64"/>
      </div>
      <div className='mx-auto'> 
<div className="p-3 mt-2 gap-4 text-first text-xl font-bold flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
  
  <div className="flex items-center justify-center mx-auto ">

        <h2 className="font-semibold p-3 text-5xl mt-2 text-second">Sarah Smith</h2>
      
    </div>
      </div>
      </div>  
      <div className="p-3 gap-2 text-xl flex flex-col m-2">
        <p className="text-second/70 text-center font-bold">MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic Consultant Psychiatrist and Deaddiction Specialist</p>
        <p className='text-black flex justify-center items-center text-center mt-8'>•10+ years Experience•</p>

        <div className='border-t-2 border-gray-200 mt-3'>
        <div className='text-gray-400 gap-4 flex justify-center items-center text-center mt-4'>
        <div className="inline-flex text-2xl transform hover:scale-105 transition-transform duration-300">
                            <svg className="h-6 w-6 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>Delhi,India • </div>
      <p className='text-2xl hover:text-first hover:border-b-2 hover:border-first transform hover:scale-105 transition-transform duration-300'>Contact Info</p>
        </div>
        </div>
      </div>
     </div>


         {/* {card2} */}
         <div className="bg-white mt-24 cursor-pointer rounded-lg p-3 border-2 border-gray-100 transform hover:scale-105 transition-transform duration-300">
         <div className="mx-auto w-60 h-60 relative -mt-28 shadow-third shadow-lg border-4 border-gray rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300  ">
        <img
          src = {"/doc2.jpg"}
          className="object-cover object-center h-64"/>
      </div>
      <div className='mx-auto'> 
<div className="p-3 mt-2 gap-4 text-first text-xl font-bold flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
  
  <div className="flex items-center justify-center mx-auto ">

        <h2 className="font-semibold p-3 text-5xl mt-2 text-second">Sarah Smith</h2>
      
    </div>
      </div>
      </div>  
      <div className="p-3 gap-2 text-xl flex flex-col m-2">
        <p className="text-second/70 text-center font-bold">MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic Consultant Psychiatrist and Deaddiction Specialist</p>
        <p className='text-black flex justify-center items-center text-center mt-8'>•10+ years Experience•</p>

        <div className='border-t-2 border-gray-200 mt-3'>
        <div className='text-gray-400 gap-4 flex justify-center items-center text-center mt-4'>
        <div className="inline-flex text-2xl transform hover:scale-105 transition-transform duration-300">
                            <svg className="h-6 w-6 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>Delhi,India • </div>
      <p className='text-2xl hover:text-first hover:border-b-2 hover:border-first transform hover:scale-105 transition-transform duration-300'>Contact Info</p>
        </div>
        </div>
      </div>
     </div>

        
        {/* {card3} */}
        <div className="bg-white mt-24 cursor-pointer rounded-lg p-3 border-2 border-gray-100 transform hover:scale-105 transition-transform duration-300">
         <div className="mx-auto w-60 h-60 relative -mt-28 shadow-third shadow-lg border-4 border-gray rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300  ">
        <img
          src = {"/doc3.jpg"}
          className="object-cover object-center h-64"/>
      </div>
      <div className='mx-auto'> 
<div className="p-3 mt-2 gap-4 text-first text-xl font-bold flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
  
  <div className="flex items-center justify-center mx-auto ">

        <h2 className="font-semibold p-3 text-5xl mt-2 text-second">Sarah Smith</h2>
      
    </div>
      </div>
      </div>  
      <div className="p-3 gap-2 text-xl flex flex-col m-2">
        <p className="text-second/70 text-center font-bold">MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic Consultant Psychiatrist and Deaddiction Specialist</p>
        <p className='text-black flex justify-center items-center text-center mt-8'>•10+ years Experience•</p>

        <div className='border-t-2 border-gray-200 mt-3'>
        <div className='text-gray-400 gap-4 flex justify-center items-center text-center mt-4'>
        <div className="inline-flex text-2xl transform hover:scale-105 transition-transform duration-300">
                            <svg className="h-6 w-6 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>Delhi,India • </div>
      <p className='text-2xl hover:text-first hover:border-b-2 hover:border-first transform hover:scale-105 transition-transform duration-300'>Contact Info</p>
        </div>
        </div>
      </div>
     </div>
      </div>
      </div>
    </div>
  )
}

export default Team