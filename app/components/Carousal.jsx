"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



function Carousal({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    );
  };

  const getVisibleCards = () => {
    const total = data.length;
    const indices = [
      currentIndex,
      (currentIndex + 1) % total,
      (currentIndex + 2) % total,
    ];
    return indices.map((index) => data[index]);
  };

  return (
    <section className="max-w-screen h-auto mx-auto overflow-hidden flex flex-col justify-center items-center relative pb-5">
  <h1 className="text-4xl font-bold text-first my-6">Our Testimonials</h1>
  <div className="relative w-[500px] lg:w-[900px] h-[500px] flex justify-center items-center">
    <div className="flex justify-center items-center lg:gap-7 gap-4 w-5/6">
      {getVisibleCards().map((item, index) => (
        <div
          key={index}
          className="w-1/4 lg:w-2/9 lg:h-[260px] h-[180px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-md shadow-md p-2 group relative transition-all duration-300 ease-in-out lg:hover:w-[300px] hover:w-[180px] lg:hover:h-[500px] hover:h-[280px] lg:hover:p-5 hover:p-3"
        >
          <span className="absolute lg:w-[300px] w-[160px] pt-5 min-h-[425px] px-7 text-center text-[12px] lg:text-[18px] text-black items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out fade-in-out">
            {item.review}
          </span>
          <span className="lg:text-2xl text-lg text-black font-semibold group-hover: transition duration-300 ease-in-out group-hover:mt-auto">
            {item.name}
          </span>
          <span className="lg:text-base text-sm text-black font-medium mb-4 group-hover:opacity-100 transition duration-300 ease-in-out">
            {item.occupation}
          </span>
        </div>
      ))}
    </div>

    <div className="absolute top-1/2 left-[30px] -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:-left-[80px]">
      <button onClick={previousSlide} className="bg-transparent rounded-full p-2">
        <IoIosArrowBack className="text-fourth text-5xl hover:text-first transition-colors" />
      </button>
    </div>
    <div className="absolute top-1/2 right-[30px] -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:-right-[80px]">
      <button onClick={nextSlide} className="bg-transparent rounded-full p-2">
        <IoIosArrowForward className="text-fourth text-5xl hover:text-first transition-colors" />
      </button>
    </div>
  </div>
</section>


  );
}

export default Carousal;