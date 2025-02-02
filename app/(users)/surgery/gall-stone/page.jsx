'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "30 Minute Painless Procedure",
  "Single Port Scarless Surgery",
  "Experienced & Internationally Trained Team",
  "Affiliated to Best Hospitals in Delhi, NCR",
  "Cashless Insurance Facility Available",
  "Honest Pricing and No Hidden Charges",
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
      question:"Can I live a normal life after gallbladder removal surgery?",
      answer:"You can live a normal life without gallbladder. The gallbladder is only a storehouse. Bile production from the liver will never stop and the bile produced by liver empties directly into small intestine. Post surgery, you can resume a normal diet with or without a few modifications. There are no long-term consequences of the removal of a gallbladder on digestion or overall health."
    },
    {
      question:"Are there any medicines that can help in dissolving gallstones?",
      answer:"Certain medicines can help dissolve gallstones, but the results are not promising. Only tiny cholesterol stones can dissolve if medicines are taken for a long time. The chances of reformation of gallstones are very high once these medicines are stopped. You must contact a gallstone specialist to determine if medication therapy is suitable for your specific situation."
    },
    {
      question:"Should I go for gallbladder surgery for asymptomatic gallstones?",
      answer:"This being a very important decision should be considered at the hands of gallstone specialist. Asymptomatic gallstones can, of course and most likely will at some time in the future, will start developing complications. The gallbladder stone specialist surgeon will tell you about the risks and benefits of your case. And naturally, everyone's story is different; what works for one individual will not work the same way for another."
    },
    {
      question:"Can gallbladder stones be cancerous?",
      answer:"The association between gallstones and risk for developing cancer of the gallbladder, while not seen in most populations on a worldwide basis. Long-standing inflammation in the gallbladder from having stones can lead to cancerous changes over time."
    },
    {
      question:"What are gallbladder polyps, and should I remove them?",
      answer:"The decision to remove gallbladder polyps depends on several factors, including the size of the polyps, the presence of symptoms, risk factors for gallbladder cancer, and individual preferences. You must contact the best gallbladder stone specialist to discuss the risks and benefits of surgery."
    },
    {
      question:"What is the role of apple cider in dissolving gallstones?",
      answer:"It is not well supported by scientific data that apple cider helps with dissolution of gallstones. The majority of the claims have been derived from traditional use rather than any form of scientific studies. Since the main component of apple cider vinegar is an acetic acid, not enough evidence exists that even a small amount could dissolve gallstones."
    },
    {
      question:"How can I prevent formation of gallstones?",
      answer:"However, most gallstones can be prevented with a healthy lifestyle that includes dietary modification and sometimes medications plus regular exercise. In general, diets low in fat and high in fiber may reduced risk. Avoid quick weight gain or loss, as it disrupts cholesterol metabolism and favors the formation of gallstones."
    },
    {
      question:"can gall bladder and hernia surgery be performed together?",
      answer:"So it is common to do gallbladder surgery and hernia repair the same time. It is especially therapeutic in cases of combined surgery and the patient under goes best if both are indicated.<br/> Still, the choice relies on how complicated are the two surgeries and experience and expertise of the surgeon. Your surgeon is the best person to decide if it is safe to perform both the surgeries simultaneously."
    },
  ];


  const featureData = [
    {
      points: [
        "Speedy Recovery",
        "Early and Easy Mobility",
        "Early and Easy Mobility",
        "Discharge within 24 hours",
        "Virtually Scarless Surgery",
      ],
    },
 
    {
      points: [
        "Less Tissue Trauma",
        "Less post-operative pain",
        "Less Dependence on pain relievers",
        "Low risk of infection",
        "Almost no risk of hernia",
      ],
   
    },
  ];

  const surgeonInfo = [{
    title: "Best Laparoscopic Gallbladder Stone Surgeon in Delhi",
    description: `"Dr.Kapil Agrawal is one of the renowned and best gallbladder surgeons in Delhi, India. He is recognized for his skills in executing Laparoscopic Gall Bladder Surgeries as well as Robot-Assisted Gallbladder Stone Surgeries. His vast experience of over 23 years and having performed more than 7,000 gallbladder surgeries speaks volumes about his dedication to providing the best care for his patients. Associated with top hospitals in Delhi, Dr. Kapil ensures excellent outcomes with an empathetic approach and strong commitment to patient care"`,
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
              src="/gallStone.jpg"
              alt="Background"
              className="w-full rounded-lg object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-black bg-opacity-25">
                Best Gallbladder Surgeon <br /> in Delhi
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
            viewport={{ amount: 0.2,once: true }}
            className="sm:w-2/3 w-full mx-auto relative sm:-mt-12 lg:-mt-24 md:px-6 py-4 bg-white sm:shadow-md items-center md:rounded-lg"
          >
            <FeatureList features={features} />
          </motion.div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10">
          <div className="py-8 mt-16 mb-8 text-center border-t-2 border-b-2 border-first">
            {surgeonInfo.map((info, index) => (
              <div key={index} className="mb-8">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0.2,once:true }}
                  className="text-3xl md:text-4xl  font-bold my-6 text-second"
                >
                  {info.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0.2,once: true }}
                  className="text-lg sm:text-xl md:text-2xl text-left mb-8 text-first px-4 md:px-8 lg:px-16 mx-auto text"
                >
                  {info.description}
                </motion.p>
              </div>
            ))}
          </div>
          <div className='flex-col mb-8'>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.2,once: true }} 
            transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-semibold text-first">What is Gallbladder ?</h2>
              <p className="pt-2">
                The gallbladder is a tiny pear-shaped organ located just below the liver, situated on the right upper side of the abdomen.  <br />The liver produces a yellow-coloured fluid known as bile, which flows into the intestine to aid in digesting food, especially fatty meals.
              </p>
              <br />
              <div className=''>
              <img
              src="https://today.uconn.edu/wp-content/uploads/2019/01/GettyImages-536228692_human-liver_extended.jpg"
              alt="Background"
              className="w-72 md:w-80 h-auto rounded-lg opacity-200 m-8 mx-auto "/>
              </div>
        
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Function of the Gallbladder</h2>
              <div className=" mb-4 ">
                <p className=''><span className="font-medium mt-4 mr-1">→ Storage of Bile:</span> The liver produces 1.5 litres of bile daily. Most of the bile flows directly into the intestine, but 50 ml is stored in the gallbladder as a reserve.</p>
                <p className='pt-2'><span className="font-medium mt-4 mr-1">→ Bile Release:</span> When fatty foods enter the small intestine, the gallbladder releases bile for proper digestion.</p>
              </div>
              <div>
                <br />
                <h2 className="text-3xl font-semibold mb-2 text-first">Why Do Gallbladder Stones Form ?</h2>
                <div className=" mb-4">
                  <p>Gallbladder stones are solid pieces of cholesterol, calcium salts, or bilirubin. The main risk factors include :- </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Metabolic Disturbances:</span> Changes in cholesterol metabolism (e.g., hyperlipidemia due to obesity or rapid weight changes). </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Gallbladder Infection:</span> Loss of gallbladder function due to infection can lead to stone formation. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Hormonal Disturbances:</span> Multiple pregnancies or obesity can cause hormonal imbalances, reducing gallbladder function and leading to stone formation.</p>
                </div>
              </div>
            </motion.div>
            <br />
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2,once: true }} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Signs of Gallbladder Stones</h2>
              <div className="mb-4">
                <p className=''>Most patients present with asymptomatic gallstones. Though gallstones are asymptomatic, when natural drainage of bile is frequently blocked, they cause infection in the bladder and often get slipped into major ducts.</p>
                <p className=''>According to Dr. Kapil Agrawal, one of the best gallbladder surgeon in delhi, gallstones generally do not produce any symptoms. However, small stones in the gallbladder can stuck in the neck of the gallbladder. That causes a blockage of the flow of bile into your small intestine. This is an episode of pain that you probably know as biliary colic.</p>
                <p className='pt-3'>Many patients have asymptomatic gallstones. However, when bile drainage is blocked, it can lead to symptoms such as :- </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Abdominal Pain:</span> Pain in the right upper abdomen, back, or all over the abdomen. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Nausea or Vomiting:</span> These occur when stones block the ducts. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Bloating:</span> Indigestion and gas accumulation in the intestines. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Jaundice:</span> Yellowing of the eyes and urine caused by stones blocking bile flow. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ High-grade Fever with Chills:</span> Signs of gallbladder infection or blockage in the central bile duct.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10 m-16">
          <motion.div initial={{ opacity: 0 }} 
          whileInView={{ opacity: 0.8 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}  
          className='py-8 mb-8 text-center border-t-2 border-b-2 border-first'
          >
            <h1 className=" text-3xl md:text-4xl md:font-bold font-semibold my-6 text-second">
              Best Gallbladder Stone Treatment in Delhi
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-left mb-8 text-first px-2 md:px-8 lg:px-16 mx-auto">
              The field of gallbladder stone surgery has gone under a major transformation due to the introduction of newer technologies aimed at quick and painless recovery. Dr Kapil Agrawal, the best gallbladder surgeon in Delhi, has been delivering excellent outcomes due to his expertise in all the latest treatment modalities for gallstone surgery.
            </p>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1,once:true }} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Laparoscopic Gallbladder Stone Surgery</h2>
            <div className=" mb-4 ">
              <p className='pt-2'>In the modern era, laparoscopic surgery has been considered and is now recognized as a gold standard procedure for gallstone management. </p>
              <p className='pt-2'>Dr. Kapil Agrawal one of the best laparoscopic surgeon in delhi, has transformed the management of gallstones.</p>
              <p className='pt-2'>The surgery is carried out under general anaesthesia — which means the patient is completely put to sleep before the start of surgery.</p>
              <p className='pt-2'>Three small holes of 0.5 cm each are made at different abdomen sites.</p>
              <p className='pt-2'>Then, the interior of your abdomen is inflated with carbon dioxide gas to make space for surgery.</p>
              <p className='pt-2'>One of the incisions inserts a thin, lighted tube with a camera that sends images to the screen.</p>
              <p className='pt-2'>With the help of the projected images, the dissection of the gallbladder is carried out, and the gallbladder, along with stones, is removed from the body.</p>
            </div>
            <br />
        
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Single Port Gallbladder Stone Surgery:</h2>
            <div className=" mb-4 ">
              <p className='pt-2'>Single port surgery for gallstones is an advanced version of conventional laparoscopic surgery.</p>
              <p className='pt-2'>Instead of 3-4 tiny incisions, a single incision is created within the umbilicus or belly button to complete the procedure.</p>
              <p className='pt-2'>Though technically challenging, it is associated with the best cosmesis due to a completely invisible scar.</p>
              <p className='pt-2'>The single incision laparoscopic surgery has its indications, and proper patient selection is essential to deliver the best results.</p>
            </div>
            <br />
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Robot-assisted laparoscopic cholecystectomy:</h2>
            <div className=" mb-4">
              <p className='pt-2'>Robotics can significantly improve overall ergonomics and technical capabilities by providing enhanced dexterity,</p>
              <p className='pt-2'> precision as well as visualization to the surgeon during laparoscopic surgery facilitating comfortable execution of more complex procedures.</p>
              <p className='pt-2'>It can be beneficial in patients with variant anatomy or complex gallbladder pathologies. The results cosmetically are nearly as good as with laparoscopy for gallbladder surgery.</p>
              <p className='pt-2'> The results cosmetically are nearly as good as with laparoscopy for gallbladder surgery.</p>
            </div>
          </motion.div>
        </div>

        <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center mb-20">
              <motion.h1
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2,once:true }}
              className="text-3xl md:text-4xl font-semibold text-center text-first my-4">
                KEY BENEFITS OF <br/> SINGLE PORT LAPAROSCOPIC CHOLECYSTECTOMY
              </motion.h1>
              <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%", duration: 2000 }}
              className="mx-auto border-first border-b-2 mt-4"
              >
              </motion.div>
              <p className='pt-4 text-center'>In comparison to conventional four-port laparoscopic surgery, the major advantage of single-port surgery is a single small hole or incision, which remarkably decreases pain and accelerates recovery.</p>
              <p className='pt-4 text-center'>Those who undergo single-port gallstone surgery are happier because of excellent cosmesis, rapid recovery, and significantly less painful perception.</p>
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

        <motion.div
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ amount: 0.1,once:true }} 
        transition={{ duration: 0.4 }}
        className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 mt-16 gap-6"
        >
          <div className='flex flex-wrap gap-12 rounded-lg opacity-200"'>
            <div className='flex-col '>
               <img src="https://www.dfloros.gr/wp-content/uploads/2020/06/sur.png" alt="background" className='w-80 h-auto' />
               <p className='p-3 font-semibold text-center'>Single Port Laparoscopic Surgery</p>
            </div>
            <div className='flex-col '> 
              <img src="https://www.tandfonline.com/cms/asset/c2b77a80-0405-4d5c-b80d-34c7973f06f6/imit_a_704875_f0001_b.jpg" alt="background" className='w-80 h-auto'/>
              <p className='p-2 font-semibold text-center'>Scar after Single Port Surgery</p>
              </div>
           
         
          </div>
          <div className='flex-col mb-16'>
            <h2 className="text-4xl font-semibold mb-1 text-first">Course of Recovery Following Gallstone Surgery</h2>
            <div className="mb-4 ">
              <p className='pt-2'>At Habilite Clinics, our team ensures you recover quickly and painlessly after receiving sophisticated, minimally invasive treatment. A general guideline of what one might anticipate in recovery follows:</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Hospital Stay:</span>You can go home within 24 hours after the surgery. Most patients are able to stay no more than 24 hours at the hospital.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Pain Management:</span>You will have mild pain or discomfort at your incision sites for 24-36 hours. </p>
              <p className='pt-2 ml-4'>You will be sent home with Oral Pain medications to help manage pain for 3 days.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Diet and Activity:</span>After 48 Hours Of Surgery, You Can Start a Regular Diet As Suggested By Our Experienced Nutritionists.</p>
              <p className='pt-2 ml-4'>You will be advised to take a fat-free diet for two weeks, after which fatty meals will gradually be introduced. Our dedicated nutritionists prepare customized diet after gallbladder surgery for fast recovery.</p>
              <p className='pt-2 ml-4'>Gradually, you will be encouraged to resume normal activities, including running and light exercises.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Incision Care:</span>Keep the incision sites clean and dry. You may shower from the next day of surgery. They are usually closed with dissolvable</p>
              <p className='pt-2 ml-4'>stitches or surgical tape that will fall off on their own.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Follow-Up:</span>You will have to go for a general follow up after 5 days of surgery. We will examine you and ensure that healing is fine.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Return to Normal Activities:</span>Most people can resume their jobs and natural activities after five to seven days of surgery.</p>
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
