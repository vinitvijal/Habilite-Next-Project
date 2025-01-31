'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion } from "framer-motion";

function DrKapilAbout() {
  const [isOpen, setIsOpen] = useState(false);

  // Define the question and answer
  const question = "What are Dr. Kapil Agrawal's areas of expertise?";
  const answer = "Dr. Kapil Agrawal specializes in advanced laparoscopic gastrointestinal surgeries and bariatric or weight-loss surgeries. He is renowned for his surgical precision and tailored treatment plans for patients.";

  return (
    <div className="w-4/5 mx-auto px-4 pt-2 pb-8">
      <div className="text-center mb-8">
        <div className='relative flex flex-col items-center justify-center mb-5'>
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
          <div className='relative mb-5'>
            <img src="/doctor.webp" alt="" width={350} height={300}/>
          </div>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-xl md:text-3xl font-bold text-first mb-2 text-center">
              Dr. Kapil Agrawal – Best Bariatric Surgeon in Delhi
            </h1>
          </motion.div>
          <motion.div
            className="relative left-0 bottom-[-5px] h-[2px] bg-second"
            initial={{ scaleX: 0 }}  
            animate={{ scaleX: 1 }}  

            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left", width: "80%" }}
          />
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-600 mb-1">
              MBBS, MS (SURGERY), MRCS (LONDON, U.K), MMED (SINGAPORE), FMAS
            </h3>
            <h3 className="text-base md:text-lg text-gray-600">
              Senior Consultant, Laparoscopic & Bariatric Surgeon
            </h3>
          </div>
        </motion.div>


      </div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="mb-8">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Dr. Kapil Agrawal is one of the top choices for finding the best Bariatric, Metabolic, and Laparoscopic surgeons in Delhi, India. As one of the region's most respected Bariatric and Laparoscopic surgeons, he is well known for communicating effectively with his patients and utilizing innovative technology. He is also known for tailoring treatment plans to his patients' needs and surgical precision.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            He received his training at some of the best and most prominent surgical institutes in India and abroad. He was associated with North Middlesex University Hospital, Edmonton, U.K, and the Aintree University Hospital, Liverpool. He was honored with an MRCS (Member of Royal College of Surgeons, London, UK) in 2007 in England.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            His area of expertise includes advanced laparoscopic gastrointestinal surgeries as well as bariatric or weight-loss surgeries. Along with his team, he has helped thousands of patients with deflated self-esteem and inflated BMI, getting rid of obesity permanently.
          </p>
        </div>
      </motion.div>

      <div className="mb-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
            A Brief Profile of Dr. Kapil Agarwal
          </h3>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            He is presently associated with Indraprastha Apollo Hospital, New Delhi, Apollo Spectra Hospital, Kailash Colony, New Delhi. Both hospitals are very well-established names in healthcare services. They are one of the most preferred destinations for Bariatric surgery and advanced laparoscopic surgeries in India. They are well known for offering top-notch services to patients coming from across the world.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            He has established a super specialty consultation centre, "HABILITE CLINICS," in South Delhi, intending to minimize the hospital's stressful experience and provide a warm and compassionate environment to his patients. The clinics offer a holistic program for the management of obesity and various advanced laparoscopic and laser surgeries to manage multiple ailments.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Over the past several years, Dr. Kapil Agrawal has conducted many workshops, live surgeries, and OPDs in several African, Asian, and CIS countries. His interest in sharing advancements in laparoscopic and bariatric surgery has accorded him invitations to many National and International Conferences.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            He also has several research articles to his credit. He is a regular face on media channels. He is invited to share his expert opinion on obesity and related issues.
          </p>
        </motion.div>
      </div>



      <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            FAQs
          </h3>
        </motion.div>
      <div className={`${isOpen ? 'bg-first' : 'bg-white'} border border-third transition-all duration-300 ease-in-out rounded-md overflow-hidden mb-4`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-3 md:px-6 py-4 focus:outline-none"
        >
          <span className={`font-medium ${isOpen ? 'text-white' : 'text-first'} transition-all duration-300 ease-in-out text-left`}>
            {question}
          </span>
          <span className={`ml-3 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
            <ChevronDownIcon className={`${isOpen ? 'text-white' : 'text-first'}`} />
          </span>
        </button>
        <div className={`transition-all ${!isOpen ? 'h-0' : 'h-fit'} duration-300 ease-in-out overflow-hidden`}>
          <div className="px-3 md:px-6 py-4 bg-gray-100">
            <p className="text-sm text-left">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrKapilAbout;