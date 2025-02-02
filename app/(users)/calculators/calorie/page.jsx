'use client'
import React from 'react'
import CalorieCalculator from '../../components/CalorieCalculator'
import Head from 'next/head'

function page() {
  return (
    // <div className='h-full w-full justify-center items-center flex-col'>
    //   <div className='w-full h-[6vh] justify-center items-center flex'>
    //     <h1 className='font-bold text-5xl text-first'>Calorie Calculator</h1>
    //   </div>
    //   <div className='w-full justify-center items-center px-44 py-5'>
    //     <div className='w-2/3  border-2'>
    //         <h1>Gender:</h1>
    //         <div className='flex'>
    //             <button className='bg-third py-2 px-6 border-2 border-white/45 border-r-0 rounded-l-lg'>Male</button>
    //             <button className='bg-third py-2 px-6 border-2 border-white/45 rounded-r-lg'>Female</button>
    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen mt-12 items-center justify-center ">
      <Head>
        <title>Calorie Calculator</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full px-10 text-center">
        <h1 className="text-5xl text-first font-bold mb-10">Calorie Calculator</h1>
        <CalorieCalculator/>
      </main>
    </div>
  )
}

export default page
