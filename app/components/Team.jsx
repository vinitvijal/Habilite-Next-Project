"use client";
import React, { useState } from "react";
import ContactInfoButton from "./reveal";
import Slidelines from "./reveal"; 

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
      name: "Rahul Sharma",
      experience: "8+ years Experience",
      description:
        "Consultant Psychiatrist, Specializing in Cognitive Behavioral Therapy",
      location: "Delhi, India",
      contactDetails: "Email: rahul@example.com",
      img: "/doc2.jpg",
    },
    {
      name: "Rahul Sharma",
      experience: "8+ years Experience",
      description:
        "Consultant Psychiatrist, Specializing in Cognitive Behavioral Therapy",
      location: "Delhi, India",
      contactDetails: "Email: rahul@example.com",
      img: "/doc2.jpg",
    },
    {
      name: "Rahul Sharma",
      experience: "8+ years Experience",
      description:
        "Consultant Psychiatrist, Specializing in Cognitive Behavioral Therapy",
      location: "Delhi, India",
      contactDetails: "Email: rahul@example.com",
      img: "/doc2.jpg",
    },
    // Additional unique entries...
  ];
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-16 max-w-7xl mx-auto p-10 m-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center gap-6 p-6">
              <img
                src={member.img}
                className="w-36 h-36 rounded-full border-4 border-blue-700 transform hover:scale-105 transition-transform duration-500"
                alt={member.name}
              />
              <div>
                <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 border-blue-300 border-b-2 text-xs">
                  {member.experience}
                </p>
                <p className="text-black mt-2 text-sm">{member.description}</p>
                <div className="flex gap-2 mt-4 text-blue-400">
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
                {/* <ContactInfoButton
                  i={index}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  contactDetails={member.contactDetails}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
