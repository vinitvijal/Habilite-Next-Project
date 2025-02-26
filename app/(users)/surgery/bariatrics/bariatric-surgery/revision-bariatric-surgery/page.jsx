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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Revision Bariatric Surgery -</h1>
            <div className="mb-4 text-lg">
              <p className='pt-3 font-semibold'>Revision bariatric surgery refers to weight loss surgery that is done when patients do not obtain outstanding or desired results following previous weight loss surgeries. </p>
              <p className='pt-2'>Although bariatric surgery is very effective, but in about 10% of the patients, the patients may not achieve their weight loss goals</p>
              <p className='pt-2'>either because of inadequate weight loss, weight regain or complications arising out of surgery.</p>
              </div>
          </motion.div>

          
        <div className='flex-col mb-8 '>
           <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
              <div className='mb-4'>
               <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Evaluating the Cause of Failure :</h2>
                <p className='pt-2'>The success of bariatric surgery largely relies upon the type of procedure and the experience and expertise of surgeon in performing the procedure. </p>
                <p className='pt-2'>
                One of the most challenging part during surgery is the creation of new gastric pouch. Sometimes, due to inadequate experience of the surgeon, the gastric pouch can be very large. </p>
                <p className='pt-2'> It often results in poor weight loss or weight regain after a period of few months.</p>
                <p className='pt-2'>Patients must understand weight loss surgery is merely a tool to achieve weight loss and they must learn to use it properly and effectively. </p>
                <p className='pt-2'>Inadequate knowledge, poor follow ups, no change in eating habits and continuation of poor life style leads to poor outcomes.</p>
                <p className='pt-2'>Complications arising out of weight loss surgery like infection, stomach ulcer, intra-abdominal infections may also affect the weight loss. Management of such problems often tends to shift our focus from weight loss to managing and treating such complications.</p>
              </div>

              <div className='mb-4'>
               <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Is Revision Surgery an Option for Me?</h2>
                <p className='pt-2'>We recognize that morbid obesity is a multi-factorial disease and hence we always utilize a multi-disciplined approach to evaluate and treat patients who have failed to achieve desired outcomes after bariatric surgery.</p>
                <p className='pt-2'>
                We have a team of dedicated bariatric physician, endocrinologist, nutritionists and psychologists who would minutely look into each and every aspect to undermine the cause of failure.</p>
                <p className='pt-2'>Bariatric surgery can fail because it was done correctly. </p>
                <p className='pt-2'>Sometimes, the type was procedure adopted was not the best keeping in view the medical history, dietary habits and the life style of the patient. In very few cases, we will never know the reason of failure. </p>
                <p className='pt-2'> But, whatever may be the reason, everyone deserves a second chance and we won’t leave any stone unturned in accomplishing your dream of successful weight loss.</p>
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-first uppercase">Options for Revision</h1>
              <p className='pt-2'>It is important to understand that we always recommend non-surgical routes whenever possible. </p>
              <p className='pt-2'>In fact, diet and exercise alone are often the source of unsatisfying weight loss results.</p>
              <p className='pt-2'>Imparting knowledge regarding life style modifications, heling them in adopting healthy eating habits, consuming the calories judiciously and engaging them in physical activities which increases metabolic rate.</p>
              <p className='pt-2'>
              If revision bariatric surgery is unavoidable, then Dr. Kapil Agrawal and his team will work with you to identify the most effective treatment for you.</p>
              <p className='pt-2'>
              We thoroughly educate patients on the benefits and risks of every available revision surgery so that they can make informed decisions about their treatment.</p>
            </div>

            <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Lap Band Revision</h2>
              <p className='pt-2'>Lap band surgery has fallen into disrepute because of inadequate weight loss and poor resolution of comorbidities. </p>
              <p className='pt-2'>Sometimes, the band may get displaced or erode into the stomach causing infection.</p>
              <p className='pt-2'>To correct the complications and help you in achieving outstanding weight loss, Dr Kapil Agrawal and his team can perform other bariatric surgery procedures including gastric sleeve surgery or gastric bypass surgery to mend the hole and put your health back on track.</p>
            </div>

            <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Gastric Sleeve Revision</h2>
              <p className='pt-2'>
              Sleeve gastrectomy is one of the best bariatric procedure if done in proper candidates. </p>
              <p className='pt-2'>However, in some individuals who don’t follow dietary advices, refrain from exercise, start eating excessively, the stomach dilates or become stretched out over a period of time. </p>
              <p className='pt-2'>Sometimes, lack of expertise on part of surgeon resulting in creation of large new stomach may also be reason for inadequate weight loss or weight regain.</p>
              <p className='pt-2'>Such patient could benefit from a different type of bariatric surgery like gastric bypass or mini gastric bypass. In selected individuals, we can perform the same procedure again by trimming the sleeve again.</p>
            </div>

            <div className="mb-4 mt-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">Gastric Bypass Revision</h2>
              <p className='pt-2'>
              Sometimes, poor eating habits can dilate the new stomach pouch. </p>
              <p className='pt-2'>Even lack of expertise can result in creation of large stomach pouch. As a result, patient experiences poor weight loss or weight regain in a few months.</p>
              <p className='pt-2'>In such patients, resizing the pouch in the revision bariatric surgery is the best option.</p>
              <p className='pt-2'>The pouch is trimmed and reconnected to the intestine and the patient start losing weight again.</p>
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
                  <p className='pt-2'>Throughout every step of your bariatric surgery revision, our specialist team will be there to support you.</p>
                  <p className='pt-2'> We understand emotional turmoil one has to undergo after a failed procedure. </p>
                  <p className='pt-2'>We are here to offer you hope with a safe, successful second surgery!</p>
                  <p className='pt-2'>Our goal is to identify the surgical plan that will be most effective in your individual case.</p>
                  <p className='pt-2'>Schedule your consultation today with Dr. Kapil Agrawal, one of the best bariatric surgeon in Delhi, India -</p>
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
