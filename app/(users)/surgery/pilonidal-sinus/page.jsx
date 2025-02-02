'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import TextAnimate from "@/components/ui/anim-text";

const features = [
  "Complete Range of Procedures.",
  "Best in class, USFDA approved laser treatment",
  "No cuts and no stitches",
  "All medical insurance accepted",
  "EMI options available",
  "Same day discharge",
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
      question:"How long is the procedure ?",
      answer:"The time taken for surgery depends upon the complexity of the pilonidal sinus. The approximate duration of surgery is between 45 minutes to two hours."
    },
    {
      question:"What is the duration of stay in the hospital ?",
      answer:"We usually discharge the patients on the same day or the next day of surgery."
    },
    {
      question:"Can pilonidal sinus be cured by medicine or conservative methods ?",
      answer:"The pilonidal sinus can be cured by medicines and certain lifestyle modifications in the very initial stages. However, as the disease progresses, it becomes challenging to treat the condition with drugs."
    },
    {
      question:"What are the chances of recurrence ?",
      answer:"Simple Pilonidal disease can be cured with almost zero recurrences, but in complex cases associated with multiple and extensive branching, there are chances of recurrence .The best ways to minimize recurrence are - Early intervention, as the time passes, the pilonidal sinus disease tends to turn into a complex one, Experience and expertise of the surgeon and Choosing the right option for treatment."
    },
    {
      question:"When can I join my duties ?",
      answer:"The majority of our patients can join back their work in five to seven days post-surgery. It all depends on the pilonidal sinus disease complexity and the type of procedure chosen to deal with it."
    },
    {
      question:"Do I need to come for a follow-up?",
      answer:"The majority of the patients don't require any follow-ups. But some of the patients might require irrigation of wounds 2-3 times. We have specialized dressers who can visit your house. They will clean and rinse the wound or tell you how you can rinse the track at home."
    },
    {
      question:"What can I expect from your team ?",
      answer:"Extreme confidentiality ; " + " Strict adherence to international guidelines ; " + "Highly experienced and internationally trained team ; "+"Complete range of all the best treatment modalities ; "+ "World best quality, highly advanced, USFDA approved 1470 nm Laser Machines ; " + "Honest opinion and detailed discussion about the best modality for you ; " + "Customized treatment plans ; " + "Personalized care and direct doctor-patient relationship without the involvement of third-party or companies ;",
    },
    {
      question:"What is the best treatment for pilonidal sinus ?",
      answer:"The best treatment for pilonidal sinus depends upon several factors - Whether the fistula is a simple type or complex type ; Whether it is a recurrence or a fresh fistula ; Whether there are significant branching or ramifications ; Our team has all the best and latest available options for the treatment of all types of fistula ; "
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
                Pilonidal Sinus Treatment<br /> in Delhi
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
          <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-8">
            <div className='py-8 mt-16'>
              <motion.div 
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.3,once:true }} 
                transition={{ duration: 0.6 }}
                className=''>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">PILONIDAL SINUS</h2>
                <div className="mb-4">
                  <p className='pt-2'>A pilonidal sinus is an abnormal tract or tunnel running underneath the skin. </p>
                  <p className='pt-2'>Also known as a pilonidal cyst or pilonidal abscess, the tract usually contains fluid, hair, abscess, and dirt. It usually occurs in the cleft at the top of the buttocks.</p>
                  <p className='pt-2'>It is a chronic inflammatory process that can result in a substantial decrease in quality of life.The treatment of pilonidal sinus is challenging because of the high chances of recurrence and delayed wound healing by conventional procedures.</p>
                  <p className='pt-2'>Laser treatment of pilonidal sinus is quite promising as the chances of recurrence are almost negligible, and wound healing is swift because of its minimally invasive nature.</p>
                </div>
              </motion.div>
            </div>
            <div>
            <img
                src="/sinus1.jpg"
                alt="Background"
                className="w-full object-cover opacity-200"
              />
            </div>
 
            <div className='flex-col mb-8'>
              <motion.div 
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3,once:true }} 
              transition={{ duration: 0.6 }}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">
                  Causes of Pilonidal Disease</h2>
                  <div className="mb-4">
                    <p className='pt-2'>→ Positive family history of the disease</p>
                    <p className='pt-2'>→ Obesity</p>
                    <p className='pt-2'>→ Poor hygiene</p>
                    <p className='pt-2'>→ Deep natal cleft anatomy</p>
                    <p className='pt-2'>→ Hirsutism or excessive hair in the natal cleft</p>
                    <p className='pt-2'>→ Occupation requiring prolonged sitting like drivers (also known as Jeep disease) </p>
                    <p className='pt-2'>→ Excessive sweating</p>
                   
                  </div>
                </div>
              </motion.div>

              <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3,once:true }} 
              transition={{ duration: 0.6 }}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Presentation of pilonidal sinus</h2>
                  <div className="mb-4">
                    <p className='pt-2'>→ The pilonidal disease has a broad spectrum of presentations starting from incidental findings to a severe form with significant disability.</p>
                    <p className='pt-2'>→ Asymptomatic</p>
                    <p className='pt-2'>→  No symptoms except for small swellings or small pits in the buttock’s cleft. </p>
                    <p className='pt-2'>→  Wait and watch policy, or no intervention is required.</p>
                    <p className='pt-2'>→  Avoid prolonged sitting</p>
                    <p className='pt-2'>→  Maintain personal hygiene</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
             initial={{ opacity: 0, x: 100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ amount: 0.2,once:true }} 
             transition={{ duration: 0.6 }}
              className='py-16'>
               <h1 className="text-3xl md:text-4xl  font-semibold mb-2 text-first my-4 text-center">ACUTE STAGE</h1>
                <div className="mb-4">
                 <p className='pt-3'>Formation of abscess or pus associated with pain and fever. Initial management consists of drainage of pus or abscess and dressings. Then, laser depilation or removal of hair to be done to prevent a recurrence.</ p>

                 <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">Chronic phase</h3>
                 <p className='pt-2'>Formation of the sinus with the intermittent discharge of pus.</p>
                 <p className='pt-2'>Sinus formation can be associated with multiple tracts or branches.</p>
                 <p className='pt-2'>Pain is less intense and often intermittent.</p>
                 <p className='pt-2'>Laser surgery (SiLaC procedure, LA-EPSIT procedure) is highly effective for treating such a condition.</p>
                 <p className='pt-2'>Sometimes flap based repairs are advised for extensive disease.</p>

                 <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">Recurrent phase</h3>
                 <p className='pt-2'>Sometimes pilonidal sinus can recur despite the best treatment.</p>
                 <p className='pt-2'>The best way to prevent or lower the recurrence rate is the early and timely intervention of the primary disease.</p>
                 <p className='pt-2'>A flap-based repair (cleft lift repair, Limburg flap repair) is done in complex, recurrent pilonidal disease.</p>
                </div>

              </motion.div>
              <motion.div 
               initial={{ opacity: 0, x: -100 }} 
               whileInView={{ opacity: 1, x: 0 }} 
               viewport={{ amount: 0.2,once:true }} 
               transition={{ duration: 0.6 }}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Management of Pilonidal Sinus</h2>
                  <div className="mb-4">
                    <p className='pt-3'>Most Advanced Laser treatment for fistula. Laser procedures for pilonidal sinus are significantly becoming popular because of its minimally invasive nature, speedy recovery, same-day discharge with minimal post-operative follow ups or dressings. Laser procedures performed by our team are :-</p>
                   
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">SILAC- (PILONIDAL SINUS LASER ASSISTED CLOSURE)</h3>
                    <p className='pt-2'>This procedure is done for only simple, single-track pilonidal disease.</p>
                    <p className='pt-2'>After cleaning and thorough irrigation of the tract, laser emitting laser fiber is inserted into the track, and a defined amount of energy is delivered.</p>
                    <p className='pt-2'>This energy causes thermal ablation and collapse of the tract.</p>
                    <p className='pt-2'>The patient is discharged on the same day with minimal follow-up.</p>

                    <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-3 text-first">LASER ASSISTED EPSIT PROCEDURE</h3>
                    <p className='pt-2'>A highly sophisticated, skinny endoscopic camera is introduced into the sinus, and all the debris and a small tuft of hairs are removed under direct vision.</p>
                    <p className='pt-2'>This technique provides a good clearance of the cavity and hence minimizes the chance of recurrence.</p>
                    <p className='pt-2'>Performed at very centers due to the high cost of infrastructure involved, this technique is beneficial for complex fistula with multiple branching.</p>
                    <p className='pt-2'>The tract is then ablated with the help of laser emitting radial fiber through a photocoagulation mechanism.</p>
                    <p className='pt-2'>Fast recovery, negligible recurrence, and same day discharge are some of the highlights which make this procedure highly rewarding.</p>

                  </div>
                </div>
              </motion.div>


             <div className='flex-col items-center justify-center mx-auto gap-20 my-8 py-16'>
               <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2,once:true }}
                className="flex items-center justify-center  max-w-6xl mx-auto">
                <div className="p-12 border-third border-2  rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first text-center">  ADVANTAGES OF LASER TREATMENT</h2>
                 <div className="mb-4">
                  <p className='pt-2'>→ Management of complex and recurrent fistula.</p>
                  <p className='pt-2'>→ In highly complex or recurrent pilonidal disease, we might advise a flap-based repair.</p>
                  <p className='pt-2'>→ Such types of pilonidal disease have extensive branching with involvement of both buttocks</p>
                  <p className='pt-2'>→ These require extensive debridement of the wound, which is then closed with a flap-based repair.</p>
                  <p className='pt-2'>→ The two types of flap-based repair performed by our team yielding excellent results are:</p>
                  <p className='pt-2 ml-5'><span className="font-medium mr-1">Cleft Lift Repair:</span>  usually indicated for the patient having deep natal cleft anatomy.</p>
                  <p className='pt-2 ml-5'><span className="font-medium mr-1">Limberg flap Repair:</span> indicated for patients having an extensive disease involving both buttocks.</p>
                  </div>
                </div> 
                </motion.div>
              </div>              


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

            <div className="px-2 py-20 w-full flex justify-center">
             <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg overflow-hidden">
               <div className="lg:w-1/2">
               <div className="h-72 bg-cover lg:h-full  lg:rounded-lg">
                <img
                src="/lady.jpg"
                alt="Background"
                className="w-full object-cover opacity-200"/> </div>
               </div>
               <div className="flex flex-col mx-auto  py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 ">
                 <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first"> Worried about the pricing
                 </h2>
                 <p className="pt-2 font-semibold">⌲ Option for a budget friendly Hospital</p>
                 <p className="pt-2 font-semibold">⌲ EMI facility</p>
                 <p className="pt-2 font-semibold">⌲ Substantial discounts on investigations</p>
                 <p className="pt-2 font-semibold">⌲ Free post-surgical consultations</p>
              </div>
             </div>
           </div>
          
           <motion.div 
                 initial={{ opacity: 0, x: -100 }} 
                 whileInView={{ opacity: 1, x: 0 }} 
                 viewport={{ amount: 0.3,once:true }} 
                 transition={{ duration: 0.6 }}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first text-center">DON’T BE FOOLED BY THE GIMMICK OF LASER -</h2>
                <div className="mb-4 text-center ">
                  <p className='pt-2'>There are different procedures for the best management of fistula. Laser is one of the modalities. </p>
                  <p className='pt-2'>The best option for you will depend on the position of the fistula and whether it's a single channel or branches off in different directions.</p>
                  <p className='pt-2 font-bold text-xl'> You can contact us on +91-9910024564, +91-9999456455</p>
                </div>
             </motion.div>


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
    </>
  )
}

export default page
