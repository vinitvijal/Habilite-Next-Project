import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import calendar from "@/public/calendar.svg";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import * as Separator from "@radix-ui/react-separator";
import Header from "../components/Header";
import { categories, truncateText, blogs, featured } from "./index";


const featured1 = featured[0]

function Blog() {
  
  const trending = blogs.filter(blog => {
    return blog.trending
  })
  const trending1 = trending[0]

  const truncatedDesc = truncateText(featured1.description, 50)

  return (
    <>
      {/* <div className="bg-white h-28 w-full shadow-md relative top-0 hidden"></div> */}
    <div className="page md:pl-24 px-5 md:px-0">

      <section className="title mt-24 flex flex-col gap-4">
        <p className="md:text-8xl text-6xl">Blogs</p>
        <p className="text-first md:text-2xl text-lg">Insights and experiences to inspire better health.</p>
      </section>


      <section className="featured mt-28">
        <p className="md:text-4xl text-3xl">Featured <span className="text-first">Blogs</span></p>
        <p className="text-gray-500 text-lg font-light mt-1">Spotlighting the best reads for you.</p>
        <Separator.Root orientation="horizontal" className="mx-0 my-4 w-1/4 lg:w-1/12 h-[1.5px] bg-third animate-shake md:block hidden" />

        <div className="boxes mt-10 md:mr-24">
          {featured1 && (
            <Link href={`/blogs/${featured1.slug}`}>
              {/* BG */}
              <div className="overflow-clip group md:overflow-auto first-featured will-change-transform md:h-[70vh] h-[40vh] group bg-cover md:bg-center bg-left rounded-lg relative ease-in-out md:hover:border-2 md:hover:border-first md:hover:rounded-lg md:hover:scale-[101%] cursor-pointer transition-all duration-300 box-border md:hover:shadow-xl" style={{ backgroundImage: `url(${featured1.blogImage})` }}>
                <div className="overlay inset-0 z-10 bg-gradient-to-b from-transparent absolute to-[#00000a74] rounded-lg duration-300"></div>

                <div className="content z-20 mt-auto duration-300">

                  <div className="upper-content z-20 duration-300">
                    <p className="bg-first top-2 left-2 text-white w-fit md:px-2 px-2 py-1 rounded-lg md:text-sm text-xs md:mb-1 absolute md:hidden">{featured1.tag}</p>
                    <p className="absolute md:top-4 md:right-4 top-2 right-1 bg-white text-first md:text-sm text-xs font-bold px-2 py-1 rounded-lg md:group-hover:bg-first md:group-hover:text-white">FEATURED</p>
                  </div>

                  <div className="lower-content absolute md:bottom-7 md:left-6 bottom-4 left-2 z-20 pr-6 text-white w-[95%] md:overflow-hidden overflow-scroll">

                    {/* <p className="bg-first text-white mb-2 h-1 w-1/6 group-hover:w-2/6 duration-300"></p> */}
                    <p className="bg-first text-white w-fit md:px-2 px-1 py-1 rounded-lg md:text-sm text-xs md:mb-1 hidden md:block">{featured1.tag}</p>
                    
                    <p className="date md:text-base text-xs">{featured1.date}</p>
                    
                    {/* FOR MOBILE VIEW -- */}
                    <p className="md:text-4xl text-[22px] md:mb-3 font-semibold mb-1 md:hidden whitespace-nowrap">{featured1.title}</p>
                    
                    <p className="md:text-4xl text-xl md:mb-3 font-semibold mb-1 hidden md:block">{featured1.title}</p>
                    
                    <p className="md:text-base text-sm md:mb-5 md:block hidden mb-3 whitespace-normal h-[3rem] line-clamp-2 text-ellipsis">{featured1.description}</p>
                    
                    {/* FOR MOBILE VIEW -- */}
                    <p className="md:text-base text-xs md:mb-5 md:hidden mb-2 line-clamp-2 whitespace-normal">{featured1.description}</p>

                    <p className="md:text-sm text-xs text-white">By {featured1.author}</p>
                  </div>

                </div>
              </div>
            </Link>
          )}

          <div className="below-2-boxes grid md:grid-cols-2 grid-cols-1 gap-2 mt-3 ">
            {featured.slice(1).map((blog) => (
              <div key={blog.id} className="box w-full will-change-transform md:h-[50vh] h-[25vh] group rounded-lg relative bg-cover md:bg-center bg-top md:hover:border-2 md:hover:border-first md:hover:scale-[101%] cursor-pointer transition-all duration-300 box-border md:hover:shadow-xl ease-in-out" style={{ backgroundImage: `url(${blog.blogImage})` }}>
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} passHref>
                  <div className="overlay inset-0 z-10 bg-gradient-to-b from-transparent absolute to-[#00000a74] rounded-lg duration-300"></div>

                  <div className="content z-20 mt-auto duration-300">
                    <div className="upper-content z-20 duration-300">
                      <p className="absolute md:top-4 md:right-4 top-2 right-1 bg-white text-first md:text-sm text-xs font-bold px-2 py-1 rounded-lg md:group-hover:bg-first md:group-hover:text-white">FEATURED</p>
                      <p className="bg-first text-white w-fit px-2 py-1 rounded-lg text-xs mb-1 absolute md:hidden top-2 left-2">{blog.tag}</p>
                    </div>
                    <div className="lower-content h-fit absolute md:bottom-7 md:left-4 z-20 md:right-7 bottom-4 left-2 w-[95%] md:overflow-hidden overflow-scroll text-white">
                      <p className="bg-first text-white w-fit px-2 py-1 rounded-lg text-xs mb-1 hidden md:block">{blog.tag}</p>
                      <p className="date md:text-sm text-xs mb-1">{blog.date}</p>

                      {/* FOR MOBILE VIEW */}
                      <p className="text-md md:mb-2 font-semibold md:hidden md:overflow-hidden overflow-ellipsis whitespace-nowrap text-white">{blog.title}</p>

                      <p className="md:text-xl text-lg mb-2 font-semibold hidden md:block">{truncateText(blog.title, 8)}</p>
                      
                      {/* FOR MOBILE VIEW */}
                      <p className="md:text-sm text-xs md:mb-3 md:hidden mb-2 whitespace-nowrap">{truncateText(blog.description, 15)}</p>

                      <p className="md:text-sm text-xs mb-3 hidden md:block">{truncateText(blog.description, 20)}</p>
                      <p className="text-xs md:text-sm text-white">By {blog.author}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories md:mt-20 mt-14 text-2xl flex flex-col gap-5 items-start">
        <p className="mb-1 items-center gap-1 font-light flex"><svg className="mr-1 mt-1 text-first" width="33" height="33" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>Categories </p>
        <div className="pills text-sm gap-2 md:flex md:items-center grid grid-cols-1">
          {categories.map((cat) => {
            return (
            <Link key={cat} href={`/blogs/category/${categories.indexOf(cat)}`}>
            <p className="select-none text-second px-3 py-1 rounded-lg bg-[#a1bef534] hover:bg-[#a1bef593] cursor-pointer active:bg-[#7a9ee0fe] border-[1px] border-first">{cat}</p>
            </Link>
          )})}
        </div>
      </section>

      <section className="latest-blogs mt-20 md:mr-24">
        <div className="title-content flex justify-between md:items-center items-start">
          <div className="title">
            <p className="md:text-4xl text-3xl">Latest <span className="text-first">Blogs</span></p>
            <p className="text-gray-500 text-lg font-light mt-1">Here's what we've been up to lately.</p>
            <Separator.Root orientation="horizontal" className="mx-0 my-4 w-20 lg:w-1/3 h-[1.8px] bg-third animate-shake md:block hidden" />
          </div>

          <Link href="/blogs/all">
          <div className="view-all md:mt-0 mt-3 px-2 py-2 flex whitespace-nowrap md:whitespace-normal items-center gap-1 md:text-lg text-sm select-none border-[1px] rounded-lg md:px-4 text-first md:py-2 justify-center hover:bg-[#72a4ff5e] duration-150 active:bg-[#5d96ffbd] cursor-pointer">
              View All
            <svg className="md:block hidden" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            <svg className="md:hidden" width="15" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
          </Link>
        </div>

        <div className="content">
          <div className="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4 mt-10">
            {blogs.slice(0, 6).map((blog) => (
              <div key={blog.id} className="w-full select-none relative h-[65vh] bg-white rounded-lg flex flex-col shadow-lg md:hover:scale-[102%] transition-all duration-300">
                <Image
                  src={blog.blogImage}
                  width={2000}
                  height={2000}
                  alt={blog.title}
                  className="w-full rounded-t-lg h-2/4 object-cover"
                />

                <p className="bg-first text-white w-fit px-2 py-1 rounded-br-lg rounded-tl-lg text-sm mb-1 absolute">{blog.tag}</p>

                <div className="lower-content px-5 flex flex-col h-auto flex-1 justify-between">
                  <div className="content">
                    <p className="text-sm flex mt-3 items-center gap-1">
                      <Image src={calendar} className="z-0 h-4 w-4" alt="none" />
                      {blog.date}
                    </p>
                    <p className="text-lg mt-2 line-clamp-2">{blog.title}</p>
                    <p className="text-sm mt-1 lien-clamp-2">{blog.excerpt}</p>
                  </div>

                  <div className="button mt-4 mb-6 flex justify-between">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className=" self-end px-3 py-2 rounded-md border-first border-[1px] text-first text-sm hover:bg-[#72a4ff5e] duration-150 active:bg-[#5d96ffbd]"
                    >
                      Read More
                    </Link>
                    <p className="flex items-center gap-2 mt-4 text-sm">
                      <Image
                        src={blog.authorImage}
                        alt="Author"
                        width={45}
                        height={45}
                        className="object-cover rounded-full w-9 h-9 overflow-hidden"
                      />
                      {blog.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      <section className="trending-blogs mt-20 md:mr-24 mb-20">
        <p className="md:text-4xl text-3xl">Trending <span className="text-first">Blogs</span></p>
        <p className="text-gray-500 text-lg font-light mt-1">Explore What Everyone's Talking About.</p>
        <Separator.Root orientation="horizontal" className="hidden md:block mx-0 my-4 w-20 lg:w-1/12 h-[1.8px] bg-third animate-shake" />

        <div className="boxes mt-10 md:flex gap-2">

          <div className="md:h-[74vh] h-fit bg-white md:w-2/3 w-full md:shadow-lg shadow-md rounded-lg relative group md:hover:scale-[101%] duration-300 ">
            {/* TAG AT THE TOP LEFT */}<p className="bg-first text-white w-fit px-2 py-1 rounded-br-lg rounded-tl-lg md:text-md text-sm mb-1 absolute">{trending1.tag}</p>
            <Link href={`/blogs/${trending1.slug}`}>
              <Image
                src={trending1.blogImage}
                width={1000}
                height={500}
                alt={trending1.title}
                className="w-full rounded-lg md:h-[350px] h-50 object-cover object-center" />

              <div className="content md:px-5 px-3 md:py-4 md:pb-8 pb-4 pt-3 overflow-scroll md:overflow-auto md:w-full w-11/12">
                <p className="text-sm flex items-center gap-2 text-gray-500">{trending1.date}</p>
                <p className="md:text-2xl text-xl md:whitespace-normal whitespace-nowrap md:mt-1 mt-2 font-semibold md:group-hover:text-first md:line-clamp-1">{trending1.title}</p>
                <p className="md:text-md text-sm md:mt-1 mt-1 md:line-clamp-3 line-clamp-5">{trending1.description}</p>
                <p className="text-gray-500 text-sm mt-3">{trending1.author}</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-rows-3 md:mt-1 mt-3 gap-2 md:w-1/3">
            {trending.slice(1, 4).map(blog => {
              return (
                <Link href={`/blogs/${blog.slug}`} key={blog.id}>
                  <div className="sidebox flex bg-white md:h-40 w-full h-fit group rounded-lg md:hover:scale-[101%] duration-300 shadow-md relative">
                    <p className="bg-first text-white w-fit px-2 py-1 rounded-br-lg rounded-tl-lg text-xs mb-1 absolute">{blog.tag}</p>
                    <div className="image md:w-2/5 w-[132px]">
                      <Image
                        src={blog.blogImage}
                        width={2000}
                        height={2000}
                        alt={blog.title}
                        className=" rounded-l-lg h-full object-cover" />
                    </div>
                    <div className="content w-3/5 md:px-3 pl-2 md:py-3 py-2 flex flex-col overflow-scroll md:overflow-auto">
                      <p className="text-gray-500 text-xs">{blog.date}</p>
                      <p className="font-semibold md:text-sm text-md mt-2 md:group-hover:text-first md:line-clamp-2 line-clamp-1">{blog.title}</p>
                      <p className="text-xs mt-1 line-clamp-2">{blog.excerpt}</p>

                      <p className="text-xs text-gray-500 md:mt-auto mt-3">{blog.author}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>







      {/* Featured blog Old */}
      {/* <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12">
            {featured.map((blog) => (
              <div key={blog.id} className="bg-white border-t-first border-4 shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-500 mt-4 ">
                <div className="flex flex-row justify-center items-center relative">
                  <div className="sec-1 relative object-cover w-2/5" >
                    <Image
                      src={alt}
                      alt="Blog Image"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 curved-image-2" />
                  </div>

                  <div className="sec-2 w-3/5 px-10 mt-10">
                    <div className="absolute top-4 right-6 w-20 text-first text-sm font-bold px-2 py-2 rounded">
                      FEATURED
                    </div>
                    <h2 className="mt-4 mb-6 text-lg font-bold text-black">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-black mt-2">{blog.content}</p>
                    <button className="mt-6 px-3 py-2 rounded-md border-first border-[1px] text-first font-xs hover:bg-[#72a4ff5e] duration-150 active:bg-[#5d96ffbd] ">
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
        </div> */}




      {/* Latest blogs Old */}
      {/* <h1 className="text-4xl font-bold text-second pt-10 mb-6 mt-10 text-center">LATEST BLOGS</h1>
        <h1 className="text-xl font-semibold text-first mb-6 pb-8 text-center">Here's what we've been up to lately.</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12 m-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex sm:w-full flex-col shadow-lg rounded-lg transition-transform duration-300 m-6 mb-0 cursor-pointer">
              <Image src={blog.blogImage} width={2000} height={2000} alt={blog.title} className="w-full rounded-t-lg h-50 object-cover" />
              <div className="p-2 px-4 max-w-6xl">
                <div className="flex justify-start gap-2 px-1 py-2">
                  <Image src={calendar} className="z-0 h-4 w-4" alt="none"></Image>
                  <div className="text-black text-sm">{blog.date}</div>
                </div>

                <h2 className="mt-2 p-1 text-lg font-bold text-black">{blog.title}</h2>
                <p className="text-sm text-second p-1">{blog.excerpt}</p>

                <div className="flex justify-center items-center">
                  <Link href={`/blogs/${blog.slug}`} className="mt-6 px-3 py-2 rounded-md border-first border-[1px] text-first font-xs hover:bg-[#72a4ff5e] duration-150 active:bg-[#5d96ffbd] ">
                    Read More
                  </Link>
                </div>
              </div>

              <div className="w-full flex items-center justify-start text-sm text-black font-semibold px-5 py-3 mt-2 mb-1 gap-2 relative bottom-0">
                <div className="relative bottom-0 w-8 h-8 ml-0 rounded-full bg-gray-300 overflow-hidden ">
                  <Image
                    src={blog.authorImage}
                    alt="Author"
                    width={60}
                    height={60}
                    className="object-cover" />
                </div>
                <span className="ml-0 text-base font-semibold capitalize">{blog.author.toLowerCase()}</span>
              </div>
            </div>
          ))}
        </div> */}

    </div>
</>
  );
};

export default Blog;

