import React from 'react'
import { motion } from "motion/react";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import FAQsingle from '@/app/components/FAQsingle';
import { BsPinFill } from "react-icons/bs";


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
  }
];


function page() {
  return ( <>
    <Header/>
    <div>
      <div className='w-screen'>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
          <img
            src="/main.jpg"
            alt="Background"
            className="w-full object-cover "
          />

          <div className="w-3/5 mx-auto relative -mt-16 px-10 py-6 bg-white m-10 shadow-sm shadow-black items-center rounded-md">
            <h1 className="text-3xl font-semibold mb-6 text-second text-center">Best Gallbladder Surgeon in Delhi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  text-first text-lg text-left mx-auto">
              <div className="flex items-start space-x-2 py-3 md:mr-4 border-third border-b">
                <span className="">➔</span>
                <p className='text-left'>30 Minute Painless Procedure</p>
              </div>
              <div className="flex items-start space-x-2 py-3 md:ml-4 border-third border-b">
                <span className="">➔</span>
                <p className='text-left' >Single Port Scarless Surgery</p>
              </div>
              <div className="flex items-start space-x-2 py-3 md:mr-4 border-third border-b">
                <span className="">➔</span>
                <p className='text-left'>Highly Experienced, Internationally Trained Team</p>
              </div>
              <div className="flex items-start space-x-2 py-3 md:ml-4 border-third border-b">
                <span className="">➔</span>
                <p className='text-left'>Affiliated to Best Hospitals in Delhi, NCR</p>
              </div>
              <div className="flex items-start space-x-2 py-3 md:mr-4 ">
                <span className="">➔</span>
                <p className='text-left'>Cashless Insurance Facility Available</p>
              </div>
              <div className="flex items-start space-x-2 py-3 md:ml-4 ">
                <span className="">➔</span>
                <p className='text-left'>Honest Pricing and No Hidden Charges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-16 md:px-24 gap-10">
          <div className='py-8 px-32 mt-16 mb-8 text-center border-t-2 border-b-2 border-third'>
            <h1 className="text-4xl font-bold my-6 text-second">
              Best Laparoscopic Gallbladder Stone Surgeon in Delhi
            </h1>
            <p className="text-xl mb-8 text-first">
              "Dr. Kapil Agrawal is one of the renowned and best gallbladder surgeons in Delhi, India. He is recognized for his skills in executing Laparoscopic Gall Bladder Surgeries as well as Robot-Assisted Gallbladder Stone Surgeries. His vast experience of over 23 years and having performed more than 7,000 gallbladder surgeries speaks volumes about his dedication to providing the best care for his patients. Associated with top hospitals in Delhi, Dr. Kapil ensures excellent outcomes with an empathetic approach and strong commitment to patient care."
            </p>
          </div>
          <div className='flex-col mb-8 px-24'>
            <h2 className="text-3xl font-semibold mb-2 text-first">What is Gallbladder?</h2>
            <p className=" mb-4 ">
              The gallbladder is a tiny pear-shaped organ located just below the liver, situated on the right upper side of the abdomen. The liver produces a yellow-coloured fluid known as bile, which flows into the intestine to aid in digesting food, especially fatty meals.
            </p>
            <br />
        
            <h2 className="text-3xl font-semibold mb-2 text-first">Function of the Gallbladder</h2>
            <div className=" mb-4 ">
              <p className=''><span className="font-medium mt-4 mr-1">Storage of Bile:</span> The liver produces 1.5 litres of bile daily. Most of the bile flows directly into the intestine, but 50 ml is stored in the gallbladder as a reserve. </p>
              <p className='pt-2'><span className="font-medium mt-4 mr-1">Bile Release:</span> When fatty foods enter the small intestine, the gallbladder releases bile for proper digestion.</p>
            </div>
            <br />
            <h2 className="text-3xl font-semibold mb-2 text-first">Why Do Gallbladder Stones Form?</h2>
            <div className=" mb-4">
              <p>Gallbladder stones are solid pieces of cholesterol, calcium salts, or bilirubin. The main risk factors include: </p>
              <p className='pt-2'><span className="font-medium mr-1">Metabolic Disturbances:</span> Changes in cholesterol metabolism (e.g., hyperlipidemia due to obesity or rapid weight changes). </p>
              <p className='pt-2'><span className="font-medium mr-1">Gallbladder Infection:</span> Loss of gallbladder function due to infection can lead to stone formation. </p>
              <p className='pt-2'><span className="font-medium mr-1">Hormonal Disturbances:</span> Multiple pregnancies or obesity can cause hormonal imbalances, reducing gallbladder function and leading to stone formation. </p>
            </div>
            <br />
            <h2 className="text-3xl font-semibold mb-2 text-first">Signs of Gallbladder Stones</h2>
            <div className="mb-4">
              <p className=''>Most patients present with asymptomatic gallstones. Though gallstones are asymptomatic, when natural drainage of bile is frequently blocked, they cause infection in the bladder and often get slipped into major ducts.</p>
              <p className='pt-4'>According to Dr. Kapil Agrawal, one of the best gallbladder surgeon in delhi, gallstones generally do not produce any symptoms. However, small stones in the gallbladder can stuck in the neck of the gallbladder. That causes a blockage of the flow of bile into your small intestine. This is an episode of pain that you probably know as biliary colic.</p>
              <p className='pt-4'>Many patients have asymptomatic gallstones. However, when bile drainage is blocked, it can lead to symptoms such as: </p>
              <p className='pt-2'><span className="font-medium mr-1">Abdominal Pain:</span> Pain in the right upper abdomen, back, or all over the abdomen. </p>
              <p className='pt-2'><span className="font-medium mr-1">Nausea or Vomiting:</span> These occur when stones block the ducts. </p>
              <p className='pt-2'><span className="font-medium mr-1">Bloating:</span> Indigestion and gas accumulation in the intestines. </p>
              <p className='pt-2'><span className="font-medium mr-1">Jaundice:</span> Yellowing of the eyes and urine caused by stones blocking bile flow. </p>
              <p className='pt-2'><span className="font-medium mr-1">High-grade Fever with Chills:</span> Signs of gallbladder infection or blockage in the central bile duct.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col mx-auto px-16 md:px-24 gap-10">
        <div className='py-8 px-32 my-8 text-center border-t-2 border-b-2 border-third'>
          <h1 className="text-4xl font-bold my-6 text-second">
            Best Gallbladder Stone Treatment in Delhi
          </h1>
          <p className="text-xl mb-4 text-first">
            The field of gallbladder stone surgery has gone under a major transformation due to the introduction of newer technologies aimed at quick and painless recovery. Dr Kapil Agrawal, the best gallbladder surgeon in Delhi, has been delivering excellent outcomes due to his expertise in all the latest treatment modalities for gallstone surgery.
          </p>
        </div>
        <div className='flex-col mb-16 px-24'>
          <h2 className="text-3xl font-semibold mb-2 text-first">Laparoscopic Gallbladder Stone Surgery:</h2>
          <div className=" mb-4 ">
            <p className='pt-4'>In the modern era, laparoscopic surgery has been considered and is now recognized as a gold standard procedure for gallstone management. Dr. Kapil Agrawal one of the best laparoscopic surgeon in delhi, has transformed the management of gallstones.</p>
            <p className='pt-4'>The surgery is carried out under general anaesthesia — which means the patient is completely put to sleep before the start of surgery.</p>
            <p className='pt-4'>Three small holes of 0.5 cm each are made at different abdomen sites.</p>
            <p className='pt-4'>Then, the interior of your abdomen is inflated with carbon dioxide gas to make space for surgery.</p>
            <p className='pt-4'>One of the incisions inserts a thin, lighted tube with a camera that sends images to the screen.</p>
            <p className='pt-4'>With the help of the projected images, the dissection of the gallbladder is carried out, and the gallbladder, along with stones, is removed from the body.</p>
          </div>
          <br />
      
          <h2 className="text-3xl font-semibold mb-2 text-first">Single Port Gallbladder Stone Surgery:</h2>
          <div className=" mb-4 ">
            <p className='pt-4'>Single port surgery for gallstones is an advanced version of conventional laparoscopic surgery.</p>
            <p className='pt-4'>Instead of 3-4 tiny incisions, a single incision is created within the umbilicus or belly button to complete the procedure.</p>
            <p className='pt-4'>Though technically challenging, it is associated with the best cosmesis due to a completely invisible scar.</p>
            <p className='pt-4'>The single incision laparoscopic surgery has its indications, and proper patient selection is essential to deliver the best results.</p>
          </div>
          <br />
          <h2 className="text-3xl font-semibold mb-2 text-first">Robot-assisted laparoscopic cholecystectomy:</h2>
          <div className=" mb-4">
            <p className='pt-4'>Robotics can significantly improve overall ergonomics and technical capabilities by providing enhanced dexterity, precision as well as visualization to the surgeon during laparoscopic surgery facilitating comfortable execution of more complex procedures.</p>
            <p className='pt-4'>It can be beneficial in patients with variant anatomy or complex gallbladder pathologies. The results cosmetically are nearly as good as with laparoscopy for gallbladder surgery.</p>
          </div>
        </div>
      </div>


      <div className='flex-col items-center justify-center mx-auto gap-20 my-8'>
        <div className='flex-col px-20 m-10'>
          <h1 className='font-bold text-4xl mx-auto text-center border-third border-t-2  pt-16 p-4 m-4 text-second'>KEY BENEFITS OF <br/> SINGLE PORT LAPAROSCOPIC CHOLECYSTECTOMY</h1>
          <div className='px-12'>
            <p className='pt-4'>In comparison to conventional four-port laparoscopic surgery, the major advantage of single-port surgery is a single small hole or incision, which remarkably decreases pain and accelerates recovery.</p>
            <p className='pt-4'>Those who undergo single-port gallstone surgery are happier because of excellent cosmesis, rapid recovery, and significantly less painful perception.</p>
          </div>
        </div>
        <div className="card-container flex items-center justify-center gap-6 mb-10 px-20">
          <div className="grid md:grid-cols-2 gap-20 md:gap-5">
            <div className="rounded-xl bg-white p-6 shadow-md border-third border-2">
              <div
                className="mx-auto flex h-20 w-20 -translate-y-16 transform items-center justify-center rounded-full shadow-lg bg-first">
                <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
                  <path
                    d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                    fill="white">
                  </path>
                </svg>
              </div>
              <div className="text-center text-lg ">
                <p className="mb-2">Speedy Recovery</p>
                <hr className="border-gray-300 mb-2" />
                <p className="mb-2">Early and Easy Mobility</p>
                <hr className="border-gray-300 mb-2" />
                <p className="mb-2">Discharge within 24 hours</p>
                <hr className="border-gray-300 mb-2" />
                <p className="mb-2">Virtually Scarless Surgery</p>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-md border-third border-2">
              <div
                className="mx-auto flex h-20 w-20 -translate-y-16 transform items-center justify-center rounded-full shadow-lg bg-first">
                <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
                  <path
                    d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                    fill="white">
                  </path>
                </svg>
              </div>
              <div className="text-center text-lg">
                <p className="mb-2">Less tissue trauma and less post-operative pain</p>
                <hr className="border-gray-300 mb-2" />
                <p className="mb-2">Less Dependence on pain reliever tablets</p>
                <hr className="border-gray-300 mb-2" />
                <p className="mb-2">Low risk of infection</p>
                <hr className="border-gray-300 mb-2" />
                <p className="mb-2">Almost no risk of hernia</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col mx-auto px-16 md:px-24 mt-16 gap-6">
        <div className='flex-col mb-16 px-24 '>
          <h2 className="text-4xl font-semibold mb-2 text-first">Course of Recovery Following Gallstone Surgery:</h2>
          <div className="mb-4 ">
            <p className='pt-4'>At Habilite Clinics, our team ensures you recover quickly and painlessly after receiving sophisticated, minimally invasive treatment. A general guideline of what one might anticipate in recovery follows:</p>
            <p className='pt-4'><span className="font-medium mr-1">Hospital Stay:</span>You can go home within 24 hours after the surgery. Most patients are able to stay no more than 24 hours at the hospital.</p>
            <p className='pt-4'><span className="font-medium mr-1">Pain Management:</span>You will have mild pain or discomfort at your incision sites for 24-36 hours.</p>
            <p className='pt-4'>You will be sent home with Oral Pain medications to help manage pain for 3 days.</p>
            <p className='pt-4'><span className="font-medium mr-1">Diet and Activity:</span>After 48 Hours Of Surgery, You Can Start a Regular Diet As Suggested By Our Experienced Nutritionists.</p>
            <p className='pt-4'>You will be advised to take a fat-free diet for two weeks, after which fatty meals will gradually be introduced. Our dedicated nutritionists prepare customized diet after gallbladder surgery for fast recovery.</p>
            <p className='pt-4'>Gradually, you will be encouraged to resume normal activities, including running and light exercises.</p>
            <p className='pt-4'><span className="font-medium mr-1">Incision Care:</span>Keep the incision sites clean and dry. You may shower from the next day of surgery. They are usually closed with dissolvable stitches or surgical tape that will fall off on their own.</p>
            <p className='pt-4'><span className="font-medium mr-1">Follow-Up:</span>You will have to go for a general follow up after 5 days of surgery. We will examine you and ensure that healing is fine.</p>
            <p className='pt-4'><span className="font-medium mr-1">Return to Normal Activities:</span>Most people can resume their jobs and natural activities after five to seven days of surgery.</p>
          </div>
        </div>  
      </div>



      <div className="flex flex-col mx-auto px-16 md:px-24 gap-6">
        <div className='flex-col mx-6 mb-16 pt-4 px-24 border-third border-t-2'>
        <div className="flex justify-center items-end m-4"><BsPinFill className='text-4xl text-second' /><h1 className='font-bold text-4xl text-center border-fourth border-b-2 mt-6  text-second'>FAQ</h1></div>
          <div className="mb-4 lg:px-8">
          {faqList.map((faq, index) => (
            <FAQsingle key={index} question={faq.question} answer={faq.answer} />
          ))}
          </div>
        </div>  
      </div>


    </div>
    <Footer/>
  </>
  )
}

export default page
