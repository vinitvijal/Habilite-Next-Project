"use client";

import React from "react";
import { motion } from "framer-motion";
import TextAnimate from "@/components/ui/anim-text";

function Contact() {
  const data = [
    {
      title: "Call Us",
      points: ["Phone: +91 9999456455 ,9910024564"],
      icon: (
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/windows/32/phone.png"
          alt="phone"
        />
      ),
    },
    {
      title: "Address",
      points: [
        "M-11, Lajpat Nagar road, Lajpat Nagar II, New Delhi, Delhi 110024",
        "C-7/186, SDA, Hauz Khas, New Delhi, Delhi 110016",
      ],
      icon: (
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/ios/50/marker--v1.png"
          alt="marker--v1"
        />
      ),
    },
    {
      title: "Email",
      points: ["contact@habiliteclinics.com"],
      icon: (
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/material-outlined/24/mail.png"
          alt="mail"
        />
      ),
    },
  ];

  const card = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.3, duration: 0.8, type: "spring" },
    }),
  };

  return (
    <>
      <motion.div className="flex flex-col gap-2 items-center md:pt-20 md:pb-14 pt-4 pb-6">
              <TextAnimate
                text="CONTACT US"
                type="calmInUp"
                className="uppercase text-first text-2xl md:text-4xl text-center font-bold whitespace-normal"
              />
            </motion.div>

      <div className="flex flex-col items-center justify-center mx-auto gap-10 my-8 px-4 sm:px-8 md:px-16 lg:px-24">
        <motion.h1
          variants={card}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className="uppercase p-10 text-2xl md:text-4xl text-center font-bold whitespace-normal text-black border-b-4 border-blue-500 "
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-10xl mx-auto pb-10">
          {data.map((info, index) => (
            <motion.div
              key={index}
              className="text-center p-6 transform hover:-translate-y-10 transition-transform duration-300 bg-white shadow-md cursor-pointer rounded-xl border-3 hover:border-first  "
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto font-bold shadow-sm bg-first">
                {info.icon}
              </div>
              <h2 className="uppercase text-1xl md:text-2xl text-center font-bold  text-black p-4">
                {info.title}
              </h2>
              <div className="mt-2 font-bold">
                {info.points.map((point, i) => (
                  <p
                    key={i}
                    className="py-2 border-t border-third first:border-none "
                  >
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2, once: false }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <h1 className="text-4xl font-bold mb-4 text-first">
              BOOK ONLINE APPOINTMENT
            </h1>
            <form>
              <div className="mb-5">
                <label for="name" className="mb-3 block text-base font-medium ">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label for="phone" className="mb-3 block text-base font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label for="email" className="mb-3 block text-base font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label for="date" class="mb-3 block text-base font-medium">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label for="time" class="mb-3 block text-base font-medium">
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold sm:text-xl">
                  Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter area"
                        className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        className="w-full rounded-md  bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter state"
                        className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="post-code"
                        id="post-code"
                        placeholder="Post Code"
                        className="w-full rounded-md border-first bg-white py-3 px-6 text-base font-medium  focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="hover:shadow-form w-full rounded-md bg-first py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2, once: false }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center my-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5236474360713!2d77.2478773!3d28.568899799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20bd545063b%3A0xbe2384d68cb7235!2sHabilite%20Clinics%20-%20Piles%2C%20Circumcision%2C%20Gallstones%2C%20Hernia%20and%20Weight%20Loss%20Hospital%20in%20Delhi!5e1!3m2!1sen!2sin!4v1738328947140!5m2!1sen!2sin"
            className="w-full max-w-4xl h-96 rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
