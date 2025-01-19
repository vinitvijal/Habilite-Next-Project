'use client';
import React from "react";
import { motion } from "framer-motion";
import calendar from "@/public/calendar.svg";
import drkapil from "@/public/drkapil.png";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Which is the Best Bariatric Surgery",
      excerpt: "Weight Loss Surgery is a life-changing procedure that can help someone who has been struggling with obesity for years",
      date: "September 30, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-1.webp",
    },
    {
      id: 2,
      title: "Bariatric Surgery Cost in Delhi, India",
      excerpt: "Bariatric surgery is a transformative and life altering procedure meant for people suffering from obesity and obesity related health problems",
      date: "October 5, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-2.webp",
    },
    {
      id: 3,
      title: "SILS-Single Incision Laparoscopic Surgery",
      excerpt: "Single-incision laparoscopic surgery is one of the most advanced forms of laparoscopic surgery",
      date: "October 8, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-4.webp",
    },
  ];



  return (
    <div className="mx-auto sm:p-20">
      <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <motion.h2
          className="text-4xl font-bold text-first pt-6 text-center hover:text-first uppercase tracking-wide p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          RECENT BLOGS
        </motion.h2>
      </div>

      <motion.h1
        className="text-xl text-second mb-20 pb-2 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Insights From Our Medical Experts
      </motion.h1>

      {/* Cards container */}
      <div className="w-auto flex justify-center">
        <motion.div
          className="grid grid-cols-1 max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-12"
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="relative flex sm:w-full flex-col max-w-[350px] items-center shadow-lg rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-200 m-6 mb-0 cursor-pointer"
              initial={{ opacity: 0, scale:0.9, y:50}}
              whileInView={{scale:1, opacity:1, y:0, transition:{ duration:0.8,ease:"easeInOut"}}}
              whileHover={{scale:1.05, transition:{delay:0,duration:0.25,ease:"linear",restSpeed:2}}}
            >
              {/* Card content */}
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full rounded-t-lg"
              />
              <div className="p-2 px-4 max-w-6xl">
                <div className="flex justify-start gap-2 px-1 py-2">
                  <Image
                    src={calendar}
                    className="z-0 h-4 w-4"
                    alt="none"
                  ></Image>
                  <div className="text-black text-sm">{blog.date}</div>
                </div>

                <h2 className="mt-2 p-1 text-lg font-bold text-black">
                  {blog.title}
                </h2>

                <p className="text-sm text-second p-1">{blog.excerpt}</p>

                <div className="flex justify-center items-center">
                  <button className="mt-6 px-3 py-2 rounded-md bg-first text-white font-xs font-semibold hover:bg-second hover-scale-105 ">
                    Read More
                  </button>
                </div>
              </div>

              {/* Card footer */}
              <div className="w-full flex items-center justify-start text-sm text-black font-semibold px-5 py-3 mt-2 mb-1 gap-2 relative bottom-0">
                <div className="w-8 h-8 ml-0 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src={drkapil}
                    alt="Author"
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <span className="ml-0 font-semibold text-md">
                  {blog.author}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="w-full flex justify-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          href="#"
          className="px-6 py-4 bg-first rounded-lg hover:scale-105 duration-300 hover:duration-500 text-white hover:bg-second"
        >
          More Blogs
        </Link>
      </motion.div>
    </div>
  );
}

export default Blog;

