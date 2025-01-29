'use client'

import React from "react";
import { motion } from "motion/react"
import TextAnimate from "@/components/ui/anim-text";

function Choose() {
  return (
    <section id="Choose" className="py-20 w-full">
      <motion.div className='flex flex-col gap-2 items-center pt-20 pb-14'>
        <TextAnimate text="Why Choose Us?" type="calmInUp" className="uppercase text-2xl md:text-4xl text-center font-bold whitespace-normal" />
      </motion.div>

      <div>
      <div className="md:px-36 px-10 relative  md:flex-row flex-col min-h-[60vh] gap-8 grid md:grid-cols-3 grid-cols-1 justify-center overflow-hidden md:py-6">
    <motion.div initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
        className="group relative border-2 border-first cursor-pointer overflow-hidden bg-white px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm rounded-lg sm:px-8">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-first transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-first transition-all duration-300 group-hover:bg-first">
            <img
                  className="size-10"
                  src="https://img.icons8.com/color/48/heart-with-pulse.png"
                  alt="heart-with-pulse"
                />
            </span>
            <div className="pt-5 text-base font-semibold leading-7">
                <p className="text-first text-2xl transition-all text-wrap duration-300 group-hover:text-white">Your health is our priority
                </p>
            </div>
            <div
                className="text-left text-wrap space-y-6 pt-5 leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Our clinic is home to a team of highly qualified doctors, specialists, and healthcare staff with decades of combined experience. We ensure every patient receives expert guidance and treatment tailored to their unique needs.</p>
            </div>
            
        </div>
    </motion.div>
    <motion.div initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{once:true}}
        className="group relative border-2 border-first cursor-pointer overflow-hidden bg-white px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm rounded-lg sm:px-8">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-first transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-first transition-all duration-300 group-hover:bg-first">
            <img
                  className="size-10"
                  src="https://img.icons8.com/fluency/48/nurse-female.png"
                  alt="heart-with-pulse"
                />
            </span>
            <div className="pt-5 text-base font-semibold leading-7">
                <p className="text-first text-2xl transition-all text-wrap duration-300 group-hover:text-white">Experienced Medical Professionals
                </p>
            </div>
            <div
                className="text-left text-wrap space-y-6 pt-5 leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Our clinic is home to a team of highly qualified doctors, specialists, and healthcare staff with decades of combined experience. We ensure every patient receives expert guidance and treatment tailored to their unique needs.</p>
            </div>
            
        </div>
    </motion.div>
    <motion.div initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} viewport={{once:true}}
        className="group relative border-2 border-first cursor-pointer overflow-hidden bg-white px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm rounded-lg sm:px-8">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-first transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-first transition-all duration-300 group-hover:bg-first">
            <img
                  className="size-10"
                  src="https://img.icons8.com/?size=100&id=H0fT5t4BS8rR&format=png&color=000000"
                  alt="heart-with-pulse"
                />
            </span>
            <div className="pt-5 text-base font-semibold leading-7">
                <p className="text-first text-2xl transition-all text-wrap duration-300 group-hover:text-white">Advanced Facilities & Technology
                </p>
            </div>
            <div
                className="text-left text-wrap space-y-6 pt-5 leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.</p>
            </div>
            
        </div>
    </motion.div>
    <motion.div initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.75 }} viewport={{once:true}}
        className="group relative border-2 border-first cursor-pointer overflow-hidden bg-white px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm rounded-lg sm:px-8">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-first transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-first transition-all duration-300 group-hover:bg-first">
            <img
                  className="size-10"
                  src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Doctor-And-Patient-medical-concepts-smashingstocks-flat-smashing-stocks-4.png"
                  alt="heart-with-pulse"
                />
            </span>
            <div className="pt-5 text-base font-semibold leading-7">
                <p className="text-first text-2xl transition-all text-wrap duration-300 group-hover:text-white">Patient-Centered Approach
                </p>
            </div>
            <div
                className="text-left text-wrap space-y-6 pt-5 leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.</p>
            </div>
            
        </div>
    </motion.div>
    <motion.div initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} viewport={{once:true}}
        className="group relative border-2 border-first cursor-pointer overflow-hidden bg-white px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm rounded-lg sm:px-8">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-first transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-first transition-all duration-300 group-hover:bg-first">
            <img
                  className="size-10"
                  src="https://img.icons8.com/?size=100&id=H0fT5t4BS8rR&format=png&color=000000"
                  alt="heart-with-pulse"
                />
            </span>
            <div className="pt-5 text-base font-semibold leading-7">
                <p className="text-first text-2xl transition-all text-wrap duration-300 group-hover:text-white">Advanced Facilities & Technology
                </p>
            </div>
            <div
                className="text-left text-wrap space-y-6 pt-5 leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.</p>
            </div>
            
        </div>
    </motion.div>
    <motion.div initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.75 }} viewport={{once:true}}
        className="group relative border-2 border-first cursor-pointer overflow-hidden bg-white px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm rounded-lg sm:px-8">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-first transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-first transition-all duration-300 group-hover:bg-first">
            <img
                  className="size-10"
                  src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Doctor-And-Patient-medical-concepts-smashingstocks-flat-smashing-stocks-4.png"
                  alt="heart-with-pulse"
                />
            </span>
            <div className="pt-5 text-base font-semibold leading-7">
                <p className="text-first text-2xl transition-all text-wrap duration-300 group-hover:text-white">Patient-Centered Approach
                </p>
            </div>
            <div
                className="text-left text-wrap space-y-6 pt-5 leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.</p>
            </div>
            
        </div>
    </motion.div>
</div>
      </div>
      
    </section>
  );
}

export default Choose;
