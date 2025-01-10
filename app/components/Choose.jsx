'use client'

import React from "react";
import { motion } from "motion/react"
import { TextAnimate } from "@/components/ui/text-animate";

function Choose() {
  return (
    <section id="Choose" className="py-20 w-full">
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        {/* <h2 className="text-first text-center font-bold uppercase tracking-wide text-3xl m-8 p-8">
          Why Choose Us?
        </h2> */}
        <TextAnimate animation="blurIn" as="h2" duration={1} delay={1.2} className="text-first text-center font-bold uppercase tracking-wide text-3xl m-8 p-8">
          Why Choose Us?
        </TextAnimate>

      </div>

      {/* {#card-1} */}

      <div className=" flex items-center justify-center mx-auto m-10 mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <motion.div
        initial={{ 
          scale: 0.8,
          opacity: 0,
        }}
        whileInView={{
          transition: { duration: 0.5, opacity: 1, ease: "easeIn" },
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="shadow-sm p-6 text-center group w-64 h-96 bg-white border:gray-700 border-4 hover:border-white relative m-4 hover:ring hover:ring-first   transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 group-hover:bg-white group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first form duration-300 p-4">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/heart-with-pulse.png"
                  alt="heart-with-pulse"
                />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
              <h3 className="text-xl font-bold mb-2">
                Your health is our priority.
              </h3>
              <p className="text-third-100">
                Our clinic is home to a team of highly qualified doctors,
                specialists, and healthcare staff with decades of combined
                experience. We ensure every patient receives expert guidance and
                treatment tailored to their unique needs.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}

          <motion.div
          initial={{ 
            scale: 0.8,
            opacity: 0,
          }}
          whileInView={{
            transition: { duration: 0.5,  delay: 0.5 },
            scale: 1,
            opacity: 1,
            animation: {
              y: [0, -10, 0],
              transition: { duration: 0.5 },
            }
          }}
          viewport={{ once: true }}
          className=" shadow-sm p-6 text-center group w-64 h-96 bg-white border:gray-700 border-4 hover:border-white relative m-4 hover:ring hover:ring-first   transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 group-hover:bg-white group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first  transform duration-300 p-4">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/nurse-female.png"
                  alt="nurse-female"
                />
              </span>
            </div>

            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
              <h3 className="text-xl font-bold mb-2">
                Experienced Medical Professionals
              </h3>
              <p className="text-third-100">
                Our clinic is home to a team of highly qualified doctors,
                specialists, and healthcare staff with decades of combined
                experience. We ensure every patient receives expert guidance and
                treatment tailored to their unique needs.
              </p>
            </div>
          </motion.div>

          {/* {#card-3} */}

          <motion.div
      
          initial={{ 
            scale: 0.8,
            opacity: 0,
          }}
          whileInView={{
            transition: { duration: 0.5,  delay: 1.0 },
            scale: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          
          className=" shadow-sm p-6 text-center group w-64 h-96 bg-white border:gray-700 border-4 hover:border-white  relative m-4 hover:ring hover:ring-first   transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 group-hover:bg-white group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first form duration-300 p-4">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/?size=100&id=H0fT5t4BS8rR&format=png&color=000000"
                  alt="external-medical-equipment-healthcare-and-medicine-filled-outline-perfect-kalash"
                />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
              <h3 className="text-xl font-bold mb-2">
                Advanced Facilities & Technology
              </h3>
              <p className="text-third-100">
                We pride ourselves on utilizing state-of-the-art medical
                equipment and modern facilities to provide accurate diagnoses
                and effective treatments. From routine checkups to specialized
                procedures, we deliver top-notch care.
              </p>
            </div>
          </motion.div>

          {/* {#card-4} */}

          <motion.div
          initial={{ 
            scale: 0.8,
            opacity: 0,
          }}
          whileInView={{
            transition: { duration: 0.5, delay: 1.5 },
            scale: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className=" shadow-sm p-6 text-center group w-64 h-96 bg-white border:gray-700 border-4 hover:border-white  relative m-4 hover:ring hover:ring-first   transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 group-hover:bg-white group-hover:shadow-md transform duration-300">
            <span className="text-3xl md:text-5xl text-white  group-hover:text-first form duration-300 p-4">
            <img width="66" height="66" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Doctor-And-Patient-medical-concepts-smashingstocks-flat-smashing-stocks-4.png" alt="external-Doctor-And-Patient-medical-concepts-smashingstocks-flat-smashing-stocks-4"/>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
              <h3 className="text-xl font-bold mb-2">
                Patient-Centered Approach.
              </h3>
              <p className="text-third-100">
                {" "}
                We pride ourselves on utilizing state-of-the-art medical
                equipment and modern facilities to provide accurate diagnoses
                and effective treatments. From routine checkups to specialized
                procedures, we deliver top-notch care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
