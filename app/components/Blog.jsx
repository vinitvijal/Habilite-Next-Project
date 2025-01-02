import React from "react";
import main from "@/public/main.webp"
import calendar from "@/public/calendar.svg"
import scope from "@/public/scope.svg"
import Image from 'next/image'
import Link from "next/link";


function Blog(){
  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right Hospital",
      excerpt: "Many state-of-the-art hospitals in Delhi provide advanced treatments...",
      date: "September 30, 2024",
      author: "Dr. Kapil Agrawal",
      
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-1.webp",

    },

    {
      id: 2,
      title: "How to Choose the Right Hospital?",
      excerpt: "Choosing the right hospital is crucial for effective treatment...",
      date: "October 5, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-2.webp", 
    },

    {
      id: 3,
      title: "How to Choose the Right Hospital",
      excerpt: "Choosing the right hospital is crucial for effective treatment...",
      date: "October 8, 2024",
      author: "Dr. Kapil Agrawal",
      imageUrl: "https://www.habiliteclinics.com/assets/images/home/blog-4.webp", 
    },

  ];
  return(
    <div className="max-w-full mx-auto p-20">
    <h1 className="text-4xl font-bold text-black mb-10 pt-10 text-center">RECENT BLOGS</h1>
    <h1 className="text-2xl font-semibold text-third mb-20 pb-4 text-center">Insights from our Medical Experts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      {blogs.map((blog) => (
        <div key={blog.id} className="relative flex flex-col items-center shadow-lg rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-200 px-6 m-6 cursor-pointer">
        <img src={blog.imageUrl} alt={blog.title} className="absolute rounded-full w-28 h-28 -top-12 border-4 border-first object-cover object-center" />
          <div className="p-4 max-w-full mt-8">
           <div className="flex justify-start gap-2">
            <Image src={calendar} className="mt-7 z-0 h-6 w-6 mb-2" alt="none"></Image>
            <div className="mt-8 text-black text-sm">{blog.date}</div>
           </div>
            <h2 className="mt-2 text-xl font-bold text-black">
              {blog.title}
            </h2>
            <p className="text-md text-second mt-6">{blog.excerpt}</p>
            
            <button className="mt-8 px-4 py-2 rounded-full shadow-lg bg-first text-white font-medium hover:bg-second hover-scale-105">
              Read More
            </button>
          </div>
          
            <div className="w-full flex items-center justify-start text-sm text-black font-semibold p-6 gap-2">
              <div className="w-8 h-8 p-4 ml-0 m-2 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/public/main.webp" 
                  alt="Author"
                  width={60}
                  height={60}
                  className="object-cover" />
              </div>
              <Image src={scope} className="mt-3 z-0 h-8 w-8 p-1" alt="none"></Image>
              <span className="ml-0 font-semibold text-md">{blog.author}</span>
            </div>
          </div>
        
          
      ))}
      
    </div>
    <div className="w-full flex justify-center mt-20">
        <Link href="/blogs" className="px-6 py-4 bg-first rounded-lg hover:scale-105 duration-300 hover:duration-500 text-white hover:bg-second">
          More Blogs
        </Link>
    </div>
  </div>
  )
  
};

export default Blog;
