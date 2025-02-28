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

const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

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
const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
};



function page() {
  const faqList=[
    {
      question:"What are the results of metabolic surgery?",
      answer:"The operation results in significant weight-loss and causes remission of T2DM in 80 percent of patients and improvement of the disease in an additional 15 percent of patients. In obese patients, both standard gastric bypass and mini gastric bypass produce excellent results in diabetes remission."
    },
    {
      question:"What is ileal transposition and how does it help in diabetes resolution?",
      answer:"While conventional bariatric procedures work in obese patients, ileal transposition is a procedure for non-obese diabetic patients. This procedure produces excellent results and we perform this procedure laparoscopically. Ileal transposition increases the sensitivity and even the production of insulin by causing hormonal changes."
    },
    {
      question:"Why earlier the surgery better the outcome in terms of diabetes remission?",
      answer:"Bariatric and metabolic surgery results are affected by the duration of diabetes. Higher the duration of diabetes, lesser are the chances of complete resolution. Increased glucose levels due to diabetes slowly causes premature death of Beta cells in pancreas. These Beta cells produce insulin in our body. Therefore, longer is the duration, higher is the chance of irreversible damage to beta cells. Surgeries performed before irreversible death of these cells can cause complete resolution of diabetes."
    },
    {
      question:"What is metabolic syndrome?",
      answer:"We Indians are prone to central obesity or pot belly stomach. It means we have lean and thin arms and legs but excessive accumulation of fat around stomach. This condition is very bad for health and is often a cause of Metabolic syndrome. It is a spectrum of diseases including central obesity, diabetes, high blood pressure and rise in bad cholesterol levels. Metabolic surgery completely or almost cures metabolic syndrome."
    },
   
  ];

  const featureData = [
    {
      points: [
        "Obese patients having type II diabetes.",
        "Patients are having ages between 18 to 65 years.",
        "Duration of diabetes > 3 years and < 20 years",
      ],
    },
 
    {
      points: [
        "Stable diabetes in the past three months",
        "Post Prandial serum C – peptide levels > 0.9 ng/ml",
        "BMI ≥ 30 kg/m2",
      ],
   
    },
  ];


const benefits = [
  {
    title: "Focus on Quality",
    description: `"Quality is our first concern when it comes to your health and wellness."`,
  },
  {
    title: "Approachable Staff",
    description: `"Our friendly staff is here to answer any questions you may have."`,
  },
  {
    title: "Experience Comfort",
    description: `"Comfort is key to making sure you are happy with the process and outcome."`,
  },
  {
    title: "Health Benefits",
    description: `"We offer classes to help you maintain a healthy lifestyle after surgery."`,
  },
];


 
  return (
    <>
    <div className='overflow-x-hidden'>
      <div className='w-screen'>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16 ">
          <div>
            <div className="relative w-full">
              <img
              src="/bariatric.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-25">
                Surgery for Diabetes
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
            className="sm:w-2/3 w-full mx-auto relative sm:-mt-12 lg:-mt-24 md:px-6 py-4 bg-white sm:shadow-md items-center md:rounded-lg">
              <FeatureList features={features} />
            </motion.div>
          </div>

          <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10">
    
            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3,once:true }} 
            transition={{ duration: 0.6 }}
            className='mt-16'>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">METABOLIC SURGERY FOR DIABETES</h2>
                <div className="mb-4">
                  <p className='pt-2'>→ Bariatric surgery, formerly used only for treating obesity, is now a well-established modality for curing Type 2 diabetes </p>
                  <p className='pt-2 ml-5'>not only in obese patients but also in normal-weight and moderately overweight patients</p>
                  <p className='pt-2'>→ Weight loss following bariatric surgery in obese nondiabetic patients decreases their likelihood of developing diabetes by 60 percent.</p>
                  <p className='pt-2'>→ 85% of patients who underwent bariatric surgery or weight loss surgery experienced a complete reversal of their type 2 diabetes.</p>
                  <p className='pt-2'>→ The results following bariatric and metabolic surgery are dramatic and fantastic. The diabetic medicines </p>
                  <p className='pt-2 ml-5'>can be reduced or eliminated immediately or within a couple of weeks following surgery.</p>
                  <p className='pt-2'>→ The results typically persist for the rest of life, as long as average body weight is maintained.</p>
                  <p className='pt-2'>→ Complete cure or resolution of diabetes occurs in patients having a duration of diabetes less than five years </p>
                  <p className='pt-2 ml-5'>and achieving and maintaining weight loss following bariatric surgery.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3,once:true }} 
            transition={{ duration: 0.6 }}
            className='mb-8'>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> Link Between Weight and Diabetes</h2>
                <div className="mb-4">
                  <p className='pt-2'>One of the most critical factors for the development of diabetes is obesity. An overweight or slightly obese patient has double </p>
                  <p className='pt-2'>the risk of developing diabetes, whereas a severely obese patient has ten times the risk of developing diabetes.</p>
                  <p className='pt-2'>The link between obesity and diabetes is so strong that 80% of diabetic patients are obese.</p>
                </div>
              </div>
              </motion.div>  

            <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center mb-20">
              <motion.h1
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2,once:true }}
              className="text-3xl md:text-4xl font-semibold text-center text-first my-4">
               ADVANTAGES OF <br/>LAPAROSCOPIC AND ROBOTIC SURGERY FOR HERNIA REPAIR
              </motion.h1>
              <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%", duration: 2000 }}
              className="mx-auto border-first border-b-2 mt-4"
              >
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl max-sm:w-full sm:mx-auto sm:px-6  py-6  pt-0">
              {featureData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-white py-6 px-3 sm:px-6 shadow-md border-third border-2"
                  variants={cardVariants1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2,once:true }}
                >
                  <div className="mx-auto flex items-center justify-center h-24 w-24 -translate-y-16 transform rounded-full shadow-lg bg-first mb-0">
                  <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-0">
                    <path
                    d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                    fill="white">
                    </path>
                  </svg>
                  </div>
                  <div className='text-center'>
                    <div className="md:text-lg mx-2 md:mx-8">
                      {feature.points.map((point, index) => (
                        <p key={index} className={`py-2 border-t border-third ${index===0?'border-none':''} `}>{point}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            </div>

              <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
                <div className="text-center mb-20">
                  <motion.h1
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2,once:true }}
                  className="text-3xl md:text-4xl font-semibold text-first m-4">
                  TYPES OF SURGERIES OFFERED<br/>BY OUR TEAM
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
                 <div className="p-12 border-third border-2  rounded-lg shadow-md">
                   <div className="mb-4 text-lg">
                   <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Obese and Diabetic Patients</h2>
                    <p className='pt-2'><span className="font-medium mr-1">→ </span>Sleeve Gastrectomy</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ </span> Roux en y Gastric Bypass</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ </span> Mini Gastric Bypass</p>
                   </div>
                   <div className="mb-4 text-lg">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Non-obese and Diabetic Patients</h2>
                    <p className='pt-2'>There are approximately 20% of patients who are normal weight but diabetic.</p>
                    <p className='pt-2'> The types of surgery offered by our team for such patients:</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ </span>Laparoscopic duodenal jejunal bypass</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ </span> Sleeve gastrectomy with duodenal transposition</p>
                   </div>
                  </div> 
                </motion.div>
              </div>

            <motion.div 
             initial={{ opacity: 0, x: 100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ amount: 0.3,once:true }} 
             transition={{ duration: 0.6 }}>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first text-center">Results following Metabolic Surgery for Diabetes</h2>
                <div className="mb-4 text-center">
                  <p className='pt-2'>Most of our patients lose between 50 and 80 percent of their excess body weight during the 18 to 24 months following surgery.</p>
                  <p className='pt-2'>Better control or remission of your diabetes tends to occur even before significant weight loss.</p>
                  <p className='pt-2'>Approximately thirty percent of patients do not require any further diabetes medication immediately after the surgery, and 85 percent of patients achieve cure or significant control over diabetes within six months of surgery.</p>
                  <p className='pt-2'>Many patients with diabetes also suffer from high blood pressure and elevated cholesterol, which significantly increase the risk of heart attacks and strokes. </p>
                  <p className='pt-2'>Bariatric surgery improves or resolves high blood pressure and cholesterol in most patients, decreasing these obesity-related risks.</p>
                </div>
              </div>
            </motion.div>

            <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
              <div className="text-center mb-8">
               <motion.h1
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2,once:true }}
                className="text-3xl md:text-4xl font-semibold text-first"> WHY CHOOSE US -
               </motion.h1>
                <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%", duration: 2000 }}
                className="mx-auto border-first border-b-2 mt-4"
                  >
               </motion.div>
              </div>
              <div className="py-12 ">
               <div className="flex flex-wrap justify-center gap-6 px-6">
                  {benefits.map((info, index) => (
               <motion.div
                key={index}
                 initial={{ opacity: -2 }} 
                 whileInView={{ opacity: 1.5 }} 
                 transition={{ duration: 2 }} 
                 viewport={{ amount: 0.2,once:true }} 
                 className="bg-white p-8 rounded-lg shadow-md border border-first w-80 text-center hover:shadow-lg transition-shadow" >
                 <h2 className="text-xl font-semibold text-first mb-4">
                   {info.title}
                 </h2>
                 <p className="text-gray-700">{info.description}</p>
               </motion.div>
                ))}
              </div>
             </div> 
          </div>    

          <div className="px-2 py-8 w-full flex justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg overflow-hidden">
              <div className="lg:w-1/2">
                <div className="h-72 bg-cover lg:h-full  lg:rounded-lg">
                  <img
                  src="/lady.jpg"
                  alt="Background"
                  className="w-full object-cover opacity-200"/>
                </div>
              </div>
              <div className="flex flex-col mx-auto  py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 ">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  Worried about the pricing
                </h2>
                <p className="pt-2 font-semibold">⌲ Option for a budget friendly Hospital</p>
                <p className="pt-2 font-semibold">⌲ EMI facility</p>
                <p className="pt-2 font-semibold">⌲ Substantial discounts on investigations</p>
                <p className="pt-2 font-semibold">⌲ Free post-surgical consultations</p>
              </div>
            </div>
          </div>                            

            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3,once:true }} 
            transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
              ABOUT DR. KAPIL AGRAWAL AND HIS TEAM
              </h2>
              <div className="mb-4 text-left">
                <p className='pt-2'>Dr. Kapil Agrawal is one of the top choices when it comes to bariatric surgery.</p>
                <p className='pt-2'> He and his team are affiliated with some of the most premier hospitals equipped with state-of-the-art equipmentand provide world-class infrastructure, at par with the best hospitals in the world.</p>
                <p className='pt-2'>He offers a complete array of Bariatric and Metabolic surgeries, including Sleeve Gastrectomy, Gastric Bypass, and Mini Gastric Bypass.</p>
                <p className='pt-2'> Bariatric surgery is a stretched-out journey. Hiscommitment to helping patients by providing adequate information, offering individual attention to patients, and caring about their recovery. makes him one of the best bariatric surgeons in Delhi, India.</p>
                <p className='pt-2'>He and his team provide a safe, honest, and stress-free experience by guiding you through a personalized patient care program that offers support before, during, and after surgery.</p>
                <p className='pt-2'>He and his team follow a strict protocol to zero down the suitable candidates for the surgery who undergo psychological screening, medical screening, and nutritional counseling counseling to ensure the best outcomes after the bariatric surgeries.</p>
                <p className='pt-2 font-bold text-xl'> You can contact us on +91-9910024564, +91-9999456455</p>
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

export default page
