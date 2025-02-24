'use client';
import React from "react";
import { motion } from "framer-motion";
import TextAnimate from "@/components/ui/anim-text";
import BgImage from '@/public/images/BgImage.png';

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
      excerpt: "Bariatric surgery is a transformative and life-altering procedure meant for people suffering from obesity and obesity-related health problems",
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Staggering effect for children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: { opacity: 1, y: 0 }, // State when in view
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('/images/BgImage.png')" }}>
      <motion.div className="flex flex-col gap-2 items-center pt-20">
  <div className="bg-white px-6 py-2 text-center h-24 w-auto">
    <TextAnimate text="RECENT BLOGS" type="calmInUp" className="text-2xl md:text-4xl text-center font-bold whitespace-normal ml-6" />
    <TextAnimate text="Insights From Our Medical Experts" type="calmInUp" className="md:text-xl text-lg font-medium text-first text-center pt-3" />
  </div>
</motion.div>


      <div className="relative px-10 pt-6 pb-12 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-transparent sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3"
          >
            {blogs.map((blog) => (
              <motion.div 
                key={blog.id}
                variants={cardVariants}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={blog.imageUrl} alt={blog.title} />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900 text-wrap">{blog.title}</p>
                      <p className="mt-3 text-base text-gray-500 text-wrap">{blog.excerpt}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt={blog.author} />
                      </a>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">{blog.author}</a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={blog.date}>{blog.date}</time>
                        </div>
                      </div>
                      <button className="text-sm font-medium text-indigo-600 hover:underline">Read more</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center pt-5">
        <div className="bg-white p-1 w-auto mb-6">
        <a href="" className=" text-first border border-first py-2 px-6 gap-2 rounded inline-flex items-center">
          <span>
              More Blogs
          </span>
        
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              viewBox="0 0 24 24" className="w-6 h-6 text-first">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
