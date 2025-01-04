import React from "react";
import Image from "next/image";
import { HosHeading } from "./AnimationClient";

function Hospitals() {
  const hospitals = [
    {
      id: 1,
      name: "Hospital 1",
      image:"/image1.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 2,
      name: "Hospital 1",
      image: "/image2.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 3,
      name: "Hospital 1",
      image: "/image3.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 4,
      name: "Hospital 1",
      image: "/image4.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 5,
      name: "Hospital 1",
      image:"/image5.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    },
    {
      id: 6,
      name: "Hospital 1",
      image: "/image6.png",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus expedita fugiat qui autem consequatur consequuntur aspernatur ipsam animi eaque."
    }
  ]
  return (
    <section
      id="affiliations"
      className="w-screen justify-center items-center flex-col px-40"
    >
      <div className="flex flex-col items-center justify-center py-10">
        <HosHeading/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="rounded-xl group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <div className="h-96 w-96 ">
              <img
                src={hospital.image}
                alt= {hospital.name}
                className="h-full w-full object-cover group-hover:roate-3 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="text-3xl font-bold text-white pb-4">
                  {hospital.name}
                </h1>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {hospital.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
    </section>
  );
    {/* // <section id='affiliations' className='w-screen px-28 justify-center items-center text-center flex-col'>
    //   <div className='justify-center items-center flex p-2 mb-6'>
    //     <h1 className='text-[#1463f3] font-bold text-4xl p-2'>AFFILIATIONS</h1>
    //   </div>
    //   <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center items-center md:px-20 px-10 lg:gap-12 gap-6 w-full'>
    //     <div className='bg-white rounded-2xl hover:duration-500 duration-300 hover:translate-y-1 hover:scale-105 justify-center hover:shadow-2xl  shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
    //       <Image src={hp1} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
    //       <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80  z-10 w-full flex flex-col  px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
    //       <h1 className='md:text-3xl text-xl font-semibold text-white z-10 flex-1'>ABC Hospital</h1>
    //       <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
    //       <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //       </div>
    //     </div>
    //     <div className='bg-white rounded-2xl hover:duration-500 duration-300 hover:translate-y-1 hover:scale-105 justify-center hover:shadow-2xl  shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
    //       <Image src={hp2} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
    //       <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80  z-10 w-full flex flex-col  px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
    //       <h1 className='md:text-3xl text-xl font-semibold text-white z-10 flex-1'>ABC Hospital</h1>
    //       <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
    //       <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //       </div>
    //     </div>
    //     <div className='bg-white rounded-2xl hover:duration-500 duration-300 hover:translate-y-1 hover:scale-105 justify-center hover:shadow-2xl  shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
    //       <Image src={hp3} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
    //       <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80  z-10 w-full flex flex-col  px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
    //       <h1 className='md:text-3xl text-xl font-semibold text-white z-10 flex-1'>ABC Hospital</h1>
    //       <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
    //       <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //       </div>
    //     </div>
    //     <div className='bg-white rounded-2xl hover:duration-500 duration-300 hover:translate-y-1 hover:scale-105 justify-center hover:shadow-2xl  shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
    //       <Image src={hp4} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
    //       <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80  z-10 w-full flex flex-col  px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
    //       <h1 className='md:text-3xl text-xl font-semibold text-white z-10 flex-1'>ABC Hospital</h1>
    //       <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
    //       <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //       </div>
    //     </div>
    //     <div className='bg-white rounded-2xl hover:duration-500 duration-300 hover:translate-y-1 hover:scale-105 justify-center hover:shadow-2xl  shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
    //       <Image src={hp5} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
    //       <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80  z-10 w-full flex flex-col  px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
    //       <h1 className='md:text-3xl text-xl font-semibold text-white z-10 flex-1'>ABC Hospital</h1>
    //       <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
    //       <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //       </div>
    //     </div>
    //     <div className='bg-white rounded-2xl hover:duration-500 duration-300 hover:translate-y-1 hover:scale-105 justify-center hover:shadow-2xl  shadow-sm items-center text-right grid relative md:h-[36vh] h-[28vh]'>
    //       <Image src={hp6} className='w-full h-full absolute rounded-2xl z-0' alt="hp1"></Image>
    //       <div className='opacity-0 transition-opacity ease-in duration-700 hover:opacity-100 bg-gradient-to-r from-black/20 to-black/80  z-10 w-full flex flex-col  px-6 py-8 rounded-2xl md:h-[36vh] h-[28vh]'>
    //       <h1 className='md:text-3xl text-xl font-semibold text-white z-10 flex-1'>ABC Hospital</h1>
    //       <div className="w-full h-[1px] mt-1 bg-[rgb(204,208,216)] z-10"></div>
    //       <p className='text-[#ccd0d8] animate-slideInLeft z-10 font-semibold md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut dicta alias mollitia, a earum. Officiis enim illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}
  
}


export default Hospitals;
