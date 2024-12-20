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
  return (
    <> 
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-black mb-6 pt-10 text-center">Recent Blogs</h1>
      <h1 className="text-xl font-semibold text-third mb-20 pb-4 text-center">Here's what we've been to lately </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12 m-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">

              <h2 className="mt-4 text-lg font-bold text-black">
                {blog.title}
              </h2>
              <p className="text-sm text-black mt-2">{blog.excerpt}</p>
              <div className="mt-3 text-third text-sm">{blog.date}</div>
              <button className="mt-4 text-fourth font-medium hover:underline">
                Read More
              </button>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-8 h-8 p-4 m-4 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src="/public/main.webp" 
                    alt="Author"
                    width={40}
                    height={40}
                    className="object-cover" />
                </div>
                <span className="ml-0">{blog.author}</span>
              </div>
            </div>
           </div>
            
        ))}
        
      </div>
      <div className="w-full flex justify-center mt-12">
          <Link href="/blogs" className="px-4 py-2 bg-first rounded-lg hover:scale-105 duration-300 hover:duration-500 text-white">
            More Blogs
          </Link>
      </div>
       
       

      
    </div>
    </>
  );
  
};

export default Blog;
