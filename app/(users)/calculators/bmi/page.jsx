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
      <main className="flex flex-col items-center justify-center w-full px-10 text-center">
        <h1 className="text-5xl text-first font-bold mb-10">BMI Calculator</h1>
        <BmiCalculator />
      </main>
    </div>
  );
}

export default BmiPage;
