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
              Sleeve Gastrectomy Surgeon<br />in Delhi
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Sleeve Gastrectomy -</h1>
          <div className='flex space-x-8 '>
            <div className="mb-4">
              
              <p className='pt-3 font-semibold text-lg'>
              One of the most popular, low maintenance, straight forward bariatric procedure with excellent weight loss.</p>
              <p className='pt-2 text-lg'>Vertical Sleeve Gastrectomy is a purely restrictive type of surgery.</p>
              <p className='pt-2 text-lg'> It has become one of the most commonly performed surgery because of substantial weight loss,  no requirement of supplements and minimal follow-up.</p>
              <p className='pt-2 text-lg'>It is in fact, set and forget type of surgery</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-3 text-first">How it works :</h2>
              <p className='pt-2'>The entire surgery is performed laparoscopically with the help of 4- 5 small incisions.</p>
              <p className='pt-2'> About 85% of the stomach is removed with the help of staplers. It significantly reduces the capacity of stomach from 1.5 liter to 150 ml. </p>
              <p className='pt-2'> The unwanted portion of stomach is removed from the body.</p>
              <p className='pt-2'>The fundus of stomach which is removed is responsible for the production of hormone “Ghrelin”.</p>
              <p className='pt-2'>It is also known as hunger hormone as it continuously stimulates the brain to eat more food. </p>
              <p className='pt-2'>After surgery, you can be confident that your hunger levels are going to be significantly down.</p>
              <p className='pt-2'>
              Patients who undergo this form of weight loss surgery get fuller faster, feel fuller longer because of reduced appetite.</p>
            </div>
            <div className="mb-4">
             <img src="https://img.freepik.com/premium-vector/human-digestive-system_781202-950.jpg" alt="" />
           </div>
          </div>
          </motion.div>

          
        <div className='flex-col mb-8 '>
           <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Advantages of Gastric Sleeve Surgery :</h2>
              <div className=" mb-4 ">
                <p className='pt-3'>Successful gastric sleeve surgery often has an enormous impact on patients' quality of life. Potential benefits include :-</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Rapid weight loss:</span> Gastric sleeve surgery produces excellent weight loss and patient.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Reduced appetite:</span>Because of profound hormonal changes, especially reduced levels of ghrelin, there is significantly reduced appetite and cravings for sweets.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Reduced incidence of complications:</span> This procedure is associated with less complications when compared to other bariatric procedures. </p>
                <p className='pt-2 ml-5'>Since there is no rerouting of intestines and intestines remain untouched, the chances of technical complications are quite low.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Minimal follow-up, no supplements:</span> Gastric sleeve surgery is a set and forget type of surgery. </p>
                <p className='pt-2 ml-5'>Patients do not require stringent follow-ups as in other bariatric procedures. Since there is re-routing of the intestines or any malabsorption,</p>
                <p className='pt-2 ml-5'> patients do not require any nutritional supplements.</p>
               </div>
              <div className=" mb-4 ">
                <br />
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">Results of Gastric Sleeve Surgery :</h2>
                <p className='pt-2'>The patients lose about 60%-70% of the excess body weight following weight loss surgery. One can achieve more weight loss by following a strict diet plan and regular exercise.</p>
                <p className='pt-2'>Gastric sleeve surgery can cure diabetes in 80% of the patients. In rest 20% of the patients, the requirement of medicines is greatly reduced.</p>
                <p className='pt-2'> The duration of diabetes is one of the most important factor in deciding the results. if the duration of diabetes is less than 5 years, the chances of cure are very high.</p>
                <p className='pt-2'>Because of significant weight loss, patients will find tremendous relief from back pain, hip pain, knee pain, and foot pain allowing them to walk and exercise more.</p>
                <p className='pt-2'>After weight loss, patients also benefit from menstrual irregularity, sleep apnea, snoring and depression.</p>
              </div>
          </motion.div>
            <br />

         <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 '>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Single Port Gastric Sleeve Surgery -</h1>
           <div className='flex space-x-8 '>
            <div className="mb-4">
              <p className='pt-2'>Single port bariatric surgery is an advanced, minimal access technique to ease post-operative discomfort and reduce complications in bariatric surgery.</p>
              <p className='pt-2'> In traditional or conventional laparoscopic bariatric surgery, a surgeon creates 4-5 tiny incisions whereas in this technique, the entire surgery remains the same but carried out through a single, small incision made into the umbilicus.</p>
              <p className='pt-2'>As a result, the scar in invisible making it a virtually scar free surgery. </p>
              <p className='pt-2'> Along with amazing aesthetic results, rate of complications and infections are reduced and recovery becomes much faster.</p>
              <p className='pt-2'>We offer this technique in selected group of patients. The patients with very high BMI, cirrhotic liver, multiple abdominal surgeries are usually advised to undergo conventional laparoscopic sleeve gastrectomy.</p>
            </div>
            <div className="mb-4">
             <img src="https://drjalil.com/wp-content/uploads/2024/08/woman-pinching-belly-fat-1024x576.jpg" alt="" />
           </div>
          </div>
         </motion.div>

         <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8 pb-8 '>
          <div className='flex space-x-8 '>
           <div className='mb-4'>
             <img src="https://www.verywellhealth.com/thmb/I2DuV7pMR_z4fCVwNfu5wr8UZgQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gastric_bypass_surgery-f45766f8acc64393bd5f8371dc00b99c.jpg" alt="" />
           </div>
           <div className="mb-4 mt-4">
              <p className='pt-2'>Although sleeve gastrectomy is an excellent bariatric procedure, the long-term success or long-lasting results depend on </p>
              <p className='pt-2'> the patient’s commitment of maintaining healthy eating habits, mindful eating and leading an active healthy lifestyle.</p>
              <p className='pt-2'>To help you achieve long lasting results, our team ensures continuous care and monitoring of our patients. </p>
              <p className='pt-2'>Our team of bariatric nutritionists stay in touch during your weight loss journey and ensure that you develop positive, permanent changes in your dietary habits and life style.</p>
              <p className='pt-2'>Our support group meetings keep you motivated and helps in addressing all your concerns from time to time.</p>
            </div>
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
              Contact our bariatric team to learn more about gastric sleeve surgery through Habilite Bariatrics
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
                  <p className='pt-2'>Learn if you qualify for most advanced single port gastric sleeve surgery. </p>
                  <p className='pt-2'>Our team is happy to speak with you and help you understand any of the treatments we offer or answer any questions you have. </p>
                  <p className='pt-2'> Please call and speak with us at -</p>
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
