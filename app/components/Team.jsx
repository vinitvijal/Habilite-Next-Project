'use client'
import React from "react";
import { motion , useInView  } from "framer-motion";


function Team() {
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
    // Additional unique entries...
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: (index) => ({
      opacity: 1,
      x: 0, // Move into view
      transition: {
        delay: index * 0.3, // Stagger cards based on their index
        duration: 0.8,
        type: "spring", // Smooth spring effect
      },
    }),
  };

  return (
    <div className="w-screen p-16">
    <div className="relative pt-20">
      <div className="relative flex flex-col items-center mt-5 md:mt-10">
        <h1 className="md:text-2xl lg:text-4xl font-semibold text-first">
          MEET THE TEAM
        </h1>
      </div>
      <br />
      <p className="text-gray-500 flex items-center justify-center text-center mx-auto text-md">
        <b>
          We are a team of qualified psychiatrists and psychologists from
          premier institutions of the country. <br />
          We are highly motivated to provide cutting-edge evidence-based
          management for mental health issues tailored to individual needs.
        </b>
      </p>
    </div>

    <div className="container flex items-center justify-center mx-auto border-gray-200 border-t-2 mt-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-14 max-w-7xl mx-auto p-10 m-10">
        {teamMembers.map((member, index) => (
          <motion.div key={index} className="flex items-center gap-6 p-4"  
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
            <img
              src={member.img}
              loading="lazy" 
              className="w-40 h-40 rounded-full border-4 border-blue-700 transform hover:scale-105 transition-transform duration-500"
              alt={member.name}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-400 border-blue-300 border-b-2 text-xs">
                {member.experience}
              </p>
              <p className="text-black mt-2 text-sm">{member.description}</p>
              <div className="flex gap-2 mt-4 text-blue-400 font-bold">
                <div className="inline-flex text-sm transform hover:scale-105 transition-transform duration-300">
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