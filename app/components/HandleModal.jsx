'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import { FaBook } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function HandleModal() {

  const [showModal,setShowModal]=useState(false)

  return (
    <>
    {!showModal?<button className='group fixed z-20 max-sm:hover:scale-110 sm:bottom-10 bottom-6 right-6 sm:right-10 bg-first flex items-center rounded-lg p-2 text-white sm:text-xl font-semibold shadow-md shadow-black sm:shadow-lg sm:shadow-black' onClick={()=>{setShowModal(true)}} >
      <FaBook className='text-white max-sm:hidden size-8 sm:my-1 mx-2' />
      <div className=' sm:overflow-hidden sm:transition-all  sm:duration-500 sm:ease-in-out w-auto sm:max-w-0 group-hover:sm:max-w-xs group-hover:duration-500 sm:inline-block' ><span className="flex items-center  w-full whitespace-nowrap">Book Appointment <FaArrowRightLong className='size-4 text-white ml-1 pt-1 ' /> </span></div>
    </button>:null}
    <Modal isVisible={showModal} onClose={()=>{setShowModal(false)}}/>
    </>
  )
}

export default HandleModal
