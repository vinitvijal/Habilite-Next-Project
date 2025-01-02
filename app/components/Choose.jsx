import React from "react";
import Image from "next/image";
function Choose() {
  return (
    <section id="Choose" className="py-20 w-screen">
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h2 className="text-first text-center font-bold uppercase tracking-wide text-3xl m-8 p-8">
          Why Choose Us?
        </h2>
      </div>
      <div className="container flex items-center justify-center mx-auto m-10 mt-10">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 ">
          <div className="rounded-2xl shadow-xl p-6 text-center group w-64 h-96 bg-white  relative m-4 hover:ring hover:ring-first  transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200  group-hover:bg-white  group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first form duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
              <h3 className="text-xl font-bold mb-2">
                Your health is our priority.
              </h3>
              <p className="text-third-100">
                Trusted care, personalized treatment, and a commitment to your
                well-being—because you deserve the best, We ensure every patient
                receives expert guidance and treatment tailored to their unique
                needs  you deserve the best, We ensure every patient.
              </p>
            </div>
          </div>
          <div className="rounded-2xl shadow-xl p-6 text-center group w-64 h-96 bg-white  relative m-4 hover:ring hover:ring-first   transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200  group-hover:bg-white group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first form duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Experienced Medical Professionals
            </h3>
            <p className="text-third-100">
              Our clinic is home to a team of highly qualified doctors,
              specialists, and healthcare staff with decades of combined
              experience. We ensure every patient receives expert guidance and
              treatment tailored to their unique needs.
            </p>
          </div>
          <div className="rounded-2xl shadow-xl p-6 text-center group w-64 h-96 bg-white  relative m-4 hover:ring hover:ring-first transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200  group-hover:bg-white   group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first  transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Advanced Facilities & Technology
            </h3>
            <p className="text-third-100">
              We pride ourselves on utilizing state-of-the-art medical equipment
              and modern facilities to provide accurate diagnoses and effective
              treatments. From routine checkups to specialized procedures, we
              deliver top-notch care.
            </p>
          </div>
          <div className="rounded-2xl shadow-xl p-6 text-center group w-64 h-96 bg-white  relative m-4 hover:ring hover:ring-first  transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-first  flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200  group-hover:bg-white  group-hover:shadow-md transform duration-300">
              <span className="text-3xl md:text-5xl text-white  group-hover:text-first form duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Patient-Centered Approach.
            </h3>
            <div>
              <p className="text-third-100 ">
                At our clinic, we prioritize your comfort, care, and well-being.
                Our friendly staff and streamlined processes ensure a
                hassle-free experience, so you can focus on what matters
                most—your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
