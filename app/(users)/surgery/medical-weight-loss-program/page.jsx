'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Blend of Best Technology & Infrastructure",
  "Highly Experienced, Internationally Trained Team",
  "Reduced Port Surgeries for Best Cosmesis",
  "Complete Range of Bariatric Procedures",
  "Honest Pricing and No Hidden Charges.",
  "EMI Options Available",
];

const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};



const FeatureList = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 text-first text-left mx-auto">
    {features.map((feature, index) => (
      <div
        key={index}
        className={`flex items-start space-x-2 py-2  max-md:text-base border-third border-t ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"} ${index===0?'border-none':''} ${index===1?'md:border-none':''}
        }`} >
        <span> ➔ </span>
        <p className='max-sm:text-sm' >{feature}</p>
      </div>
    ))}
  </div>
);

function page() {
  const faqList=[
    {
      question:"How effective is your program in causing weight loss?",
      answer:"The effectiveness of the program depends upon your motivational levels and the commitment to follow the advice of our physician and nutritionists. Majority of our patients lose 1-2 kgs per week during the initial phase with an average weight loss of 12-15 kgs over a period of 5-6 months. It is important to stay in a monitored weight loss program to maintain the lost weight."
    },
    {
      question:"Are any drugs or appetite suppressants used in your program?",
      answer:"The use of drugs for weight loss is strictly under the domain of bariatric physician. However, we try to restrict the use of drugs as much as possible. Most of the drugs used are appetite suppressants and are used for a little period of time."
    },
    {
      question:"What is the best way to diet?",
      answer:"The best way to diet is to make some permanent life style changes that incorporates increased activity, dietary changes and behavior strategies. One should never opt for crash diets causing sudden weight loss and keep a realistic expectation about weight loss through diet and exercise."
    },
    {
      question:"How important is portion size?",
      answer:"It is very important to understand portion size for a successful weight management plan. If we don’t have any knowledge about portion size or the amount of calories we are consuming, we cannot achieve a good weight loss."
    },
    {
      question:"	Is exercise a part of the program and how important is it for weight loss?",
      answer:"Exercise is a very vital part of our weight loss program. It is important because it helps in maintaining your muscle mass and even helps to maintain your weight loss. There is no fitness center located at our clinic but we have trained exercise physiologists to set goals and start an exercise program to meet your needs and goals."
    },
    {
      question:"Do you have any special program for children?",
      answer:"We do have a special program designed for overweight children between the ages of 7 and 12, and their families. We help these children achieve a healthier lifestyle and weight through behavior modification, changes in diet and physical activity. We do thorough evaluation of the child, look into the cause of obesity, arrange counselling sessions both for family and child to develop habits which can help achieve sustained weight loss."
    },
    
  ];


  const featureData = [
    {
      points: [
        "Speedy Recovery",
        "Early and Easy Mobility",
        "Discharge within 24 hours",
        "Virtually Scarless Surgery",
      ],
    },
 
    {
      points: [
        "Minor tissue trauma and less post-operative pain",
        "Low risk of infection",
        "Less Dependence on pain relievers",
        "Almost no chance of hernia",
      ],
   
    },
  ];



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
              src="/weightloss.jpg"
              alt="Background"
              className="w-full rounded-lg object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-25">
                Medical Weight Loss<br /> Program
              </h1>
            </div>
          </div>
        </div>
        <div>
          <motion.div
            initial={{opacity: 0, scale: 0.12 }}
            animate={{ opacity: 1, scale: 1 }}
            variants={boxVariants}
            transition={{  duration: 1 }}
            whileInView="visible"
            viewport={{ amount: 0.2,once:true }}
            className="sm:w-2/3 w-full mx-auto relative sm:-mt-12 lg:-mt-24 md:px-6 py-4 bg-white sm:shadow-md items-center md:rounded-lg"
          >
            <FeatureList features={features} />
          </motion.div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10">
          <div className='flex-col mb-8 mt-16'>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.2,once: true }} 
            transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-semibold mb-2 text-first">WHAT MAKES HABILITE WEIGHT LOSS PROGRAM</h2>
               <div className=" mb-4">
                 <p className='pt-2'>We understand obesity is a complex program and each individual gain weight for different reasons.</p>
                 <p className='pt-2'>Our weight management program starts with careful, individualized assessments performed by the clinicians of our multi-disciplinary team.</p>
                 <p className='pt-2 font-semibold'> Multi-disciplinary Treatment - </p>
                 <p className='pt-2'>The key ingredients of a successful weight loss program are diet, exercise, and behavior modification.</p>
                 <p className='pt-2'>We have a team of dedicated obesity physicians, dietitians, exercise trainers, psychologists who will tailor a program to meet your individual weight loss goals.</p>

               </div>
            </motion.div>
            <br />
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2,once:true}} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Available Services</h2>
              <div className="mb-4">
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Medical assessment and medical supervision of weight loss</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Measurements of metabolism and body composition</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Individualized exercise programs</p>
               <p className='pt-2'><span className="font-medium mr-1">→</span>Personal training</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Support group meetings</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Individual psychotherapy</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>A variety of nutritional plans including meal replacement options</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Nutrition education</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Long-term weight maintenance and relapse prevention programs</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Services for people with medical needs</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Prescribed medications for weight control</p>
               <p className='pt-2'><span className="font-medium mr-1">→ </span>Low Calories Recipes</p> 
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10 m-16">
          <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1,once:true}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">How do I get started?</h2>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Call 9910024564 or 9999456455 to request a consultation with a nutritionist to discuss treatment options.</p>
              <p className='pt-2 ml-5'> The Center is open: Monday to Saturday, 9:00 a.m. to 9:00 p.m.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Once a treatment option has been chosen, assessments will be scheduled with each clinician on the multidisciplinary team for a thorough evaluation.</p>
            </div>
            <br />
        
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
            The first clinic visit will be lengthy since the patient will undergo orientation to the program and medical professionals will be collecting :-</h3>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">→ </span>Anthropometrical data (height, weight, BIA/body composition) </p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span>Biochemical data (blood drawn for laboratory tests)</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Clinical data (physical examination, blood pressure, EKG)</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Dietary data (weight history, current eating habits, food preferences)</p>
            </div>
          </motion.div>
        </div>
       
        <div className="flex flex-col mx-auto px-2 sm:px-6 md:px-12 lg:px-24 gap-6">
          <motion.div initial={{ opacity: -2 }} 
            whileInView={{ opacity: 1.5 }} 
            transition={{ duration: 1 }} 
            viewport={{ amount: 0.2,once:true }} 
            className='flex-col mx-3 mb-16 pt-4 md:px-24 border-first border-t-2'
          >
            <div className="flex justify-center items-end my-4">
              <BsPinFill className='text-3xl md:text-4xl text-second' />
              <h1 className='font-bold text-3xl md:text-4xl text-center border-fourth border-b-2 mt-6  text-second'>FAQ</h1>
            </div>
            <div className="mb-4 ">
              {faqList.map((faq, index) => (
                <FAQsingle key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>  
        </div>
      </div>
      
    
    </div>
  </div>
  </>
  )
  }

export default page;
