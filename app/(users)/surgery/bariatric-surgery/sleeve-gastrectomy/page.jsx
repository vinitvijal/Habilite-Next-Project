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
              src="/MAIN.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-25">
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
              <p className='pt-3 font-semibold'>
              One of the most popular, low maintenance, straight forward bariatric procedure with excellent weight loss.</p>
              <p className='pt-2'>Vertical Sleeve Gastrectomy is a purely restrictive type of surgery.</p>
              <p className='pt-2'> It has become one of the most commonly performed surgery because of substantial weight loss, </p>
              <p className='pt-2'> no requirement of supplements and minimal follow-up.</p>
              <p className='pt-2'>It is in fact, set and forget type of surgery</p>
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
