'use client'
import React from "react";
import { HosHeading } from "./AnimationClient";
import { motion } from "motion/react";

function Hospitals() {
  const hospitals = [
    {
      id: 1,
      name: "Hospital 1",
      image:"/image1.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 2,
      name: "Hospital 1",
      image: "/image2.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 3,
      name: "Hospital 1",
      image: "/image3.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 4,
      name: "Hospital 1",
      image: "/image4.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 5,
      name: "Hospital 1",
      image:"/image5.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 6,
      name: "Hospital 1",
      image: "/image6.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    }
  ]
  return (
      <section
        id="affiliations"
        className="w-full justify-center items-center flex-col mt-5 md:px-40 px-10"
      >
      <div className="flex flex-col items-center justify-center py-10">
        <HosHeading/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-right w-full">
        {hospitals.map((hospital, index) => (
          <motion.div initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ delay: index * 0.2, duration: 0.6 }} key={hospital.id} className="rounded-xl group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <div className="h-96 w-full ">
              <img
                src={hospital.image}
                alt= {hospital.name}
                className="h-full w-full object-cover group-hover:roate-3 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="text-3xl font-bold text-white pb-4">
                  {hospital.name}
                </h1>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {hospital.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
        </div>

    </section>
  );
  
}


export default Hospitals;
