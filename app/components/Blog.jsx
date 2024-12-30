import React from "react";
import Image from "next/image";
import main from "@/public/main.webp"
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
    <h1 className="text-xl font-semibold text-third mb-20 pb-4 text-center">Here's what we've been to lately </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      {blogs.map((blog) => (
        <div key={blog.id} className="relative shadow-lg rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-200 px-6 m-6 cursor-pointer">
        <img src={blog.imageUrl} alt={blog.title} className="absolute rounded-full w-20 h-20 -top-8 -left-8 border-4 border-first object-cover object-center" />
          <div className="p-4 max-w-full mt-8">
           <div className="mt-8 text-black text-sm">{blog.date}</div>
            <h2 className="mt-2 text-xl font-bold text-black">
              {blog.title}
            </h2>
            <p className="text-md text-second mt-6">{blog.excerpt}</p>
            
            <button className="mt-8 px-4 py-2 rounded-full shadow-lg bg-first text-white font-medium hover:bg-second hover-scale-105">
              Read More
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-black font-semibold p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 p-4 ml-0 m-2 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/public/main.webp" 
                  alt="Author"
                  width={40}
                  height={40}
                  className="object-cover" />
              </div>
              <span className="ml-0 font-semibold text-md">{blog.author}</span>
            </div>
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
