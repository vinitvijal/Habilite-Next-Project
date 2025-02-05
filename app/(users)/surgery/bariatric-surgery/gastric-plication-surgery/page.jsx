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
              Gastric Plication Surgery
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Gastric Plication Surgery -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>Gastric sleeve plication surgery or gastric imbrication is an innovative, restrictive bariatric procedure that reduces the size of the stomach by about 75%. </p>
              <p className='pt-2 font-semibold'>It is in fact stomach shrinkage surgery.</p>
              <p className='pt-2'>Gastric Sleeve Plication surgery is a relatively new procedure performed by limited number of bariatric surgeons. </p>
              <p className='pt-2'>Our team is extremely experienced and competent to perform this surgery. It is a purely restrictive procedure similar to vertical sleeve gastrectomy.</p>
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
                <p className='pt-2'>The gastric plication procedure is performed laparoscopically, meaning the surgeon makes 4 small incisions in the abdomen through which surgical tools are passed.</p>
                <p className='pt-2'>
                The procedure typically takes approximately 90 minutes to complete. The patient is discharged within 48 hours of surgery.</p>
                <p className='pt-2'>During the procedure, internal folds are created within the organ.</p>
                <p className='pt-2'>IIt means stomach is inward folded and secured with the help of sutures. Unlike sleeve gastrectomy, there is no resection of the stomach and the size is simply reduced by folding stomach inwards.</p>
                <p className='pt-2'>An internal pleat that is created will prevent your stomach to hold large portions of food. </p>
                <p className='pt-2'>As a result, patient start losing their weight gradually.</p>
              </div>
          </motion.div>
            <br />

         <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 '>
          <img src="https://gmc-document-qa-ind.s3.ap-south-1.amazonaws.com/gastric-plication-surgery_113982.jpg" alt="" className='w-3/5 mx-auto' />
         </motion.div>

         <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 pb-8 '>
           <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Advantages of Gastric Plication :</h2>
              <p className='pt-2'>→ In this procedure, there is no resection of stomach or gastric tissue. As a result, there is no possibility of leak from staple line.</p>
              <p className='pt-2'>→ The procedure is completely reversible and revisable and chances of any complications are minimal.</p>
              <p className='pt-2'>→ There is almost zero possibility of any nutritional deficiency arising out of this procedure.</p>
            </div>

            <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Results of Gastric Plication :</h2>
              <p className='pt-3'>In terms of weight loss, the results are not as dramatic when compared to other weight loss surgeries. The patient must expect to lose approximately 50% of excess body weight.</p>
              <p className='pt-2'>→ As a result of average weight loss and no hormonal changes after surgery, resolution of obesity related health problems is not as great as other bariatric procedures.</p>
              <p className='pt-2'>→ Weight loss is typically gradual, and more pronounced over time. Recovery may also take longer than with other gastric surgeries.</p>
              <p className='pt-2'>→ The gastric plication surgery is a very safe surgery but through evaluation, proper patient selection is a must to achieve satisfactory results.</p>
              <p className='pt-2 ml-4'> We usually advice gastric plication surgery for relatively lower BMI patients.</p>
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
             Contact Dr. Kapil Agrawal Today
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
                  <p className='pt-2'>A medical evaluation and thorough testing will need to be conducted to determine whether you are a qualified candidate for bariatric surgery of any kind. </p>
                  <p className='pt-2'> An analysis of your current health will be performed and taken into account </p>
                  <p className='pt-2'>when Dr. Kapil Agrawal and his team configures your treatment plan. </p>
                  <p className='pt-2'>Our goal is to identify the surgical plan that will be most effective in your individual case.</p>
                  <p className='pt-2'>To learn more about the life-changing, confidence-boosting, body-transforming procedures including gastric plication surgery that we offer, contact our team at -</p>
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
