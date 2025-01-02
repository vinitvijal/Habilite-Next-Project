import React from 'react'

function Team() {
  return (
     
    <div className="w-screen p-20 "> 
    <div>
       {/* {heading} */}
     
      <div class="flex flex-col items-center relative pt-20">
       
        <div class="relative flex flex-col items-center mt-5 md:mt-10">
       
          <h1 class="text-2xl md:text-4xl lg:text-7xl font-semibold text-gray-600">Meet The Team</h1>
          <div class="md:w-32 w-16 md:h-[4px] h-[2px] bg-first mt-2"></div>
        </div>
    </div> <br />
      <p className=' text-gray-500 flex items-center justify-center text-center mx-auto mb-10 text-2xl px-10'> <b>We are a team of qualified psychiatrists and psychologists from premier institutions of the country. <br />We are highly motivated to provide cutting egde evidence based management for mental health issues tailored to individual needs.</b>
      </p>
      </div>
      <div className='container flex items-center justify-center mx-auto m-10 border-gray-500 border-gray-200 border-t-2 mt-10' >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-h-2xl p-10 m-8">

        
        {/* {card1} */}
         <div className="bg-white cursor-pointer rounded-lg p-4 border-2 border-gray-50 hover:border-first hover:border-3 transform hover:scale-105 transition-transform duration-300">
       <div className="flex justify-center item-center transform hover:scale-105 transition-transform duration-300 w-full ">
       <div className="flex flex-col justify-center bg-white">
      <div className="group h-96 w-96 [perspective:1000px] p-3">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src = {"/doc1.jpg"}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              alt="SSCBS"/>
          </div>
          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center text-lg">
            <p className="text-white font-bold">Hello everyone.</p>
        <p className="text-white font-bold"> MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className='mx-auto'> 
<div className="p-4 mt-8 gap-4 text-first text-xl font-bold flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
  <div className=' border-t-2 border-first w-full'>
       <button className='inline-flex items-center justify-center mt-6 rounded cursor-pointer w-full bg-blue-600 px-3 py-4 text-2xl font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px]'>
        <div > DR. ADIN AZAM </div>
        </button> 
        </div>
      </div>
      </div>  
        </div>
        

         {/* {card2} */}
         <div className="bg-white cursor-pointer rounded-lg p-4 border-2 border-gray-50 hover:border-first hover:border-3 transform hover:scale-105 transition-transform duration-300">
       <div className="flex justify-center item-center transform hover:scale-105 transition-transform duration-300 w-full ">
       <div className="flex flex-col justify-center bg-white">
      <div className="group h-96 w-96 [perspective:1000px] p-3">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src = {"/doc2.jpg"}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              alt="SSCBS"/>
          </div>
          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center text-lg">
            <p className="text-white font-bold">Hello everyone.</p>
        <p className="text-white font-bold"> MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className='mx-auto'> 
<div className="p-4 mt-8 gap-4 text-first text-xl font-bold flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
  <div className=' border-t-2 border-first w-full'>
       <button className='inline-flex items-center justify-center mt-6 rounded cursor-pointer w-full bg-blue-600 px-3 py-4 font-semibold text-2xl text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px]'>
        <div > DR. ADIN AZAM </div>
        </button> 
        </div>
      </div>
      </div>  
        </div>
        
        {/* {card3} */}
        <div className="bg-white cursor-pointer rounded-lg p-4 border-2 border-gray-50 hover:border-first hover:border-3 transform hover:scale-105 transition-transform duration-300">
       <div className="flex justify-center item-center transform hover:scale-105 transition-transform duration-300 w-full ">
       <div className="flex flex-col justify-center bg-white">
      <div className="group h-96 w-96 [perspective:1000px] p-3">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src = {"/doc3.jpg"}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              alt="SSCBS"/>
          </div>
          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center text-lg">
            <p className="text-white font-bold">Hello everyone.</p>
        <p className="text-white font-bold"> MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className='mx-auto'> 
<div className="p-4 mt-8 gap-4 text-first text-xl font-bold flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
  <div className=' border-t-2 border-first w-full'>
       <button className='inline-flex items-center justify-center mt-6 rounded cursor-pointer w-full bg-blue-600 px-3 py-4 font-semibold 
       text-2xl text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px]'>
        <div > DR. ADIN AZAM </div>
        </button> 
        </div>
      </div>
      </div>  
        </div>
         {/* {end} */}
        
      </div>
      </div>
    </div>
  )
}


export default Team

