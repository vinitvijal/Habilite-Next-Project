import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import calendar from "@/public/calendar.svg";
import drkapil from "@/public/drkapil.png";
import alt from "@/public/alt.png"

function Blog() {
  const featured = [ 
    {
      id: 1,
      title: "SILS-Single Incision Laparoscopic Surgery",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum deleniti sed amet itaque distinctio possimus animi, vitae nihil cupiditate at quas voluptates cum, consequuntur odio repellendus soluta quasi dolor. Ullam laudantium totam quam animi nisi ipsam, tempore ad reprehenderit tenetur sint!",
      date: "8 May, 2024",
      author: "Dr. kapil Agrawal",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Which is the Best Bariatric Surgery",
      excerpt: "Weight Loss Surgery is a life-changing procedure that can help someone",
      date: "March 14, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-1.webp",
    },
    {
      id: 2,
      title: "Bariatric Surgery Cost in Delhi, India",
      excerpt: "Bariatric surgery is a transformative and life altering procedure meant for",
      date: "October 12, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-2.webp",
    },
    {
      id: 3,
      title: "SILS-Single Incision Laparoscopic Surgery",
      excerpt: "Single-incision laparoscopic surgery is one",
      date: "October 8, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-4.webp",
    },
  ];

  const popularBlogs = [
    {
      id: 1,
      title: "How to Maintain Weight Loss After Bariatric Surgery",
      excerpt: "Post-surgery care is as important as the procedure itself.",
      date: "August 15, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-3.webp",
    },
    {
      id: 2,
      title: "Diet Tips Post the Bariatric Surgery and Effects.",
      excerpt: "Learn how to maintain a healthy diet after your surgery.Post-surgery care is as important",
      date: "July 20, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-4.webp",
    },
  ];

  return (
    <> 
      {/* Featured blog */}
     
      <div className="max-w-7xl mx-auto m-12">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12">
            {featured.map((blog) => (
              <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-5 transition-transform duration-500 mt-4 ">
                <div className="flex flex-row justify-center items-center relative">
                  <div className="sec-1 relative object-cover w-2/5" >
                    <Image
                      src={alt}
                      alt="Blog Image"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 curved-image-2" />  
                  </div>

                  <div className="sec-2 w-3/5 px-10 mt-10">
                  <div className="bg-first absolute top-4 right-6 w-20 text-white text-sm font-semibold px-2 py-2 rounded">
                      FEATURED
                  </div>
                  <h2 className="mt-4 mb-6 text-lg font-bold text-black">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-black mt-2">{blog.content}</p>
                  <button className="mt-4 px-2 py-1 rounded-md bg-first text-white font-xs font-semibold hover:bg-second hover-scale-105 ">
                    Read More
                  </button>
                  
                  <div className="w-full flex items-center justify-start text-sm text-black font-semibold px-5 py-3 mt-2 mb-1 gap-2 relative bottom-0">
                    <div className="w-8 h-8 ml-0 mt-10 rounded-full bg-gray-300 overflow-hidden bottom-0">
                      <Image
                        src={drkapil} 
                        alt="Author"
                        width={60}
                        height={60}
                        className="object-cover" />
                    </div>
                    <span className="ml-0 mt-10 font-semibold text-md">{blog.author}</span>
                    <div className="flex gap-2 mt-10 ml-4">
                    <Image src={calendar} className="z-0 h-4 w-6" alt="none"></Image>
                    <div className="text-black text-sm">{blog.date}</div>
                </div>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest blogs */}
        <h1 className="text-4xl font-bold text-second pt-10 mb-6 mt-10 text-center">LATEST BLOGS</h1>
        <h1 className="text-xl font-semibold text-first mb-6 pb-8 text-center">Here's what we've been up to lately.</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12 m-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative flex sm:w-full flex-col items-center shadow-lg rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-200 m-6 mb-0 cursor-pointer">
              <img src={blog.imageUrl} alt={blog.title} className="w-full rounded-t-lg" />
              <div className="p-2 px-4 max-w-6xl">
                <div className="flex justify-start gap-2 px-1 py-2">
                  <Image src={calendar} className="z-0 h-4 w-4" alt="none"></Image>
                  <div className="text-black text-sm">{blog.date}</div>
                </div>

                <h2 className="mt-2 p-1 text-lg font-bold text-black">{blog.title}</h2>  
                <p className="text-sm text-second p-1">{blog.excerpt}</p>

                <div className="flex justify-center items-center">
                  <button className="mt-6 px-3 py-2 rounded-md bg-first text-white font-xs font-semibold hover:bg-second hover-scale-105 ">
                    Read More
                  </button>
                </div>
              </div>

              <div className="w-full flex items-center justify-start text-sm text-black font-semibold px-5 py-3 mt-2 mb-1 gap-2 relative bottom-0">
                <div className="relative bottom-0 w-8 h-8 ml-0 rounded-full bg-gray-300 overflow-hidden ">
                  <Image
                    src={drkapil} 
                    alt="Author"
                    width={60}
                    height={60}
                    className="object-cover" />
                </div>
                <span className="ml-0 font-semibold text-md">{blog.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Popular blogs */}
        <div className="categories-popular flex flex-row justify-center items-center gap-16 h-full m">
         <div className="w-3/4 mr-4">
        <h1 className="text-4xl font-bold text-second mb-6 pt-8 my-10 text-center ">POPULAR BLOGS</h1>
        <h1 className="text-xl font-semibold text-first mb-6 pb-8 text-center">Our most loved content by readers.</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-14 m-3 rounded-lg">
          {popularBlogs.map((blog) => (
            <div key={blog.id} className="relative flex sm:w-full flex-col items-center rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-200 hover:rounded-t-lg m-6 mb-0 cursor-pointer">
              <img src={blog.imageUrl} alt={blog.title} className="w-full rounded-t-lg" />
              <div className="p-2 px-4 max-w-6xl">
                <div className="flex justify-start gap-2 px-1 py-2">
                  <Image src={calendar} className="z-0 h-4 w-4" alt="none"></Image>
                  <div className="text-black text-sm">{blog.date}</div>
                </div>
                <h2 className="mt-2 p-1 text-lg font-bold text-black">{blog.title}</h2>  
                <p className="text-sm text-second p-1">{blog.excerpt}</p>
                <div className="flex justify-center items-center">
                  <button className="mt-6 px-3 py-2 rounded-md bg-first text-white font-xs font-semibold hover:bg-second hover-scale-105 ">
                    Read More
                  </button>
                </div>
              </div>

              <div className="w-full flex items-center justify-start text-sm text-black font-semibold px-5 py-3 mt-2 mb-1 gap-2 relative bottom-0">
                <div className="relative bottom-0 w-8 h-8 ml-0 rounded-full bg-gray-300 overflow-hidden ">
                  <Image
                    src={drkapil} 
                    alt="Author"
                    width={60}
                    height={60}
                    className="object-cover" />
                </div>
                <span className="ml-0 font-semibold text-md">{blog.author}</span>
              </div>
            </div>
          ))}
        </div>
         </div>
         <div className="w-1/4 flex-col justify-center items-center rounded-2xl m-auto ">
         {/* <h1 className="text-second font-bold text-center text-4xl p-2 pt-2"> CATEGORIES </h1> */}
          <div className="mt-40 mb-20 shadow-lg rounded-lg ml-12">
           <div className="w-full h-16 px-4 bg-second rounded-t-2xl font-semibold flex justify-center items-center text-xl sm:text-lg">
            <div className="text-white">
              <a href="#">CATEGORIES</a>
            </div>
           </div>
           <div className="img w-full justify-center items-center container my-8 p-4 h-[580px]">
              <div className="flex w-full flex-col flex-1 justify-center items-center gap-2">
                <div className="flex justify-center w-full">
                  <a className="text-lg sm:text-md font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center" href="#">Bariatric surgery</a>
                </div>
                <div data-orientation="horizontal" role="separator" class="w-3/4 h-[1px] bg-third"></div>
                <div className="flex justify-center w-full">
                    <a className="text-lg sm:text-md font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center" href="#">Non-surgical weight loss program</a>
                </div>
                <div data-orientation="horizontal" role="separator" class="w-3/4 h-[1px] bg-third"></div>
                <div className="flex justify-center w-full">
                      <a className="text-lg sm:text-md font-medium text-second/70 text-second hover:scale-105 duration-300 text-center" href="#">Surgery for diabetes</a>
                </div>
                <div data-orientation="horizontal" role="separator" class="w-3/4 h-[1px] bg-third"></div>
                <div className="flex justify-center w-full">
                        <a className="text-lg sm:text-md font-medium text-second/70 hover:text-second hover:scale-105 duration-300 text-center" href="#">Intragastric Balloon</a>
                </div>
              </div>
           </div>
          </div>
         </div>
        </div>

      </div>
    
    </>
   
  );
};

export default Blog;

