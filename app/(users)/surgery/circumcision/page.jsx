'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Complete Range of Procedures.",
  "Best in Class, USFDA Approved Treatment",
  "All Medical Insurance Accepted",
  "No Bleeding and No Stitches",
  "Same Day Discharge",
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
      question:"Can newborns be circumcised through a stapler circumcision procedure ?",
      answer:"Yes, ZSR stapler comes in various sizes. It is completely safe and provides excellent results in neonates and children. The procedure can be carried out under short GA and children can be discharged on same day."
    },
    {
      question:"Can I get stapler circumcision surgery even if I have an infected foreskin ?",
      answer:"The stapler or ZSR circumcision can be done even in infected skin with excellent results. However, patient might need to take antibiotics for a longer period of time."
    },
    {
      question:"Do I need to visit a doctor to get the silicone ring removed ?",
      answer:"No, you need not visit the doctor for the removal of silicon ring as it automatically comes out within 4-5 days after complete healing takes place. However, in 1% of patient’s silicon ring has to be taken out by the surgeon."
    },
    {
      question:"Will circumcision affect my sexual drive or performance ?",
      answer:"The impact of circumcision on sexual drive is a complex phenomenon and results may vary individually. The findings are not consistent and sexual performance can be influenced by a variety of psychological & emotional factors. In a nutshell, circumcision per say if any has a very modest effect on performance."
    },
    {
      question:"Is circumcision covered under insurance ?",
      answer:"Almost all the insurance companies cover this procedure as a cashless facility. Our clinic is partnered with some of the best hospitals in Delhi-NCR and provides cashless treatment with all the insurance companies."
    },
    {
      question:"Will I have pain after stapler circumcision surgery ?",
      answer:"Stapler circumcision procedure is an almost painless procedure and patients are completely comfortable after the procedure. We advise patients to resume normal activities from the next day of surgery."
    },
    {
      question:"Does it affect penis size ?",
      answer:"Circumcision doesn’t affect the size of your penis. The size of penis is determined by various genetic factors, and individual variation is quite normal. There is no scientific evidence to support that circumcision increases the size of penis if performed during childhood period."
    },
    {
      question:"Does it affect sexual sensitivity ?",
      answer:" The impact of circumcision on sexual sensitivity has always been a matter of debate and individual experience may vary. While some studies have documented decreased sensitivity in circumcised patients, other studies have found no significant difference in sexual sensitivity between circumcised and uncircumcised individuals."
    },
    {
      question:"Does it affect sperm production or overall fertility ?",
      answer:"Several studies have been conducted to study the effect of circumcision procedure on sperm parameters like motility, sperm count and morphology. does not affect the overall fertility and neither increases the sperm production. These studies didn’t document any significant change in the sperm parameters between circumcised and non-circumcised patients."
    },
    {
      question:"Which circumcision is the best ?",
      answer:"Laser circumcision is more effective as compared to the conventional methods of circumcision. Laser circumcision is performed as a daycare procedure that means that the person can go home on the same day. Healing is faster and easier and the patient can resume his normal routine within 2-3 days of the procedure"
    },
    {
      question:"What are the three benefits of male circumcision ?",
      answer:"The best benefit of male circumcision is that it increases the hygiene of penis and has a protective effect against three severely sexually transmitted diseases like HIV, Genital Herpes and Human Papilloma Virus. Human papilloma virus is one of the carcinogenic viruses leading to cancer of penis and cervix."
    },
    {
      question:"What is the cost of stapler circumcision in Delhi, India ?",
      answer:"The cost of stapler circumcision in Delhi, India may vary. The average cost of circumcision can vary from Rs 30,000 to Rs. 40,000 depending upon the various factors.The various factors which can influence the cost of procedure include type of hospital, room category, choice of anesthesia, patient health, severity of condition and quality of stapler.However, at our center, we can complete the procedure at a package of approximately Rs 20000."
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
    title: "What is Circumcision ?",
    description: `"Circumcision is a procedure which involves removal of foreskin present over the head or glans of the penis. Circumcision is a personal and often culturally influenced decision. It can also be done due to some medical complications. If you are considering circumcision for yourself or your child, it is crucial to consult with a specialist and discuss the implications and benefits based on your beliefs and medical considerations."`,
  },

];

