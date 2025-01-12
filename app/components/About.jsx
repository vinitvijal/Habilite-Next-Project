'use client'
import React from 'react'
import * as Separator from "@radix-ui/react-separator";
import { motion } from "motion/react";

function About() {
  return (
    <section className='h-full px-5 lg:px-32 py-5 w-full'>
      <motion.div initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3 }} 
          transition={{ duration: 0.8 }} >
      <p className='text-first text-3xl lg:text-5xl mb-4 text-left'>About Us</p>
      <Separator.Root orientation="horizontal" className="mx-0 w-1/4 lg:w-1/12 h-[1px] bg-third" />

      <div className="upper-content flex flex-col lg:flex-row mt-8 lg:mt-3">
        <div className="content mt-8 lg:mr-5">

          	<p className='text-xl lg:text-3xl text-second'>Best Laparoscopic, Laser and Weight Loss Surgery in Delhi</p>

          	<p className='mt-7 text-sm lg:text-base'>Dr Kapil Agrawal is a senior & experienced surgeon having more than 20 yrs of dedicated service in the field of surgery, especially Advanced Laparoscopic Surgery / Bariatric and Laser Surgery. Throughout his career, he has distinguished himself through innovative practice methods, groundbreaking research and an unwavering pledge to patient welfare.</p>
          	<p className='mt-7 text-sm lg:text-base'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. As a pioneer in the field of obesity management, he always advocates for holistic approaches, emphasizing the pivotal role of dietary changes and medical interventions in combating this global health epidemic. Having performed more than 7000+ advanced laparoscopic and bariatric surgeries, he is well known for his unparalleled expertise and compassionate patient care. He is fully committed to surgical excellence and patient well-being.</p>
          	<p className='font-semibold text-first text-lg mt-10 lg:mt-16'>Dr. KAPIL AGRAWAL</p>
          	<p className='text-sm lg:text-base'>MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS</p>
          	<p className='font-semibold text-first text-sm lg:text-base'>Senior Consultant, Laparoscopic & Laser Surgeon</p>
        </div>

        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start lg:w-full lg:h-1/2">
          <img src="/doctor.webp" className='' width={500} height={500} alt="Doctor's Image" />
        </div>
      </div>

      <div className="flex justify-center lg:justify-start">
        <button className='mt-8 w-28 p-[6px] duration-300 border-first border-[1px] rounded-md hover:bg-first hover:text-white text-first'>Know More</button>
      </div>
      </motion.div>
    </section>
  )
}

export default About
