'use client';
import React from 'react';
import Head from 'next/head';
import BmiCalculator from '../../components/bmi';

function BmiPage() {
  return (
    <div className="min-h-screen mt-12 items-center justify-center ">
      <Head>
        <title>BMI Calculator</title>
      </Head>
      <main>
        <div>
          <div className="relative w-full pb-10">
            <img
              src="/banner-2.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-first px-4 py-2 rounded-md items-center justify-center text-center ">
                BMI Calculator
              </h1>
            </div>
          </div>
        </div>
        <BmiCalculator />
      </main>
    </div>
  );
}

export default BmiPage;
