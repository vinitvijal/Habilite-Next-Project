'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";



const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};


function page() {
  
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3,
      duration: 0.8,
      type: "spring",
    },
  }),
};
const cardVariants1 = {
  hidden: { opacity: 0, x: 50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3,
      duration: 0.8,
      type: "spring",
    },
  }),
};
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };



  return (
  <>
  <div className='overflow-x-hidden'>
    <div className='w-screen'>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16 ">
        <div>
          <div className="relative w-full">
            <img
              src="/MAIN.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-30">
              Banded Bariatric Surgery
              </h1>
            </div>
          </div>
         </div>
        <div>
      </div>

        <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10">
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 pb-8 '>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Banded Bariatric Surgery -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>Banded bariatric surgery is a new technique in which is a band is placed during sleeve gastrectomy or gastric bypass which prevents weight regain in the long term.</p>
              <p className='pt-2'>In a few patients, due to poor dietary habits and trying to eat more may result in the dilatation of the stomach pouch.</p>
              <p className='pt-2'>As a result, the stomach starts getting bigger with time and thereby increasing its storage capacity.</p>
              <p className='pt-2'>As a result, patient tends to eat more thereby neutralizing the effect of bariatric surgery to large extent and patient starts gaining weight.</p>
              <p className='pt-2'>The Gabp ring or band is an annular restrictive ring which is placed around the newly created stomach pouch during gastric sleeve or gastric bypass surgery around the newly surgically created pouch during a gastric bypass procedure or sleeve gastrectomy.</p>
              <p className='pt-2'>Minimizer Ring is another option which works in a similar way to GaBP ring.</p>
              </div>
          </motion.div>

          
        <div className='flex-col mb-8 '>
           <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
               <div className='mb-4'>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">How it Works :</h2>
                 <p className='pt-2'>During the surgery, when a new stomach pouch is created in sleeve gastrectomy or gastric bypass.</p>
                 <p className='pt-2'>
                 We place this band around the upper part of new stomach and fix it. It acts as a guard by preventing dilatation of stomach beyond a particular point.</p>
                <p className='pt-2'>It ensures long lasting results in patients undergoing weight loss surgeries.</p>
              </div>
               <div className='mb-4'>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Advantages of Banded Procedure :</h2>
                <p className='pt-2'>→ Ensures higher rate of success in term of sustained weight loss.</p>
                <p className='pt-2'>→ AReduces rate of gastric outlet problems at the anastomosis.</p>
                <p className='pt-2'>→ Reduces other complications associated with pouch outlet dilation like GERD, dumping syndrome, and reactive hypoglycemia.</p>
                <p className='pt-2'>When the psychologist evaluation prior to surgery suggests that patient has a poor compliance with dietary and life style modifications or the patient is a volume eater then we advise for ring insertion for better and long-lasting weight loss.</p>
               </div>
          </motion.div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10 mb-16">
          <div className='flex-col items-center justify-center mx-auto my-8'>
            <div className="text-center mb-12">
              <motion.h1
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2,once:true }}
              className="uppercase text-3xl md:text-4xl font-semibold text-first m-4">
             Contact our Specialist Today
              </motion.h1>
              <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%", duration: 2000 }}
              className="mx-auto border-first border-b-2 mt-4"
              >
              </motion.div>
            </div>
            <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2,once:true }}
            className="flex items-center justify-center  max-w-6xl mx-auto">
              <div className="p-12 border-third border-2 text-lg rounded-lg shadow-md">
                <div className="mb-4 text-center ">
                  <p className='pt-2'>To learn more about the affordable, safe, and effective weight loss treatment options, including banded bariatric surgery, call us on </p>
                 <h2 className="text-3xl md:text-4xl mb-2 mt-2 text-black">Book an Appointment Now: </h2>
                  <p className='pt-1  text-3xl md:text-4xl text-first'>+(91) 9999456455, +(91) 9910024564</p>
                </div>
              </div> 
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>
  )
  }

export default page;
