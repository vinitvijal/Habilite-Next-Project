'use client'

import React from 'react'
import { motion } from "motion/react";
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className='rounded-3xl h-fit w-screen md:px-28 px-5 mb-16'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className='md:text-4xl text-3xl whitespace-normal font-semibold'>Best <span className='text-first'>Laparoscopic, Laser and Weight Loss Surgery</span> in Delhi.</p>
        <p className='text-gray-500/80 md:text-xl text-lg mt-2 whitespace-normal'>Advanced surgical solutions tailored for your well-being.</p>
      </motion.div>

      <div className="content mt-12 md:flex gap-6 justify-between">

        <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1}} className="text md:w-9/12 mt-3 text-lg">
          <p className='whitespace-normal'>Dr Kapil Agrawal is a senior & experienced surgeon having more than 20 yrs of dedicated service in the field of surgery, especially Advanced Laparoscopic Surgery / Bariatric and Laser Surgery. Throughout his career, he has distinguished himself through innovative practice methods, groundbreaking research and an unwavering pledge to patient welfare.</p>
          <p className='whitespace-normal mt-7'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. As a pioneer in the field of obesity management, he always advocates for holistic approaches, emphasizing the pivotal role of dietary changes and medical interventions in combating this global health epidemic. Having performed more than 7000+ advanced laparoscopic and bariatric surgeries, he is well known for his unparalleled expertise and compassionate patient care. He is fully committed to surgical excellence and patient well-being.</p>
          <div className="img-txt mt-16 text-md">
            <p className='text-first font-semibold text-xl'>Dr. KAPIL AGRAWAL</p>
            <p className='whitespace-normal text-md'>MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS</p>
            <p className='whitespace-normal text-md text-first font-semibold'>Senior Consultant, Laparoscopic & Laser Surgeon</p>
          </div>
        </motion.div>

        <motion.div  initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} className="image md:w-3/12 w-10/12 flex flex-col md:mt-0 mt-5 md:mx-0 mx-auto">
          <Image
            src="/doctor.webp"
            width={350}
            height={350}
            alt="Dr.Kapil Agarwal" />

          <Link href="/dr-kapil-about" className='self-end md:mr-12 mx-auto md:mt-auto mt-10 px-3 py-2 text-first border border-1 border-gray-300 rounded-md flex gap-1 items-center justify-center md:hover:text-white md:hover:bg-first select-none duration-150 cursor-pointer'>Read More <ChevronRight className='w-3 h-4' /></Link>
        </motion.div>
      </div>
    </section>
  )
}