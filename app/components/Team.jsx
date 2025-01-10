'use client'
import React from "react";
import { motion } from "framer-motion";

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
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16">
      <div className="relative pt-16">
        <div className="text-center mb-10">
          <motion.h1 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold text-first m-4">
            MEET THE TEAM
          </motion.h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            We are a team of qualified psychiatrists and psychologists from
            premier institutions of the country. <br />
            We are highly motivated to provide cutting-edge evidence-based
            management for mental health issues tailored to individual needs.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%", duration: 2000 }}
            className="mx-auto border-blue-200 border-b-4 mt-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-7xl mx-auto p-10 mb-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="md:flex items-center md:gap-6 p-6"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
            >
              <motion.img
                src={member.img}
                loading="lazy"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-blue-700 transform hover:scale-105 transition-transform duration-500"
                alt={member.name}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              />
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-2 text-xs sm:text-sm">
                  {member.experience}
                </p>
                <div className="border-blue-300 border-b-2"></div>
                <p className="text-black mt-2 text-sm">{member.description}</p>
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
