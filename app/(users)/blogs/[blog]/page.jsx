import * as Separator from '@radix-ui/react-separator';
import React from 'react';
import Image from 'next/image';
import matter from 'gray-matter';
import { categories } from '../index';
import Link from 'next/link';
import { featured } from '../index';

import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { getBlogBySlug } from '@/actions/blogs';

export const dynamic = 'force-static'


export async function generateMetadata({ params } ){
  const blogData = await getBlogBySlug((await params).blog)
  const fileContent = blogData.blogContent
  const { content, data } = matter(fileContent)


  return {
    title: data.title,
    description: data.description,
    author: [{ name: data.author }],
    keywords: data.tag,
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      creator: data.author,
      images: [data.blogImage],
    },
    openGraph: {
      images: data.blogImage,
    },
    twitter: {
      card: 'summary_large_image',
      images: [
        {
          url: data.blogImage,
          alt: data.title,
        },
      ],
    },
  }
}

export default async function Page({ params }) {

  // const filepath = `https://habilite.s3.ap-south-1.amazonaws.com/blogpage-content/${(await params).blog}.md`


  const blogData = await getBlogBySlug((await params).blog)
  const fileContent = blogData.blogContent


  // if (!fs.existsSync(filepath)) {
  //   notFound()
  //   return
  // }

  // const response = await fetch(filepath, 
  //   // { cache: 'force-cache', next: { revalidate: 86400 }}
  // );
  // if (!response.ok) {
  //   notFound();
  //   return;
  // }
  // const fileContent = await response.text();




  const { content, data } = matter(fileContent)

  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)

  const htmlcontent = (await processor.process(content)).toString()

  console.log(data)
  return (
    <>
      <section className='flex md:pl-28 gap-5'>
        <div className="main-content md:w-7/12">
          <div className="lg:max-w-3xl px-5 ml-auto flex flex-col mt-20 items-center">

            <h1 className="text-4xl font-light text-center">{data.title}</h1>
            <p className="text-[#869AB8] mt-8 text-center text-lg">{data.description}</p>

            <div className="author-box mt-10 w-full">
              <Separator.Root orientation="horizontal" className="mx-0 mb-5 w-1/4 lg:w-full h-[0.5px] bg-gray-200" />

              <div className="content flex items-center gap-5 justify-between">
                <div className="content-1 flex gap-3 items-center ">
                  <Image
                    src={data.authorImage}
                    alt="Author"
                    width={50}
                    height={50}
                    className="object-cover rounded-full" />

                  <div className="name-date text-sm">
                    <p className=''>{data.author}</p>
                    <p className='text-[#869AB8]'>Published on {new Date(data.date).toDateString()}</p>
                  </div>
                </div>

                <div className="socials flex gap-2 items-center">
                  <p className='text-[#869AB8] mr-4 text-xs'>SHARE: </p>
                  <svg width="22" height="22" className='text-[#869AB8]' viewBox="0 0 15 15" fill="gray" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z" fill="currentColor"></path></svg>
                  <svg width="22" height="22" className='text-[#869AB8]' viewBox="0 0 15 15" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  <svg width="22" height="22" className='text-[#869AB8]' viewBox="0 0 15 15" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>

              </div>
              <Separator.Root orientation="horizontal" className="mx-0 mt-5 w-1/4 lg:w-full h-[0.5px] bg-gray-200" />

            </div>

            <Image
              src={data.blogImage}
              alt="Blog-Image"
              width={2000}
              height={2000}
              className="w-full mt-5" />


            <div dangerouslySetInnerHTML={{ __html: htmlcontent }} className='mt-5 self-start prose prose-h2:text-second prose-md w-full mb-24'></div>
          </div>


        </div>
        <div className="md:block hidden side-bar sticky top-10 w-5/12 h-screen mt-24 pl-10">
          <div className="sec-1">
            <div className="title">
              <p className='text-sm text-gray-500 font-light'>Discover by Topic</p>
              <p className='text-2xl'>Categories</p>
            </div>

            <div className="content pr-44 mt-5">
              <div className="pills text-[14px] grid grid-cols-2 gap-1">
                {categories.map((cat) => {
                  return (
                    <Link key={cat} href={`/blogs/category/${categories.indexOf(cat)}`}>
                      <div className="select-none flex font items-center justify-center text-center text-first py-2 rounded-xl bg-[#d6e3fd] hover:bg-[#a0c0ff] cursor-pointer active:bg-[#95b3f1]">{cat}</div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="sec-2 mt-14">
            <div className="title">
              <p className='text-sm text-gray-500 font-light'>Chosen by the editor</p>
              <p className='text-2xl'>Editor's Pick</p>
            </div>

            <div className="content mt-3 flex flex-col cursor-pointer">
              {featured.slice(0, 2).map(blog => {
                return (
                  <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                  <div className="box w-4/5 h-28 flex group">
                    <div className="left-img w-1/5 h-full flex items-center justify-center">
                      <div className="img w-20 h-20 items-center bg-cover flex rounded-full" style={{ backgroundImage: `url(${blog.blogImage})` }}></div>
                    </div>

                    <div className="right-content pl-3 ">
                      <p className='bg-[#d6e3fd] mt-3 text-first w-fit px-2 py-[2px] text-xs rounded-full'>{blog.tag}</p>
                      <p className='text-lg group-hover:text-first'>{blog.title}</p>
                      <div className="below-content flex items-center gap-1 mt-1">
                        <p className='text-xs'>{blog.author}</p>
                        <div className="circle bg-gray-400 h-1 w-1 rounded-full"></div>
                        <p className='text-gray-500 text-xs'>{blog.date}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                )
              }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}