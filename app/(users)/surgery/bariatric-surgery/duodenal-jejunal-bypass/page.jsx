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
              Duodenal Jejunal Bypass
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Laparoscopic Sleeve Gastrectomy with Duodenal Jejunal Bypass -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>Laparoscopic duodenal jejunal bypass or single anastomosis gastric bypass is an upcoming bariatric surgery that is making its mark across the world as we discuss.</p>
              <p className='pt-2'>A very safe and effective operation yielding excellent results when performed on suitable candidates. </p>
              <p className='pt-2'>It is a modification of Duodenal Switch operation which is till date the most effective weight loss procedure but earned bad reputation because of severe malabsorption and other side effects.</p>
              <p className='pt-2'>It is a combination of sleeve gastrectomy and mini gastric bypass and this combination eliminates some of the negative aspects of both the procedures.</p>
              </div>
          </motion.div>

          
        <div className='flex-col mb-8 '>
           <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
            <div className='flex space-x-8'>
              <div>
               <div className='mb-4'>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">How it Works :</h2>
                 <p className='pt-2'>As like other bariatric surgeries, it is also done laparoscopically with the help of small 4-5 tiny incisions.</p>
                 <p className='pt-2'>
                About 70% of the stomach is removed with the help of staplers. </p>
                <p className='pt-2'>It is done quite similar to sleeve gastrectomy but the amount of restriction is very less when compared to sleeve gastrectomy.</p>
                 <p className='pt-2'>Just below the stomach, the intestine is divided or cut preserving the pylorus or valve which controls passage of food from stomach to intestine. </p>
                 <p className='pt-2'>A new connection between stomach and intestine is created after bypassing approximately 250 cm of intestine.</p>

              </div>
               <div className='mb-4'>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Advantages of Duodenal Jejunal Bypass :</h2>
                <p className='pt-2'>Although this procedure has both restrictive and malabsorptive elements, it is mainly a malabsorptive procedure. </p>
                <p className='pt-2'>Although this procedure has both restrictive and malabsorptive elements, it is mainly a malabsorptive procedure. </p>
                <p className='pt-2'>It has excellent long-term results and the success rate is as good as gastric bypass both in terms of weight loss as well as resolution of obesity related health problems.</p>
                <p className='pt-2'>It produces profound hormonal changes which reduce the appetite, causes secretion of insulin and control of diabetes.</p>
                <p className='pt-2'>The excised stomach is removed from the body. This does not happen with mini gastric bypass or standard gastric bypass. Sometimes these remnants of stomach may develop ulcer or even cancer which come into notice after a long time. It is also especially good for patients having a history of gastric cancer in the family.</p>
                <p className='pt-2'>The pylorus or the valve controlling the passage of food is maintained in this procedure. As a result, the incidence of dumping syndrome is reduced which is more often seen in gastric bypass.</p>
               </div>
              </div>
                <div className="mb-4 mt-4 w-5/6">
                 <img src="https://medihealthmexico.com/wp-content/uploads/2024/08/SADI-S.jpg" alt="" />
                </div>
             </div>
          </motion.div>
            <br />

         <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 pb-8 '>
           <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">
            Duodenal Jejunal Bypass and Diabetes :</h2>
              <p className='pt-2'>Duodenal jejunal bypass procedure is a very good option in patients who are diabetic but not very obese. </p>
              <p className='pt-2'>his bariatric procedure certainly has the benefits of gastric bypass but does not cause dumping or significant weight loss. </p>
              <p className='pt-2'>This procedure causes marked hormonal changes in the body which not only increases the secretion of insulin but also decreases the production of hormones which act against insulin. </p>
              <p className='pt-2'>As a result, patient experiences a very good resolution of diabetes within a short span of time.</p>
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
            Learn More about Your Weight Loss Options at <br /> Habilite Clinics
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
