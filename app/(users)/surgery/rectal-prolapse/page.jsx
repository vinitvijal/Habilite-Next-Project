'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Highly Experienced & Internationally Trained Team",
  "Complete Range of Surgeries",
  "Offering Customized & Tailored Approach",
  "All Medical Insurances Accepted",
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
      question:"Can rectal prolapse be treated with medicines?",
      answer:"There are no medicines that can cure rectal prolapse. However, certain dietary precautions and lifestyle changes can delay the progression of the disease."
    },
    {
      question:"Is surgery always essential for rectal prolapse?",
      answer:"Mild rectal prolapse can usually be treated with specific exercises, avoiding constipation or straining while passing stools. These modalities might not cure rectal prolapse but certainly, halt the progression of the disease, and you may not require surgery for another few years."
    },
    {
      question:"What is the duration of stay in the hospital?",
      answer:"The majority of the patients at our center get discharged within 24-36 hours of surgery. The surgery is done laparoscopically with a reduced ports technique; hence you can expect a speedier recovery."
    },
    {
      question:"What is the best procedure for rectal prolapse?",
      answer:"There are many surgical procedures for treating rectal prolapse. These surgeries can be carried out either through the anal route or through your abdomen. Regarding the efficacy and results, laparoscopic surgery provides the best results. You must consult a specialist who can assess your condition and offer you the best possible treatment in your case."
    },
    {
      question:"How is the course of recovery after laparoscopic repair of rectal prolapse?",
      answer:"Laparoscopic surgery carried out by experienced hands is associated with rapid recovery and produces long-lasting relief from symptoms. There is hardly any bed rest required after surgery. Patients can walk for long distances after 24 hours of surgery. You can start taking a bath from the following day of surgery. You can join back your work and start driving in a week."
    },
    {
      question:"Can rectal prolapse reoccur after surgery?",
      answer:"The chances of reoccurrence depend upon the procedure chosen, the expertise of the surgeon, and your dietary habits. According to Dr. Kapil Agrawal, one of the best laparoscopic surgeons for rectal prolapse, choice of procedure and patient's lifestyle plays a significant role in determining the success of the surgery."
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


  const featureData = [
    {
      points: [
        "Long lasting results",
        "Almost zero percent chance of recurrence",
        "Rapid recovery",
        "Early and easy mobility",
      ],
    },
 
    {
      points: [
        "Less Tissue Trauma and Less post-operative pain",
        "Less Dependence on pain relievers",
        "Low risk of infection",
        "Almost no risk of hernia",
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
              src="/main.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-transparent hover:bg-black hover:bg-opacity-20">
                Best Surgeon for <br /> Rectal Prolapse
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

        <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10">
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.3,once:true }} 
          transition={{ duration: 0.6 }}
          className='pt-8  border-b-2 pb-12 border-first'>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-3 text-second">Best Surgeon for Rectal Prolapse</h1>
            <div className="mb-4 text-lg">
              <p className='pt-2'>Our surgeons use latest and most advanced endoscopic techniques to treat rectal prolapse.</p>
              <p className='pt-2'>Our team provides honest and unbiased opinion with strict adherence to international guidelines while offering treatment options to the patient.</p>
              <p className='pt-2'>Our highly experienced team offer a complete range of procedures to help relieve uncomfortable and embarrassing symptoms and improve your quality of life.</p>
              <p className='pt-2'>Our team encompasses nutritionists, dieticians and physicians to offer specialized and customized dietary plans as well as take care of co-existing medical illnesses for a smooth recovery.</p>
              <p className='pt-2'>We take great care to provide discreet, comfortable diagnosis and treatment and make outstanding care accessible to you.</p>
            </div>
          </motion.div>

          
          <div className='flex-col mb-8 '>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Rectal Prolapse</h2>
              <p className=" mb-2">
              Rectum is last part of the intestine where feces or stools is stored before being passed. When the rectum lining becomes weak or detached from the body, rectum starts protruding from the anus, a condition called as rectal prolapse.
              </p>
              <br />
        
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> Types of rectal prolapse</h2>
              <div className=" mb-4 ">
                <p>There are two types of rectal prolapse: </p>
                <p className='pt-2'>1. Partial thickness prolapse (also called internal intussusception). </p>
                <p className='pt-2'>2. Full-thickness prolapse (also called external prolapse). </p>
                <p className='pt-2'>Partial thickness rectal prolapse is a condition when only the innermost lining of rectum or mucosa protrudes only. Since the prolapse is not complete or full thickness, the amount of prolapse is quite small. </p>
                <p className='pt-2'>Majority of patients with partial prolapse present with constipation or feeling of incomplete evacuation. </p>
                <p className='pt-2'>Full thickness rectal prolapse is when the entire wall of rectum becomes so loose that it completely falls out of anus while passing stools. </p>
                <p className='pt-2'>Partial thickness rectal prolapse is usually less than 2 cm and produces radial folds. </p>
                <p className='pt-2'>Full thickness rectal prolapse is 3-5 cm and produces concentric rings. </p>
              </div>
              <div>
                <br />
                <h2 className="text-3xl font-semibold mb-2 text-first">Causes of Rectal Prolapse</h2>
                <div className=" mb-4">
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Advancing age </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Multiple pregnancies leading to repeated trauma of pelvic floor. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Chronic or long-term constipation </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Chronic cough </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Neurological conditions like multiple sclerosis, spinal cord tumors </p>
                </div>
              </div>
            </motion.div>
            <br />
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3,once:true }} 
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Symptoms of rectal prolapse</h2>
              <div className="mb-4">
                <p className='pt-2'><span className="font-medium mr-1">→ </span> The most common symptom is lump coming out of anus. In the initial stages, it happens only while passing stools but as the time passes by, it may happen while coughing, sitting or walking. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ </span> In the early course of disease, the lump can be pushed back into the anus after defecation but latter the prolapse can be permanent. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ </span> Mucous discharge from the anus or occasional bleeding. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ </span> In case of partial prolapse, there is feeling of incomplete emptying after bowel motion. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ </span> About 50% of patients complain of constipation. </p>
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
              className="text-3xl md:text-4xl font-semibold text-first m-4">
                COMPLICATIONS DUE TO UNTREATED RECTAL PROLAPSE
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
                <div className="mb-4 ">
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Initially prolapse is reducible but it might become permanent as the disease progresses </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Long standing rectal prolapse can cause permanent damage to anal sphincter muscles, leading to loss of control over bowel movement. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> It may cause multiple ulcers in prolapsed rectum, leading to infection & bleeding. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> The rectum may become permanently thickened and unhealthy. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Cancer of Gall Bladder:</span>  When the gall bladder stones are present for a long time , it can even lead to gall bladder cancer. </p>
                </div>
              </div> 
            </motion.div>
          </div>
          
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1,once:true }} 
          transition={{ duration: 0.6 }}
          className='flex-col mb-16 '
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-second text-center">Best Treatment for Rectal Prolapse</h1>
            <div className=" mb-4 ">
              <p className='pt-2'> Although a few numbers of patients, especially with partial rectal prolapse can be managed conservatively and certain dietary and life style modifications, majority of patients will require some form of surgical intervention for permanent cure of this disease.</p>
              <p className='pt-2'> Surgical management of rectal prolapse can have two approaches: </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Abdominal approach </span> - Through the belly. </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Perineal approach </span> - Through the bottom or anus. </p>
              <p className='pt-2'>  Although there are several procedures, but the type of surgery and approach depends on patients age, existing health problems, extent of the prolapse and his general health.</p>
              <p className='pt-2'> The abdominal approach has always better outcome. If patient is fit and healthy, it must undergo laparoscopic surgery as the results are far satisfying and long lasting. </p>
              <p className='pt-2'> The various procedures conducted by our surgical team include: </p>
            </div>
            <br />
        
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">STARR Procedure (Stapled Trans Anal Rectal Resection):</h2>
            <div className=" mb-4 ">
              <p className='pt-2'> The procedure is performed through the anal canal (trans anal approach). </p>
              <p className='pt-2'> It is an innovative, technically safe and minimally invasive procedure useful in carefully selected and well-informed patients having partial or internal prolapse. </p>
              <p className='pt-2'> The procedure resects the internal rectal prolapse by means of staplers inserted into the anal canal. </p>
              <p className='pt-2'> No surgical incision, minimal pain, same day discharge and rapid recovery make this procedure an attractive option in appropriate patients. </p>
            </div>
            <br />

            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Other Perineal Procedures:</h2>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Mucosal Sleeve Resection <span className="font-medium mr-1">(Delorme Procedure)</span> & Perineal Proctosigmoidectomy <span className="font-medium mr-1">( Altemeier Procedure)</span> are the other two perineal or trans anal procedures performed by our team.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Only done in selected group of patients especially elder patients not fit for transabdominal or laparoscopic surgery due to associated medical illness. </p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Each procedure has got its own indication, benefits and proper selection of patients is a must for achieving best outcomes. </p>
            </div>
            <br />

            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Laparoscopic or Minimally Invasive Rectopexy With Possible Bowel Resection</h2>
            <div className=" mb-4 ">
              <p className='pt-2'> The procedure of choice for complete rectal prolapse in patients fit to undergo general anesthesia </p>
              <p className='pt-2'> It is associated with best functional outcomes and minimal chance of recurrence. </p>
              <p className='pt-2'> 3 tiny incisions of 0.5 cm are created on the belly and the rectum is pulled upwards and secured to the sacrum (back wall of the pelvis) either with the help of sutures directly or using a Mesh. </p>
              <p className='pt-2'> The basic purpose is to hold the rectum in its normal anatomical position until such a time as scarring occurs. </p>
              <p className='pt-2'> When patients complain of chronic or long-term constipation, removal of a part of colon may be necessary to improve bowel function (recto sigmoidectomy). </p>
            </div>
          </motion.div>
        </div>

        <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
          <div className="w-full px-8 md:px-16 lg:px-24">
            <div className="text-center mb-20">
              <motion.h1
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2,once:true }}
              className="text-3xl md:text-4xl font-semibold text-first m-4">
                ADVANTAGES OF LAPAROSCOIC SURGERY
              </motion.h1>
              <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%", duration: 2000 }}
              className="mx-auto border-first border-b-2 mt-4"
              >
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto p-6 pt-0">
              {featureData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-white p-8 shadow-md border-third border-2"
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
                    <div className="text-lg mx-8">
                      {feature.points.map((point, index) => (
                        <p key={index} className={`py-3 border-t border-third ${index===0?'border-none':''} `}>{point}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10 mb-16'>
          <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
            <div className="text-center mb-8">
              <motion.h1
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2,once:true }}
                className="text-3xl md:text-4xl font-semibold text-first">
                WHY CHOOSE US -
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
                  transition={{ duration: 1 }} 
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
