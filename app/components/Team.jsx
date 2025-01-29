'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextAnimate from "@/components/ui/anim-text";

function Team() {
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has played

  const teamMembers = [
    {
      name: "Monika Desai",
      experience: "10+ years Experience",
      description:
        "DNB Founder & Head, Habilite Clinic Consultant Psychiatrist and Deaddiction Specialist",
      location: "Delhi, India",
      contactDetails: "Email: monika@example.com",
      img: "/doc1.jpg",
    },
    {
      name: "Ashu Mundotia",
      experience: "8+ years Experience",
      description:
        "Consultant Psychiatrist, Specializing in Cognitive Behavioral Therapy",
      location: "Delhi, India",
      contactDetails: "Email: rahul@example.com",
      img: "/doc2.jpg",
    },
    {
      name: "Sudhir Kataria",
      experience: "8+ years Experience",
      description:
        "Consultant Psychiatrist, Specializing in Cognitive Behavioral Therapy",
      location: "Delhi, India",
      contactDetails: "Email: rahul@example.com",
      img: "/doc3.jpg",
    },
    {
      name: "Kavita Kaushik",
      experience: "8+ years Experience",
      description:
        "Consultant Psychiatrist, Specializing in Cognitive Behavioral Therapy",
      location: "Delhi, India",
      contactDetails: "Email: rahul@example.com",
      img: "/doc4.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        type: "spring",
      },
    }),
  };
  
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // Effect to handle animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const teamSection = document.getElementById("team-section");
      const rect = teamSection.getBoundingClientRect();
      
      // Check if the section is in view and if animation hasn't been triggered yet
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
        setHasAnimated(true); // Set animated state to true
        window.removeEventListener("scroll", handleScroll); // Remove event listener after triggering
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className="w-screen px-4 sm:px-8 lg:px-16 md:pb-10">
      <div id="team-section" className="relative md:pt-4 pt-16">
        <motion.div className='flex flex-col gap-2 items-center justify-center pt-20 pb-14'>
          <TextAnimate text="MEET THE TEAM" type="calmInUp" className="text-2xl md:text-4xl text-center font-bold whitespace-normal w-xl" />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="mb-6 md:text-lg text-normal text-first text-wrap md:px-[20vw] px-6 text-center font-medium"
          >
            We are a team of qualified psychiatrists and psychologists from premier institutions of the country.
            We are highly motivated to provide cutting-edge evidence-based management for mental health issues tailored to individual needs.
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-16 gap-6 max-w-7xl mx-auto md:px-10 px-2 mb-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="md:flex items-center md:gap-6 p-6"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? 'visible' : 'hidden'} // Control animation based on state
            >
              <motion.img
                src={member.img}
                loading="lazy"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-blue-700 transform hover:scale-105 transition-transform duration-500"
                alt={member.name}
                variants={imageVariants}
                initial="hidden"
                animate={hasAnimated ? 'visible' : 'hidden'} // Control animation based on state
              />
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-2 text-xs sm:text-sm">
                  {member.experience}
                </p>
                <div className="border-blue-300 border-b-2 md:w-[22vw]"></div>
                <p className="text-black mt-2 text-sm text-wrap md:w-[18vw]">{member.description}</p>
                <div className="flex gap-2 mt-4 text-blue-400 font-bold">
                  <div className="inline-flex text-xs sm:text-sm transform hover:scale-105 transition-transform duration-300">
                    <svg
                      className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    {member.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
