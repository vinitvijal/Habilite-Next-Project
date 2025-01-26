'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import TextAnimate from "@/components/ui/anim-text";

const features = [
  "Complete range of latest, painless and most advanced procedures",
  "Best in class, USFDA approved laser treatment",
  "No cuts and no stitches",
  "All medical insurance accepted",
  "EMI options available",
  "Same day discharge",
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
    transition: { duration: 1 },
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
      question:"Is Laser Surgery the most appropriate treatment for my specific anal fissure ?",
      answer:"Laser surgery is usually recommended for severe acute anal fissures and chronic or recurrent anal fissures that do not respond to conservative treatments. Your surgeon will evaluate your condition and determine if laser surgery is the most suitable option for you."
    },
    {
      question:"Are there any alternative treatments I should consider before opting for surgery ?",
      answer:"Yes, there are several non-surgical treatments for anal fissures. It depends upon the condition of the anal fissure and the pain and spasm associated with it. Discuss all available options with your doctor to find the best approach for your situation."
    },
    {
      question:"What is the expected success rate of Laser surgery for anal fissures ?",
      answer:"The success rate of laser surgery varies, but it is generally very high for resolving symptoms of anal fissures. The success rate also depends upon the surgeon's expertise and the quality of the laser machines. We boast of an almost 100% success rate in the management of anal fissures following laser surgery."
    },
    {
      question:"How long is the recovery period after the Laser procedure ?",
      answer:"You can expect a significant decrease in pain following laser surgery, and pain completely subsides in four days during the passage of stools. However, recovery may vary depending on the condition and chronicity of the anal fissure."
    },
    {
      question:"What is the duration of stay after laser surgery for anal fissure ?",
      answer:"Most of the patients can be discharged within 12 hours of surgery. You do not require bed rest and can gradually resume your normal activities within 24- 48 hours of surgery."
    },
    {
      question:"How long do I have to stay in hospital after Botox treatment for anal fissure ?",
      answer:"The Botox treatment for anal fissure is a simple procedure and the patients get discharged within 3 hours of procedure. The recovery is very fast and the results are excellent with almost zero risk of complications."
    },
    {
      question:"What is the best treatment for anal fissure ?",
      answer:"The best treatment for anal fissure depends upon the pain, severity of symptoms and the complexity of fissure. Depending upon these factors, the surgeon can recommend you non-surgical options, Botox injections or laser surgery. We strongly believe that treatment should be customized and tailored according to the condition of the patient."
    },
    {
      question:"What are the chances of fissure coming back after treatment ?",
      answer:"Proper diagnosis, choosing the right modality of treatment, avoiding constipation and maintaining a healthy life style ensures almost zero chances of recurrence. However, prolonged constipation and inadequate treatment of anal fissure can result anal fissure coming back in 2-3% of patients."
    },
  ];

  const featureData = [
    {
      points: [
        "Complete Range of Procedures.",
        "Best in Class, USFDA Approved Laser Treatment",
        "No Cuts and No Stitches",
        "Same-Day Discharge",
        "All Medical Insurance Accepted",
        "EMI Options Available",
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
                src="/fistula.jpg"
                alt="Background"
                className="w-full object-cover opacity-200"
              />
          
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-transparent hover:bg-black hover:bg-opacity-20">
                Anal Fissure Treatment<br /> in Delhi
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
              className="w-3/5 mx-auto relative sm:-mt-24 lg:-mt-40 px-8 py-10 bg-white shadow-sm shadow-black items-center rounded-lg">
              <FeatureList features={features} />
            </motion.div>
          </div>
          <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-8">
            <div className='py-8 mt-16'>
              <motion.div 
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.3 }} 
                transition={{ duration: 0.8 }}
                className=''>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">Understanding Anal Fissures</h2>
                <div className="mb-4">
                  <p className='pt-2'>Anal fissures can be broadly classified as “Acute” or “Chronic” based on their duration and characteristics. </p>
                  <p className='pt-2'>An Acute Anal Fissure resembles a fresh cut and responds well to conservative or non-surgical methods. About 60% to 70% Anal fissures usually heal within 2-3 weeks with the help of medicines.</p>
                  <p className='pt-2'>When Acute Anal Fissure fails to heal for more than eight weeks, it is termed as Chronic Anal Fissure. Such fissures develop excessive swelling, scar tissue, and skin tags. These fissures usually respond to surgical intervention due to continuous pain, spasms, and tissue ischemia.</p>
                  <p className='pt-2'>Understanding the type of anal fissure is crucial for determining the appropriate treatment strategy. Here is a comparison of key characteristics :-</p>
                  <p className='pt-2'><span className="font-bold text-lg mr-1">Acute Anal Fissure: </span></p>
                  <p className='pt-2'>→ Resembles a fresh paper cut</p>
                  <p className='pt-2'>→ Heals within a few weeks with conservative care</p>
                  <p className='pt-2'>→ Less likely to have associated complications</p>
                  <p className='pt-2'><span className="font-bold text-lg mr-1">Chronic Anal Fissure: </span></p>
                  <p className='pt-2'>→ It lasts for more than eight weeks</p>
                  <p className='pt-2'>→ Often accompanied by skin tags</p>
                  <p className='pt-2'>→ Requires more intensive treatment</p>
                  <p className='pt-2'>→ May have excess swelling and scar tissue</p>
                </div>
              </motion.div>
            </div>
 
            <div className='flex-col mb-8'>
              <motion.div 
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3 }} 
              transition={{ duration: 0.8 }}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">
                  Identifying the Common Causes of Anal Fissures</h2>
                  <div className="mb-4">
                    <p className='pt-3'>Anal fissures are often the result of trauma to the sensitive lining of the anus. The primary cause is typically the passage of hard or large stools, which can lead to tears in the anal canal. Other common factors include :-</p>
                    <p className='pt-2'>→ Constipation, leading to excessive straining</p>
                    <p className='pt-2'>→ Chronic diarrhoea</p>
                    <p className='pt-2'>→ Anal intercourse</p>
                    <p className='pt-2'>→ Childbirth</p>
                    <p className='pt-3'>Some of the most common symptoms of Anal Fissures are :-</p>
                    <p className='pt-2'>→ Inflammatory bowel diseases (e.g., Crohn's disease)</p>
                    <p className='pt-2'>→ Infections such as syphilis, HIV, or tuberculosis /li ˃ </p>
                    <p className='pt-2'>→ Anal cancer</p>
                   
                  </div>
                </div>
              </motion.div>

              <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3 }} 
              transition={{ duration: 0.8 }}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Symptoms of Anal Fissure</h2>
                  <div className="mb-4">
                    <p className='pt-3'>Some of the most common symptoms of Anal Fissures are :-</p>
                    <p className='pt-2'>→ Bright red blood on the toilet paper or stool after a bowel movement</p>
                    <p className='pt-2'>→ Severe Pain during and after bowel movements</p>
                    <p className='pt-2'>→ Skin tag or lump near the anal area </p>
                    <p className='pt-2'>It's crucial to differentiate these signs from other colorectal conditions, such as hemorrhoids, which may present similarly.</p>
                    <p className='pt-2'>Early recognition and treatment of anal fissures are essential to prevent complications and improve outcomes.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
             initial={{ opacity: 0, x: 100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ amount: 0.3 }} 
             transition={{ duration: 0.8 }}
              className='py-16'>
               <h1 className="text-3xl md:text-4xl  font-semibold mb-2 text-second my-4 text-center">BEST TREATMENT FOR ANAL FISSURE</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first text-center">
                Conservative or Non-Surgical Treatment of Anal Fissure</h2>
                <div className="mb-4">
                 <p className='pt-3'>This is mainly indicated for acute anal fissures, which are associated with mild to moderate anal spasms. These include :-</ p>

                 <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">Lifestyle and Dietary Changes</h3>
                 <p className='pt-3'>The basis of treating anal fissures begins with simple lifestyle and dietary adjustments aimed at preventing constipation and reducing strain during bowel movements. This is achieved with :-</ p>
                 <p className='pt-2'><span className="font-medium mr-1">→ High Fiber Diet: </span> Consuming a diet high in fiber help soften stool, making it easier to pass and reducing the risk of further injury to the anal area.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Hydration: </span>Adequate fluid intake is another important factor for maintaining soft stool consistency. </p>
                 <p className='pt-2 ml-5'>It is recommended that you drink plenty of water throughout the day.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Regular Exercise: </span> Regular physical activity can help stimulate bowel movements and prevent constipation.</p>

                 <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">Topical Treatments</h3>
                 <p className='pt-3'>Local application of certain ointments provides relief from discomfort and promotes healing. This is achieved with :-</ p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Topical Anaesthetics:</span>These creams contain local anesthetics, which can numb the area and reduce pain.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Calcium Channel Blockers:</span> These ointments relax the sphincter muscles and stimulate blood flow, and help in the healing of anal fissures.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Regular Exercise: </span> Regular physical activity can help stimulate bowel movements and prevent constipation.</p>

                 <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">Medications</h3>
                 <p className='pt-3'>Oral medications may be prescribed to manage symptoms and support healing. This is achieved with :-</ p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Stool Softeners: </span> Avoiding hard stools is a significant component in the healing of anal fissures.</p>
                 <p className='pt-2 ml-5'> Avoiding passage of hard stools helps in preventing further insult to anal fissures and aids in the healing process.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Pain Relievers: </span>Nonsteroidal anti-inflammatory drugs (NSAIDs) can help manage pain and inflammation. </p>
                 <p className='pt-2 ml-5'> However, they should be used cautiously and under the guidance of a specialist doctor.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Regular Exercise: </span> Regular physical activity can help stimulate bowel movements and prevent constipation.</p>
                </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first text-center">
                Botox Injections in Treating Anal Fissures</h2>
                <div className="mb-4">
                 <p className='pt-3'>
                 Botox injection is one of the minimally invasive treatment options for chronic anal fissures. Botox injection is injected into the internal anal sphincter muscle. It causes temporary paralysis of the muscle. As a result, the tone of the muscle decreases, and the spasm and tightness of the anal canal significantly decrease within a few hours. This causes relief from pain while passing stools and allows fissures to heal within a couple of days.</ p>

                 <p className='pt-2'><span className="font-medium mr-1">→ Recovery: </span> Patients can generally resume normal activities shortly after the procedure, though they are advised to avoid strenuous activities for a day or two.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Healing Rates: </span>Clinical trials have shown that Botox injections result in 80-100% healing rates within a few days of treatment.</p>
                 <p className='pt-2'><span className="font-medium mr-1">→ Pain Relief: </span> Many patients experience significant pain relief within a few days after the injection.</p> 
                </div>
               </div>

               <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first text-center">
                Surgical Interventions</h2>
                <div className="mb-4">
                 <p className='pt-2'><span className="font-medium font-semibold mr-1">Laser Surgery for Anal Fissures:</span> When conservative treatments and medications fail to heal the fissure, surgical options may be necessary. Surgery is typically reserved for Lateral Internal Sphincterotomy performed with the help of Laser therapy has become the best treatment for anal fissures.</p>
                 <p className='pt-2'> It involves making a small incision in the internal anal sphincter muscle to reduce tension and promote healing.</p>
                 <p className='pt-2'>It is usually performed as an outpatient procedure, and patients are discharged within 12 hours of surgery.</p>
                 <p className='pt-2'>  With almost 100% healing rates and zero percent recurrence, laser surgery for anal fissures is one of the most promising treatments for management of anal fissures.</p>
                </div>
               </div>

              </motion.div>

            <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
                <div className="text-center mb-8">
                  <motion.h1
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  className="text-3xl md:text-4xl font-semibold text-first">
                    BENEFITS OF <br/> LASER TREATMENT FOR ANAL FISSURE
                  </motion.h1>
                  <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%", duration: 2000 }}
                  className="mx-auto border-first border-b-2 mt-4"
                  >
                  </motion.div>
                </div>
               <motion.div 
                 variants={imageVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ amount: 0.2 }}>
                 <div className='mt-4'>
                   <div className="py-16 flex flex-col items-center">
                     <div className="flex flex-wrap justify-center gap-6 px-12"> {benefits.map((benefit, index) => (
                       <div
                        key={index}
                        className="hover:bg-blue-300 p-12 border border-third hover:border-blue-500 text-center font-semibold py-3 px-5 rounded w-80 shadow-md" >{benefit}
                       </div>
                         ))}
                      </div>
                    </div>
                  </div>
               </motion.div>

              <div>
               <motion.div 
                 initial={{ opacity: 0, x: -100 }} 
                 whileInView={{ opacity: 1, x: 0 }} 
                 viewport={{ amount: 0.3 }} 
                 transition={{ duration: 0.8 }}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">Why Choose Us -</h2>
                 <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">Best Doctor for Fissure Treatment in Delhi</h3>
                 <div className="mb-4 ">
                  <p className='pt-2'><span className="font-medium mr-1">Dr. Kapil Agrawal</span> , with over 23 years of experience, is well known for his expertise in the management of colorectal conditions, including anal fissures. He has been associated with top-notch hospitals in Delhi, ensuring access to the best facilities and medical care.</p>
                  <p className='pt-2'>Dr. Kapil Agrawal's comprehensive treatment approach addresses all aspects of anal fissures, focusing on curing the condition with medicines in 70% of patients, thereby avoiding invasive procedures.</p>
                  <p className='pt-2'> Our entire range allow clients to choose the approach that aligns best with their requirements.</p>
                  <p className='pt-2'>Dr Kapil Agrawal’s expertise ensures a high success rate with Botox injections, demonstrating our commitment to effective, patient-centric care.</p>
                  <p className='pt-2'> He utilizes the best quality laser machines, ensuring optimal results and almost zero recurrences, setting him apart in providing cutting-edge treatment.</p>
                  <p className='pt-2'>Dr Agrawal’s team includes dedicated nutritionists who provide customized diets to promote healing and prevent constipation, ensuring a holistic approach to treatment.</p>
                </div>
               </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>


         <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-6">
           <motion.div initial={{ opacity: -2 }} 
            whileInView={{ opacity: 1.5 }} 
            transition={{ duration: 2 }} 
            viewport={{ amount: 0.2 }} 
            className='flex-col mx-6 md:mx-12 mb-16 pt-4 md:px-24 border-first border-t-2'>
             <div className="flex justify-center items-end m-4"><BsPinFill className='text-3xl md:text-4xl text-second' />
               <h1 className='font-bold text-3xl md:text-4xl text-center border-fourth border-b-2 mt-6 text-second'>FAQ</h1>
             </div>
             <div className="mb-4 w-full ">
               {faqList.map((faq, index) => (
                 <FAQsingle key={index} question={faq.question} answer={faq.answer} />
               ))}
             </div>
           </motion.div>  
         </div>  
      </div>
    </div>
    </>
  )
}

export default page
