'use client'
import React from 'react'
import ExerciseCalculator from '../../components/ExerciseCalculator'
import Head from 'next/head'

function page() {
  return (
  <div className="min-h-screen items-center justify-center ">
      <Head>
        <title>Calorie Calculator</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div>
          <div className="relative w-full pb-10">
            <img
              src="/banner-2.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-first px-4 py-2 rounded-md items-center justify-center text-center ">
                Exercise Calculator
              </h1>
            </div>
          </div>
        </div>
        <ExerciseCalculator/>
      </main>
    </div>
  )
}

export default page
