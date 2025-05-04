'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion } from "framer-motion";
import { PinIcon } from 'lucide-react';

const faqData = [
  {
    question: "What is Habilite Clinics?",
    answer: `<p style="margin-bottom: 8px;">Habilite Clinics is a leading super-specialty surgical clinic in South Delhi. The clinic is well known for providing comprehensive services related to weight loss, and laparoscopic and laser surgeries.</p> 
    <p style="margin-bottom: 8px;">Habilite Clinics aims to minimize the hospital's stressful experience and maximize comfort, care, and expertise under one roof. They offer personalized treatment, a seamless surgical experience, and a full spectrum of care before, during, and after the procedure.</p>`
  },
  {
    question: "Who are the experts behind Habilite Clinics' surgical services?",
    answer: `<p style="margin-bottom: 8px;">Habilite Clinics takes pride in its distinguished team of surgeons led by Dr. Kapil Agrawal. Dr. Agrawal is a senior consultant surgeon at Apollo Group of Hospitals in New Delhi. He extends his expertise to various budget-friendly healthcare facilities, ensuring accessibility to quality surgical care.</p>`
  },
  {
    question: "Does Habilite Clinics accept insurance?",
    answer: `<p style="margin-bottom: 8px;">Yes, Habilite Clinics accepts insurance and goes further by offering no-interest zero EMI plans. Additionally, it has established partnerships with some of the premier hospitals in New Delhi, enabling it to provide cashless facilities for patients.</p>`
  },
  {
    question: "What makes Habilite Clinics stand out among other surgical clinics in South Delhi?",
    answer: `<p style="margin-bottom: 8px;">At Habilite Clinics, we prioritize patient care and satisfaction above all. Our state-of-the-art facilities, advanced surgical techniques, and personalized approach set us apart, ensuring optimal patient outcomes. Habilite Clinics is well known for providing the highest quality standard treatment at affordable prices.</p>`
  },
  {
    question: "What post-operative care and support do Habilite Clinics provide to patients?",
    answer: `<p style="margin-bottom: 8px;">Habilite Clinics is committed to comprehensive post-operative care. Our nutritionists, physicians, and endocrinologists will guide you through the recovery process and provide ongoing support to ensure a smooth and successful recovery.</p>`
  },
  {
    question: "Are telemedicine consultations available at Habilite Clinics?",
    answer: `<p style="margin-bottom: 8px;">Yes, we do offer telemedicine consultations for patients who prefer remote access to our surgical experts. These virtual appointments allow for convenient and secure medical consultations from the comfort of your home.</p>`
  },
  {
    question: "What are the advantages of laparoscopic surgery at Habilite Clinics?",
    answer: `<p style="margin-bottom: 8px;">Habilite Clinics specializes in minimally invasive laparoscopic surgery, including single port surgeries, which offer advantages such as reduced recovery time, minimal scarring, and less post-operative pain compared to traditional open surgery.</p>`
  },
  {
    question: "What support does Habilite Clinics provide before and after surgery?",
    answer: `<p style="margin-bottom: 8px;">Habilite Clinics provides preoperative evaluation and counseling, support groups, medical follow-up, and nutritional testing. They also offer a complete program for surgical candidates and those seeking medically supervised weight loss support.</p>`
  },
  {
    question: "What are the services provided by Habilite Clinics for treating obesity?",
    answer: `<p style="margin-bottom: 8px;">At Habilite Clinics, our team offers a comprehensive range of weight loss services which include:</p>
    <ol style="margin-left: 20px; padding-left: 20px; list-style: decimal;">
      <li style="margin-bottom: 5px;">Bariatric or weight loss surgeries</li>
      <li style="margin-bottom: 5px;">Medical weight loss program</li>
      <li style="margin-bottom: 5px;">Intragastric Balloon</li>
      <li style="margin-bottom: 5px;">Childhood and Adolescent Obesity Management</li>
      <li style="margin-bottom: 5px;">Medical weight loss program</li>
    </ol>
    <p style="margin-top: 10px;">Our customized programs are designed to provide long-term and significant weight loss.</p>`
  },
  {
    question: "What types of advanced laparoscopic surgeries are provided by Habilite Clinics?",
    answer: `<p style="margin-bottom: 8px;">Our team has vast experience and expertise in performing advanced laparoscopic surgeries for various abdominal problems. These include:</p>
    <ol style="margin-left: 20px; padding-left: 20px; list-style: decimal;">
      <li style="margin-bottom: 5px;">Gallbladder Stones</li>
      <li style="margin-bottom: 5px;">Hernia Repair</li>
      <li style="margin-bottom: 5px;">Pseudo pancreatic cyst</li>
      <li style="margin-bottom: 5px;">Rectal Prolapse</li>
      <li style="margin-bottom: 5px;">Acute Appendicitis</li>
    </ol>
    <p style="margin-top: 10px;">Our team offers single port and reduced port surgeries which are associated with almost non-visible scars and faster healing. This makes Habilite Clinics one of the best laparoscopic surgery hospitals in New Delhi.</p>`
  }
];



function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-4/5 mx-auto px-4 mt-0 mb-10 flex flex-col justify-center items-center flex-wrap-reverse' 
    >
      <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
      <div className='flex items-center justify-center p-4'>
      <PinIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black mr-1 sm:mr-2" />

        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 text-center'>
          FAQS
        </h1>
      </div>
      </motion.div>
      <motion.div
        className="relative left-0 bottom-[-5px] h-[2px] bg-black mb-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformOrigin: "left", width: "25%" }}
      />
      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 + (index * 0.3), ease: "easeOut" }}
          className="w-full"
        >
          <div
            className={`${openIndex === index ? 'bg-first' : 'bg-white'
              } border border-third transition-all duration-300 ease-in-out rounded-md overflow-hidden mb-4`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-3 md:px-6 py-4 focus:outline-none"
            >
              <span
                className={`text-sm md:text-base font-medium ${openIndex === index ? 'text-white' : 'text-first'
                  } transition-all duration-300 ease-in-out text-wrap text-left`}
              >
                {faq.question}
              </span>
              <span
                className={`ml-3 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
              >
                <ChevronDownIcon
                  className={`${openIndex === index ? 'text-white' : 'text-first'
                    }`}
                />
              </span>
            </button>
            <div
              className={`transition-all ${openIndex !== index ? 'h-0' : 'h-fit'
                } duration-300 ease-in-out overflow-hidden`}
            >
              <div className="px-3 md:px-6 py-4 bg-gray-100">
                <p className="text-xs md:text-sm text-left text-wrap" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default FAQ;
