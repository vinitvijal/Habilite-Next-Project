"use client";
import Image from 'next/image';
import { useState } from 'react';
import about1 from "@/public/about1.jpeg"
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useScroll({
    target:'',
    offset: ["0 1","1.33 1"]

  }); 
  const isInView = useInView(ref, { once: false });


  return (
    <div className="min-h-screen">

      {/*Hero Section */}
      <section className="relative py-12 md:py-24 bg-blue-50 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Advanced Minimally Invasive Care at <span className="text-blue-600">Habilite Clinic</span>
            </h1>
             <p className="text-lg text-second">
              Premier center for laparoscopic and laser surgeries in Delhi NCR
             </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={about1}
              alt="Habilite Clinics Facility"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <motion.div
           ref={ref}
           initial={{ x: -100, opacity: 0 }}
           animate={isInView ? { x: -100, opacity: 0 }:{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-first mb-7">
              About Habilite Clinic
            </h2>
          </motion.div>
            
            <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
              <p>
              Habilite Clinics is a super-specialty clinic based in south Delhi, offering bespoke and highly advanced laparoscopic (key-hole) and laser surgeries for various abdominal and anorectal problems. The facility aims to minimize the hospital's stressful experience and maximize comfort, care, and expertise under one roof. It is a space where you listened to, thoroughly evaluated, and offered a customized treatment.
              </p>

              <p>
              The team is led by highly renowned and one of the top bariatric and laparoscopic surgeons, Dr. Kapil Agrawal, who brings forth his skill and expertise of 20 years to every case he undertakes. Our dedicated and highly experienced team offers top-notch services to patients coming from across the world. Our team is determined to give our patients a seamless and hassle-free surgical experience.
              </p>

              <p>
              At Habilite Clinics, we provide preoperative evaluation and counseling, support groups, medical follow-up, and nutritional testing. Our team offers a complete program for the surgical candidate and the people looking for a medically supervised weight-loss support option.
              </p>

              <p>
              Our team, led by Dr. Kapil Agrawal, performs surgeries at Indraprastha Apollo hospital, New Delhi and Apollo Spectra Hospitals, Kailash Colony, and Karol Bagh. Our team focuses on delivering the patients with the latest and best minimally invasive surgical techniques. We perform single port surgeries as a more desirable option than the conventional four-port surgery.
              </p>

              <p>
              Beyond surgery, we deliver a full spectrum of care before, during, and after the actual procedure. You can be fully assured knowing that a dedicated team of trained professionals is on hand to support you throughout your post-operative recovery.
              </p>

            </div>
          </div>

          {/*types of surgeries */}
          <p className="text-center font-semibold text-black text-2xl mb-7">Our Team Offers Following Services: -</p>
          <div className="grid md:grid-cols-3 gap-8 mb-16 cursor-pointer">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-xl font-bold text-first mb-5">Laparoscopic Bariatric Surgery:</h3>
              <ul className="space-y-2 text-gray-600">
                {['Sleeve Gastrectomy', 'Gastric Bypass', 'Mini Gastric Bypass', 
                  'Duodenal Jejunal Bypass', 'Revision Surgery', 'Intra Gastric Balloon']
                  .map(item => <li key={item}> ✓ {item}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-xl font-bold text-first mb-6">Medical/ Non-Surgical Weight Loss Program
            Advanced Laparoscopic Surgery For:</h3>
              <ul className="space-y-2 text-gray-600">
                {['Gall Stones', 'Hernia Repair', 'GERD', 'Achalasia Cardia', 
                  'Pancreatic Pseudocyst', 'Rectal Prolapse']
                .map(item => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
            <h3 className="text-xl font-bold text-first mb-5">Advanced Laser Surgeries:</h3>
              <ul className="space-y-2 text-gray-600">
                {['Hemorrhoids', 'Anal Fissure', 'Anal Fistula', 'Pilonidal Sinus']
                  .map(item => <li key={item}>✓ {item}</li>)}
              </ul>
           </div>
          </div>         
        </div>
      </section>

      {/*last*/}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">

          <motion.div
           ref={ref}
           initial={{ x: -100, opacity: 0 }}
           animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-first mb-4">
              Complete Surgical Journey
            </h2>
          </motion.div>
         
            <p className="text-second max-w-2xl mx-auto font-semibold">
              From initial consultation to full recovery - seamless care at every step
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {['Preoperative Evaluation', 'Customized Planning', 'Minimally Invasive Procedure', 'Post-Op Support']
              .map((step, index) => (
                <div key={step} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-second text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-gray-800">{step}</h4>
                </div>
              ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}