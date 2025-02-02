'use client'
import React, { useEffect, useRef, useState } from 'react';
import FAQsingle from '@/app/(users)/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import TextAnimate from "@/components/ui/anim-text";


const features = [
  "Blend of Best Technology & Infrastructure.",
  "Highly Experienced, Internationally Trained Team",
  "Reduced Port Surgeries for Best Cosmesis",
  "Complete Range of Bariatric Procedures",
  "Fixed price with no hidden cost",
  "EMI Options Available",
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
      question:"What is the duration of stay in hospital?",
      answer:"The type of procedure and condition of the patient typically determines the standard length of stay in the hospital. However, most patients are sent home by 24-48 hours after surgery."
    },
    {
      question:"Can bariatric surgery cure my diabetes?",
      answer:"Upto 95% of patients who undergo bariatric surgery see improvement or even resolution in their type 2 diabetes. How long you have had diabetes, the type of bariatric procedure used, and how accomplished your surgeon is are significant variables that can influence the results."
    },
    {
      question:"What is the effect of bariatric surgery on pregnancy?",
      answer:"Bariatric Surgery has significant positive effects on the pregnancy. Bariatric surgery by resolving PCOS and hormonal imbalances increases the chances of conception. It also prevents obesity-related complications like gestational diabetes during pregnancy. Bariatric surgery makes pregnancy a pleasant experience by avoiding unnecessary complications."
    },
    {
      question:"	Can bariatric surgery cure my PCOD?",
      answer:"PCOD (Polycystic Ovary Syndrome) is cured in almost every patient after bariatric surgery. If you are severely obese and suffering from PCOS, you must seriously look into the option of bariatric surgery by the best bariatric surgeon."
    },
    {
      question:"Which is better- Liposuction or Bariatric surgery?",
      answer:"In short, liposuction is not a weight loss tool. It is a surgical technique that will remove fat beneath the skin of troubled areas, especially the abdomen or belly area. What liposuction will never do is make you lose weight, as it is a body contouring surgery that produces minimal weight loss. The only thing that makes a lasting difference in body weight is bariatric surgery."
    },
    {
      question:"What are the chances of weight regain following bariatric surgery?",
      answer:"If you are adherent to post-surgery lifestyle changes, eat well (even after the recommended diet stages), and exercise reasonably regularly, the chances of weight regain are almost negligible. Regular follow-up with healthcare providers, keeping yourself motivated, and following the recommendations are ways to prevent weight restoration."
    },
    {
      question:"Do I need to stop alcohol after bariatric surgery?",
      answer:"You must be very careful with alcohol consumption following bariatric surgery. Once you are a few months post bariatric surgery, then you can consume alcohol, but in restricted quantities. Excessive consumption can lead to nutritional deficiencies and weight gain. You must consult your surgeon, who is the best person to guide you regarding the intake of alcohol."
    },
    {
      question:"How does bariatric surgery affect my sexual life?",
      answer:"Bariatric surgery can dramatically have a positive impact on your sexual life. Reduced obesity levels and hormonal changes can improve libido or sexual desire. Bariatric surgery improves sexual performance by reducing weight and increasing confidence levels."
    },
    {
      question:"Will I feel fragile and lethargic after weight loss surgery?",
      answer:"Contrary to the popular belief of reduced stamina levels after bariatric surgery, bariatric surgery can significantly increase your staminal levels. Reduction in weight increases your stamina and energy levels dramatically, and you can easily carry out routine activities."
    },
    {
      question:"What is Dr Kapil Agrawal's experience?",
      answer:"Dr. Kapil Agrawal has 22 years of experience performing weight loss surgeries and is known for providing personalized care to his patients. Every patient has reported positive experiences under his care, praising his expertise, professionalism, and compassionate approach to patient care."
    },
    {
      question:"Will my scars be visible after weight loss surgery?",
      answer:"Weight loss surgery is performed either laparoscopically or with robotic technology. As a result, it is almost scarless, with very tiny 3-4 incisions. We also offer single-port bariatric surgeries in selected individuals, which don’t produce any visible scars."
    },
  ];

  const surgery = [
    {
      id: 1,
      title: "Sleeve Gastrectomy",
      excerpt: "Sleeve gastrectomy is relatively a new technique with satisfying restriction and appetite suppression.",
      button: <button>Read More</button>,
      imageUrl: "https://www.gastroenterologyadvisor.com/wp-content/uploads/sites/23/2020/09/sleeve-gastrectomy_G_667599651_2000x1300-1-544x306.jpg",
    },
    {
      id: 2,
      title: "Gastric Bypass",
      excerpt: "One of the most successful and still considered as the gold standard for bariatric or weight loss surgery.",
      button: <button>Read More</button>,
      imageUrl: "https://silverlinehospital.in/storage/treatment-details/gastric-bypass-surgery.webp",
    },
    {
      id: 3,
      title: "Mini Gastric Bypass",
      excerpt: "It is a similar type of surgery as gastric bypass having both restrictive and malabsorptive component.",
      button: <button>Read More</button>,
      imageUrl: "https://chaitanyastemcell.com/wp-content/uploads/2023/08/mgb-1.png",
    },
    {
      id: 4,
      title: "Duodenal Jejunal Bypass",
      excerpt: "Laparoscopic duodenal jejunal bypass or single anastomosis gastric bypass is an upcoming bariatric.",
      button: <button>Read More</button>,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_qR3yAhoaVJGVumyHbfYYclLc9JD9AvgrbsnnS6lp7uxMI7VXXwlyTztxiPizSPLlKk&usqp=CAU",
    },
    {
      id: 5,
      title: "Banded Bariatric Surgery",
      excerpt: "The Gabp ring device is an annular restrictive ring placed around the newly surgically created.",
      button: <button>Read More</button>,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sh26TnI-5VDHf2xbcddf5DD_WKqSncwdQYjzEzkckoYCSTfxrNOt5IjidPUp4iywm_k&usqp=CAU",
    },
    {
      id: 6,
      title: "Single Port Bariatric Surgery",
      excerpt: "Single incision surgery” or “single site surgery” or “single port surgery” is a very exciting new modality.",
      button: <button>Read More</button>,
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpOLMZ3-s7FRDf1lFGmCZIs19CHGVnohVe1KaXOHTKUUJGyDzQ",
    },
    {
      id: 7,
      title: "Endoscopic Intra Gastric Balloon",
      excerpt: "A non-surgical procedure which helps achieve better portion control by making you feel full after eating less food.",
      button: <button>Read More</button>,
      imageUrl: "https://www.obesitytreatments.co.uk/endoscopic-obesity-treatment/_jcr_content/root/container/container/container_copy/image.coreimg.png/1724839753362/intragastric-balloons-procedure-image-700x394px.png",
    },
    {
      id: 8,
      title: "Gastric Plication Surgery",
      excerpt: "Gastric Sleeve Plication surgery is a relatively new procedure performed by limited number of bariatric surgeons.",
      button: <button>Read More</button>,
      imageUrl: "https://indorelaparoscopycenter.com/wp-content/uploads/2022/08/Gastric_Plication_Surgery.jpg",
    },

    {
      id: 9,
      title: "Revision Bariatric Surgery",
      excerpt: "Revision bariatric surgery refers to weight loss surgery that is done when patients do not obtain outstanding.",
      button: <button>Read More</button>,
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSO7vdoRn7CFMQY7HvmPuXADWg9l7yn5jXbfFchW8L7eYHZAYDg",
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
        "Less Pain tissue trauma and less post-operative pain",
        "Less Dependence on pain relievers",
        "Low risk of infection",
        "Almost no risk of hernia",
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
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
              className="w-full object-cover opacity-200"/>
        
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-4 py-2 rounded-md flex-col items-center justify-center text-center bg-transparent hover:bg-black hover:bg-opacity-20">
              Best Bariatric Surgeon <br />  in Delhi, India
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

        <div className="flex flex-col mx-auto pt-16 px-8 md:px-16 lg:px-24 gap-10">
          
          <div className='flex-col mb-8 '>
            <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.1,once:true }} 
            transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first">BEST LAPAROSCOPIC BARIATRIC SURGEON IN DELHI, INDIA</h2>
              <div className=" mb-4">
                <p className='pt-2'> Dr. Kapil Agarwal is an internationally recognized, one of the experienced and best bariatric surgeon in Delhi India. He is well known experience of 20+ years and has done more than 7000 successful advanced Bariatric surgeries. </p>
                <p className='pt-2'> With affiliations with some of the best hospitals for bariatric surgery in Delhi, he is committed to providing his patients with state-of-the-art facilities and the highest quality standards. </p>
                <p className='pt-2'>  Dr Agrawal's excellent surgical skills, ability to perform a complete range of bariatric procedures and caring demeanour make him one of the best choices for bariatric surgery in Delhi, India.</p>
              </div>
              <br />
        
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-first"> What is bariatric surgery?</h2>
              <div className=" mb-4 ">
                <p className='pt-2'>Bariatric surgery is an umbrella term that includes several types of weight-loss surgeries that help you lose weight significantly and help in getting rid of obesity-related health problems. </p>
                <p className='pt-2'> Surgery of this type is usually resorted to when the more straightforward methods, such as diet and exercise, become ineffective or don't produce the desired results. </p>
                <p className='pt-2'> Bariatric procedures primarily function by limiting food intake or modifying the digestive tract to prevent fat absorption.</p>
              </div>
              <div>
                <br />
                <h2 className="text-3xl font-semibold mb-2 text-first">Is bariatric surgery right for everyone?</h2>
                <div className=" mb-4">
                  <p className='pt-2'>Several factors determine whether you qualify for bariatric surgery. These include :-</p>
                  <p className='pt-2'>When your BMI is 37.5 or higher, it means you have Grade III obesity levels. </p>
                  <p className='pt-2'>Immediately going to sleep after dinner. </p>
                  <p className='pt-2'>When your BMI is 32.5 or higher, you have obesity-related health issues such as diabetes, high blood pressure, or respiratory problems such as sleep apnea, asthma, or joint pain.</p>
                  <p className='pt-2'>There is a documented history of unsuccessful weight loss through medically supervised programs.</p>
                  <p className='pt-2'>You are not suffering from any mental disorders that hamper your decision-making ability or any eating disorder that fails to produce the desired weight loss.</p>
                  <p className='pt-2'>When you are unable to perform routine activities due to obesity.</p>
                  <div className='flex items-left'>
                  <a href=""> <button className='p-4 my-8 bg-first text-white roundedlg'>BMI Calculator ►</button></a>
                  </div>
                </div>
              </div>
            </motion.div>
            <br />
          </div>
        </div>

        <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10 mb-16">
          <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.1,once:true }} 
          transition={{ duration: 0.6 }}
          className='flex-col mb-8 '
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">Health Benefits of Bariatric Surgery</h2>
            <div className=" mb-4 ">
              <p className='pt-2'> Only bariatric surgery offers long-term significant weight loss. Bariatric surgery is bound to give excellent results in terms of weight loss and a healthier life. You can expect to lose 60-70% of your excess weight, and according to Dr Agrawal, the best bariatric surgeon in Delhi, India, better results in terms of weight loss can be obtained with the help of a better lifestyle.</p>
              <p className='pt-2'>Furthermore, the healing potential of bariatric surgery is not limited to weight loss and improvements in metabolic health. There are numerous benefits of bariatric surgery apart from weight loss. </p>
              <p className='pt-2'> Bariatric surgery increases energy levels, boosts self-esteem and lets patients engage in activities that they had previously outright avoided- thus improving the overall quality of life.</p>
              <p className='pt-2'>Obesity-related health issues can be resolved with bariatric surgery, which includes diabetes, hypertension, and respiratory disorders such as sleep apnea and snoring. In addition, migraines, PCOD, joint pain, and spine issues are also cured after bariatric procedures.</p>
            </div>
            <br />
        
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">How does Bariatric Surgery function?</h2>
            <div className=" mb-4 ">
              <p className='pt-3'> There are several types of weight loss surgeries, and each surgery causes weight loss in its way. Some of the standard mechanisms through which bariatric procedures induce weight loss include :-</p>
              <p className='pt-2'> A bariatric procedure aims to reduce food intake at a single time by reducing the size of the stomach. The stomach is usually reduced to one-third of its standard size, and this is achieved with the help of endo staplers. The feeling of fullness after eating a small meal leads to fewer calories being consumed, which leads to weight loss.</p>
              <p className='pt-2'> In some bariatric surgeries, the intestines or bowel are rerouted. As a result, there is minimal fat absorption into the body, leading to weight loss. </p>
              <p className='pt-2'> Bariatric surgery can affect the release of hormones that regulate appetite, sugar metabolism, and carbohydrate metabolism. </p>
              <p className='pt-2'> For example, a sleeve gastrectomy reduces the production of hunger-stimulating hormone ghrelin. As a result, appetite is suppressed. Specific bariatric procedures alter the output of various gut hormones, which helps to maintain better sugar levels, resulting in a cure for diabetes.</p>
            </div>
            <br />
            </motion.div>
            <motion.div  initial={{ opacity: 0, x: 100 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ amount: 0.1,once:true }} 
           transition={{ duration: 0.6 }}
           className='flex-col mb-16 '>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first">How We Perform Bariatric Surgeries?</h2>
            <div className=" mb-4 ">
              <p className='pt-2'>The two latest and most advanced techniques our team uses to perform bariatric surgery are laparoscopic surgery and robotic surgery. Our team, led by Dr Kapil Agrawal, the best bariatric surgeon in Delhi, India, carried out a detailed evaluation of the patients.</p>
              <p className='pt-2'>This helps us to assess which technique is going to deliver the best results and be cost-effective at the same time.</p>
            </div>
            <br />

            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Laparoscopic Bariatric Surgery</h3>
            <div className=" mb-4 ">
              <p className='pt-2'>Dr. Kapil Agrawal is one of the best Laparscopic surgeon in Delhi and has been perfoming laparoscopic bariatric surgeries with excellent outcomes. Bariatric laparoscopic surgery is a minimally invasive technique that has changed the paradigm of bariatric procedures. </p>
              <p className='pt-2'>In this procedure, the surgeon makes several minor cuts instead of one large cut, as in traditional open surgeries. This not only minimizes scarring but also helps in speedy recovery.</p>
              <p className='pt-2'>The surgeon operates aided by a camera known as a laparoscope, which steers their instruments into the abdomen.</p>
              <p className='pt-2'>This laparoscope provides clear, detailed motion visual representation. The main advantages of this procedure include less pain, faster recovery, discharge within 48 hours of surgery, and early return to work.</p>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-first">Robot-Assisted Bariatric Surgery</h3>
            <div className=" mb-4 ">
              <p className='pt-2'> Robotic surgery is increasingly becoming the vogue of both surgeons and their obese patients in the quest for sustainable solutions to managing obesity. </p>
              <p className='pt-2'> During Robotic Surgery, the surgeon operates using a surgical console that translates their hand movements into more minor, more precise actions within the patient's body with the help of robotic arms. Moreover, the 3D visualization of the internal organs allows him to perform surgery with ease and higher accuracy.</p>
              <p className='pt-2'>The advantages of robotic surgery are almost similar to those of laparoscopic surgery in terms of incisions, scarring, and recovery. However, precision and more flexibility are the main benefits offered by robotic surgery when compared to laparoscopic surgery.</p>
              <p className='pt-2'> We prefer robotic surgeries for patients who are super obese and have major previous abdominal surgeries, as robotic surgery allows us to navigate scar tissue more easily. </p>
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
               THE MAIN ADVANTAGES OF LAPAROSCOPIC SURGERY
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
          <motion.div 
         initial={{ opacity: -2 }} 
         whileInView={{ opacity: 1.5 }} 
         transition={{ duration: 2 }} 
         viewport={{ amount: 0.05,once:true }} >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 mt-3 text-first">
            Common Bariatric Surgeries Done by Our Team
            </h2>
            <div className="mb-4 text-lg">
              <p className='pt-2'>Our team encompasses some of the best bariatric surgeons in India. We offer a complete spectrum of weight-loss surgeries.</p>
              <p className='pt-2'>Each surgery has got its indication, benefits, advantages, and some disadvantages. Our detailed and thorough evaluation selects the best bariatric procedure based on dietary habits, lifestyle, associated medical illness, and your weight loss goals.</p>
              <p className='pt-2'>The procedures offered by our team include :-</p>
 
           <div className="relative px-10 pt-6 pb-12 lg:px-8">
            <div className="absolute inset-0">
             <div className="h-1/3 bg-white sm:h-2/3"></div>
           </div>
           <div className="relative mx-auto max-w-6xl">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
              {surgery.map((page) => (
             <motion.div 
              key={page.id}
              variants={cardVariants}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg" >
             <div className="flex-shrink-0">
               <img className="h-48 w-full" 
               src={page.imageUrl}  />
             </div>
             <div className="flex flex-1 flex-col justify-between bg-white p-6">
               <div className="flex-1">
                 <a href="#" className="mt-2 block">
                   <p className="text-xl font-semibold text-gray-900 text-wrap">{page.title}</p>
                   <p className="mt-3 text-base text-gray-500 text-wrap">{page.excerpt}</p>
                 </a>
               </div>
               <div className="mt-6 flex items-center">
                 <div className="w-full flex justify-between items-center">
                   <div className="">
                      <div className="flex space-x-1 text-sm text-white bg-first p-2 rounded-lg">
                       <div button={page.button}>{page.button}</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
             </motion.div>
             ))}
           </motion.div>
         </div>
       </div>             
            
            </div>
          </motion.div>
        </div>

          <motion.div 
            variants={imageVariants}
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.3,once:true }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col mx-auto px-8 md:px-16 lg:px-24 gap-10 mb-16">
            <div className='mt-4'>
             <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-first text-left">
             WHY CHOOSE US - Dr. Kapil Agrawal: Best Bariatric Surgeon in Delhi, India</h2>
              <div className="mb-4">
                <p className='pt-2'>Dr. Kapil Agrawal, the best bariatric surgeon in Delhi, India, focuses on both surgical measures and the patient's overall health to ensure patients lose weight not only effectively but also safely. He routinely performs approximately 700 bariatric or weight loss surgeries per year with excellent results.</p>

                <p className='pt-2'>Dr. Kapil Agrawal has expertise in performing all bariatric or weight loss surgeries using the latest and most advanced surgical techniques. This helps him to decide on the most suitable weight loss procedure based on the patient's target weight loss, associated medical conditions, and lifestyle.</p>
                <p className='pt-2 '>Dr.Kapil Agrawal is the best bariatric specialist surgeon in Delhi and is affiliated with some of the best hospitals for bariatric surgery in Delhi, India. He is known to offer state-of-the-art facilities and a complete after-care program with support groups, counselling experts, and a team of specialized bariatric nutritionists to his patients. The cost of bariatric surgery is extremely competitive at our empanelled hospitals in Delhi.</p>
                <p className='pt-2 '> At Habilite clinic, we have partnered with various companies that provide zero- -per cent interest-free EMI plans so as to distribute your financial burden over a few months. We also offer a cashless facility to patients who are medically insured with complete, honest, and transparent billing.</p>

                <p className='pt-2'>We provide free post-operative consultation and post-surgery counselling sessions to keep the weight loss journey on track and provide support to our patients in the best possible way we can. </p>
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
