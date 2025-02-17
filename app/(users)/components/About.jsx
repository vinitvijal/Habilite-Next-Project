'use client'

import React from 'react'
import { motion } from "motion/react";
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className='rounded-3xl h-fit w-screen md:px-14 px-6 mb-16'>
      <div className='md:px-14 border-1 border-gray-500/20 border md:py-16 rounded-md md:shadow-lg shadow-md px-4 py-6 duration-200'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='md:text-4xl text-3xl whitespace-normal font-semibold'>Best <span className='text-first'>Laparoscopic, Laser and Weight Loss Surgery</span> in Delhi.</p>
          <p className='text-gray-500/80 md:text-xl text-lg mt-2 whitespace-normal'>Advanced surgical solutions tailored for your well-being.</p>
        </motion.div>
        <div className="content md:mt-12 mt-7 md:flex gap-6 justify-between">
          <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7}} className="text md:w-9/12 mt-3 text-lg">
            <p className='whitespace-normal md:text-lg text-base'>Dr Kapil Agrawal is a senior & experienced surgeon having more than 20 yrs of dedicated service in the field of surgery, especially Advanced Laparoscopic Surgery / Bariatric and Laser Surgery. Throughout his career, he has distinguished himself through innovative practice methods, groundbreaking research and an unwavering pledge to patient welfare.</p>
            <p className='whitespace-normal md:mt-7 mt-4 md:text-lg text-base'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. As a pioneer in the field of obesity management, he always advocates for holistic approaches, emphasizing the pivotal role of dietary changes and medical interventions in combating this global health epidemic. Having performed more than 7000+ advanced laparoscopic and bariatric surgeries, he is well known for his unparalleled expertise and compassionate patient care. He is fully committed to surgical excellence and patient well-being.</p>
            <Image
              src="/doctor.webp"
              width={350}
              height={350}
              alt="Dr.Kapil Agarwal" className='md:border mt-7 md:hidden md:border-1 md:border-gray-500/20 rounded-xl md:shadow-md duration-300'/>
            
            <div className="img-txt md:mt-14 mt-5 text-md">
              <p className='text-first font-semibold text-xl md:text-left text-center'>Dr. KAPIL AGRAWAL</p>
              <p className='whitespace-normal md:text-base md:text-left text-center text-sm'>MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS</p>
              <p className='whitespace-normal md:text-base text-first font-semibold md:text-left text-center text-sm'>Senior Consultant, Laparoscopic & Laser Surgeon</p>
            </div>
          </motion.div>
          <motion.div  initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }} 
            className="image md:w-3/12 w-10/12 flex items-center gap-4 justify-center flex-col  md:mt-0 mt-5 md:mx-0 mx-auto">
            <Image
              src="/doctor.webp"
              width={350}
              height={350}
              alt="Dr.Kapil Agarwal" className='hidden md:block w-full  md:border-1 md:border-gray-500/20 rounded-xl md: duration-300'/>
            <Link href="/about/dr-kapil-about" className=' w-max px-3 py-2 text-first border border-1 border-gray-300 rounded-md flex gap-1 items-center justify-center md:hover:text-white md:hover:bg-first select-none duration-150 cursor-pointer'>Read More <ChevronRight className='w-3 h-4' /></Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}