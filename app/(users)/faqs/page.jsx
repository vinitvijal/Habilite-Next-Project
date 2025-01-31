'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What are Dr. Kapil Agrawal's areas of expertise?",
    answer: "Dr. Kapil Agrawal specializes in advanced laparoscopic gastrointestinal surgeries and bariatric or weight-loss surgeries. He is renowned for his surgical precision and tailored treatment plans for patients."
  },
  {
    question: "What are Dr. Kapil Agrawal's areas of expertise?",
    answer: "Dr. Kapil Agrawal specializes in advanced laparoscopic gastrointestinal surgeries and bariatric or weight-loss surgeries. He is renowned for his surgical precision and tailored treatment plans for patients."
  },
  {
    question: "What are Dr. Kapil Agrawal's areas of expertise?",
    answer: "Dr. Kapil Agrawal specializes in advanced laparoscopic gastrointestinal surgeries and bariatric or weight-loss surgeries. He is renowned for his surgical precision and tailored treatment plans for patients."
  },
  {
    question: "What are Dr. Kapil Agrawal's areas of expertise?",
    answer: "Dr. Kapil Agrawal specializes in advanced laparoscopic gastrointestinal surgeries and bariatric or weight-loss surgeries. He is renowned for his surgical precision and tailored treatment plans for patients."
  },
  {
    question: "What are Dr. Kapil Agrawal's areas of expertise?",
    answer: "Dr. Kapil Agrawal specializes in advanced laparoscopic gastrointestinal surgeries and bariatric or weight-loss surgeries. He is renowned for his surgical precision and tailored treatment plans for patients."
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-4/5 mx-auto px-4 py-10'>
        <h1 >
            FAQs
        </h1>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`${
            openIndex === index ? 'bg-first' : 'bg-white'
          } border border-third transition-all duration-300 ease-in-out rounded-md overflow-hidden mb-4`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-3 md:px-6 py-4 focus:outline-none"
          >
            <span
              className={`font-medium ${
                openIndex === index ? 'text-white' : 'text-first'
              } transition-all duration-300 ease-in-out text-left`}
            >
              {faq.question}
            </span>
            <span
              className={`ml-3 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <ChevronDownIcon
                className={`${
                  openIndex === index ? 'text-white' : 'text-first'
                }`}
              />
            </span>
          </button>
          <div
            className={`transition-all ${
              openIndex !== index ? 'h-0' : 'h-fit'
            } duration-300 ease-in-out overflow-hidden`}
          >
            <div className="px-3 md:px-6 py-4 bg-gray-100">
              <p className="text-sm text-left">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
