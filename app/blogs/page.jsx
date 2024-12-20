import React from "react";
import Image from "next/image";
import main from "@/public/main.webp"




function Blog(){
  const featured = [ 
    {
     id: 1,
     title: "XYZ BSB DFNH",
     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum deleniti sed amet itaque distinctio possimus animi, vitae nihil cupiditate at quas voluptates cum, consequuntur odio repellendus soluta quasi dolor. Ullam laudantium totam quam animi nisi ipsam, tempore ad reprehenderit tenetur sint!",
     imageUrl: "/public/main.webp",
     author: "Dr. XYZ",
    
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right Hospital",
      excerpt: "Many state-of-the-art hospitals in Delhi provide advanced treatments...",
      date: "September 30, 2024",
      author: "Dr. XYZ",

    },

    {
      id: 2,
      title: "How to Choose the Right Hospital?",
      excerpt: "Choosing the right hospital is crucial for effective treatment...",
      date: "October 5, 2024",
      author: "Dr. XYZ",
      imageUrl: "/images/clinic.jpg", 
    },

    {
      id: 3,
      title: "How to Choose the Right Hospital",
      excerpt: "Choosing the right hospital is crucial for effective treatment...",
      date: "October 8, 2024",
      author: "Dr. XYZ",
      imageUrl: "/images/clinic.jpg", 
    },

    {
      id: 4,
      title: "How to Choose the Right Hospital",
      excerpt: "Many state-of-the-art hospitals in Delhi provide advanced treatments...",
      date: "September 30, 2024",
      author: "Dr. XYZ",
      imageUrl: "/images/hospital.jpg",
    },

    {
      id: 5,
      title: "How to Choose the Right Hospital?",
      excerpt: "Choosing the right hospital is crucial for effective treatment...",
      date: "October 5, 2024",
      author: "Dr. XYZ",
      imageUrl: main, 
    },

    {
      id: 6,
      title: "How to Choose the Right Hospital",
      excerpt: "Choosing the right hospital is crucial for effective treatment...",
      date: "October 8, 2024",
      author: "Dr. XYZ",
      imageUrl: "/images/clinic.jpg", 
    },
  ];


  return (
    <> 
    {/* search Bar */}


    <div className="max-w-6xl mx-auto p-6 my-12">
      <div className="w-5/6 h-16 shadow-lg p-4 mb-20 m-auto rounded-md flex justify-between items-center">
        <input className="px-4 py-2 m-6 text-xl rounded-md outline-none" type="text" aria-label="Search our blog..." placeholder="Search our blog..." />
        <button className="px-5 py-2 w-auto mr-2 bg-first rounded-lg text-white font-semibold text-xl hover:scale-105 shadow-sm hover:shadow-none">
          Search
        </button>
      </div>

      {/* Featured blog */}

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12">
          {featured.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-5 transition-transform duration-500 mt-4 p-4 pb-1 border-1">
              <div className="p-4">
                <div className="relative">
                  <Image
                    src={main}
                    alt="Blog Image"
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 right-2 bg-first text-white text-sm font-semibold px-2 py-2 rounded">
                    FEATURED
                  </div>
                </div>

                <h2 className="mt-4 text-lg font-bold text-black">
                  {blog.title}
                </h2>
                <p className="text-sm text-black mt-2">{blog.content}</p>
                <button className="mt-4 text-fourth font-medium hover:underline">
                  Read More
                </button>
                <div className="flex items-center">
                  <div className="w-8 h-8 p-4 m-4 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src={blog.imageUrl}
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

        {/* Latest blogs */}

        <div className="p-2">
          <img src={featured.imageUrl} alt={featured.title} className="w-full h-42 object-cover" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-black mb-6 pt-10 my-20 p-3">Latest Blogs</h1>
      <h1 className="text-xl font-semibold text-third mb-6 pb-4 p-3">Here's what we've been to lately </h1>
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
       
       {/* popular blogs */}
       
      <div className="container mt-12 h-[90vh] w-full ml-0" >
          <h1 className="text-4xl font-bold text-black mb-6 pb-4 p-3 ml-0">Popular Blogs</h1>
          <div className="w-full flex justify-between items-center text-xl font-semibold mb-6 pb-4 p-3 gap-8">
            <div className="w-1/2 h-[60vh] flex-col-2 p-4 m-8 shadow-lg rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 mt-4 ml-0">
            <div className="h-3/5 p-2 bg-third">
              <img src="img" alt="pop-blog" />
            </div>
            <div className="h-2/5 text-sm px-2 py-1 ">
              <div className="px-2 flex gap-2">
                <img className="h-6 w-6 rounded-full bg-third m-1" src="img.jpg" alt="img" /> 
                <h1 className="m-2">DR. XYZ</h1> 
              </div>
              <p className="p-2 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit consequatur deserunt modi officia eveniet similique soluta, doloribus, ratione nulla non vero incidunt nam doloremque?</p>
            </div>
            </div>

            <div className="w-1/2 h-[60vh] flex-col-2 p-4 m-8 shadow-lg rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 mt-4 ml-0">
            <div className="h-3/5 p-2 bg-third">
              <img src="img" alt="pop-blog" />
            </div>
            <div className="h-2/5 text-sm px-2 py-1 ">
              <div className="px-2 flex gap-2">
                <img className="h-6 w-6 rounded-full bg-third m-1" src="img.jpg" alt="img" /> 
                <h1 className="m-2">DR. XYZ</h1> 
              </div>
              <p className="p-2 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit consequatur deserunt modi officia eveniet similique soluta, doloribus, ratione nulla non vero incidunt nam doloremque?</p>
            </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
  
};

export default Blog;
