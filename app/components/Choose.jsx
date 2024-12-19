import React from "react";
import Image from "next/image";
function Choose() {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="text-gray-800 mb-5 pt-20">
        <div className="container mx-auto px-20 mb-5 text-center">
          <h5 className="text-first font-bold uppercase tracking-wide text-3xl">
            Why Choose Us? Dr Apara Arachi.
          </h5>
          <h1 className="text-second text-2xl font-bold mb-10">
            Compassionate care, experienced professionals, and state-of-the-art
            facilities <br /> —your health is our priority.
          </h1>
          <p className=" text-sm mb-16">
            Trusted care, personalized treatment, and a commitment to your
            well-being—because you deserve the best.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto pb-20 mx-auto">
          <div className="text-center p-6 rounded-lg transform hover:-translate-y-10 transition-transform duration-300 bg-white shadow-xl cursor-pointer rounded-xl">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg shadow-second">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Experienced Medical Professionals
            </h3>
            <p className="text-sm text-gray-500">
              Our clinic is home to a team of highly qualified doctors,
              specialists, and healthcare staff with decades of combined
              experience. We ensure every patient receives expert guidance and
              treatment tailored to their unique needs. 
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg transform hover:-translate-y-10 transition-transform duration-300 shadow-xl cursor-pointer rounded-xl">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg shadow-second">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Advanced Facilities & Technology
            </h3>
            <p className="text-sm text-gray-500">
              We pride ourselves on utilizing state-of-the-art medical equipment
              and modern facilities to provide accurate diagnoses and effective
              treatments. From routine checkups to specialized procedures, we
              deliver top-notch care.
            </p>
          </div>
          <div className="text-center p-6 bg-white transform hover:-translate-y-10 transition-transform duration-300 shadow-xl cursor-pointer rounded-xl ">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg shadow-second">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Patient-Centered Approach.
            </h3>
            <p className="text-sm text-gray-500">
              At our clinic, we prioritize your comfort, care, and well-being.
              Our friendly staff and streamlined processes ensure a hassle-free
              experience, so you can focus on what matters most—your health.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols3 gap-6 max-w-5xl mx-auto px-4 pb-10"></div>
      </div>
    </div>
  );
}

export default Choose;
