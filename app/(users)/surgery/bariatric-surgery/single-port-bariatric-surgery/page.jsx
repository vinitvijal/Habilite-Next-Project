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
              Single Port Surgeries
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Single Port Bariatric Surgeries -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>It is a very exciting new modality which works by further reducing the scars of standard laparoscopy and converts into scar free weight loss surgery.</p>
              <p className='pt-2'>The single incision bariatric surgery or scar free surgery is rapidly gaining popularity all over the world although only a few surgeons can perform because of its steep learning curve. </p>
              <p className='pt-2'>Dr.Kapil Agrawal along with his team has been performing single port laparoscopic bariatric surgeries with excellent results.</p>
              <p className='pt-2'>At present he is offering this technique to perform sleeve gastrectomy, which is one of the most popular bariatric procedure.</p>
              </div>
          </motion.div>

          
        <div className='flex-col mb-8 '>
           <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
                <div className='mb-4'>
                 <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">
                Understanding Single Port Bariatric Surgery :</h2>
                  <p className='pt-2'>This is an advanced type of laparoscopic surgery in which the entire surgery is carried out through a single entry point the “belly button”. </p>
                  <p className='pt-2'>
                 Since the incision is made inside the umbilicus, it results in a virtually scar free surgery.</p>
                 <p className='pt-2'>In traditional laparoscopic surgery, the surgery is carried out with the help of 4-5 holes or port whereas in single port surgery the entire is performed through an incision in the belly button.</p>
                 <p className='pt-2'>A special single port system is used to carry out the procedure.</p>
               </div>
                <div className='mb-4'>
                 <p className='pt-2'>Single incision sleeve gastrectomy surgery involves less pain and little or no scarring. </p>
                 <p className='pt-2'>Since there is no need to cut through the stomach muscle, recovery time is significantly shorter, post-operative pain is significantly reduced while the cosmetic results are amazing. </p>
                 <p className='pt-2'>Most patients have no visible scars after this surgery.</p>
                 <p className='pt-2'>We don’t offer SILS in super obese patients or patients having multiple abdominal surgeries, having cirrhosis of liver or dense adhesions.</p>
                 <p className='pt-2 font-semibold'>Single port “habilite bariatrics” technique for sleeve gastrectomy</p>
                </div>
          </motion.div>

         <motion.div 
           initial={{ opacity: 0, x: -100 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ amount: 0.3,once:true }} 
           transition={{ duration: 0.6 }}>
            <div className='mb-4'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK95pzttjpofkKU7ng-XjgdCRE85_kfvRmjmCPtRyqq7BldL-7" alt="" className='w-full opacity-200'/>
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
              Contact our Weight Loss Specialist Today
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
                  <p className='pt-2'>Thanks to the combination of our expertise, cutting-edge technology, and unparalleled skills, we have achieved successful SILS gastric sleeve results time and time again, and we can deliver these same results to you. </p>
                  <p className='pt-2'>Schedule a consultation today and learn if you are a candidate to undergo SILS or single port scar free surgery.</p>
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
