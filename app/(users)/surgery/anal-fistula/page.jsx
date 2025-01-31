'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";

const features = [
  "Complete range of latest, painless and most advanced procedures",
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


function page() {
  const faqList=[
    {
      question:"Is it possible to treat anal fistulas with medication alone?",
      answer:"Medicines alone are usually not effective in treating anal fistula. While medications, such as antibiotics and anti-inflammatory drugs, can help manage symptoms and reduce infection, they do not address the underlying issue of the fistula. Surgical interventions are usually required to resolve the condition fully."
    },
    {
      question:"Is laser treatment suitable for all patients with anal fistulas ?",
      answer:"The effectiveness of laser treatment depends on various factors, including the type, complexity, and location of the fistula, as well as the patient's overall health and medical history. Laser procedures are usually not recommended for highly complex fistulas, fistulas with extensive branching or ramifications and associated abscess or pus formation."
    },
    {
      question:"Will I need dressings following laser treatment?",
      answer:"Dressing is usually not required after the laser procedures. However, you might be given specific instructions regarding post-operative care and maintaining adequate hygiene."
    },
    {
      question:"What is the recovery process like after undergoing laser treatment?",
      answer:"The recovery is relatively rapid after undergoing laser surgery for fistula in ano. Since there is no wound, you can quickly return to normal activities within three to four days. You can start taking baths from the next surgery day and begin driving after a couple of days."
    },
    {
      question:"What is Fistula Plug and Fibrin Glue treatment for anal fistula?",
      answer:"The fistula plug is a biocompatible device made from materials like porcine intestinal submucosa or synthetic polymers. It is designed to fill the fistula tract and promote healing. The plug is inserted into the track through a minor surgical procedure. However, the recurrence rates are high with this procedure. Fibrin Glue is a biological adhesive composed of fibrinogen and thrombin. Fibrin glue is injected into the tract, sealing and promoting tissue healing. Although painless, the results are not very promising due to higher recurrence rates."
    },
    {
      question:"What is the likelihood of an fistula recurring after laser treatment?",
      answer:"The likelihood of an anal fistula recurring after laser treatment is relatively low but not zero. Studies suggest that recurrence rates are usually around 2-5%. The proper patient selection can further reduce these recurrences, using high-quality laser machines and fibres and choosing a well-experienced surgeon with a proven track record of successful outcomes."
    },
    {
      question:"Is Ksharsutra treatment painful, and when is it typically recommended?",
      answer:"Ksharsutra treatment is quite painful, especially during the initial stages, when the thread is first inserted, and subsequent changes. However, this treatment is often favoured in traditional Indian medicine (Ayurveda) and may be recommended for patients having complex fistulas. This treatment prevents sphincter injury and has a lesser chance of recurrence."
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
    title: "UNDERSTANDING FISTULA IN ANO",
    description: `"
An anal fistula is an abnormal tunnel that forms as a result of an infected anal gland located inside the anus. The tunnel usually develops from inside the anus to the skin surrounding the anus. Due to an infected anal gland, there is the formation of abscess or pus which slowly bursts or drains into the external skin surrounding the anus."`,
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
                  Best Laser Anal Fistula Treatment<br /> in Delhi
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
              viewport={{ amount: 0.2, once:true }}
              className="sm:w-2/3 w-full mx-auto relative sm:-mt-12 lg:-mt-24 md:px-6 py-4 bg-white sm:shadow-md items-center md:rounded-lg"
            >
              <FeatureList features={features} />
            </motion.div>
          </div>
          <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-8">
            <div className='py-8 mt-16 border-t-2 border-b-2 border-first'>
              <motion.div 
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.3, once:true }} 
                transition={{ duration: 0.6 }}
                className=''>
                <h1 className="text-3xl md:text-4xl  font-bold my-6 text-second">About Dr Kapil Agrawal</h1>
                <div className="mb-4">
                  <p className='pt-2'><span className="font-medium mr-1">Extensive Experience:</span> Dr. Kapil Agrawal has 22 years of experience performing advanced procedures for anal fistulas. </p>
                  <p className='pt-2'><span className="font-medium mr-1">High Volume of Successful Surgeries:</span>  He has performed over 2,000 fistula surgeries with excellent outcomes.</p>
                  <p className='pt-2'><span className="font-medium mr-1">Comprehensive Care Team:</span> He has a dietician team who guides the surgical journey. </p>
                  <p className='pt-2'><span className="font-medium mr-1">Expertise in Latest Procedures: </span> Dr Agrawal is skilled in all the latest procedures for anal fistula treatment.</p>
                  <p className='pt-2'><span className="font-medium mr-1">Customized Treatment Plans:</span>He offers personalized treatment plans tailored to each patient’s medical history and the complexity of their fistula.</p>
                </div>
              </motion.div>
            </div>

            <div className="pb-8 mb-8 text-center border-b-2 border-first">
              {surgeonInfo.map((info, index) => (
                <div key={index} className="mb-8">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2, once:true }}
                    className="text-3xl md:text-4xl  font-bold my-6 text-second"
                  >
                    {info.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2, once:true }}
                    className="text-lg sm:text-xl md:text-2xl text-left mb-8 text-first px-4 md:px-8 lg:px-16 mx-auto text">
                    {info.description}
                  </motion.p>
                </div>
              ))}
            </div>
                    
            <div className='flex-col mb-8'>
              <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2, once:true }} 
              transition={{ duration: 0.6}}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Symptoms of Fistula in Ano</h2>
                  <div className="mb-4">
                    <p className='pt-3'>Some of the most common symptoms associated with anal fistula include :-</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Intermittent discharge of pus or fluid: </span> This is the most common symptom of anal fistula, and there is </p>
                    <p className='pt-2 ml-5'>pus discharge from an opening in the skin surrounding the anal area. </p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Pain and Discomfort:</span>  Persistent pain and discomfort around the anus, especially during bowel movements. </p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Swelling and Redness:</span>  Swelling and redness around the affected area. </p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Recurrent Abscesses:</span> Frequent formation of abscesses in the perianal area. </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Types and Grade of Fistula</h2>
                  <div className="mb-4">
                    <p className='pt-3'>Fistulas can be classified based on their complexity and relationship to the sphincter muscles. <br /> Based on their relationship to sphincter muscles, it can be:</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Intersphincteric Fistula:</span> Most common type and accounts for 70% of anal fistulas. </p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Transsphincteric Fistula:</span>  The second most common type and involves both the sphincter muscles.</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Suprasphincteric Fistula: </span>  Less common and challenging to treat, this type originates above the sphincter muscles and descends to the perianal skin. </p>
                    <p className='pt-2'><span className="font-medium mr-1">→Extrasphincteric Fistula: </span> Rare and often associated with complex diseases like Crohn’s disease.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3, once:true }} 
              transition={{ duration: 0.6 }}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Based on Complexity</h2>
                  <div className="mb-4">
                    <p className='pt-2'><span className="font-medium mr-1">→ Simple Fistulas:  </span>  Simple fistulas are relatively straightforward in their anatomy and have minimal involvement of the sphincter muscle. They are typically </p>
                    <p className='pt-2 ml-5'>low-lying and involve minimal branching. Simple fistulas are more accessible to treat and have a lower risk of complications and recurrence.</p>
                    <p className='pt-2 ml-5'> Common types of simple fistulas include Intersphincteric Fistula and Low type Transsphincteric Fistula.</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Complex Fistulas:</span>  Complex fistulas are more intricate and involve a more significant portion of the sphincter muscles. They may have multiple tracts and </p>
                    <p className='pt-2 ml-5'>openings, making them more challenging to treat. Complex fistulas are more likely to recur and have a higher risk of complications.</p>
                    <p className='pt-2 ml-5'>Examples of complex fistulas include High Transsphincteric Fistula, Suprasphincteric and Extrasphincteric Fistulas. </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Diagnosing Fistula in Ano</h2>
                  <div className="mb-4">
                    <p className='pt-2'> Diagnosing a fistula in ano typically involves a combination of medical history, physical examination, and imaging studies. Imaging studies help plan the appropriate treatment strategy. </p>
                    <p className='pt-2'>Imaging studies such as MRI (Magnetic Resonance Imaging) or Endoanal Ultrasound are often used to map the fistula tract and determine its complexity. </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3, once:true }} 
              transition={{ duration: 0.6 }}
              className='py-16'>
                <h1 className="text-3xl md:text-4xl  font-semibold mb-2 text-second my-4">BEST TREATMENT FOR FISTULA IN ANO</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  Laser Surgery For Anal Fistula
                </h2>
                <div className="mb-4">
                  <p className='pt-2'> Laser Treatment for Anal Fistula: Laser treatment for fistula in ano is a minimally invasive procedure that uses laser energy to ablate the fistula tract. This treatment has gained tremendous popularity due to its precision, reduced postoperative pain, and faster recovery compared to traditional surgical methods. </p>
                  <p className='pt-2'>The procedure has its indications, and not every patient is a candidate for laser surgery. Extremely complex fistulas, excessive branching of fistulas, and fistulas associated with abscess formation are some of the contraindications of this procedure. The procedure's success depends upon the surgeon’s experience and expertise, the quality of laser machines and patient selection. </p>
                </div>
              </motion.div>

              <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
                <div className="text-center mb-20">
                  <motion.h1
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2,once:true }}
                  className="text-3xl md:text-4xl font-semibold text-first m-4">
                    ADVANTAGES OF <br/> LASER TREATMENT FOR FISTULA
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
                  <div className="p-12 border-third border-2  rounded-lg shadow-md">
                    <div className="mb-4 text-lg">
                      <p className='pt-2 text-center font-medium mr-1'>Some of the common advantages of Laser Treatment for Fistula include :-</p>
                      <p className='pt-2'><span className="font-medium mr-1">→ Minimally Invasive: </span>Laser treatment is less invasive than traditional surgery, resulting in more minor wounds and less tissue damage.</p>
                      <p className='pt-2'><span className="font-medium mr-1">→ Reduced Postoperative Pain: </span>Patients typically experience less pain after laser treatment compared to conventional surgical methods.</p>
                      <p className='pt-2'><span className="font-medium mr-1">→ Faster Recovery:</span>The recovery time is generally shorter, allowing patients to return to normal activities sooner.</p>
                      <p className='pt-2'><span className="font-medium mr-1">→ Zero Risk of Incontinence:</span>The precision of the laser reduces the risk of damaging the sphincter muscles, which can help preserve continence.</p>
                      <p className='pt-2'><span className="font-medium mr-1">→ Less Scarring:</span>The procedure results in minimal scarring compared to more invasive surgical techniques.</p>
                      <p className='pt-2'><span className="font-medium mr-1">→ Outpatient Procedure:</span> Laser treatment can often be performed as an outpatient procedure, reducing hospital stay times.</p>
                    </div>
                  </div> 
                </motion.div>
              </div>

              <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.2, once:true }} 
              transition={{ duration: 0.6}}
              className='pb-16'>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2  text-first">
                    VAAFT Procedure (Video-Assisted Anal Fistula Treatment)
                  </h2>
                  <div className="mb-4">
                    <p className='pt-2'> <b> VAAFT </b>is a minimally invasive technique that uses a thin scope to visualize the entire fistula track through the camera. This allows for complete cleaning of the tract, identifying the internal opening, and closing the internal opening with a unique stapler. </p>
                    <p className='pt-2'><b> VAAFT </b> is particularly useful for complex fistulas and offers the advantage of preserving the sphincter muscles. <b> VAAFT </b> was introduced a few years back but became disreputed due to its high recurrence. However, this procedure has delivered excellent results with the combination of laser therapy.</p>
                    <p className='pt-2'>After closing the internal opening, laser energy is used to ablate the entire track. This laser-assisted <b> VAAFT </b> technique has given excellent results.</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                    LIFT (Ligation of Inter sphincteric Fistula Tract)
                  </h2>
                  <div className="mb-4">
                    <p className='pt-2'> LIFT is a surgical technique that is used in the management of complex trans-sphincteric fistula. It significantly reduces the chances of faecal incontinence by preserving sphincter muscles.</p>
                    <p className='pt-2'>The procedure involves accessing the fistula tract between the internal and external sphincter muscles. The tract is ligated and divided, allowing it to heal from the inside out. To maximize the best outcomes, the distal tract is ablated with the help of laser energy.</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Seton Wiring</h2>
                  <div className="mb-4">
                    <p className='pt-3'>Seton wiring involves placing a seton (a piece of surgical thread or wire) through the fistula tract to allow continuous drainage and promote healing. <br /> Seton wiring is particularly useful for high or complex fistulas. <br />There are two types of setons :-</p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Cutting setons:</span>Also known as Ksharsutra, the setons are coated with unique materials which gradually cut through the fistula tract. </p>
                    <p className='pt-2'><span className="font-medium mr-1">→ Non-cutting setons: </span>  These are used to keep the tract open for drainage and are simple cotton or silk sutures.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ amount: 0.3, once:true }} 
              transition={{ duration: 0.6 }}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-3 text-first">
                  Why Choose Us
                </h2>
                <div className="mb-4 text-lg">
                  <p className='pt-2'> Availability of a complete range of procedures conducted by a team of highly experienced and internationally trained surgeons.</p>
                  <p className='pt-2'>Empanelment with some of the best hospitals for fistula surgery, with state-of-the-art facilities, ensures excellent outcomes.</p>
                  <p className='pt-2'>Zero per cent Interest EMI options.</p>
                  <p className='pt-2'>Complete cashless facilities with all insurance companies.</p>
                  <p className='pt-2'>Advanced, USFDA-approved 1470 nm laser machines of the highest quality.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-6">
          <motion.div initial={{ opacity: -2 }} 
          whileInView={{ opacity: 1.5 }} 
          transition={{ duration: 1 }} 
          viewport={{ amount: 0.2,once:true }} 
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
