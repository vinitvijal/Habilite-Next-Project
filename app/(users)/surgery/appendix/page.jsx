'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Advanced Laparoscopic Surgeries",
  "No cuts",
  "Painless Surgeries",
  "Affiliated to Best Hospitals in Delhi, NCR",
  "Discharge in 24 Hours",
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
      question:"Is surgery the best option for the management of appendicitis?",
      answer:"Surgery is the best option for managing appendicitis as it permanently removes the source of infection. This eliminates the chances of recurrent attacks and significantly reduces the risk of complications such as perforation or bursting of the appendix."
    },
    {
      question:"What is the function of the appendix in our body?",
      answer:"The appendix is a small, tube-like structure attached to the large intestine. The appendix has no function in the body and is a vestigial organ. Sometimes, the appendix can get inflamed, and it becomes necessary to remove it."
    },
    {
      question:"Can I lead a normal life without an appendix?",
      answer:"One can lead a perfectly normal life without an appendix. Removing the appendix does not significantly impact overall health or digestive function, as its role in the body is not essential."
    },
    {
      question:"What is the duration of stay in the hospital post laparoscopic appendicectomy?",
      answer:"The duration of hospital stay after a laparoscopic appendicectomy is usually short, often ranging from one to two days. However, this can vary depending on the patient's overall health and recovery from the surgery."
    },
    {
      question:"What is an appendicular lump?",
      answer:"An appendicular lump is a mass that forms in the right lower abdomen due to an inflamed appendix surrounded by adherent loops of bowel and omentum. It is a protective mechanism to localize the infection and prevent its spread. The surgery in such patients becomes riskier due to increased chances of bowel injury."
    },
    {
      question:"What is interval appendicectomy?",
      answer:"Interval appendicectomy refers to the surgical removal of the appendix performed several weeks after an initial episode of appendicitis. This is done in cases that have been managed non-operatively with antibiotics. This approach allows inflammation to subside before surgery, especially when an appendicular lump has already formed."
    },
  ];


  const featureData = [
    {
      points: [
        "Speedy Recovery",
        "Early and Easy Mobility",
        "Discharge within 24 hours",
        "Virtually Scarless Surgery",
      ],
    },
 
    {
      points: [
        "Minor tissue trauma and less post-operative pain",
        "Low risk of infection",
        "Less Dependence on pain relievers",
        "Almost no chance of hernia",
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
              src="/main.jpg"
              alt="Background"
              className="w-full rounded-lg object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-transparent hover:bg-black hover:bg-opacity-20 transition-all duration-400">
              Best Appendicitis Laparoscopic Surgery <br /> in Delhi
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
            viewport={{ amount: 0.2}}
            className="sm:w-2/3 w-full mx-auto relative sm:-mt-12 lg:-mt-24 md:px-6 py-4 bg-white sm:shadow-md items-center md:rounded-lg"
          >
            <FeatureList features={features} />
          </motion.div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10">
          <div className='flex-col mb-8 mt-16'>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.2}} 
            transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-semibold mb-2 text-first">BEST APPENDICTICS TREATMENT IN DELHI</h2>
               <div className=" mb-4">
                 <p className='pt-2'>Acute appendicitis is a medical emergency that requires prompt diagnosis and management to prevent serious complications.</p>
                 <p className='pt-2'>Dr Kapil Agrawal, one of the best appendicitis specialist in delhi, has handled complicated cases with excellent outcomes. </p>
                 <p className='pt-2'> He has an overall experience of more than 22 years and has performed more than 2000 laparoscopic appendicectomies.</p>
               </div>
            </motion.div>
            <br />
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2}} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">What is Appendicitis ?</h2>
              <div className="mb-4">
                <p className='pt-2'>Appendicitis is the inflammation of the appendix, a small organ attached to the large intestine on the right lower side of the abdomen.</p>
                <p className='pt-2'>While its exact function remains unclear, when it becomes inflamed, it can lead to serious health issues. </p>
                <p className='pt-2'>Acute appendicitis is a common and urgent surgical condition. When it turns against you, the symptoms can be alarming.</p>
                <p className='pt-2'> If left untreated, it can lead to severe complications such as perforation, abscess formation, and peritonitis. </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10 m-16">
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Symptoms of Appendicitis</h2>
            <div className=" mb-4 ">
              <p className='pt-3'>The presentation of acute appendicitis can vary, but the classic symptoms include :- </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Abdominal Pain: </span>Acute appendicitis typically presents as vague abdominal pain that starts around the umbilical region and </p>
              <p className='pt-2 ml-4'>later localizes to the right lower part of the abdomen. The pain is quite sharp and constant.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Nausea and Vomiting: </span>Nausea and vomiting may occur after the onset of abdominal pain.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Anorexia: </span>Loss of appetite is a common early symptom.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Fever: </span>A low-grade fever may be present, but a high fever can indicate a more severe infection or complications like perforation.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Rebound Tenderness:  </span>Severe pain when the pressure in the right lower abdomen is suddenly released is a classical and diagnostic sign of acute appendicitis.</p>
            </div>
            <br />
        
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">
            Complications of Acute Appendicitis</h2>
            <div className=" mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">→ Perforation:</span>A ruptured appendix can lead to peritonitis, a life-threatening infection of the abdominal cavity.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Abscess Formation: </span>Localized collections of pus may form around the appendix, requiring drainage.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Sepsis: </span> A severe, body-wide response to infection that can be fatal if not treated aggressively.</p>
             
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">DIAGNOSIS OF APPENDICITIS</h2>
            <div className=" mb-4 ">
              <p className='pt-3'>The diagnosis of acute appendicitis is primarily clinical but often supplemented by imaging and laboratory tests to confirm and assess the severity. Some of the common tests performed for the diagnosis include :- </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">Laboratory Tests</h3>
              <p className='pt-2'><span className="font-medium mr-1">→ Complete Blood Count (CBC): </span>Elevated white blood cell (WBC) count with a left shift (increased immature WBCs) suggests infection and inflammation.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ C-reactive Protein (CRP): </span>Elevated levels indicate inflammation.</p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">Imaging Studies</h3>
              <p className='pt-2'><span className="font-medium mr-1">→ Ultrasound: </span> Often the first imaging modality used, especially in children and pregnant women. It can show a swollen appendix and free fluid.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Computed Tomography (CT) Scan:</span>The gold standard for diagnosing appendicitis in adults. It provides detailed images showing an </p>
              <p className='pt-2 ml-5'>enlarged appendix, fat stranding, and potential complications like abscess or perforation.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Magnetic Resonance Imaging (MRI): </span>Used when radiation exposure needs to be minimized, such as in pregnant patients.</p>
            </div>
          </motion.div>    
          <motion.div  initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">MANAGEMENT OF APPENDICITIS</h2>
            <div className=" mb-4 ">
              <p className='pt-3'>The primary treatment for acute appendicitis is surgical removal of the appendix (appendectomy). The approach to management may vary based on the severity and stage of appendicitis. The treatment protocol depends upon several factors :- </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Duration of symptoms: </span>The best time to operate this condition is within three days or 72 hours after the onset of symptoms.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Formation of appendicular lump: </span>If the patient delays the treatment and radiological investigations show the formation of an appendicular lump, it’s better to plan</p>
              <p className='pt-2 ml-5'>conservative management, and surgery is advised after 4-6 of treatment.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Development of complications:</span> If the patient has started developing complications like the formation of abscess or pus, high-grade fever, or rupture of the appendix, </p>
              <p className='pt-2 ml-5'> urgent surgical intervention is required as it can be life-threatening.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Condition of the patient:</span> if the patient delays the treatment and the symptoms settle down, it’s better to postpone the surgery for 4-6 weeks.</p>
              <p className='pt-2 ml-4'> This is known as Interval Appendicectomy.</p>
           </div>
          </motion.div>    
          <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-second text-center">BEST APPENDICITIS TREATMENT OPTIONS</h2>
             <p className='pt-2'>Each patient's case presents unique challenges; therefore, personalized management approaches will ensure better health outcomes. </p>
             <p className='pt-2'>The choice of treatments often depends on individual circumstances such as age, overall health, and severity of symptoms. </p>
             <p className='pt-2'>Healthcare providers need to evaluate each case carefully before deciding on a management plan that best suits the patient’s needs.</p>

            <div className=" mb-4 ">

             <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">NON-SURGICAL OR CONSERVATIVE MANAGEMENT</h3>
             <p className='pt-2'>Under this plan, the surgeon administers antibiotics to combat infection. Patients are closely monitored for any changes in their condition. </p>
             <p className='pt-2'>If the symptoms improve, the surgery can be avoided for some time. However, the risk of recurrence remains higher compared to surgical management. </p>
             <p className='pt-2'>This treatment is mainly recommended in patients having mild symptoms or an uncomplicated appendicitis.</p>
             <p className='pt-2'>Patients having significant surgical risks in the form of medical diseases like uncontrolled diabetes, high blood pressure, or heart problems can also be advised for conservative management.</p>
             <p className='pt-2'>Patients presenting late in the hospital after 3-4 days of onset of symptoms and had formation of appendicular lump may be advised to defer surgery for a particular period.</p>

             <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">SURGICAL MANAGEMENT - Best Appendicitis Surgeon in Delhi</h3>
             <p className='pt-2'>Surgical management of appendicitis typically involves the removal of the inflamed appendix, a procedure known as an appendectomy,</p>
             <p className='pt-2'>which can be performed using either Open or Laparoscopic techniques.</p>
             <p className='pt-2'>The decision to perform open or laparoscopic appendicectomy depends upon the experience and expertise of the surgeon as well as the condition of the patient.</p>
             <p className='pt-2'>Patients having significant surgical risks in the form of medical diseases like uncontrolled diabetes, high blood pressure, or heart problems can also be advised for conservative management.</p>

             <h4 className="text-xl md:text-2xl font-semibold mb-1 mt-1 text-first">Open Appendicectomy</h4>
             <p className='pt-2'>The procedure requires a larger incision in the lower right abdomen. The surgery is associated with increased morbidity, </p>
             <p className='pt-2'>delayed recovery, and increased risk of complications.</p>
             <p className='pt-2'>The surgery is usually reserved for patients unfit for general anesthesia and patients having a severe abdominal infection or sepsis.</p>

             <h4 className="text-xl md:text-2xl font-semibold mb-1 mt-1 text-first">Appendicitis Laparoscopic Surgery</h4>
             <p className='pt-2'>Laparoscopic Appendicectomy, a minimally invasive surgical procedure for removing the appendix, has become the gold standard for the removal of the appendix.</p>
             <p className='pt-2'>The laparoscopic surgeon can access the abdominal cavity with remarkable precision by utilizing small incisions and guided by a high-definition camera known as a laparoscope.</p>
             <p className='pt-2'>This approach reduces postoperative pain and significantly shortens recovery times compared to traditional open surgery.</p>
             <p className='pt-2'>An experienced and expert surgeon can easily navigate complex anatomy while minimizing tissue trauma, which contributes to lower rates of complications and faster return to normal activities for patients.</p>
             <p className='pt-2'>T
             The success of the surgery entirely depends upon the experience and expertise of the surgeon. </p>
             <p className='pt-2'>T
             A highly skilled surgeon can easily handle even complicated cases using minimally invasive techniques.</p>
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
               ADVANTAGES OF <br/> SINGLE PORT LAPAROSCOPIC SURGERY
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

        <motion.div
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ amount: 0.1,once:true }} 
        transition={{ duration: 0.4 }}
        className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 mt-16 gap-6"
        >
          <div className='flex-col mb-16'>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Best Laparoscopic Surgeon for Appendicitis : Dr. Kapil Agrawal</h2>
            <div className="mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">→ Highly experienced team: </span>Your surgical team, led by Dr. Kapil Agrawal, comprises highly experienced and skilled professionals </p>
              <p className='pt-2 ml-5'>who specialize in laparoscopic procedures, including appendicectomies.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Single port laparoscopic Appendicectomy: </span>We offer single port laparoscopic appendicectomy, a minimally invasive surgical technique that uses only </p>
              <p className='pt-2 ml-5'>one small incision. This advanced procedure results in less postoperative pain,</p>
              <p className='pt-2 ml-5'> minimal scarring, and a faster recovery time compared to traditional multi-port laparoscopy.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Empanelled with state-of-the-art hospitals: </span>Our services are provided in state-of-the-art hospitals equipped with the latest medical technology and facilities. </p>
              <p className='pt-2 ml-5'>The hospitals are equipped with modern operating theatres, advanced diagnostic tools, and comprehensive care units,</p>
              <p className='pt-2 ml-5'> ensuring that patients receive the highest standard of medical treatment.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Complete cashless insurance facilities available:</span>Our hospitals are empanelled with a wide range of insurance providers, allowing patients </p>
              <p className='pt-2 ml-5'>to avail themselves of treatments without upfront payments. Our dedicated insurance coordination team assists with all </p>
              <p className='pt-2 ml-5'>necessary paperwork and approvals, ensuring a seamless and stress-free experience for patients and their families.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Zero percent EMI options:</span>We provide zero percent EMI options for our patients. This flexible payment plan allows patients to pay for their treatments  </p>
              <p className='pt-2 ml-5'>in manageable monthly installments without zero percent interest.</p>
              <h2  className="text-3xl md:text-4xl mb-2 mt-2 text-black">Book an Appointment Now: </h2>
              <p className='pt-1  text-3xl md:text-4xl text-first'>+(91) 9999456455, +(91) 9910024564</p>
            </div>
          </div>  
        </motion.div>

        <div className="flex flex-col mx-auto px-2 sm:px-6 md:px-12 lg:px-24 gap-6">
          <motion.div initial={{ opacity: -2 }} 
            whileInView={{ opacity: 1.5 }} 
            transition={{ duration: 2 }} 
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