const benefits = [
  "BLOODLESS PROCEDURE",
  "NO STITCHES",
  "PAINLESS PROCEDURE",
  "SAME DAY DISCHARGE",
  "NO FOLLOW UP",
  "RAPID RECOVERY",
];

 
  return (
    <>
    <div className='overflow-x-hidden'>
      <div className='w-screen'>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16 ">
          <div>
            <div className="relative w-full">
              <img
              src="/lipoma.jpg"
              alt="Background"
              className="w-full object-cover opacity-200"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-transparent hover:bg-black hover:bg-opacity-20">
                  Best Circumcision Surgery<br /> in Delhi
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
            <div className="py-8 mt-16 mb-8 text-center border-t-2 border-b-2 border-first">
              {surgeonInfo.map((info, index) => (
                <div key={index} className="mb-8">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.2,once:true }}
                    className="text-3xl md:text-4xl  font-bold my-6 text-second"
                  >
                    {info.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.2,once:true }}
                    className="text-lg sm:text-xl md:text-2xl text-left mb-8 text-first px-4 md:px-8 lg:px-16 mx-auto text">
                    {info.description}
                  </motion.p>
                </div>
              ))}
            </div>
    
            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.2,once:true }} 
            transition={{ duration: 0.6 }}>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Indications of Circumcision :-</h2>
                <div className="mb-4">
                  <p className='pt-2'>→ Severe pain while passing stools.</p>
                  <p className='pt-2'>→ Balanitis: It is a type of infection involving head or glans of penis. It usually occurs due to poor hygiene, improper fitting clothes and bacterial and fungus infections.</p>
                  <p className='pt-2'>→ Phimosis: Phimosis is a condition in which the patient is unable to retract the foreskin covering the glans or head of penis. </p>
                  <p className='pt-2'>→ Paraphimosis</p>
                  <p className='pt-2'>→ Tight Foreskin</p>
                  <p className='pt-2'>→ Balanoposthitis</p>
                  <p className='pt-2'>→ Bleeding during Intercourse</p>
                  <p className='pt-2'>→ Pain during Sexual Intercourse</p>
                  <p className='pt-2'>→ Balanitis Xerotica Obliterans (BXO): An autoimmune condition which is characterized by extensive scarring of prepuce skin resulting in phimosis.</p>
                  <p className='pt-2'>→ Chronic or Recurrent Urinary Tract Infection</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}
            className='mb-8'>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> Types of Circumcision :</h2>
                <div className="mb-4">
                  <p className='pt-2'>→ Conventional or Open Circumcision</p>
                  <p className='pt-2'>→ Laser circumcision</p>
                  <p className='pt-2'>→ Stapler or ZSR circumcision</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  Conventional Circumcision
                </h2>
                <div className="mb-4">
                  <p className='pt-2'>Conventional or traditional circumcision is the primitive method in which surgeon uses surgical knife and electrical cautery to remove the foreskin present over the glans.</p>
                  <p className='pt-2'>The procedure can be carried out in general anaesthesia or local anaesthesia depending upon the patient condition, age and preferences.</p>
                  <p className='pt-2'>The procedure is associated with higher amount of bleeding, formation of hematomas and delayed recovery.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  Laser Circumcision
                </h2>
                <div className="mb-4">
                  <p className='pt-2'>Precision: Laser technology is extremely precise and doesn’t affect normal surrounding skin and tissues.</p>
                  <p className='pt-2'>Reduced bleeding: Laser procedure seals the blood vessels more efficiently and minimizes formation of blood clots or hematoma.</p>
                  <p className='pt-2'>Faster Healing: Due to better precision and reduced bleeding, it promotes faster healing of wound.</p>
                  <p className='pt-2'>Reduced Infection: Laser procedures are found to have significantly reduced chances of infection.</p>
                  <p className='pt-2'>Minimized Pain: Laser circumcision is associated with less pain due to reduced nerve stimulation.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  ZSR or Stapler Circumcision
                </h2>
                <div className="mb-4">
                  <p className='pt-2'>It is the best and most advanced technique which has revolutionized the circumcision procedure. The procedure can be carried out under general anaesthesia or local anaesthesia.</p>
                  <p className='pt-2'>During the procedure, the surgeon employs a cylindrical device which automatically cuts the foreskin and seals the bleeding vessels with the help of silicon ring and micro stapler pins. </p>
                  <p className='pt-2'> The procedure typically takes 10- 15 minutes and the patient can go back home 2 hours after the procedure.</p>
                  <p className='pt-2'> The procedure is extremely safe both for children and adults and has minimal chance of infection and has faster healing rates.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3,once:true }} 
            transition={{ duration: 0.6 }}>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">The advantages of stapler (ZSR) circumcision are :–</h2>
                <div className="mb-4">
                  <p className='pt-2'>→ Surgery time is around 10 minutes</p>
                  <p className='pt-2'>→ Reduced bleeding: Laser procedure seals the blood vessels more efficiently and minimizes formation of blood clots or hematoma.</p>
                  <p className='pt-2'>→ Minimal blood loss</p>
                  <p className='pt-2'>→ Minimal pain</p>
                  <p className='pt-2'>→ Faster recovery</p>
                  <p className='pt-2'>→ The chances of complications are almost nil</p>
                  <p className='pt-2'>→ Lower chances of infection</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2,once:true }}>
              <div className='mt-4'>
                <div className="p-10 flex flex-col items-center">
                  <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-first"> BENEFITS OF ZSR CIRCUMCISION SURGERY</h1>
                  <div className="flex flex-wrap justify-center gap-6 px-12">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="hover:bg-blue-300 p-12 border border-third hover:border-blue-500 text-center font-semibold py-3 px-5 rounded w-80 shadow-md" >
                          {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3, once:true }} 
            transition={{ duration: 0.6, }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                Why Choose Us -
              </h2>
              <div className="mb-4 text-left">
                <p className='pt-2'><span className="font-medium mr-1">→ Experienced Surgeons:</span> Our clinic has a team of highly skilled, experienced and well-trained surgeons dedicated to providing the best care and a professional experience.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Complete Range of Procedures: </span>We offer a complete range of circumcision procedures including the latest and most advanced options.</p>
                <p className='pt-2'> Our entire range allow clients to choose the approach that aligns best with their requirements.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Excellent Results: </span>We are committed to deliver exceptional results. Our strict No Quality Compromise Policy ensures that our clients are satisfied with the </p>
                <p className='pt-2'> outcomes of their circumcision procedures.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Cashless Insurance Options: </span>We understand the importance of financial convenience. Our services include hassle-free, cashless insurance options, </p>
                <p className='pt-2'> providing our clients with a seamless and stress-free experience.</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Best Post-Operative Care:</span> We are dedicated to provide our patients excellent post operative care. We provide top-notch post-operative care to ensure a </p>
                <p className='pt-2'>smooth surgical journey with exceptional satisfactory results.</p>
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
