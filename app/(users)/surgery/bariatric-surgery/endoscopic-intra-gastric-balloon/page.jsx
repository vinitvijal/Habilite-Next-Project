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
  const faqList=[
   
    {
      question:"What is the duration of my stay at the hospital?",
      answer:"The balloon is placed as a daycare procedure. Since it is non-surgical, the patients are discharged within 3 hours of surgery."
    },
    {
      question:"Is the balloon procedure covered under insurance?",
      answer:"The majority of insurance providers are giving consent to bariatric procedures. We have partnered with some of the best hospitals in New Delhi, NCR, where our expert team can successfully raise your cashless claims, and patients can undergo these procedures completely cashless."
    },
    {
      question:"Are there any side effects of balloons?",
      answer:"The balloon has no significant side effects. Some patients may experience nausea for a few days, after which their bodies adapt to the balloon."
    },
    {
      question:"What is the difference between a Spatz balloon and an Allurion balloon?",
      answer:"The Spatz balloon has a life of one year, whereas the Allurion balloon has a life of four months. Spatz balloons are modifiable, whereas Allurion balloons are nonmodifiable. Spatz balloons require endoscopic insertion, whereas the Allurion balloons must be swallowed."
    },
    {
      question:"How are they taken out of the body?",
      answer:"Spatz balloons require an endoscope to be removed from the stomach. In contrast, alluring balloons burst independently after four months of insertion."
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
              src="/MAIN.jpg"
              alt="Background"
              className="w-full rounded-lg object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-30 ">
              IntraGastric Balloon Surgery <br /> in Delhi
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10">
          <div className='flex-col mb-8 mt-16'>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.2,once: true }} 
            transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Intragastric Balloon -</h2>
               <div className=" mb-4 text-lg">
                 <p className='pt-3 font-semibold'>
                 A non-surgical procedure which helps achieve better portion control by making you feel full after eating less food.</p>
                 <p className='pt-2'>The intragastric balloon has emerged as one of the most promising and efficient solutions for weight loss in the past few years.</p>
                 <p className='pt-2'> This non-surgical procedure offers an effective solution for individuals struggling with obesity. It is also recommended for patients who are super obese and need to cut their weight to become fit to undergo bariatric surgery.</p>
               </div>
            </motion.div>
            <br />
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2,once:true}} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Benefits of an Intra Gastric Balloon</h2>
              <div className="mb-4">
              <p className='pt-2'><span className="font-medium mr-1">→ Non-surgical Approach:</span> It is an entirely non-surgical procedure in which the balloon is placed endoscopically, </p>
              <p className='pt-2 ml-5'>or the patient has to swallow the balloon. The patient can return home within two hours of the procedure.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Reversible procedure: </span> It is completely reversible. In rare circumstances, if the balloon does not suit your body, it can be easily removed through the mouth.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Reduced appetite and portion control:</span> The intragastric balloon occupies almost 60% of the space in the stomach. As a result, even a tiny amount of food creates a </p>
              <p className='pt-2 ml-5'>feeling of fullness and reduces food intake. This controlled eating helps develop healthier eating habits and promotes weight loss.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Temporary intervention: </span> Depending upon the balloon's quality and type, the balloon's life in the stomach ranges from 4 months to one year. </p>
              <p className='pt-2 ml-5'>During this golden period, individuals not only achieve significant weight loss but also have an opportunity to adopt sustainable and healthy lifestyle changes.</p>
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">
            Ideal Candidate for Intra-gastric Balloon</h2>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">BMI requirement:</span>An ideal candidate should have a BMI ranging between 30 and 40. However, as mentioned earlier, </p>
              <p className='pt-2 ml-5'>it can be placed in super-obese patients who are unfit for surgery or as an adjunct to bariatric surgery.</p>
              <p className='pt-2'><span className="font-medium mr-1">Unsuccessful weight loss attempts:</span>Candidates have tried various weight-loss options or medical weight-loss programs but have yet to achieve the desired results.</p>
              <p className='pt-2'><span className="font-medium mr-1">Willingness to commit to lifestyle changes:</span>Individual commitments to adopt and maintain healthy eating and lifestyle habits form the core of a </p>
              <p className='pt-2 ml-5'>successful weight loss program following balloon therapy. Candidates should be motivated and prepared to make these long-term adjustments.</p>
              <p className='pt-2'><span className="font-medium mr-1">Absence of gastrointestinal disorders:</span>Candidates should be free from active gastrointestinal disorders, such as ulcers, strictures, or bleeding disorders.</p>
            </div>
            <br />
        
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">
            Types of Intragastric Balloon</h2>
            <div className=" mb-4 ">
              <p className='pt-3'>There are a variety of balloons available in the market, but the best and most recommended intragastric balloons include :- </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Spatz Balloon:</span>It is one of the best and most popular balloons manufactured in the USA.</p>
              <p className='pt-2 ml-5'> The main advantage of the Spatz balloon is that it can be modified according to the patient's needs. </p>
              <p className='pt-2 ml-5'>It means the solution present in the balloon can be increased or decreased depending on the requirements of the patient. </p>
              <p className='pt-2 ml-5'> Another advantage of this balloon is the life span of approximately one year. However, Spatz balloon can be placed and filled in the stomach endoscopically.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Allurion Balloon: </span>Allurion balloon has gained widespread acceptance because of their ease of insertion.</p>
              <p className='pt-2 ml-5'> The main advantage of the Spatz balloon is that it can be modified according to the patient's needs. </p>
              <p className='pt-2 ml-5'>It has to be simply swallowed and no endoscopy needs to be performed during insertion. It has an AI-based program that tracks your weight loss and warns you if sufficient progress has not been achieved. </p>
              <p className='pt-2 ml-5'>After four months, the balloon burst on its own and expelled from the body through stools.</p>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1,once:true}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">How Intragastric Balloon Works -</h2>
            <div className=" mb-4 ">
             <p className='pt-2'><span className="font-medium mr-1">→  Reduced stomach capacity:</span> The balloon occupies the majority of the space in the stomach. </p>
             <p className='pt-2 ml-5'>As a result, the patient experiences a sense of fullness with a small quantity of meals, which results in weight loss over time.</p>
             <p className='pt-2'><span className="font-medium mr-1">→ Increased satiety signals:</span>Due to the inflated balloon, the patient always feels full. As a result, cravings for foods and sweets significantly decrease,</p>
             <p className='pt-2 ml-5'> and appetite is suppressed.</p>
             <p className='pt-2'><span className="font-medium mr-1">→ Behaviour modifications:</span>Patients undergo several counseling sessions to adopt better lifestyle habits and eat healthy foods. </p>
             <p className='pt-2 ml-5'>This helps them maintain weight loss for an extended period, even after the balloon is removed.</p>
             <p className='pt-2 font-semibold'>To Know about Balloon Therapy for weight Loss, listen to our Podcast: <a href=" https://podcasters.spotify.com/pod/show/habilite-clinics"><u> https://podcasters.spotify.com/pod/show/habilite-clinics</u></a></p>

             <h2 className="text-3xl md:text-4xl font-semibold mb-1 text-first mt-8">How the balloon is placed?</h2>
              <p className='pt-2'><span className="font-medium mr-1">→  Through evaluation:</span> A thorough patient evaluation is done to assess its suitability.</p>
              <p className='pt-2'><span className="font-medium mr-1">→  Anesthesia:</span> The patient might require a bit of sedation depending on the type of balloon.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Insertion of the balloon:</span> The balloon is inserted endoscopically through the mouth, or the balloon has to be swallowed depending upon the type of balloon.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Confirmation:</span> The conformation is done to determine whether the balloon is in the right place with the help of an endoscope or X-ray machine.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Inflation of balloon:</span> The balloon is then inflated or filled with a unique solution. The volume of the solution depends upon </p>
              <p className='pt-2 ml-5'>the size of the stomach and the patient's weight loss goals.</p>
            </div>
          </motion.div>   
          
        </div>
       
       <motion.div
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ amount: 0.1,once:true }} 
        transition={{ duration: 0.4 }}
        className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 mt-16 gap-6"
        >
          <div className='flex-col mb-16'>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Why Choose Our Program - </h2>
            <div className="mb-4 ">
              <p className='pt-3'>Habilite Clinics stands out as a leader in weight loss programs, offering a comprehensive range of modalities for effective and sustainable weight loss. Here are a few reasons why choosing us for intragastric balloon procedure is a decision you can trust :-</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Expertise and Experience: </span> Dr. Kapil Agrawal is a highly skilled professional with a vast experience of 22 years.</p>
              <p className='pt-2 ml-5'> He brings a wealth of knowledge to ensure that your weight loss journey is guided by expertise at every step.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Fully AI-Based Program: </span>At Habilite Clinics, we offer a state-of-the-art program to monitor and track your weight loss journey.  </p>
              <p className='pt-2 ml-5'> This AI program provides real-time insights and personalized recommendations to optimize.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Dedicated Multidisciplinary Team:</span>O
              A best weight loss program, requires a multidisciplinary approach to achieve the best results. </p>
              <p className='pt-2 ml-5'>Therefore, we have designed a highly professional team of nutritionists, physicians, and endocrinologists. They synchronize to tailor the best treatment plan to your unique needs.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Cashless Insurance and EMI Options:</span>
              We believe that access to quality healthcare should be affordable for everyone. </p>
              <p className='pt-2 ml-5'>Dr. Kapil Agrawal is partnered with some of the best state-of-the-art hospitals. These hospitals accept all types of cashless insurance. </p>
              <p className='pt-2 ml-5'> We also offer flexible EMI options to make the intragastric balloon procedure accessible to as many individuals as possible.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Most Affordable Prices: </span>
              At Habilite Clinics, we perform these procedures at very affordable prices.  </p>
              <p className='pt-2 ml-5'>We always ensure that we perform intragastric balloon procedures .</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Proven Results:  </span>
              Our program has a track record of delivering the best results for our patients. Many patients have achieved significant and long-term weight </p>
              <p className='pt-2 ml-5'>loss with the intragastric balloon.</p>
             

            </div>
          </div>  
        </motion.div>     


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
