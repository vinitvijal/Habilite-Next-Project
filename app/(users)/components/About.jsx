'use client'

import React from 'react'
import * as Separator from "@radix-ui/react-separator";
import { motion } from "motion/react";
import TextAnimate from '@/components/ui/anim-text';

export default function About() {
  return (
    <section className='h-full  py-5 w-full'>
      <motion.div className='flex flex-col gap-2 items-center'>
        <TextAnimate text="ABOUT US" type="calmInUp" className="text-2xl md:text-4xl text-center font-bold whitespace-normal" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
      {/* <p className='text-first text-3xl lg:text-5xl mb-4 text-left'>About Us</p>
      <Separator.Root orientation="horizontal" className="mx-0 w-1/4 lg:w-1/12 h-[1px] bg-third" /> */}

      {/* <div className="upper-content flex flex-col lg:flex-row mt-8 lg:mt-3">
        <div className="content mt-8 lg:mr-5">

          	<p className='text-xl lg:text-3xl text-second'>Best Laparoscopic, Laser and Weight Loss Surgery in Delhi</p>
	@@ -32,7 +36,37 @@ function About() {

      <div className="flex justify-center lg:justify-start">
        <button className='mt-8 w-28 p-[6px] duration-300 border-first border-[1px] rounded-md hover:bg-first hover:text-white text-first'>Know More</button>
      </div> */}

        <div className='flex justify-center md:pb-8 pb-4'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:mt-14 mt-10 items-center gap-20 md:px-0 px-10'>
          <div className='flex flex-col items-start gap-6'>
            <div className='text-4xl text-first font-semibold whitespace-normal max-w-lg'>Best Laparoscopic, Laser and Weight Loss Surgery in Delhi</div>
            <div className='flex flex-col gap-2'>
              <div className='max-w-xl whitespace-normal text-sm'>Dr Kapil Agrawal is a senior & experienced surgeon having more than 20 yrs of dedicated service in the field of surgery, especially Advanced Laparoscopic Surgery / Bariatric and Laser Surgery. Throughout his career, he has distinguished himself through innovative practice methods, groundbreaking research and an unwavering pledge to patient welfare.
              </div>
              <div className='max-w-lg whitespace-normal text-sm'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. ...
              </div>
              {/* <div className='max-w-lg whitespace-normal text-sm'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. As a pioneer in the field of obesity management, he always advocates for holistic approaches, emphasizing the pivotal role of dietary changes and medical interventions in combating this global health epidemic. Having performed more than 7000+ advanced laparoscopic and bariatric surgeries, he is well known for his unparalleled expertise and compassionate patient care. He is fully committed to surgical excellence and patient well-being.
              </div> */}
            </div>
            <div className='max-w-lg whitespace-normal text-normal'>
              <div className='text-first font-semibold'>Dr. KAPIL AGRAWAL</div>
              <div>MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS</div>
              <div className='text-sm text-first font-semibold'>Senior Consultant, Laparoscopic & Laser Surgeon</div>
            </div>
            <div><div className="flex justify-center">
        <a href="" className=" text-first border border-first py-2 px-6 gap-2 rounded inline-flex items-center hover:bg-first hover:text-white duration-300">
          <span>
              Know more
          </span>
        </a>
      </div></div>
          </div>
          <div className="docimg">
            <img src="/doctor.webp" className='md:w-[34vw] md:ml-10' alt='' />
          </div>
        </div></div>
      </motion.div>
    </section>
  )
}