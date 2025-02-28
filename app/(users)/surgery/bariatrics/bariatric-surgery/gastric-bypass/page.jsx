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
              Gastric Bypass Surgery<br />in Delhi
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Gastric Bypass -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>
              As one of the most effective and successful bariatric procedure, it is still referred as the gold standard of bariatric surgery.</p>
              <p className='pt-2'>If you are obese and other methods of weight loss have been ineffective, then gastric bypass may be a very good option for you.</p>
              <p className='pt-2'>It is one of the most commonly performed bariatric surgery in the world because of its safely, efficacy and excellent long-term results. </p>
              <p className='pt-2'>Our highly experienced bariatric team has helped thousands of patients regain their confidence and lead a highly active and good quality of life with low cost gastric bypass surgery.</p>
              </div>
          </motion.div>

          
        <div className='flex-col mb-8 '>
           <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
              <div className='mb-4'>
               <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">What is Gastric Bypass?</h2>
                <p className='pt-2'>The procedure is performed laparoscopically with the help of 4-5 tiny incisions</p>
                <p className='pt-2'>With the help of staplers, the stomach is divided into two pouches completely sealed off from each other. The upper small pouch can now only hold only a cup of food at a given time. </p>
                <p className='pt-2'>It is a combination of sleeve gastrectomy and mini gastric bypass and this combination eliminates some of the negative aspects of both the procedures.</p>
                <p className='pt-2'>The small bowel is now divided and one of the divided end is joined to upper pouch. The other end is  joined back to the intestine about 100cm down the stomach.</p>
             </div>
               <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Gastric Bypass works in two ways :</h2>
              <div className=" mb-4 ">
                <p className='pt-2'><span className="font-medium mr-1">→ Restriction:</span>By creating a smaller stomach pouch that is designed to hold only a cup of food, you will be restricted in terms of how much you are able to eat.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Malabsorption: </span>Because the food enters directly into lower part of small bowel and it doesn’t travel the part of intestine where fat is absorbed, it further  </p>
                <p className='pt-2 ml-5'>augments the weight loss. Because much of the food is not processed and broken down, it helps to maintain weight loss permanently.</p>
              </div>
          </motion.div>
            <br />

         <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 '>
          <img src="https://4.imimg.com/data4/QH/BF/MY-23430616/revision-gastric-bypass-surgery-500x500.jpg" alt="" className='w-3/5 mx-auto' />
         </motion.div>

         <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 pb-8 '>
           <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Advantages of Gastric Bypass :</h2>
              <p className='pt-2'>The list of health benefits after gastric bypass is impressive. Being more active and fit, you can do a lot of things with your family and friends which you were unable to do before.</p>
              <p className='pt-2'> You lead a better social life, stronger interpersonal relationships, and enhanced job performance better mental health and self-esteem.</p>
              <p className='pt-2'>→ 80-85% off the excess weight is achieved with this procedure.</p>
              <p className='pt-2'>→ Hyperlipidemia and high blood pressure is corrected in over 70% of patients.</p>
              <p className='pt-2'>→ Obstructive sleep apnea and snoring is cured with surgery.</p>
              <p className='pt-2'>→ Type 2 diabetes may be completely cured in about 70% of patients.</p>
              <p className='pt-2'>→ Gastroesophageal reflux disease, swelling in the legs, low back pain and joint pain is relieved in almost all patients</p>
            </div>
            <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Gastric Bypass and Diabetes</h2>
              <p className='pt-2'>Diabetes is a leading cause of death in India and despite several advances in the management of diabetes, till date, there is no medicine which can cure diabetes.</p>
              <p className='pt-2'> There is a strong correlation between diabetes and obesity and about 80% of diabetic patients are obese. </p>
              <p className='pt-2'>Gastric bypass surgery is a boon for such patients as it can cure diabetes in majority of patients.</p>
              <p className='pt-2'>Patients who undergo bariatric surgery experience a remission in their diabetes within a few days of surgery, even before weight loss. This suggests that gastric bypass not only cure diabetes by causing weight loss but also by bring physiological and hormonal changes.</p>
              <p className='pt-2'>The hormonal changes increase the secretion of insulin and also decreases insulin resistance resulting in cure of diabetes</p>
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
