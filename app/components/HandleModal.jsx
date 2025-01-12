'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import { FaBook } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa"; 
import { GrSchedules } from "react-icons/gr";

function HandleModal() {

  const [showModal,setShowModal]=useState(false)

  return (
    <>
    <button type='button' className='group fixed z-20 max-sm:hover:scale-105 transition-all duration-300 sm:bottom-28 bottom-20 right-6 sm:right-10 bg-[#25d366] flex items-center rounded-lg p-2 text-white sm:text-xl font-semibold' > 
      <FaWhatsapp className='text-white size-6 sm:size-8 sm:my-1 mx-2' /> 
      <div className=' sm:overflow-hidden sm:transition-all  sm:duration-500 sm:ease-in-out w-auto sm:max-w-0 group-hover:sm:max-w-xs group-hover:duration-500 sm:inline-block' ><span className="flex items-center  w-full whitespace-nowrap">Message Us<FaArrowRightLong className='size-4 text-white ml-1 pt-1 ' /> </span></div> 
    </button>
    {!showModal?<button className='group fixed z-20 max-sm:hover:scale-105 transition-all duration-300 sm:bottom-10 bottom-6 right-6 sm:right-10 bg-first flex items-center rounded-lg p-2 text-white sm:text-xl font-semibold' onClick={()=>{setShowModal(true)}} >
      <GrSchedules  className='text-white max-sm:hidden size-8 sm:my-1 mx-2' />
      <div className=' sm:overflow-hidden sm:transition-all  sm:duration-500 sm:ease-in-out w-auto sm:max-w-0 group-hover:sm:max-w-xs group-hover:duration-500 sm:inline-block' ><span className="flex items-center  w-full whitespace-nowrap">Book Appointment <FaArrowRightLong className='size-4 text-white ml-1 pt-1 ' /> </span></div>
    </button>:null}
    <Modal isVisible={showModal} onClose={()=>{setShowModal(false)}}/>
    </>
  )
}

export default HandleModal
