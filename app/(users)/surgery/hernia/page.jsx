'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";


const features = [
  "Advanced Laparoscopic Surgeries",
  "No cuts",
  "Painless Surgeries",
  "High quality mesh to prevent recurrence",
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
      question:"How long do I stay in the hospital after laparoscopic hernia repair?",
      answer:"We usually discharge our patients on the day or within 24 hours of their surgery. They can walk normally and do daily activities as usual after getting discharged from the hospital"
    },
    {
      question:"Can medicines cure hernia?",
      answer:"Hernia can never be cured by medicines. They may cause some improvement of the symptoms but there can never be a cure for something rooted beneath. Hernia is a tear or defect of the muscle wall and unless and until, it is not repaired by surgical intervention, it can never be cured. In newborns, only umbilical hernia can close again spontaneously in a few months."
    },
    {
      question:"What are the chances of recurrence after hernia surgey?",
      answer:"The complexity of the hernia and surgeon's expertise plays crucial role in the long term outcomes of hernia repair. With a skilled surgeon, the chances of reoccurrence are under 1%. The recurrence rate for laparoscopic repair depends upon the surgeon skills to perform adequate disection, primary closure of the defect and proper placement of adequately sized mesh."
    },
    {
      question:"What can I do to prevent hernia?",
      answer:"Common types of strategies to prevent a hernia is to keep your weight under control, avoid smoking and excessive straining due to chronic constipation or cough. Avoid heavy lifts/strains or extreme activities that raise abdominal pressure against the weak area resulting in the formation of hernia. Even genetics play an important role in the formation of hernia."
    },
    {
      question:"Why is surgery necessary in an asymptomatic hernia?",
      answer:"Hernia is a slowly progressive medical condition that only enlarges more and more with time. It can get messy and sometimes even deadly if unchecked.Hence, once you develop hernia ,you must definitely consult a best hernia specialist surgeon who specializes in the management of hernias."
    },
    {
      question:"What are the different types of laparoscopic repairs for groin hernia?",
      answer:"Common Types of Groin hernia are Inguinal and femoral hernias.The different types of laparoscopic hernia repair are TEP Repair, TAPP Repair and eTEP Repair depending on the size of the hernia, patient's obesity levels and complexity of hernia. For getting the best results, you must a hernia specialist surgeon who is familiar with all techniques."
    },
    {
      question:"What are the different types of laparoscopic repairs for ventral hernia?",
      answer:"Epigastric, umbilical and incisional hernias are three common types of ventral (abdominal) hernias. Various types of laparoscopic repair for ventral hernia include IPOM Plus repair, the Rives Stoppa technique and TAR procedures."
    },
    {
      question:"What is mesh, and does the quality of mesh matter in hernia repair?",
      answer:"Mesh is a non reactive, durable synthetic material used to repair hernias. You must never compromise with the quality of mesh used in hernia repair. Use of low-quality mesh can lead to rejection by the human body and may even result in recurrence of hernia.To avoid these complications, you always need todemand of your surgeon to uses high-quality mesh."
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
              Best Hernia Surgeon<br /> in Delhi
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
            viewport={{ amount: 0.2,once: true }} 
            transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-semibold mb-2 text-first">BEST LAPAROSCOPIC HERNIA SURGEON IN DELHI</h2>
               <div className=" mb-4">
                 <p className='pt-2'>
                 Dr. Kapil Agrawal is the best Hernia Surgeon in Delhi, India and is well recognised for delivering fantastic results for all kinds of hernia.</p>
                 <p className='pt-2'>With 22 years of experience and over 5000 advanced laparoscopic hernia repairs under his belt, makes him a premier Hernia specialist in Delhi NCR. </p>
                 <p className='pt-2'>  He has the expertise to perform all types of hernia repair with excellent outcomes.</p>
               </div>
            </motion.div>
            <br />
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2}} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">What is Hernia ?</h2>
              <div className="mb-4">
                <p className='pt-2'>Hernia is a slowly progressive medical condition that develops over time as the muscle wall tears or becomes weak.</p>
                <p className='pt-2'>As a result, organs like intestine, stomach or fatty tissue starts pushing out through this tear giving rise to a bulge beneath the skin.</p>
                <p className='pt-2'>Hernias can develop in a number of body locations, including the groin (inguinal hernia), navel area </p>
                <p className='pt-2'>(umbilical hernia or some other forms listed below) and upper stomach (hiatal hernia).</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 gap-10 m-16">
          <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Types of Hernia</h2>
            <div className=" mb-4 ">
              <p className='pt-3'>Hernia can manifest in different areas of the body. Based on the location or area involved, the hernia can be broadly classified into :- </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Inguinal Hernia: </span>AInguinal hernia is among the most common and occurs in the groin or upper thigh.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Femoral Hernia: </span>Femoral hernia is more common in females and occurs in the groin or upper part of the thigh.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Umbilical Hernia: </span>An umbilical hernia occurs in the umbilical or navel region of the body.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Epigastric Hernia:</span>This hernia occurs between the umbilicus and the rib cage.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Incisional Hernia: </span>The incisional hernia occurs at a previous surgical incision or scar site due to compromised repair.</p>
            </div>
            <br />
        
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">
            Symptoms of Hernia</h2>
            <div className=" mb-4 ">
              <p className='pt-3'>The symptoms of hernia depend upon the site, size, and complexity of the hernia :- </p>
              <p className='pt-2'><span className="font-medium mr-1">→ Visible Bulge:</span>The most common symptom of hernia is a bulge beneath the skin that becomes more prominent when straining and standing </p>
              <p className='pt-2 ml-5'>and disappears when lying down. This is known as a REDUCIBLE HERNIA. When the bulge becomes permanent and does not disappear,</p>
              <p className='pt-2 ml-5'> it is known as an IREDUCIBLE HERNIA.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Pain and Discomfort: </span>Pain and discomfort occur when the hernia becomes entrapped by the defect. Around the hernia site, pain can be mild to severe.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Nausea and Vomiting:</span> If the hernia is a strangulated ( blood supply completely cut off ) it may cause nausea and vomiting, along with severe pain.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Heartburn and Chest Pain: </span> Typically heart burn as well as chest discomfort are associated with hiatus hernia (This type of hernia occurs when </p>
              <p className='pt-2 ml-5'> the stomach migrates or pushes itself into the chest cavity.)</p>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1}} 
          transition={{ duration: 0.5 }}
          className='flex-col mb-16 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">BEST TREATMENT FOR HERNIA</h2>
            <div className=" mb-4 ">
              <p className='pt-2'>Hernia is a condition characterized by a tear or gap in the muscle wall. Although there are medicines to control various hernia symptoms, surgical repair is mandatory to cure hernia.</p>
              <p className='pt-2'>The last decade has seen revolutionary changes in managing hernia in terms of hernia repair and the evolution of highly advanced mesh and mesh fixation devices.</p>
              <p className='pt-2'>Dr Kapil Agrawal, Best Hernia Specialist Surgeon, has expertise in all the modern and advanced hernias repairs. </p>
              <p className='pt-2'> He makes sure that his patients get the best and personalized treatment for different type of hernia repairs. The various techniques of hernia repair provided by our team include :-</p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">Open Hernia Repair</h3>
              <p className='pt-2'>This is the conventional technique for hernia repair.</p>
              <p className='pt-2'>This technique involves an incision over the hernia site and reducing the bulging content. The muscular defect is primarily closed with the help of sutures and then reinforced by non-absorbable mesh.</p>
              <p className='pt-2'>The surgery is too often accompanied by a long, rocky recovery road and higher pain & morbidity.</p>
              <p className='pt-2'>Our team, led by Kapil Agrawal, best hernia surgeon in delhi, usually reserves the open hernia surgery for large recurrent and complex hernias. </p>
              <p className='pt-2'>These hernias usually cant be repaired with the latest advanced laparoscopic or robot-assisted techniques. We also perform open surgery in patients unfit for laparoscopic surgery.</p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">Laparoscopic Hernia Repair</h3>
              <p className='pt-2'>This innovative technique for repair of hernia has revolutionized the management of hernia.</p>
              <p className='pt-2'>Laparoscopic Hernioplasty, being minimally invasive, the entire operation can be done through three small incisions about half a centimetre in size.</p>
              <p className='pt-2'>This is usually achieved by inserting a thin tube with an installed camera (a laparoscope) through one of the incisions. The laparoscope creates a magnified image of the hernia on a television monitor.</p>
              <p className='pt-2'>Small specialized surgical instruments are placed through the other incisions to fix the hernia walls.</p>
              <p className='pt-2'>Surgery is a matter of, pushing these protruding tissues back in their original position, repair and reinforce the weak area with help of synthetic mesh to avoid re-occurrence.</p>
              <p className='pt-2'> Laparoscopic Hernia Repair involves a variety of procedures depending upon the type and size of hernia. </p>
              <p className='pt-2'> Our Team, headed by Dr Kapil Agrawal, has the experience and expertise to perform all types of laparoscopic Hernia Repair. It gives us an edge to offer tailored treatments to our patients and provide them the best surgical outcomes.</p>

              <div className="relative w-full m-10">
              <img
              src="/appenix.png"
              alt="Background"
              className="rounded-lg opacity-200"/>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mb-1 mt-1 text-first">Robotic Assisted Hernia Repair</h3>
              <p className='pt-2'> Robotic Hernia Repair is one of the latest advancements in management of hernia. Robotic hernia repair is a procedure in which our team operates using robotic arms through an external console.</p>
              <p className='pt-2'>The surgeon then sits at the console, directing robotic instruments with pinpoint accuracy and using high-definition 3-D images of what he is operating on. </p>
              <p className='pt-2'> More dexterity, flexibility and overall movement control can be performed by the robotic system as opposed to conventional approaches allowing for very intricate movements that would otherwise not have been possible simply with human hands.</p>
              <p className='pt-2'>Nonetheless, the incisions are similar as in laparoscopic surgeries.</p>
              <p className='pt-2'>Our team performs Robotic Hernia Repair at Indraprastha Apollo Hospital, New Delhi. We usually prefer robotic Surgery for the more complex or redo hernias. </p>
              <p className='pt-2'>Robotic surgery is a good option as well for those patients with morbid obesity.</p>

              <div className="relative w-full m-10">
              <img
              src="/appendix1.png"
              alt="Background"
              className="rounded-lg h-80 opacity-200"/>
              </div>

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
               ADVANTAGES OF <br/>LAPAROSCOPIC AND ROBOTIC SURGERY FOR HERNIA REPAIR
              </motion.h1>
              <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%", duration: 2000 }}
              className="mx-auto border-first border-b-2 mt-4"
              >
               <p className='pt-4 text-center'>Maximizing comfort, Accelerating recovery, Minimizing complications</p>
               <p className='pt-4 text-center'>Our team offers complete range of laparoscopic procedures for management of different types of hernia. The main advantages of preforming laparoscopic hernia repair are:</p>
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">MANAGEMENT OF THE LARGE AND COMPLEX HERNIA</h2>
            <div className="mb-4 ">
              <p className='pt-3'>The size, location, and associated potential complications can add to the complexity of hernia and its management. These hernias need complex surgical techniques, a great extent of experience and expertise to make the successful hernia repair.</p>
              <p className='pt-2'>Complex hernias are defined as :-</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span> Hernia more than 10 cm in size</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span>More than 20% loss of domain</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span>Recurrent hernia</p>
              <p className='pt-2'><span className="font-medium mr-1">→ </span>Co-morbidities that impair wound healing include obesity, diabetes, smoking, and poor nutritional status.</p>
              <p className='pt-2'>Complex hernia needs an abdominal wall reconstruction which is a very disciplined surgery having advanced surgical techniques like Anterior Component Separation and Posterior Component Separation.</p>
              <p className='pt-2'>Anterior component separation is done to enter into the abdominal cavity by meticulously dissecting and advancing external oblique muscle aponeurosis, so that more rectus abdominis muscles can be reapproximated and help in getting midline closure.</p>
              <p className='pt-2'>Posterior component separation targets the deeper layers of the abdominal wall musculature and consists in separating or mobilizing structures such as lumbar fascia and transverse abdominis muscle to release tissue planes allowing for reconstruction without sacrificing vascular supply.</p>
              <p className='pt-2'>Dr Kapil Agrawal, one of the best hernia surgeon in Delhi has mastered the techniques of abdominal wall reconstruction. He has performed abdominal wall reconstruction through laparoscopic, robotic and open techniques with excellent outcomes.</p>
            </div>
          </div>  
        </motion.div>

       <motion.div
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ amount: 0.1,once:true }} 
        transition={{ duration: 0.4 }}
        className="flex flex-col mx-auto px-2 sm:px-8 md:px-16 lg:px-24 mt-16 gap-6"
        >
          <div className='flex-col mb-16'>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Why Choose Us - Dr Kapil Agrawal: Best Hernia Surgeon in Delhi</h2>
            <div className="mb-4 ">
              <p className='pt-2'><span className="font-medium mr-1">→ Expertise and Experience: </span>Dr Kapil Agrawal is a trusted name and one of the best hernia surgeon in Delhi with a relevant experience exceeding over two decades.</p>
              <p className='pt-2 ml-5'>He has undertaken over 5,000 complex laparoscopic and robotic procedures for various types of hernia.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Affiliation with Best Hospitals for Hernia Surgery: </span>We are associated with best and premium hospitals in New Delhi for hernia surgery,</p>
              <p className='pt-2 ml-5'> having state of the art infrastructure. These facilities are designed to maximize the comfort of patients as well as provide optimal surgical results. </p>
              <p className='pt-2 ml-5'> Apart from performing a surgery, we are committed to deliver the best of post operative care.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ Complete range of procedures: </span>O
              Dr. Kapil Agrawal, a well-known and top hernia specialist in Delhi, offers an array of latest and advanced hernia surgeries to  </p>
              <p className='pt-2 ml-5'>cater needs as per the patient. He thoughtfully reviews all cases to suggest the best strategy, taking into account hernia size, location and patient preference.</p>
              <p className='pt-2'><span className="font-medium mr-1">→ A Dedicated Team of Nutritionists and Endocrinologists:</span>
              We have a team of dieticians and endocrinologists who specialise in providing customized diets. </p>
              <p className='pt-2 ml-5'>Within our advanced hernia program, we have nutrition specialists and endocrinologists as well as physicians who all work together to help get you back your health. </p>
              <p className='pt-2 ml-5'>Our dieticians and nutritionist design custom diets which help in quicker recovery after operations with minimised nutritional losses.</p>

            </div>
          </div>  
        </motion.div>     

         <motion.div>
          <div>
           <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-first text-center">PATIENT VIDEO TESTIMONIALS</h2>
            <div className="relative mx-auto pb-[52.24%]">
            <iframe 
             className="absolute top-0 left-0 w-full h-full"
             src={ " https://www.youtube.com/embed/LTGyPysXqH4?si=s85SQ3h7b2qfp8dl " }
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
             allowfullscreen>  
            </iframe>
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
