'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Advanced laparoscopic surgeries",
  "No cuts",
  "Painless Surgeries",
  "High quality mesh to prevent recurrence",
  "Fixed price with no hidden cost",
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
      question:"Is Nissen fundoplication surgery effective?",
      answer:"Studies have shown that more than 90% of patients who undergo the procedure say their symptoms are cured or improved. Although technically challenging, the laparoscopic approach is the preferred approach for faster recovery and minimal pain. According to Dr.Kapil Agrawal, one of the best laparoscopic surgeons for fundoplication, a thorough patient evaluation is necessary. Patients must undergo esophageal manometry studies, pH measurements before undergoing surgery to ensure a proper diagnosis and successful outcomes following surgery."
    },
    {
      question:"What is the duration of stay in the hospital?",
      answer:"The majority of the patients get discharged within 24 -36 hours of surgery. Since the procedure is done laparoscopically by our team, you can expect a very speedy recovery."
    },
    {
      question:"When can I go back to work?",
      answer:"Most patients can return to normal activities within a week. However, patients should avoid vigorous exercise and heavy lifting for two months to allow the hiatus to heal. Patients undergoing the traditional procedure usually resume normal activities in 6 to 8 weeks."
    },
    {
      question:"What are different types of Fundoplication Surgery?",
      answer:"Nissen Fundoplication, Toupet Fundoplication, Doars Fundoplication"
    },
    {
      question:"Which is the best fundoplication among all?",
      answer:"In the majority of patients, Nissen fundoplication is the best procedure. Still, the surgeon should have the expertise to perform every type of surgery. There are indications where other types of fundoplication can yield better surgeons. Our team, which has the best surgeon for fundoplication, has the expertise and experience to perform every kind of fundoplication successfully."
    },
    {
      question:"What is the surgical treatment of hiatal hernia?",
      answer:"Hiatus hernia can also make the anti-reflux barrier non-functional. As a result, patients might experience symptoms of GERD (gastroesophageal reflux disease). Therefore, the resolution of symptoms is necessary to avoid complications of GERD. We perform Laparoscopic Repair of Hiatus Hernia along with fundoplication. Hiatus hernia repair involves restoration of normal anatomy and repair of Hiatal defect."
    },
    {
      question:"What is the cost of fundoplication or hernia surgery?",
      answer:"The cost of fundoplication depends upon the type of hospital, room category, size of hiatus hernia. However, we can also perform the surgeries reasonably without compromising the quality at a budget-friendly."
    },
    {
      question:"What are GERD symptoms related to obesity?",
      answer:"If you are overweight or obese, there is a possibility that symptoms of GERD might decrease after correction of obesity. You can contact us and we can do a complete evaluation. Our bariatric physicians and surgeons, who specialize in managing obesity will offer a customized treatment for treating both the problems."
    },
  ];


  const featureData = [
    {
      points: [
        "Discharge within 24 hourss",
        "Virtually Scarless Surgery",
        "Speedy recovery",
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
              src="/fistula.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-25">
                Gastroesophageal Reflux <br /> Disease
              </h1>
            </div>
          </div>
        </div>
        <div>
          <motion.div
            initial={{opacity: 0, scale: 0.12 }}
            animate={{ opacity: 1, scale: 1 }}
            variants={boxVariants}
            transition={{  duration: 0.6 }}
            whileInView="visible"
            viewport={{ amount: 0.2,once:true }}
            className="sm:w-2/3 w-full mx-auto relative sm:-mt-12 lg:-mt-24 md:px-6 py-4 bg-white sm:shadow-md items-center md:rounded-lg"
          >
            <FeatureList features={features} />
          </motion.div>
        </div>

        <div className="flex flex-col mx-auto pt-16 px-8 md:px-16 lg:px-24 gap-10">
          
          <div className='flex-col mb-8 '>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">What is GERD</h2>
              <div className=" mb-4">
                <p className='pt-2'> Gerd is a condition that happens when the acid present in the stomach back flows into the food pipe connecting the mouth to stomach. It usually happens when the valve present at the junction of food pipe and stomach becomes faulty due to various conditions. </p>
                <p className='pt-2'> When the refluxed acid touches the sensitive lining of food pipe also known as esophagus, it causes burning sensation in the chest or throat called heartburn.</p>
              </div>
              <br />
        
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> Symptoms of GERD</h2>
              <div className=" mb-4 ">
                <p><span className="font-medium mr-1">Heart burn or chest pain </span> is the most common of GERD. It is an unpleasant burning sensation in the chest sometimes radiating to throat </p>
                <p className='pt-2'> Reflux of food particles into the mouth leaving a bitter taste. </p>
                <p className='pt-2'> In long standing cases, difficulty in swallowing food or food sticking into throat. </p>
                <p className='pt-2'> Sometimes, reflux is silent and may present with unusual and difficult to diagnose symptoms like <span className="font-medium mr-1">voice change, chronic cough or sore throat. </span></p>
                <p className='pt-2'> Gerd can also present as respiratory problems like asthma, pneumonia etc. in few patients as a silent manifestation of the disease. </p>
              </div>
              <div>
                <br />
                <h2 className="text-3xl font-semibold mb-2 text-first">Risk factors for GERD</h2>
                <div className=" mb-4">
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Eating large portions especially oily and spicy food. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Drinking a lot of citrus juices, alcohol, caffeinated drinks, and carbonated beverages. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Immediately going to sleep after dinner. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Smoking. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Obesity. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Stress. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Pregnancy. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Certain medicines like Barbiturates, Calcium Channel Blockers, Nitrates </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Hiatal hernia, meaning migration of part of stomach into your chest. </p>
                </div>
              </div>
            </motion.div>
            <br />
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
                COMPLICATIONS THAT CAN ARISE DUE TO UNTREATED GERD
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
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Prolonged presence of acid in the esophagus or food pipe can lead to formation of ulcers or inflammation of esophagus. Patients usually complain of nausea, vomiting, difficulty in swallowing food and may even vomit blood </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span> Some patients may even develop narrowing of the food pipe called as stricture of esophagus. Patients complain of dysphagia or difficulty in swallowing of foods. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ </span>  Few patients with a long history of GERD can develop a condition called as Barrett’s esophagus. It is a precancerous condition and if GERD is not treated properly, Barrett’s esophagus can lead to development of cancer of esophagus. </p>
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
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-second text-center">Hiatus Hernia</h1>
            <div className=" mb-4 ">
              <p className='pt-2'> Hiatus hernia is a type of hernia which is one of the treatable and most important cause of GERD. </p>
              <p className='pt-2'> This is a condition which happens when upper part of stomach slides or protrudes into the chest from its normal position in abdomen. The protrusion occurs through a weak point or hole or hiatus in the diaphragm, a muscle that separates the lungs from the abdominal organs. </p>
              <p className='pt-2'> As a result, the normal function of the valve becomes disrupted and reflux of acid back into the food pipe occurs. </p>
              <p className='pt-2'> The symptoms of hiatus hernia are almost similar to GERD including heart burn, dysphagia or bitter taste in the mouth. </p>
              <p className='pt-2'> Some of the common causes include obesity, increased pressure in abdomen due to coughing, vomiting, lifting heavy weights or chronic constipation. Blunt trauma or injury can also lead to development of hernia. </p>
            </div>
            <br />
        
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Best Treatment of GERD & Hiatus Hernia</h2>
            <div className=" mb-4 ">
              <p className='pt-2'> With the development of reliable laparoscopic surgical techniques, as well as more potent medical treatments, the treatment algorithm of GERD has changed. </p>
              <p className='pt-2'> Our high volume and advanced, cutting edge technology combined with expert specialists means you are getting the superior care you deserve. </p>
            </div>
            <br />

            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Gerd & Hiatus Hernia is generally treated in three progressive steps:</h2>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">Dietary & Life style changes: </span> Reducing weight, cutting down or eliminating smoking and alcohol consumption, and altering eating and sleeping patterns, avoid wearing tight clothes can help majority of the patients. </p>
              <p className='pt-2'><span className="font-medium mr-1">Drug Therapy:</span> Drug therapy is usually indicated when dietary and life style changes do not produce desired results. It may be in the form of Antacids which neutralize stomach acids, Proton Pump Inhibitors which suppresses acid production or Prokinetics which increases the motility of stomach. This therapy needs to be discussed with your surgeon. </p>
              <p className='pt-2'><span className="font-medium mr-1">Surgery:</span> Patients who do not respond well to lifestyle changes or medications will eventually require surgery to counter the symptoms of GERD. You will need to discuss with your surgeon and physician whether you are a candidate for any of these procedures. </p>
            </div>
            <br />

            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Indication for surgery</h2>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">➔ </span> Inadequate relief from medical management </p>
              <p className='pt-2'><span className="font-medium mr-1">➔ </span> Prevention of long-term complications </p>
              <p className='pt-2'><span className="font-medium mr-1">➔ </span> Desire for a long-lasting relief without medications </p>
              <p className='pt-2'><span className="font-medium mr-1">➔ </span> Side effects associated with medicines. </p>
              <p className='pt-2'><span className="font-medium mr-1">➔ </span> Presence of moderate to large hiatus hernia. </p>
              <p className='pt-2'>Lifelong medication is costlier and surgery may be the cheaper option in the long term.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Laparoscopic Surgery for GERD & Hiatus Hernia</h2>
            <div className=" mb-4 ">
              <p className='pt-2'> The basic purpose of surgery is to strengthen the anti-reflux barrier. </p>
              <p className='pt-2'> This is achieved by forming a wrap around the lower end of esophagus. The wrap is formed by upper portion of the stomach. </p>
              <p className='pt-2'> Although many variants of wrap had been advocated, the best results are obtained by a forming a complete wrap known as Nissen Fundoplication. The wrap acts as a mechanical barrier and strengthens the anti-reflux mechanism. </p>
              <p className='pt-2'> If the patient has associated hiatus hernia, restoration of normal anatomy is done by pulling down the stomach and the gastro esophageal junction back into the abdomen and narrowing down the hiatus or present in the diaphragm. </p>
              <p className='pt-2'> Our team is well experienced to carry out this procedure with laparoscopic approach. </p>
              <p className='pt-2'> Only 3-4 tiny incisions of 0.5 cm are made in the belly or abdomen and the entire surgery is carried out with the help of long thin telescope and instruments. The patients are discharged within 48 hours. </p>
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
