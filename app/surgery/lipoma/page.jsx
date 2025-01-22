'use client'
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import FAQsingle from '@/app/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Minimal Cuts & No Stitiches",
  "Trusted Doctors & Clinics",
  "0% Interest Emi Facility",
  "All Insurance Covered",
  "Same Day Discharge",
  "Complete Recovery in 1-2 Days",
];

const FeatureList = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 md:text-lg text-left mx-auto">
    {features.map((feature, index) => (
      <div
        key={index}
        className={`flex items-center py-3 bg-white rounded-lg text-first max-md:text-base transition-all duration-300 hover:scale-105 hover:font-semibold hover:text-blue-700 ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"}
        }`} >
        <span> ✔️ </span>
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
      question:"Can lipomas be dangerous ?",
      answer:"Lipomas usually require some form of surgical intervention for permanent results. However, very small and soft lipomas can be treated with the instillation of steroid injections directly into lipomas. High recurrence rates are associated with this procedure."
    },
    {
      question:"How do you treat lipoma without surgery ?",
      answer:"Lipomas usually require some form of surgical intervention for permanent results. However, very small and soft lipomas can be treated with the instillation of steroid injections directly into lipomas. High recurrence rates are associated with this procedure."
    },
    {
      question:"Can lipomas be treated with ayurvedic medicines ?",
      answer:"The role of ayurvedic medicines is highly controversial in managing lipomas, especially multiple and large in size."
    },
    {
      question:"Can lipomas grow back at the same site ?",
      answer:" Proper and completely excised lipomas do not grow back in the same place. Lipomas that are large or hard in consistency when removed by liposuction can result in incomplete removal of lipomas, resulting in recurrence."
    },
    {
      question:"At what size should lipoma be reduced ?",
      answer:"The decision to remove lipomas generally depends upon the symptoms and the progression of lipoma. Lipomas that are increasing in size should be removed immediately. However, lipomas over 3cm in length should be removed for cosmetic purposes."
    },
    {
      question:"How to cure lipoma by excercise ?",
      answer:"Once formed, lipomas cannot be cured by exercise. However, maintaining a healthy weight is always beneficial in managing lipomas. It has been seen that maintaining a healthy weight can reduce the further formation of lipomas in a few individuals."
    },
    {
      question:"Can lipoma cream be used for lipoma removal ?",
      answer:"Lipoma cream can never remove or dissolve lipomas. It can only help to relieve pain, discomfort, or irritation caused by lipoma. One should never buy these creams to remove lipomas as these creams are ineffective in curing lipomas."
    },
    {
      question:"How to stop lipoma from spreading ?",
      answer:" There is no definitive way to prevent the spreading of lipoma, especially for patients with a genetic predisposition. However, maintaining a healthy weight and lifestyle definitely reduces the formation of lipomas. A healthy diet and less use of junk foods also help to detoxify the body and prevent the further formation of lipomas."
    },
    {
      question:"Can lipoma dissolve on their own ?",
      answer:"Lipomas can never disappear on their own. However, significantly reducing weight and maintaining a healthy lifestyle might reduce the size of lipomas to a certain extent."
    },
    {
      question:"What are the special diets to prevent the spreading of lipoma",
      answer:" Certain fruits, like blueberries, raspberries, citrus fruits, apples, plums, etc., help detoxify the body and reduce the chances of lipoma formation. Green leafy vegetables and omega-3 fatty acids also decrease inflammation and growth of lipomas."
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
    description: `"Dr Kapil Agrawal offers the best lipoma treatment in Delhi. His vast experience and expertise to perform complete range of lipoma procedures makes him one of the best specialist surgeon in Delhi for the management of lipomas. Depending upon the patient's requirement, he is offering best treatment of lipomas at some of the best hospitals in Delhi and as well at his own clinic at affordable prices."`,
  },

];

 
  return (
  <>
  <Header/>
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
                  Best Lipoma Treatment<br /> in Delhi
                </h1>
              </div>
            </div>
          </div>
          <div>
            <motion.div
              initial={{opacity: 0, scale: 0.12 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              variants={boxVariants}
              transition={{  duration: 1 }}
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="w-3/5 m-4 mx-auto relative sm:-mt-24 lg:-mt-40 px-8 py-10 bg-white shadow-sm shadow-black items-center rounded-lg">
              <FeatureList features={features} />
            </motion.div>
          </div>

          <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10 pb-16">
            <div className="py-8 mt-16 mb-8 text-center border-t-2 border-b-2 border-first">
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
                  </motion.p>
                </div>
              ))}
            </div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}>
              <div className=''>
                <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-second">BEST LIPOMA SPECIALIST DOCTOR IN DELHI</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Dr Kapil Agrawal : Why Choose us for Lipoma Treatement :-</h2>
                <div className="mb-4">
                  <p className='pt-2'><span className="font-medium mr-1">Vast experience of 22 years:  </span> Dr Kapil Agrawal brings over two decades of extensive experience and has performed more than 3000 lipoma procedures with excellent results and high patient satisfaction rates. </p>
                  <p className='pt-2'><span className="font-medium mr-1">Complete Range of Procedures:</span>  Dr Kapil Agrawal offers a comprehensive suite of procedures for lipoma removal, ensuring that each patient receive the most appropriate and effective treatment for their specific condition. </p>
                  <p className='pt-2'><span className="font-medium mr-1">Personalised Treatment Plans:</span>   At Habilite Clinics, Dr Kapil Agrawal offers customized treatment plans after taking into consideration factors such as size, location, consistency and location of lipomas. His treatment strategy aims at maximizing effectiveness while minimizing discomfort. </p>
                  <p className='pt-2'><span className="font-medium mr-1">Patient Centred Approach:</span> Dr Agrawal prioritizes the well being and comfort of his patients and ensure that each individual receive personalized attention and care throughout their treatment journey.</p>
                  <p className='pt-2'><span className="font-medium mr-1">Affiliations with Top Hospitals in Delhi:</span> Dr Agrawal is associated with some of the best hospitals for lipoma treatment in Delhi. These hospitals apart from providing state of the art facilities, also offer cashless insurance facilities, making the treatment process more convenient and financially manageable for patients.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}>
              <div className=''>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> What is Lipoma ?</h2>
                <div className="mb-4">
                  <p className='pt-2'>Lipomas are slowly growing lump of non- cancerous fat cells that form between the skin and underlying muscle layer. </p>
                  <p className='pt-2'>They are usually painless and tend to move easily when pressed.</p>
                  <p className='pt-2'>They can form anywhere in the body but most commonly occur on the neck, shoulders, back, abdomen, arms, and thighs.</p>
                  <p className='pt-2'>They are usually harmless but can cause discomfort or pain depending on their size and location.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}
            className=''>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                Different types of Lipoma
              </h2>
              <div className="mb-4">
                <p className='pt-3'>There are four main types of lipomas :-</p>
                <p className='pt-2'><span className="font-medium mr-1">→ Subcutaneous Lipomas  </span> are the most common type of lipoma. They form just under the skin, and are usually soft and rubbery to the touch. </p>
                <p className='pt-2 ml-3'>Subcutaneous lipomas can occur anywhere on the body, but are most commonly found on the trunk, shoulders, neck, and arms. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Intramuscular Lipomas </span> form within the muscles, and are often firm and Painful to the touch. Intramuscular lipomas are most commonly found in the thigh or shoulder region. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Intermuscular Lipomas</span> form between the muscles, and can be either soft or hard to the touch. Intermuscular lipomas are most commonly found in the forearm or calf region. </p>
                <p className='pt-2'><span className="font-medium mr-1">→ Visceral Lipomas</span> form inside the body cavities, including around organs such as the heart, kidneys, or liver. Visceral lipomas are typically not palpable from the outside of the body.</p>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8 }}
            className=''>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Causes of Lipoma</h2>
                <div className="mb-4">
                  <p className='pt-3'>The exact cause of lipomas is never established. However, some factors that may contribute to the development of lipomas include :-</p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Genetics: </span>Lipomas can develop due to genetic tendency resulting in formation of multiple lipomas all over body.</p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Injury: </span> Although rare, but sometimes trauma or injury can trigger the growth of lipomas.</p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Conditions: </span>  Certain congenital conditions like Adiposis Dolorosa or Madelung's disease result in the formation of multiple lipomas. </p>
                  <p className='pt-2 ml-4'>  Certain rare conditions like Gardner's syndrome or Cowden syndrome also increase the risk for lipoma formation. </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Diagnosis of Lipomas</h2>
                <div className="mb-4">
                  <p className='pt-3'>Lipomas can be diagnosed in almost all cases with physical and clinical examination. However additional tests may be recommended in certain cases which include :-</p>
                  <p className='pt-2'><span className="font-medium mr-1">→ Imaging Studies:</span>Ultrasound, MRI, or CT scans can provide detailed images of the lump and its location within the body.</p>
                  <p className='pt-2'><span className="font-medium mr-1">→ FNAC or Biopsy:</span> Rarely, a small tissue sample or few fat cells may be taken and examined under a microscope to confirm the diagnosis.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className=''>
              <div className='mt-4'>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first text-left">Best Treatment Options for Lipoma</h2>
                <div className="mb-4">
                  <p className='pt-2'><span className="font-medium mr-1">→ Observation: </span>  As lipomas are usually harmless, simple observation and no intervention is all required for small, non-growing lipomas.</p>

                  <p className='pt-2'><span className="font-medium mr-1">→ Liposuction for Lipomas:</span>  Liposuction plays a significant role in the management of lipomas but has its own indications and limitations. It is most effective for lipomas which are very </p>
                  <p className='pt-2 '>superficial, small and soft in consistency. The main advantage of liposuction is minimally invasive procedure resulting in rapid recovery and better cosmetic outcomes in aesthetically sensitive areas like face or neck.</p>
                  <p className='pt-2 '> The major limitation of this procedure is its non-suitability for deep lipomas, large lipomas or lipomas near blood vessels or nerves. Sometimes, liposuction may result in incomplete removal of lipomas resulting in recurrence.</p>

                  <p className='pt-2'><span className="font-medium mr-1">→ Pinch technique for Lipomas: </span>  This is one of the best treatment options for the treatment of lipomas. This technique can be performed in almost every </p>
                  <p className='pt-2 '>case of lipomas and has least complication rates. The procedure involves use of highly specialized instruments to elevate the lipoma from underlying tissues. A sharp tool is then introduced to cut around base of lipoma and remove it from underlying tissues.</p>
                  <p className='pt-2 '>The wound is then allowed to heal on its own. This technique is not used for very large and deep lipomas.</p>

                  <p className='pt-2'><span className="font-medium mr-1">→ Laser Procedure for Lipomas:</span>  Laser therapy has not gained much popularity in the treatment of lipomas. This is because of incomplete destruction of lipomas</p>
                  <p className='pt-2 '> resulting in recurrence of lipomas. Laser therapy works by delivering focused light energy that is absorbed by the fat cells within the lipoma. This absorption generates heat, which leads to thermal damage and subsequent breakdown of the fat cells. However, hard lipomas and large lipomas may not completely break down resulting in recurrences.</p>
                  <p className='pt-2 '>The effectiveness of laser therapy for lipomas can vary depending on the size, location, and characteristics of the lipoma. Small, superficial lipomas may respond well to laser treatment, whereas larger or deeper lipomas may require alternative or adjunctive treatments.</p>

                  <p className='pt-2'><span className="font-medium mr-1">→ Steroid Injections into Lipomas: </span> Direct instillation of steroids into the lipomas can sometimes shrink smaller lipomas. However, this technique is less commonly used due to multiple  </p>
                  <p className='pt-2 '>sessions, incomplete removal of lipomas and higher recurrences.They are not considered a definitive cure and may need to be repeated periodically for sustained benefit.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col mx-auto px-10 md:px-16 lg:px-24 gap-6 ">
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
  <Footer/>  
  </>
  )
}

export default page
