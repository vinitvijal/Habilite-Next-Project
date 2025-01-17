


export default async function Page({ params }) {
  const slug = (await params).slug
  return (
    <section className=''>
      <div className="heading h-80 flex bg-first text-white md:text-5xl px-8 md:px-32 text-4xl">
        <h1 className='self-end mb-10'>Latest Blogs</h1>
      </div>


      <div id="arrangement-grid" className="grid md:grid-cols-3 gap-3 mt-10 md:px-32 grid-cols-1 px-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full relative h-[65vh] bg-white rounded-lg flex flex-col shadow-lg hover:scale-[102%] transition-all duration-300">
            <Image
              src={blog.blogImage}
              width={2000}
              height={2000}
              alt={blog.title}
              className="w-full rounded-t-lg h-2/4 object-cover"
            />

            <p className="bg-first text-white w-fit px-2 py-1 rounded-br-lg text-sm mb-1 absolute">{blog.tag}</p>

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

      <div className="arrangement-row hidden">

      </div>
    </section>
  )
}