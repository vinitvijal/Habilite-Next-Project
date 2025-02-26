'use client'

import React from 'react'
import { motion } from "motion/react";
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="relative rounded-3xl h-fit w-screen md:px-14 px-6 mb-16 ">

      <div className="icons absolute left-0 -top-24 z-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1800" height="800" preserveAspectRatio="none" viewBox="0 0 1750 780">
          <g mask="url(&quot;#SvgjsMask1377&quot;)" fill="none">
            <path d="M53.68 203.48L96.98 228.48L96.98 278.48L53.68 303.48L10.38 278.48L10.38 228.48zM53.68 353.48L96.98 378.48L96.98 428.48L53.68 453.48L10.38 428.48L10.38 378.48zM10.38 428.48L53.68 453.48L53.68 503.48L10.38 528.48L-32.92 503.48L-32.92 453.48zM10.38 578.48L53.68 603.48L53.68 653.48L10.38 678.48L-32.92 653.48L-32.92 603.48zM53.68 803.48L96.98 828.48L96.98 878.48L53.68 903.48L10.38 878.48L10.38 828.48zM140.29 203.48L183.59 228.48L183.59 278.48L140.29 303.48L96.98 278.48L96.98 228.48zM96.98 278.48L140.29 303.48L140.29 353.48L96.98 378.48L53.68 353.48L53.68 303.48zM140.29 503.48L183.59 528.48L183.59 578.48L140.29 603.48L96.98 578.48L96.98 528.48zM140.29 653.48L183.59 678.48L183.59 728.48L140.29 753.48L96.98 728.48L96.98 678.48zM96.98 728.48L140.29 753.48L140.29 803.48L96.98 828.48L53.68 803.48L53.68 753.48zM140.29 803.48L183.59 828.48L183.59 878.48L140.29 903.48L96.98 878.48L96.98 828.48zM183.59 -21.52L226.89 3.48L226.89 53.48L183.59 78.48L140.29 53.48L140.29 3.48zM226.89 203.48L270.19 228.48L270.19 278.48L226.89 303.48L183.59 278.48L183.59 228.48zM270.19 -21.52L313.5 3.48L313.5 53.48L270.19 78.48L226.89 53.48L226.89 3.48zM270.19 128.48L313.5 153.48L313.5 203.48L270.19 228.48L226.89 203.48L226.89 153.48zM270.19 578.48L313.5 603.48L313.5 653.48L270.19 678.48L226.89 653.48L226.89 603.48zM313.5 653.48L356.8 678.48L356.8 728.48L313.5 753.48L270.19 728.48L270.19 678.48zM270.19 728.48L313.5 753.48L313.5 803.48L270.19 828.48L226.89 803.48L226.89 753.48zM400.1 53.48L443.41 78.48L443.41 128.48L400.1 153.48L356.8 128.48L356.8 78.48zM356.8 278.48L400.1 303.48L400.1 353.48L356.8 378.48L313.5 353.48L313.5 303.48zM400.1 353.48L443.41 378.48L443.41 428.48L400.1 453.48L356.8 428.48L356.8 378.48zM356.8 428.48L400.1 453.48L400.1 503.48L356.8 528.48L313.5 503.48L313.5 453.48zM400.1 803.48L443.41 828.48L443.41 878.48L400.1 903.48L356.8 878.48L356.8 828.48zM443.41 128.48L486.71 153.48L486.71 203.48L443.41 228.48L400.1 203.48L400.1 153.48zM443.41 428.48L486.71 453.48L486.71 503.48L443.41 528.48L400.1 503.48L400.1 453.48zM486.71 653.48L530.01 678.48L530.01 728.48L486.71 753.48L443.41 728.48L443.41 678.48zM530.01 -21.52L573.31 3.48L573.31 53.48L530.01 78.48L486.71 53.48L486.71 3.48zM573.31 353.48L616.62 378.48L616.62 428.48L573.31 453.48L530.01 428.48L530.01 378.48zM573.31 503.48L616.62 528.48L616.62 578.48L573.31 603.48L530.01 578.48L530.01 528.48zM616.62 128.48L659.92 153.48L659.92 203.48L616.62 228.48L573.31 203.48L573.31 153.48zM659.92 203.48L703.22 228.48L703.22 278.48L659.92 303.48L616.62 278.48L616.62 228.48zM659.92 503.48L703.22 528.48L703.22 578.48L659.92 603.48L616.62 578.48L616.62 528.48zM659.92 803.48L703.22 828.48L703.22 878.48L659.92 903.48L616.62 878.48L616.62 828.48zM703.22 428.48L746.52 453.48L746.52 503.48L703.22 528.48L659.92 503.48L659.92 453.48zM746.52 653.48L789.83 678.48L789.83 728.48L746.52 753.48L703.22 728.48L703.22 678.48zM789.83 728.48L833.13 753.48L833.13 803.48L789.83 828.48L746.52 803.48L746.52 753.48zM876.43 -21.52L919.73 3.48L919.73 53.48L876.43 78.48L833.13 53.48L833.13 3.48zM876.43 128.48L919.73 153.48L919.73 203.48L876.43 228.48L833.13 203.48L833.13 153.48zM876.43 578.48L919.73 603.48L919.73 653.48L876.43 678.48L833.13 653.48L833.13 603.48zM919.73 803.48L963.04 828.48L963.04 878.48L919.73 903.48L876.43 878.48L876.43 828.48zM1006.34 53.48L1049.64 78.48L1049.64 128.48L1006.34 153.48L963.04 128.48L963.04 78.48zM1006.34 203.48L1049.64 228.48L1049.64 278.48L1006.34 303.48L963.04 278.48L963.04 228.48zM963.04 428.48L1006.34 453.48L1006.34 503.48L963.04 528.48L919.73 503.48L919.73 453.48zM963.04 578.48L1006.34 603.48L1006.34 653.48L963.04 678.48L919.73 653.48L919.73 603.48zM1006.34 653.48L1049.64 678.48L1049.64 728.48L1006.34 753.48L963.04 728.48L963.04 678.48zM963.04 728.48L1006.34 753.48L1006.34 803.48L963.04 828.48L919.73 803.48L919.73 753.48zM1049.64 -21.52L1092.94 3.48L1092.94 53.48L1049.64 78.48L1006.34 53.48L1006.34 3.48zM1092.94 353.48L1136.25 378.48L1136.25 428.48L1092.94 453.48L1049.64 428.48L1049.64 378.48zM1092.94 803.48L1136.25 828.48L1136.25 878.48L1092.94 903.48L1049.64 878.48L1049.64 828.48zM1179.55 203.48L1222.85 228.48L1222.85 278.48L1179.55 303.48L1136.25 278.48L1136.25 228.48zM1136.25 278.48L1179.55 303.48L1179.55 353.48L1136.25 378.48L1092.94 353.48L1092.94 303.48zM1179.55 653.48L1222.85 678.48L1222.85 728.48L1179.55 753.48L1136.25 728.48L1136.25 678.48zM1266.15 53.48L1309.46 78.48L1309.46 128.48L1266.15 153.48L1222.85 128.48L1222.85 78.48zM1266.15 503.48L1309.46 528.48L1309.46 578.48L1266.15 603.48L1222.85 578.48L1222.85 528.48zM1222.85 728.48L1266.15 753.48L1266.15 803.48L1222.85 828.48L1179.55 803.48L1179.55 753.48zM1266.15 803.48L1309.46 828.48L1309.46 878.48L1266.15 903.48L1222.85 878.48L1222.85 828.48zM1352.76 203.48L1396.06 228.48L1396.06 278.48L1352.76 303.48L1309.46 278.48L1309.46 228.48zM1439.36 53.48L1482.67 78.48L1482.67 128.48L1439.36 153.48L1396.06 128.48L1396.06 78.48zM1396.06 128.48L1439.36 153.48L1439.36 203.48L1396.06 228.48L1352.76 203.48L1352.76 153.48zM1396.06 578.48L1439.36 603.48L1439.36 653.48L1396.06 678.48L1352.76 653.48L1352.76 603.48zM1482.67 -21.52L1525.97 3.48L1525.97 53.48L1482.67 78.48L1439.36 53.48L1439.36 3.48zM1482.67 278.48L1525.97 303.48L1525.97 353.48L1482.67 378.48L1439.36 353.48L1439.36 303.48zM1525.97 653.48L1569.27 678.48L1569.27 728.48L1525.97 753.48L1482.67 728.48L1482.67 678.48zM1569.27 -21.52L1612.57 3.48L1612.57 53.48L1569.27 78.48L1525.97 53.48L1525.97 3.48zM1612.57 53.48L1655.88 78.48L1655.88 128.48L1612.57 153.48L1569.27 128.48L1569.27 78.48zM1569.27 578.48L1612.57 603.48L1612.57 653.48L1569.27 678.48L1525.97 653.48L1525.97 603.48zM1569.27 728.48L1612.57 753.48L1612.57 803.48L1569.27 828.48L1525.97 803.48L1525.97 753.48zM1699.18 353.48L1742.48 378.48L1742.48 428.48L1699.18 453.48L1655.88 428.48L1655.88 378.48zM1699.18 503.48L1742.48 528.48L1742.48 578.48L1699.18 603.48L1655.88 578.48L1655.88 528.48zM1742.48 -21.52L1785.78 3.48L1785.78 53.48L1742.48 78.48L1699.18 53.48L1699.18 3.48zM1785.78 53.48L1829.09 78.48L1829.09 128.48L1785.78 153.48L1742.48 128.48L1742.48 78.48zM1785.78 353.48L1829.09 378.48L1829.09 428.48L1785.78 453.48L1742.48 428.48L1742.48 378.48zM1785.78 503.48L1829.09 528.48L1829.09 578.48L1785.78 603.48L1742.48 578.48L1742.48 528.48zM1742.48 728.48L1785.78 753.48L1785.78 803.48L1742.48 828.48L1699.18 803.48L1699.18 753.48z" stroke="rgba(6, 80, 156, 0.22)" stroke-width="2"></path>
          </g>
          <defs>
            <mask id="SvgjsMask1377">
              <rect width="1800" height="800" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>

      <div className='bg-white relative md:px-14 border-1 border-gray-500/20 border md:py-16 rounded-md shadow-md px-4 py-6 duration-200'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='md:text-4xl text-3xl whitespace-normal font-semibold'>Best <span className='text-first'>Laparoscopic, Laser and Weight Loss Surgery</span> in Delhi.</p>
          <p className='text-gray-500/80 md:text-xl text-lg mt-2 whitespace-normal'>Advanced surgical solutions tailored for your well-being.</p>
        </motion.div>
        <div className="content md:gap-10 md:mt-0 mt-7 md:flex gap-6 justify-between">
          <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="text md:mt-10 md:w-8/12 mt-3 text-lg">
            <p className='whitespace-normal md:text-md text-base'>Dr Kapil Agrawal is a senior & experienced surgeon having more than 20 yrs of dedicated service in the field of surgery, especially Advanced Laparoscopic Surgery / Bariatric and Laser Surgery. Throughout his career, he has distinguished himself through innovative practice methods, groundbreaking research and an unwavering pledge to patient welfare.</p>
            <p className='whitespace-normal md:mt-7 mt-4 md:text-md text-base'>Dr. Kapil Agrawal's expertise spans a wide spectrum of surgical procedures, from intricate and advanced laser surgeries for piles and fistula to transformative Bariatric or weight loss surgeries. As a pioneer in the field of obesity management, he always advocates for holistic approaches, emphasizing the pivotal role of dietary changes and medical interventions in combating this global health epidemic. Having performed more than 7000+ advanced laparoscopic and bariatric surgeries, he is well known for his unparalleled expertise and compassionate patient care. He is fully committed to surgical excellence and patient well-being.</p>
            <Image
              src="/doctor.webp"
              width={350}
              height={350}
              alt="Dr.Kapil Agarwal" className='md:border mt-7 md:hidden md:border-1 md:border-gray-500/20 rounded-xl md:shadow-md duration-300' />

            <div className="img-txt md:mt-14 mt-5 text-md">
              <p className='text-first font-semibold text-xl md:text-left text-center'>Dr. KAPIL AGRAWAL</p>
              <p className='whitespace-normal md:text-base md:text-left text-center text-sm'>MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS</p>
              <p className='whitespace-normal md:text-base text-first font-semibold md:text-left text-center text-sm'>Senior Consultant, Laparoscopic & Laser Surgeon</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="image md:w-4/12 w-10/12 flex items-center gap-4 justify-center flex-col  md:mt-0 mt-5 md:mx-0 mx-auto">
            <Image
              src="/doctor.webp"
              width={200}
              height={200}
              alt="Dr.Kapil Agarwal" className='hidden md:block w-10/12  md:border-1 md:border-gray-500/20 rounded-xl md: duration-300' />
            <Link href="/about/dr-kapil-about" className='mx-auto md:ml-auto mt-5 md:mr-20 w-max px-3 py-2 text-first border border-1 border-gray-300 rounded-md flex gap-1 items-center justify-center md:hover:text-white md:hover:bg-first select-none duration-150 cursor-pointer'>Read More <ChevronRight className='w-3 h-4' /></Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}