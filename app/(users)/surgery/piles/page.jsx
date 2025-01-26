'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Complete Range of Procedures",
  "Best in Class, USFDA Approved Laser Treatment",
  "All Medical Insurance Accepted",
  "No Cuts and No Stitches",
  "Same Day Discharge",
  "EMI Options Available",
];

const FeatureList = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 text-first md:text-lg text-left mx-auto">
    {features.map((feature, index) => (
      <div
        key={index}
        className={`flex items-start spaxe-x-2 py-3 rounded-lg  max-md:text-base border-third border-t ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"} ${index===0?'border-none':''} ${index===1?'md:border-none':''}
        }`} >
        <span> ➔ </span>
        <p>{feature}</p>
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
      question:"What are the potential complications associated with untreated Piles ?",
      answer:"Some of the potential complications include: Sometimes, blood clots form within a haemorrhoid, causing severe pain and swelling. This is known as thrombosed piles. Chronic blood loss from piles can lead to anaemia, characterized by fatigue and weakness.Strangulated haemorrhoids is an extremely painful condition which can occur due to loss of blood supply to piles mass. This condition requires urgent surgical intervention."
    },
    {
      question:"What is the best treatment for piles ?",
      answer:"The best treatment of piles depends upon the grade and stage of piles. While very early stages can be managed with the help of medicines and certain precautions, grades II and III are best managed with the help of laser surgeries.Grade IV haemorrhoids are usually treated by stapler surgery for piles. Open surgeries best manage complicated piles or excessively prolapsed piles."
    },
    {
      question:"What are the chances of recurrence after laser surgery of piles ?",
      answer:"The chances of recurrence after laser surgery for piles are usually 4-5%. However, recurrences can be prevented by using high-quality laser machines, properly indicating the procedure, and avoiding constipation after surgery."
    },
    {
      question:"Can piles be treated with medications ?",
      answer:"Piles can never be cured with medicines. However, medicines can delay the progression of disease or can help in providing symptomatic relief to the patients for some time. You must always seek the opinion of a specialist surgeon who can advise you on the best course of treatment."
    },
    {
      question:"What early surgical intervention for piles is better ?",
      answer:"Piles is a slowly progressive disease, and it is always better to treat piles when they are grade II or grade III. This is because these types of piles can be treated with laser, which is almost a painless procedure. If the piles progress to grade IV or develop complications, they may require open surgeries, which are quite painless during the initial days post-surgery."
    },
    {
      question:"How is the course of recovery after laser piles surgery ?",
      answer:"Laser surgery for piles is known for its quick recovery and minimal discomfort. Patients are typically discharged within 24 hours of the procedure and can resume normal activities within four to five days. Laser surgery doesn't require bed rest or post-operative dressings."
    },
    {
      question:"Is laser treatment safe for piles ?",
      answer:"Laser surgery is a highly safe procedure for the management of piles. The excellent quality laser machines are USFDA-approved and do not produce any side effects. However, it would be best if you considered the following facts before opting for the treatment: Experience and Expertise of surgeon Grade and stage of piles Quality of laser machines and fibres."
    },
    {
      question:"Does the quality of laser machines affect surgical outcomes ?",
      answer:" Does the quality of laser machines affect surgical outcomes? The quality of laser machines significantly affects surgical outcomes. Low-quality laser machines can lead to complications such as thermal burns. Even the likelihood of recurrence or piles returning is much higher than procedures performed with high-quality machines."
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
    title: "ABOUT DR. KAPIL AGRAWAL",
    description: `"Dr Kapil Agrawal is a highly experienced and internationally trained surgeon. He has treated more than 5,000 piles patients with excellent outcomes. He is well known for performing a complete range of advanced, painless procedures which includes laser surgery for piles, stapler surgery and DGHAL procedures. He has treated some of the most complex cases with excellent results and complete patient satisfaction. He is empanelled with some of the top-notch hospitals in Delhi, NCR region. He offers customized treatment for the effective management of piles."`,
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
                  Best Laser Piles Surgeon<br /> in Delhi
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
            viewport={{ amount: 0.2 }}
            className="w-3/5 m-4 mx-auto relative sm:-mt-24 lg:-mt-40 px-8 py-10 bg-white shadow-sm shadow-black items-center rounded-lg">
              <FeatureList features={features} />
            </motion.div>
          </div>

          <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10">
            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}
            className='pt-8'>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first"> Best Piles Treatment in Delhi</h2>
              <div className="mb-4">
                <p className='pt-2'>Dr. Kapil Agrawal is one of the leading and best laser piles doctor in Delhi, India. </p>
                <p className='pt-2'>With an overall experience of 22 years, he is renowned for his expertise in performing all the latest and most effective treatment modalities for piles, including laser surgery, Stapler, and DGHAL surgeries.</p>
                <p className='pt-2'>He is empanelled with some of the best hospitals offering the best piles treatment of piles. Supported by a top team of medical professionals and nutritionists,</p>
                <p className='pt-2'>Dr Agrawal is dedicated to providing comprehensive care and guidance to prevent recurrences and ensure the best patient outcomes.</p>
              </div>
            </motion.div>

            <div className="py-8  mb-8 text-center border-t-2 border-b-2 border-first">
              {surgeonInfo.map((info, index) => (
                <div key={index} className="mb-8">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}
                    className="text-3xl md:text-4xl  font-bold my-6 text-second"
                  >
                    {info.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ amount: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl text-left mb-8 text-first px-4 md:px-8 lg:px-16 mx-auto text">
                    {info.description}
                    <br/>
                    <span className='text-second text-center m-4 mx-auto'>You can contact us on +91-9999456455, +91-9910024564</span>
                  </motion.p>
                </div>
              ))}
            </div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}
            className='mb-8'>           
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> What is Piles ?</h2>
                <div className="mb-4">
                  <p className='pt-3'>Depending upon the exact location and severity of piles, it can be graded into :-</p>
                  <p className='pt-2'><span className="font-medium mr-1">→ External Piles:</span> External piles form under the skin outside the anus. They can cause discomfort, itching, and bleeding, particularly during bowel movements. </p>
                  <p className='pt-2 ml-4'>Their management is entirely different compared to internal piles. </p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Internal Piles:</span> Internal piles originate inside the anal canal. They might protrude out of the anus, especially during bowel movements.</p>
                  <p className='pt-2 ml-4'> Based on their extent of protrusion, internal piles are graded into four types. </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  Types of Piles
                </h2>
                <div className="mb-4">
                  <p className='pt-2'>Conventional or traditional circumcision is the primitive method in which surgeon uses surgical knife and electrical cautery to remove the foreskin present over the glans.</p>
                  <p className='pt-2'>The procedure can be carried out in general anaesthesia or local anaesthesia depending upon the patient condition, age and preferences.</p>
                  <p className='pt-2'>The procedure is associated with higher amount of bleeding, formation of hematomas and delayed recovery.</p>
                </div>
              </div>
          
              <div>
                <h2 className="text-xl md:text-2xl mb-2 mt-3 text-black">
                  Internal piles can prolapse as the disease progress. They can be classified into 4 grades:
                </h2>
                <div className="mb-4">
                  <p className='pt-2'>→ Grade 1: Only swollen veins or vessels are present, but no prolapse.</p>
                  <p className='pt-2'>→ Grade 2: Prolapse of piles present while passing stools, but piles go inside on their own after passage of stools.</p>
                  <p className='pt-2'>→ Grade 3: Prolapse of piles seen while passing stools, but piles must be reduced with fingers after passing stools.</p>
                  <p className='pt-2'>→ Grade 4: The most advanced stage is when piles have a permanent prolapse.</p>
                  <h2 className="text-xl md:text-2xl mb-2 mt-3 text-black">
                    Understanding the different types of piles is crucial for effective treatment and choosing the correct treatment modality.
                  </h2>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Symptoms of Piles</h2>
                <div className="mb-4">
                  <p className='pt-2'>→ One of the most alarming and common symptoms of piles is painless, bright red bleeding from the anus. This bleeding typically occurs during or after bowel movements.</p>
                  <p className='pt-2'>→ As the disease progresses, the veins around the anus become swollen and inflamed, leading to the formation of swelling or lump. This swelling can vary in size and can be painful.</p>
                  <p className='pt-2'>→ The swollen haemorrhoids can cause inflammation or mild infection of the surrounding skin, leading to itching.</p>
                  <p className='pt-2'>→ A small amount of mucus leakage is a less common but notable symptom of piles, often associated with internal haemorrhoids.</p>
                </div>
              </div>
              <div className="relative w-full">
                <img
                src="/piles1.jpg"
                alt="Background"
                className="w-full"/> 
              </div>
            </motion.div>

            <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}>
              <div className='mt-4 mb-8'>
                <h2 className="text-2xl md:text-3xl font-semibold text-second text-left mb-4">BEST LASER PILES SURGERY IN DELHI</h2>
                <div className="mb-4">        
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-first text-left">Medical or Non-Surgical Treatment for Piles:</h2>
                    <div className="mb-4 text-left">
                      <p className='pt-2'>At Habilite Clinics, we offer best piles treatment in Delhi and for early stages, we offer non-surgical treatment for piles.</p>
                      <p className='pt-2'>This treatment is usually recommended when the symptoms are minimal.</p>
                      <p className='pt-2'>The treatment includes dietary modifications, topical cream and suppositories and certain medicines which can control minor bleeding from the piles.</p>
                      <p className='pt-2'>The medical or non- surgical treatment can certainly delay the progression of disease but cannot cure the piles. </p>
                      <p className='pt-2'> The medicines can take care of minor bleeding, itching and reduction in swelling of piles.</p>
                      </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-first text-left">Latest & Painless Treatment for Piles:</h2>
                    <div className="mb-4 text-left">
                      <p className='pt-2'>Advancements in medical technology have led to the development of advanced, painless procedures for treating piles. </p>
                      <p className='pt-2'> These techniques are designed to minimize discomfort and promote quick recovery. </p>
                      <p className='pt-2'> Each technique has specific indications, and if used appropriately, they can provide excellent results and minimize the chance of recurrence.</p>
                      <p className='pt-2'>These advanced techniques include: </p>
                    </div>
                  </div>  
                </div>
              </div>
            </motion.div>
            <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="flex items-center justify-center max-w-6xl mx-auto">
              <div className=" p-12 border border-third hover:borounded-lg shadow-md">
                <div className="mb-4">
                  <h1 className="text-2xl md:text-3xl font-semibold text-first text-center mb-4">ADVANTAGES OF LASER PILES SURGERY</h1>
                  <p className='pt-2'>→ Laser surgery for piles involves less tissue damage due to its high precision, promoting faster healing.</p>
                  <p className='pt-2'>→ Laser surgery causes minimal discomfort post-surgery as there are no stitches or dressings involved.</p>
                  <p className='pt-2'>→ Laser surgery is almost bloodless as it seals the bleeding vessels efficiently.</p>
                  <p className='pt-2'>→ Recovery time is significantly shorter; patients can return to work within three to four days. The chances of infection are almost zero due to its minimally invasive nature.</p>
                  <p className='pt-2'>→ Laser surgery for piles is often performed on an outpatient basis, meaning patients can go home the same day.</p>
                </div> 
                <div className='mt-4'>
                  <div className="p-10 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-6 px-12">
                      {benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="bg-white p-12 border border-third hover:border-first text-center font-semibold py-3 px-5 rounded w-80 shadow-md" >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Stapler Surgery for Piles</h2>
                <div className="mb-4">
                  <p className='pt-2'>→ Stapler surgery for piles, or Stapled Haemorrhoidopexy, is a modern and effective treatment option for patients suffering from prolapsed and symptomatic haemorrhoids.</p>
                  <p className='pt-2'>→ It is mainly indicated for Grade III and IV haemorrhoids, which involve a significant prolapse and are symptomatic.</p>
                  <p className='pt-2'>→  It is almost a painless procedure which doesn’t involve any cutting of tissues and doesn’t involve any dressings.</p>
                  <p className='pt-2'>→ The procedure involves using a disposable circular stapling device containing very tiny staples. </p>
                  <p className='pt-2'>→ The device is inserted into the anal canal and is used to excise a circumferential ring of excess haemorrhoid tissue.</p>
                  <p className='pt-2 ml-4'> The tiny staples seal the bleeding vessels and reposition the haemorrhoids to their standard anatomical location.</p>
                  <p className='pt-2'>→ The surgery is associated with minimal pain and bleeding, and patients can expect a return to normal activities within a couple of days.</p>
                </div>
              </div>

              <div className="relative w-full">
                <img
                src="/stapler.jpg"
                alt="Background"
                className="w-[80vh] opacity-200"/>
              </div>              
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">DGHAL Surgery for Piles</h2>
                <div className="mb-4">
                  <p className='pt-2'>→  The Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL) and Recto Anal Repair is an advanced and minimally invasive procedure for treating piles.</p>
                  <p className='pt-2'>→ This cutting-edge, painless technique is mainly indicated for patients having bleeding as the primary symptom or having recurrent piles.</p>
                  <p className='pt-2'>→ DGHAL involves using a Doppler probe to locate the blood vessels supplying the haemorrhoids accurately. Once identified, a suture ties off these blood vessels, sealing the bleeding vessels. </p>
                  <p className='pt-2 ml-4'> Additionally, a running suture is employed to pull the prolapsed piles back to their normal position.</p>
                  <p className='pt-2'>→ DGHAL is rated as an extremely safe procedure with minimal chances of any complications. The procedure is associated with quick recovery and early return to work.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                Why Choose Us - Best Hospital for Piles Treatment in Delhi
              </h2>
              <div className="mb-4">
                <p className='pt-2'>Habilite Clinics is renowned for being a top-tier and best hospital for piles treatment in New Delhi. The centre is staffed by highly trained and experienced surgeons, physicians, and nutritionists.</p>
                <p className='pt-2'>Our surgeons are affiliated with state-of-the-art hospitals with cutting-edge laser machines and instruments, ensuring the highest quality treatment.</p>
                <p className='pt-2'>Habilite Clinics, the best hospital for piles surgery, offers a complete range of advanced, painless procedures. </p>
                <p className='pt-2'>Our team of highly qualified nutritionists provides customized dietary plans to promote rapid recovery and specialized diets to prevent recurrences.</p>
                <p className='pt-2'>In partnership with some of the finest hospitals for piles treatment, Habilite Clinics offers cashless insurance facilities and zero-per-cent EMI options for the convenience of our patients.</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col mx-auto pt-16 px-10 md:px-16 lg:px-24 gap-6">
            <motion.div initial={{ opacity: -2 }} 
            whileInView={{ opacity: 1.5 }} 
            transition={{ duration: 2 }} 
            viewport={{ amount: 0.2 }} 
            className='flex-col mx-6 mb-16 pt-4 md:px-24 border-first border-t-2'>
              <div className="flex justify-center items-end m-4"><BsPinFill className='text-3xl md:text-4xl text-second' />
                <h1 className='font-bold text-3xl md:text-4xl text-center border-fourth border-b-2 mt-6 text-second'>FAQ</h1>
              </div>
              <div className="mb-4">
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
