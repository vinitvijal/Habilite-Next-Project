'use client'
import React,{useState,useEffect} from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaPen } from "react-icons/fa";

function Modal({isVisible, onClose}) {

  const handleSubmit= async(e)=> {

    console.log(e.get('fullName'),e.get('email'),e.get('phoneNum'))
  }

  const [showAnimation, setShowAnimation]= useState(false);

  useEffect(() => {
    if(isVisible){
      setShowAnimation(true);
    }
  },[isVisible]);
    
  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(() => {
      onClose();
    }, 1000);
  };
    
  if (!isVisible) return null;

  return (
    <div id='appointment' className='fixed z-50 inset-0 bg-opacity-70 bg-black backdrop-blur-sm  w-full flex items-center justify-center' >
      <div className={`mx-12  max-sm:min-w-[60vw] sm:flex  rounded-md ${showAnimation ? 'animate-slideindown' : 'animate-slideoutup'} `}>
        <form className='px-5 bg-white h-fit items-center justify-center shadow-black shadow-sm rounded-md ' >
          <div className=" pt-3 pb-1 font-semibol text-xl sm:text-3xl text-center border-b border-third rounded-tl-md rounded-tr-md ">Book An Appointment</div>
          <div className="sm:px-5  py-3 pb-2 flex flex-col rounded-bl-md rounded-br-md ">

            <div className="flex items-center justify-start">
              <IoPersonSharp className='size-5 -mb-2 mx-1 ' />
              <label htmlFor="firstName" className='mt-3 ' >Full Name</label>
            </div>
            <input type="text" name="fullName" id="fullName" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm 'placeholder='Enter Your Full Name' required/>

            <div className="flex items-center justify-start">
              <MdCall className='size-5 -mb-2 mx-1 ' />
              <label htmlFor="phoneNum" className='mt-3 '>Phone Number</label>
            </div>
            <input type="text" name="phoneNum" id="phoneNum" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Phone Number' required />
            
            <div className="flex items-center justify-start">
              <IoMail className='size-5 -mb-3 mx-1 ' />
              <label htmlFor="email" className='mt-3 '>Email ID</label>
            </div>
            <input type="email" name="email" id="email" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Email Address' required />
            
            <div className="flex items-center justify-start">
              <FaPen className='size-5 -mb-2 mx-1 ' />
              <label htmlFor="query" className='mt-3 '>Query</label>
            </div>
            <textarea name='query' id='query' placeholder='Write Your Query' rows={4} className='rounded-md py-1 px-2 border border-third placeholder:text-sm' required />
            <div className="flex items-center space-x-4 py-3">
              <button type="submit" className=' bg-first w-full py-1 hover:bg-second border-2 border-first hover:border-second focus:scale-90 text-white font-semibold rounded-md' onClick={handleSubmit}>Submit</button>
              <button type="button" className=' w-full py-1 focus:scale-90 border-third border-2 box-border font-semibold  rounded-md hover:bg-third'onClick={handleClose} >Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
