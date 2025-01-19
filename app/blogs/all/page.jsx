import Link from "next/link";
import Image from 'next/image';
import calendar from "@/public/calendar.svg";
import { blogs } from '../page';


function allBlogs() {

	if (blogs.length === 0) {
    return (
      <>
        <div className="heading h-80 flex bg-first text-white md:text-5xl px-8 md:px-28 text-4xl">
          <h1 className='self-end mb-10'>All Blogs</h1>
        </div>

        <div className="svg flex flex-col items-center justify-center mt-20">
          <svg className="w-36" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 200 200" viewBox="0 0 512 512" id="bandage">
            <g>
              <g>
                <path fill="#9cc0fd" d="M39.469,163.037l309.527,309.527c34.131,34.131,89.469,34.131,123.601,0l0,0
			c34.131-34.132,34.131-89.47,0-123.601L163.07,39.436c-34.131-34.131-89.469-34.131-123.601,0l0,0
			C5.337,73.568,5.337,128.906,39.469,163.037z"></path>
                <path fill="#9cc0fd" d="M472.597,163.037L163.07,472.564c-34.131,34.131-89.469,34.131-123.601,0l0,0
			c-34.131-34.132-34.131-89.47,0-123.601L348.996,39.436c34.131-34.131,89.469-34.131,123.601,0l0,0
			C506.728,73.568,506.728,128.906,472.597,163.037z"></path>
                <path fill="#fff" d="M277.551,158.329L158.362,277.519c-8.561,8.561-8.561,22.442,0,31.004l45.149,45.149
			c8.561,8.561,22.442,8.561,31.003,0l119.189-119.189c8.561-8.561,8.561-22.442,0-31.003l-45.149-45.149
			C299.993,149.768,286.113,149.768,277.551,158.329z"></path>
                <path fill="#5c8ffc" d="M99.736 64.448c1.239 0 2.478-.473 3.424-1.419l8.495-8.493c1.892-1.89 1.892-4.957 0-6.849-1.892-1.892-4.957-1.892-6.849 0l-8.495 8.493c-1.892 1.89-1.892 4.957 0 6.849C97.257 63.975 98.497 64.448 99.736 64.448zM56.213 96.28l-8.491 8.493c-1.892 1.892-1.892 4.958 0 6.849.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419l8.491-8.493c1.892-1.892 1.892-4.958 0-6.849C61.169 94.389 58.105 94.389 56.213 96.28zM150.458 115.168c1.239 0 2.478-.473 3.424-1.419l8.491-8.493c1.892-1.892 1.892-4.958 0-6.849-1.892-1.892-4.957-1.892-6.849 0l-8.491 8.493c-1.892 1.892-1.892 4.958 0 6.849C147.979 114.695 149.218 115.168 150.458 115.168zM106.934 147.001l-8.495 8.493c-1.892 1.89-1.892 4.957 0 6.849.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419l8.495-8.493c1.892-1.89 1.892-4.957 0-6.849C111.891 145.109 108.826 145.109 106.934 147.001zM100.802 114.104c1.239 0 2.478-.473 3.424-1.419l8.491-8.493c1.892-1.892 1.892-4.958 0-6.849-1.892-1.892-4.957-1.892-6.849 0l-8.491 8.493c-1.892 1.892-1.892 4.958 0 6.849C98.323 113.631 99.562 114.104 100.802 114.104zM401.708 366.418c1.239 0 2.478-.473 3.424-1.419l8.491-8.493c1.892-1.892 1.892-4.958 0-6.849-1.892-1.892-4.957-1.892-6.849 0l-8.491 8.493c-1.892 1.892-1.892 4.958 0 6.849C399.229 365.945 400.469 366.418 401.708 366.418zM358.185 398.251l-8.495 8.493c-1.892 1.89-1.892 4.957 0 6.849.946.946 2.185 1.419 3.424 1.419s2.478-.473 3.424-1.419l8.495-8.493c1.892-1.89 1.892-4.957 0-6.849C363.141 396.359 360.077 396.359 358.185 398.251zM452.43 417.14c1.239 0 2.478-.473 3.424-1.419l8.491-8.493c1.892-1.892 1.892-4.958 0-6.849-1.892-1.892-4.957-1.892-6.849 0l-8.491 8.493c-1.892 1.892-1.892 4.958 0 6.849C449.951 416.667 451.19 417.14 452.43 417.14zM408.903 448.971l-8.491 8.493c-1.892 1.892-1.892 4.958 0 6.849.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419l8.491-8.493c1.892-1.892 1.892-4.958 0-6.849C413.86 447.079 410.795 447.079 408.903 448.971zM407.841 399.315l-8.495 8.493c-1.892 1.89-1.892 4.957 0 6.849.946.946 2.185 1.419 3.424 1.419s2.478-.473 3.424-1.419l8.495-8.493c1.892-1.89 1.892-4.957 0-6.849C412.797 397.423 409.733 397.423 407.841 399.315z"></path>
                <path fill="#5c8ffc" d="M36.045,475.989c36.046,36.049,94.399,36.054,130.449,0l89.539-89.539l89.539,89.539
			c36.046,36.049,94.399,36.054,130.449,0c35.965-35.965,35.965-94.484,0-130.449l-89.539-89.539l89.539-89.539
			c35.965-35.965,35.965-94.484,0-130.451c-36.045-36.049-94.399-36.054-130.449,0l-89.539,89.539l-89.539-89.539
			c-36.045-36.049-94.399-36.054-130.449,0c-36.049,36.045-36.059,94.399,0,130.451L125.584,256l-89.539,89.539
			C-0.005,381.583-0.012,439.938,36.045,475.989z M469.173,352.388c32.187,32.189,32.187,84.563,0,116.752
			c-32.263,32.263-84.486,32.266-116.752,0l-89.539-89.539l116.752-116.753L469.173,352.388z M42.894,159.613
			c-32.267-32.267-32.266-84.484,0-116.754c32.263-32.263,84.486-32.266,116.752,0l89.539,89.539L132.432,249.152L42.894,159.613z
			 M352.421,42.86c32.263-32.263,84.486-32.266,116.752,0c32.187,32.191,32.187,84.565,0,116.754L159.646,469.14
			c-32.263,32.263-84.486,32.266-116.752,0c-32.267-32.267-32.266-84.486,0-116.752L352.421,42.86z"></path>
                <path fill="#5c8ffc" d="M200.085 357.097c5.218 5.217 12.073 7.825 18.928 7.825 6.855 0 13.707-2.609 18.925-7.826l119.19-119.189c10.437-10.437 10.437-27.417 0-37.852l-45.15-45.15c-10.437-10.437-27.414-10.437-37.851 0l-119.19 119.19c-10.437 10.437-10.437 27.417 0 37.852L200.085 357.097zM161.787 280.942l119.19-119.19c3.33-3.33 7.703-4.993 12.077-4.993s8.747 1.663 12.077 4.993l45.15 45.15c6.659 6.659 6.659 17.495 0 24.155L231.09 350.247c-6.659 6.656-17.497 6.656-24.156 0l-45.147-45.15C155.127 298.438 155.127 287.602 161.787 280.942zM408.903 63.029c.946.946 2.185 1.419 3.424 1.419s2.478-.473 3.424-1.419c1.892-1.89 1.892-4.957 0-6.849l-8.491-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.89-1.892 4.957 0 6.849L408.903 63.029zM457.497 111.622c.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419 1.892-1.89 1.892-4.957 0-6.849l-8.491-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.89-1.892 4.957 0 6.849L457.497 111.622zM358.185 113.749c.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419 1.892-1.892 1.892-4.958 0-6.849l-8.495-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.892-1.892 4.958 0 6.849L358.185 113.749zM406.775 162.342c.946.946 2.185 1.419 3.424 1.419s2.478-.473 3.424-1.419c1.892-1.89 1.892-4.957 0-6.849l-8.491-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.89-1.892 4.957 0 6.849L406.775 162.342zM407.841 112.685c.946.946 2.185 1.419 3.424 1.419s2.478-.473 3.424-1.419c1.892-1.892 1.892-4.958 0-6.849l-8.495-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.892-1.892 4.958 0 6.849L407.841 112.685zM106.934 364.999c.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419 1.892-1.892 1.892-4.958 0-6.849l-8.495-8.493c-1.892-1.892-4.957-1.892-6.849 0s-1.892 4.958 0 6.849L106.934 364.999zM155.525 413.593c.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419 1.892-1.89 1.892-4.957 0-6.849l-8.491-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.89-1.892 4.957 0 6.849L155.525 413.593zM56.213 415.721c.946.946 2.185 1.419 3.424 1.419s2.478-.473 3.424-1.419c1.892-1.89 1.892-4.957 0-6.849l-8.491-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.89-1.892 4.957 0 6.849L56.213 415.721zM104.806 464.313c.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419 1.892-1.892 1.892-4.958 0-6.849l-8.495-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.892-1.892 4.958 0 6.849L104.806 464.313zM105.869 414.657c.946.946 2.185 1.419 3.424 1.419 1.239 0 2.478-.473 3.424-1.419 1.892-1.89 1.892-4.957 0-6.849l-8.491-8.493c-1.892-1.892-4.957-1.892-6.849 0-1.892 1.89-1.892 4.957 0 6.849L105.869 414.657z"></path>
              </g>
            </g>
          </svg>
          <p className='text-5xl mt-6 font-light'>Not Found</p>
          <p className='mt-2 ml-3 text-gray-500'>No blogs found. You might want to check out other sections.</p>
        </div>
      </>
    )
  }

	return (

		<section className='mb-10'>
			<div className="heading h-80 flex bg-first text-white md:text-5xl px-8 md:px-28 text-4xl">
				<h1 className='self-end mb-10'>All Blogs</h1>
			</div>


			<div id="arrangement-grid" className="grid md:grid-cols-3 gap-3 mt-10 md:px-28 grid-cols-1 px-8">
				{blogs.map((blog) => (
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

			<div className="arrangement-row hidden">

			</div>
		</section>
	)
}

export default allBlogs
