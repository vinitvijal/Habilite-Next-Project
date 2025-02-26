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
              Mini Gastric Bypass
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Mini Gastric Bypass -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>A simplified version of standard gastric bypass with similar results and lesser rate of complications.</p>
              <p className='pt-2'>Mini gastric bypass surgery is a modified and simplified version of standard gastric bypass. </p>
              <p className='pt-2'>While the traditional bypass surgery is highly efficient and provides very effective weight loss, the mini gastric bypass is safer, straight forward surgery with similar results.</p>
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
                <p className='pt-2'>Mini Gastric Bypass is a combined type of procedure having both restrictive and malabsorptive components.</p>
                <p className='pt-2'>
                However, when compared to standard gastric bypass, the stomach pouch is quite long due to which the restriction in intake of food is quite less. </p>
                <p className='pt-2'>This gives patients more freedom for intake of foods while patients still are able to maintain weight.</p>
                <p className='pt-2'>In this procedure, the malabsorption is more in comparison to gastric bypass. About 200 cm of intestine is bypassed. As a result, there is no processing of food or absorption of calories or nutrients takes place in that part of intestine promoting further weight loss.</p>
                <p className='pt-2'>This surgery brings profound hormonal changes in the body. It increases the secretion as well as sensitivity of insulin thus causing resolution of diabetes.</p>
                <p className='pt-2'>Like all other bariatric procedures offered by our team, the mini gastric bypass is performed laparoscopically, with a fiber-optic camera and four or five small incisions.</p>
                <p className='pt-2'>This minimizes post-operative discomfort, speeds recovery, and reduces scarring.</p>
                <p className='pt-2'>In this procedure, with the help of laparoscopic staplers, a new stomach pouch is created. The new pouch is quite thin and long. This stomach pouch is joined to lower part of small intestine or bowel, thereby, bypassing about 200 cm of intestine.</p>
              </div>
          </motion.div>
            <br />

         <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 '>
          <img src="https://excellaparoscopy.com/Admin/uploads/sub12_12_201712_220.jpg" alt="" className='w-3/5 mx-auto' />
         </motion.div>

         <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 pb-8 '>
           <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Advantages of Mini Gastric Bypass :</h2>
              <p className='pt-2'>The restriction of food is less when compared to standard gastric bypass. </p>
              <p className='pt-2'>It means patients will have more liberty to eat food when compared to standard gastric bypass.</p>
              <p className='pt-2'>This procedure involves a single joint or anastomosis whereas in standard gastric bypass, there are two joints or anastomosis, thereby making it a bit more complicated and more prone to complications.</p>
              <p className='pt-2'>This procedure is less risky to perform and technically easier for the surgeon to perform.</p>
              <p className='pt-2'>Better weight loss and better resolution of co-morbidities like diabetes, hypertension when compared to gastric bypass. Patients often report losing up to 80 or 85 percent of excess weight in a span of 12 months.</p>
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
                  <p className='pt-2'>Depending on your specific needs and lifestyle, Dr. Kapil Agrawal, will help you decide the </p>
                  <p className='pt-2'>weight loss treatment most likely to work best for you.</p>
                  <p className='pt-2'>Contact our team of weight loss specialists today to learn more about the affordable, safe, and effective weight loss treatment options, including cost-effective gastric bypass surgery.</p>
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
