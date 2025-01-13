import React from 'react'
import Navbar from 'react'


function page() {
  return ( <>
  {/* <Navbar/> */}
    <div>
      <div className='w-screen'>
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
      <img
        src="/main.jpg"
        alt="Background"
        className="w-full object-cover "
      />

      {/* Text Overlay */}
      <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 shadow-md shadow-black text-center items-center rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Best Gallbladder Surgeon in Delhi</h1>
        <div className='flex gap-10 mx-auto px-64 text-center'>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-lg font-bold mr-2">➔</span>
            30 Minute Painless Procedure
          </li>
          <li className="flex items-start">
            <span className="text-lg font-bold mr-2">➔</span>
            Single Port Scarless Surgery
          </li>
          <li className="flex items-start">
            <span className="text-lg font-bold mr-2">➔</span>
            Highly Experienced, Internationally Trained Team
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-lg font-bold mr-2">➔</span>
            Affiliated to Best Hospitals in Delhi, NCR
          </li>
          <li className="flex items-start">
            <span className="text-lg font-bold mr-2">➔</span>
            Cashless Insurance Facility Available
          </li>
          <li className="flex items-start">
            <span className="text-lg font-bold mr-2">➔</span>
            Honest Pricing and No Hidden Charges
          </li>
        </ul>
        </div>
      </div>
    </div>
    {/* cards */}
    <div className='flex-col items-center justify-center mx-auto gap-20 m-16'>
      <div className='flex-col px-20 text-center p-10 m-10'>
      <h1 className='font-bold text-3xl mx-auto border-blue-200 border-b-4 mt-6 p-4 m-4'>KEY BENEFITS OF <br /> SINGLE PORT LAPAROSCOPIC CHOLECYSTECTOMY</h1>
      <p>In comparison to conventional four-port laparoscopic surgery, the major advantage of single-port surgery is a single small hole or incision, which remarkably decreases pain and accelerates recovery. <br />

Those who undergo single-port gallstone surgery are happier because of excellent cosmesis, rapid recovery, and significantly less painful perception.</p>
      </div>
    <div className="card-container flex items-center justify-center gap-6 mb-10 px-20">
    <div className="grid md:grid-cols-2 gap-20 md:gap-5">
      {/* card1 */}
    <div className="rounded-xl bg-white p-8 shadow-xl border-black border-2">
      <div
        className="mx-auto flex h-20 w-20 -translate-y-16 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
          <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
          <path
            d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
            fill="white"></path>
        </svg>
      </div>
      <div className="text-center">
  <p className="mb-2">Speedy Recovery</p>
  <hr className="border-gray-300 mb-2" />
  <p className="mb-2">Early and Easy Mobility</p>
  <hr className="border-gray-300 mb-2" />
  <p className="mb-2">Discharge within 24 hours</p>
  <hr className="border-gray-300 mb-2" />
  <p className="mb-2">Virtually Scarless Surgery</p>
</div>
    </div>
    {/* card2 */}
    <div className="rounded-xl bg-white p-8 text-center shadow-xl border-black border-2">
      <div
        className="mx-auto flex h-20 w-20 -translate-y-14 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
        <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
          <path
            d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
            fill="white"></path>
        </svg>
      </div>
      <div className="text-center">
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
{/* content */}
<div className="flex flex-col mx-auto px-20 md:px-24 lg:px-40 text-center text-gray-800 gap-10">
<div className='p-16 m-12 border-t-2 border-b-2 border-gay-200'>
  <h1 className="text-4xl font-bold my-6 text-blue-400">
    Best Laparoscopic Gallbladder Stone Surgeon in Delhi
  </h1>
  <p className="text-2xl mb-8 text-blue-400">
    "Dr. Kapil Agrawal is one of the renowned and best gallbladder surgeons in Delhi, India. He is recognized for his skills in executing Laparoscopic Gall Bladder Surgeries as well as Robot-Assisted Gallbladder Stone Surgeries. His vast experience of over 23 years and having performed more than 7,000 gallbladder surgeries speaks volumes about his dedication to providing the best care for his patients. Associated with top hospitals in Delhi, Dr. Kapil ensures excellent outcomes with an empathetic approach and strong commitment to patient care.""
  </p>
  </div>
 <div className='flex-col m-10 p-10'>
  <h2 className="text-2xl font-semibold my-4">What is Gallbladder?</h2>
  <p className="text-lg mb-6">
    The gallbladder is a tiny pear-shaped organ located just below the liver, situated on the right upper side of the abdomen. The liver produces a yellow-coloured fluid known as bile, which flows into the intestine to aid in digesting food, especially fatty meals.
  </p>
<br />
 
  <h2 className="text-2xl font-semibold my-4">Function of the Gallbladder</h2>
  <p className="text-lg mb-6">
    <span className="font-medium">Storage of Bile:</span> The liver produces 1.5 litres of bile daily. Most of the bile flows directly into the intestine, but 50 ml is stored in the gallbladder as a reserve. <br />
    <span className="font-medium">Bile Release:</span> When fatty foods enter the small intestine, the gallbladder releases bile for proper digestion.
  </p>
<br />
  <h2 className="text-2xl font-semibold my-4">Why Do Gallbladder Stones Form?</h2>
  <p className="text-lg mb-6">
    Gallbladder stones are solid pieces of cholesterol, calcium salts, or bilirubin. The main risk factors include: <br />
    <span className="font-medium">Metabolic Disturbances:</span> Changes in cholesterol metabolism (e.g., hyperlipidemia due to obesity or rapid weight changes). <br />
    <span className="font-medium">Gallbladder Infection:</span> Loss of gallbladder function due to infection can lead to stone formation. <br />
    <span className="font-medium">Hormonal Disturbances:</span> Multiple pregnancies or obesity can cause hormonal imbalances, reducing gallbladder function and leading to stone formation.
  </p>
<br />
  <h2 className="text-2xl font-semibold my-4">Signs of Gallbladder Stones</h2>
  <p className="text-lg mb-6">
    Many patients have asymptomatic gallstones. However, when bile drainage is blocked, it can lead to symptoms such as: <br />
    <span className="font-medium">Abdominal Pain:</span> Pain in the right upper abdomen, back, or all over the abdomen. <br />
    <span className="font-medium">Nausea or Vomiting:</span> These occur when stones block the ducts. <br />
    <span className="font-medium">Bloating:</span> Indigestion and gas accumulation in the intestines. <br />
    <span className="font-medium">Jaundice:</span> Yellowing of the eyes and urine caused by stones blocking bile flow. <br />
    <span className="font-medium">High-grade Fever with Chills:</span> Signs of gallbladder infection or blockage in the central bile duct.
  </p>
  </div>
</div>



    </div>
      
    </div>
    </>
  )
}

export default page
