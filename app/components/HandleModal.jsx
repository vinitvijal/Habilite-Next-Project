'use client'
import React, { useState } from 'react'
import Modal from './Modal'

function HandleModal() {

  const [showModal,setShowModal]=useState(false)

  return (
    <>
    {!showModal?<button className='fixed z-20 sm:bottom-10 bottom-6 right-6 sm:right-10 hover:-translate-y-4 hover:-translate-x-2 hover:scale-110 hover:duration-500 bg-first rounded-lg p-2 text-white sm:text-xl font-semibold shadow-md shadow-black sm:shadow-lg sm:shadow-black' onClick={()=>{setShowModal(true);setShowButton(false)}}>Book Appointment</button>:null}
    <Modal isVisible={showModal} onClose={()=>{setShowModal(false)}}/>
    </>
  )
}

export default HandleModal
