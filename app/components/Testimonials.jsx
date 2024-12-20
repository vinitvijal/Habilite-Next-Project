"use client";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const originalData = [
  {
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Karl Urban",
    occupation: "Businessman",
  },
  {
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Dilip",
    occupation: "Doctor",
  },
  {
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Rajini",
    occupation: "Doctor",
  },
  {
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Suresh",
    occupation: "Pirate",
  },
];

const data = [originalData[originalData.length - 1], ...originalData, originalData[0]];

function Testimonials() {
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const previousSlide = () => {
    setCurrent((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (current === data.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 500);
    } else if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(data.length - 2);
      }, 500);
    }
  }, [current]);

  return (
    <section className="max-w-screen h-auto overflow-hidden flex flex-col justify-center items-center relative mx-auto">
      <h1 className="text-4xl font-bold text-first my-6">
        Our Testimonials
      </h1>
      <div className="overflow-hidden rounded-md relative w-[300px] h-[500px] text-white flex flex-col justify-center items-center p-0 mb-4 shadow-lg">
        <div
          className={`flex`}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: isTransitioning ? "transform 0.8s ease-out" : "none",
            width: `${data.length * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[500px] flex-shrink-0 flex flex-col justify-center items-center"
              style={{ width: "100%" }}
            >
              <span className="w-[300px] pt-5 min-h-[425px] px-7 text-center text-[18px] text-black items-center">
                {item.review}
              </span>
              <span className="text-2xl text-black font-semibold">
                {item.name}
              </span>
              <span className="text-md text-black font-medium mb-4">
                {item.occupation}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[9%] h-[100%] w-[100%] justify-center gap-[275px] items-center flex text-white text-3xl">
        <button
          onClick={previousSlide}
          className="bg-transparent rounded-full p-2"
        >
          <IoIosArrowBack className="text-fourth text-5xl hover:text-blueribbon transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-transparent rounded-full p-2"
        >
          <IoIosArrowForward className="text-fourth text-5xl hover:text-blueribbon transition-colors" />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
