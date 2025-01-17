import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import calendar from "@/public/calendar.svg";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import * as Separator from "@radix-ui/react-separator";

const branch = "78-blogs-pages-with-a-template"

const categories = ["Bariatric Surgery", "Gall Bladder Stone", "Hernia", "Laparoscopic Surgery", "Lipoma", "Non-Surgical Weight Loss", "Piles"]
export { categories }

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}
export { truncateText };

const dirContent = fs.readdirSync("blogpage-content", "utf-8")
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`blogpage-content/${file}`, "utf-8")
  const { data } = matter(fileContent)
  return data
})
export { blogs }


const featured = blogs.filter(blog => {
  return blog.featured
})
const featured1 = featured[0]
export {featured}

function Blog() {
  



  const trending = blogs.filter(blog => {
    return blog.trending
  })
  const trending1 = trending[0]

  const truncatedDesc = truncateText(featured1.description, 50)

  return (
    <>

      {/* <section className="title mt-24 flex flex-col ml-32 gap-4">
        <p className="text-8xl ">Blogs</p>
        <p className="text-first text-2xl font-light">Insights and experiences to inspire better health.</p>
      </section> */}


      <section className="featured ml-32 mt-20">
        <p className="text-4xl">Featured <span className="text-first">Blogs</span></p>
        <p className="text-gray-500 text-lg font-light mt-1">Spotlighting the best reads for you.</p>
        <Separator.Root orientation="horizontal" className="mx-0 my-4 w-1/4 lg:w-1/12 h-[1.5px] bg-third animate-shake" />

        <div className="boxes mt-10 mr-24">
          {featured1 && (
            <Link href={`/blogs/${featured1.slug}`}>
              <div className="first-featured will-change-transform h-[70vh] group bg-cover bg-center rounded-lg relative ease-in-out hover:border-2 hover:border-first hover:rounded-lg hover:scale-[101%] cursor-pointer transition-all duration-300 box-border hover:shadow-xl" style={{ backgroundImage: `url(${featured1.blogImage})` }}>
                <div className="overlay inset-0 z-10 bg-gradient-to-b from-transparent absolute to-[#00000a74] rounded-lg duration-300"></div>

                <div className="content z-20 mt-auto duration-300">

                  <div className="upper-content z-20 duration-300">
                    <p className="absolute top-4 right-4 bg-white text-first text-sm font-bold px-2 py-1 rounded-lg group-hover:bg-first group-hover:text-white">FEATURED</p>
                  </div>
                  <div className="lower-content absolute bottom-7 left-6 z-20 pr-6 text-white">

                    {/* <p className="bg-first text-white mb-2 h-1 w-1/6 group-hover:w-2/6 duration-300"></p> */}
                    <p className="bg-first text-white w-fit px-2 py-1 rounded-lg text-sm mb-1">{featured1.tag}</p>
                    <p className="date">{featured1.date}</p>
                    <p className="text-4xl mb-3 font-semibold">{featured1.title}</p>
                    <p className="text-base mb-5">{truncatedDesc}</p>

                    <p className="text-sm text-white">By {featured1.author}</p>
                  </div>

                </div>
              </div>
            </Link>
          )}

          <div className="below-2-boxes grid grid-cols-2 gap-2 mt-3">
            {featured.slice(1).map((blog) => (
              <div key={blog.id} className="box w-full will-change-transform h-[50vh] group rounded-lg relative bg-cover bg-center hover:border-2 hover:border-first hover:scale-[101%] cursor-pointer transition-all duration-300 box-border hover:shadow-xl ease-in-out" style={{ backgroundImage: `url(${blog.blogImage})` }}>
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} passHref>
                  <div className="overlay inset-0 z-10 bg-gradient-to-b from-transparent absolute to-[#00000a74] rounded-lg duration-300"></div>

                  <div className="content z-20 mt-auto duration-300">
                    <div className="upper-content z-20 duration-300">
                      <p className="absolute top-4 right-4 bg-white text-first text-sm font-bold px-2 py-1 rounded-lg group-hover:bg-first group-hover:text-white">FEATURED</p>
                    </div>
                    <div className="lower-content absolute bottom-7 left-4 z-20 right-7 text-white">
                      <p className="bg-first text-white w-fit px-2 py-1 rounded-lg text-xs mb-1">{blog.tag}</p>
                      <p className="date text-sm mb-1">{blog.date}</p>
                      <p className="text-xl mb-2 font-semibold">{truncateText(blog.title, 8)}</p>
                      <p className="text-sm mb-3">{truncateText(blog.description, 20)}</p>
                      <p className="text-xs text-white">By {blog.author}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories mt-20 ml-32 text-2xl flex flex-col gap-5 items-start">
        <p className="mb-1 items-center gap-1 font-light flex"><svg className="mr-1 mt-1 text-second" width="33" height="33" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>Categories </p>
        <div className="pills text-sm gap-2 flex items-center">
          {categories.map((cat) => {
            return (
            <Link href={`/blogs/category/${categories.indexOf(cat)}`}>
            <p key={cat} className="select-none text-second px-3 py-1 rounded-lg bg-[#a1bef534] hover:bg-[#a1bef593] cursor-pointer active:bg-[#7a9ee0fe] border-[1px] border-first">{cat}</p>
            </Link>
          )})}
        </div>
      </section>

      <section className="latest-blogs ml-32 mt-20 mr-24">
        <div className="title-content flex justify-between items-center">
          <div className="title">
            <p className="text-4xl">Latest <span className="text-first">Blogs</span></p>
            <p className="text-gray-500 text-lg font-light mt-1">Here's what we've been up to lately.</p>
            <Separator.Root orientation="horizontal" className="mx-0 my-4 w-20 lg:w-1/3 h-[1.8px] bg-third animate-shake" />
          </div>

          <Link href="/blogs/all">
          <div className="view-all flex items-center gap-1 text-lg select-none border-[1px] rounded-lg px-4 text-first py-2 justify-center hover:bg-[#72a4ff5e] duration-150 active:bg-[#5d96ffbd] cursor-pointer">
              View All
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
          </Link>
        </div>

        <div className="content">
          <div className="grid grid-cols-3 gap-8 mt-10">
            {blogs.slice(0, 6).map((blog) => (
              <div key={blog.id} className="w-full relative h-[65vh] bg-white rounded-lg flex flex-col shadow-lg hover:scale-[102%] transition-all duration-300">
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
                    <p className="text-lg mt-2">{blog.title}</p>
                    <p className="text-sm mt-1">{blog.excerpt}</p>
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


      <section className="trending-blogs ml-32 mt-20 mr-24 mb-20">
        <p className="text-4xl">Trending <span className="text-first">Blogs</span></p>
        <p className="text-gray-500 text-lg font-light mt-1">Explore What Everyone's Talking About.</p>
        <Separator.Root orientation="horizontal" className="mx-0 my-4 w-20 lg:w-1/12 h-[1.8px] bg-third animate-shake" />

        <div className="boxes mt-10 flex gap-2">

          <div className="h-[70vh] bg-white w-2/3 shadow-lg rounded-lg relative group hover:scale-[101%] duration-300 ">
            <p className="bg-first text-white w-fit px-2 py-1 rounded-br-lg rounded-tl-lg text-md mb-1 absolute">{trending1.tag}</p>
            <Link href={`/blogs/${trending1.slug}`}>
              <Image
                src={trending1.blogImage}
                width={2000}
                height={2000}
                alt={trending1.title}
                className="w-full rounded-lg h-2/3 object-cover" />

              <div className="content px-5 py-4">
                <p className="text-sm flex items-center gap-2 text-gray-400">{trending1.date}<svg width="7" height="7" className="rounded-full bg-gray-300 text-gray-300" viewBox="0 0 15 15" fill="color-black" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>{trending1.author}</p>
                <p className="text-2xl mt-1 font-semibold group-hover:text-first">{trending1.title}</p>
                <p className="text-md mt-1 ">{truncateText(trending1.description, 35)}</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-rows-3 mt-1 gap-2 w-1/3">
            {trending.slice(1, 4).map(blog => {
              return (
                <Link href={`/blogs/${blog.slug}`} key={blog.id}>
                  <div className="sidebox flex bg-white h-40 group rounded-lg hover:scale-[101%] duration-300 shadow-lg relative">
                    <p className="bg-first text-white w-fit px-2 py-1 rounded-br-lg rounded-tl-lg text-xs mb-1 absolute">{blog.tag}</p>
                    <div className="image w-2/5">
                      <Image
                        src={blog.blogImage}
                        width={2000}
                        height={2000}
                        alt={blog.title}
                        className=" rounded-l-lg h-full object-cover" />
                    </div>
                    <div className="content w-3/5 px-3 py-2 flex flex-col">
                      <p className="text-gray-400 text-xs mt-2">{blog.date}</p>
                      <p className="font-semibold text-sm mt-2 group-hover:text-first">{blog.title}</p>
                      <p className="text-xs mt-1">{truncateText(blog.excerpt, 10)}</p>
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

    </>

  );
};

export default Blog;

