'use client'

import React from "react";
import { motion } from "motion/react";
import TextAnimate from "@/components/ui/anim-text";
import { cn } from "@/lib/utils";

const firstReasons = [
    {
        title: "Your health is our priority",
        description: "Our clinic is home to a team of highly qualified doctors, specialists, and healthcare staff with decades of combined experience. We ensure every patient receives expert guidance and treatment tailored to their unique needs.",
        icon: "https://img.icons8.com/color/48/heart-with-pulse.png",
        transitionDuration: 1,
    },
    {
        title: "Experienced Medical Professionals",
        description: "Our clinic is home to a team of highly qualified doctors, specialists, and healthcare staff with decades of combined experience. We ensure every patient receives expert guidance and treatment tailored to their unique needs.",
        icon: "https://img.icons8.com/fluency/48/nurse-female.png",
        transitionDuration: 1.25,
    },
    {
        title: "Advanced Facilities & Technology",
        description: "We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.",
        icon: "https://img.icons8.com/?size=100&id=H0fT5t4BS8rR&format=png&color=000000",
        transitionDuration: 1.5,
    },
];

const reasons = [

  {
    title: "Patient-Centered Approach",
    description: "We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.",
    icon: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Doctor-And-Patient-medical-concepts-smashingstocks-flat-smashing-stocks-4.png",
    transitionDuration: 1.75,
},
{
    title: "Advanced Facilities & Technology",
    description: "We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.",
    icon: "https://img.icons8.com/?size=100&id=H0fT5t4BS8rR&format=png&color=000000",
    transitionDuration: 1.5,
},
{
    title: "Patient-Centered Approach",
    description: "We pride ourselves on utilizing state-of-the-art medical equipment and modern facilities to provide accurate diagnoses and effective treatments. From routine checkups to specialized procedures, we deliver top-notch care.",
    icon: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Doctor-And-Patient-medical-concepts-smashingstocks-flat-smashing-stocks-4.png",
    transitionDuration: 1.75,
},

];

function Choose() {
    return (
        <section id="Choose" className="py-20 w-full">
          <div className="bg-[#2C62A2] opacity-100">
            <motion.div className='flex flex-col gap-2 items-center pt-20 pb-14'>
                <TextAnimate text="Why Choose Us?" type="calmInUp" className="uppercase text-2xl md:text-4xl text-center text-white font-bold whitespace-normal" />
            </motion.div>

            <div>
                <div className="md:px-36 px-10 relative md:flex-row flex-col min-h-[40vh] gap-8 grid md:grid-cols-3 grid-cols-1 justify-center overflow-hidden md:py-6">
                    {firstReasons.map((reason, index) => (
                        <MotionCard key={index} {...reason} />
                    ))}
                </div>
            </div>
            </div>

            <div>
                <div className="md:px-36 px-10 relative md:flex-row flex-col min-h-[40vh] gap-8 grid md:grid-cols-3 grid-cols-1 justify-center overflow-hidden md:py-6">
                    {reasons.map((reason, index) => (
                        <MotionCard key={index} {...reason} />
                    ))}
                </div>
            </div>

        </section>
          

        
        
    );
}

const MotionCard = ({ title, description, icon, transitionDuration, className }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: transitionDuration * 0.2 }}
        className={cn(
          "group relative overflow-hidden rounded-lg bg-white backdrop-blur-sm p-8",
          "border border-[#CCD0D8]/20 shadow-sm transition-all duration-300",
          "hover:shadow hover:border-[#84A4FC]/30",
          "dark:bg-[#1D2A73]/10 dark:border-[#1D2A73]/20 dark:hover:border-[#84A4FC]/20",
          className
        )}
      >
        <div className="relative z-10 flex flex-col items-center gap-4">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: transitionDuration * 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="rounded-2xl bg-[#CCD0D8]/5 p-4 backdrop-blur-sm 
                           dark:bg-[#1D2A73]/5 transition-colors duration-300
                           group-hover:bg-[#1463F3]/10">
              <img
                src={icon}
                alt={title}
                className="h-8 w-8 object-contain transition-transform duration-300 
                           group-hover:scale-110"
              />
            </div>
          </motion.div>
  
          <div className="space-y-2 text-center">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: transitionDuration * 0.2 }}
              className="whitespace-normal text-xl font-semibold text-[#1D2A73] dark:text-[#84A4FC]"
            >
              {title}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: transitionDuration * 0.5 }}
              className="whitespace-normal text-sm leading-relaxed text-[#1D2A73]/70 dark:text-[#CCD0D8]/80"
            >
              {description}
            </motion.p>
          </div>
        </div>
  
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <div className="absolute inset-0 scale-[2.5] blur-[50px] bg-gradient-to-br from-[#1463F3]/5 via-[#84A4FC]/5 to-[#1463F3]/10 
                         dark:from-[#1463F3]/5 dark:via-[#84A4FC]/5 dark:to-[#1463F3]/10 opacity-0 transition-opacity duration-500
                         group-hover:opacity-100" />
        </div>
      </motion.div>
    );
};

export default Choose;