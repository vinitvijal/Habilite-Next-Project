import { Newspaper, PhoneCall, Scroll, User, UserRoundSearch } from "lucide-react";

function page() {
  return (
    // <div>
    //     Dashboard

    //     Book Appointment
    //     View Appointments
    // </div>
    <div className="w-full py-10 px-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Admin Dashboard
              </h2>
              {/* <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight  text-left">
                Managing a small business today is already tough.
              </p> */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-third/30 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <PhoneCall className="w-8 h-8 stroke-1" />
              <a href="/" className="flex flex-col">
                <h3 className="text-xl tracking-tight">Book your appoinments</h3>
                <p className="max-w-xs text-base text-zinc-600">
                We aim to simplify your experience, making appointments quicker and more efficient than ever.
                </p>
              </a>
            </div>
            <div className="bg-third/30 rounded-md  aspect-square p-6 flex justify-between flex-col">
              <Scroll className="w-8 h-8 stroke-1" />
              <a href='/' className="flex flex-col">
                <h3 className="text-xl tracking-tight">View appointments</h3>
                <p className="max-w-xs text-base text-zinc-600">
                Easily view and manage your scheduled appointments at any time.
                </p>
              </a>
            </div>

            <div className="bg-third/30 rounded-md aspect-square p-6 flex justify-between flex-col">
              <UserRoundSearch className="w-8 h-8 stroke-1" />
              <a href='/' className="flex flex-col">
                <h3 className="text-xl tracking-tight">Contact us</h3>
                <p className="max-w-xs text-base text-zinc-600">
                Have questions? Reach out to us for assistance and support.
                </p>
              </a>
                
            </div>
            <div className="bg-third/30 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Newspaper className="w-8 h-8 stroke-1" />
              <a href='/' className="flex flex-col">
              <h3 className="text-xl tracking-tight">Read Blogs</h3>
                <p className="max-w-xs text-base text-zinc-600">
                Discover insights and tips to enhance your business journey with our latest articles.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
