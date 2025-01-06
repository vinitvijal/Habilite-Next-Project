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

  const [showAnimation, setShowAnimation]= useState(true);

  // useEffect(() => {
  //   if(isVisible){
  //     setShowAnimation(true);
  //   }
  // },[isVisible]);
    
  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(() => {
      onClose();
      setShowAnimation(true);
    },590);
  };
    
  if (!isVisible ) return null;

  return (
    <div id='appointment' className='fixed z-50 inset-0 bg-opacity-70 bg-black backdrop-blur-sm  w-full flex items-center justify-center ' >
      <div className={`mx-12 px-6 pt-5 max-sm:min-w-[60vw] w-full max-w-md bg-white shadow-black shadow-sm  rounded-md ${isVisible ? 'animate-slideindown' : ''} ${!showAnimation?'animate-slideoutup':''} `}>
        <h1 className=" mb-4 font-bold text-xl sm:text-2xl text-center">Book An Appointment</h1>
        <form className=' rounded-md' >
          <div className="flex flex-col space-y-3">
            <div className="">
              <label htmlFor="firstName" className='block font-medium mb-2' ><IoPersonSharp className='text-xl  inline-block mr-2' />Full Name</label>
              <input type="text" name="fullName" id="fullName" className='rounded-md p-2 border border-third w-full placeholder:text-sm 'placeholder='Enter Your Full Name' required/>
            </div>

            <div className="">
              <label htmlFor="phoneNum" className='block font-medium mb-2'><MdCall className='text-xl  inline-block mr-2' />Phone Number</label>
              <input type="text" name="phoneNum" id="phoneNum" className='rounded-md p-2 border border-third w-full placeholder:text-sm ' placeholder='Enter Your Phone Number' required />
            </div>
            
            <div className="">
              <label htmlFor="email" className='block font-medium mb-2'><IoMail className='text-xl  inline-block mr-2' />Email ID</label>
              <input type="email" name="email" id="email" className=' rounded-md p-2 border w-full border-third placeholder:text-sm' placeholder='Enter Your Email Address' required />
            </div>
            
            <div className="">
              <label htmlFor="query" className='block font-medium mb-2'><FaPen className='text-xl  inline-block mr-2' />Query</label>
              <textarea name='query' id='query' placeholder='Write Your Query' rows={4} className='rounded-md w-full p-2 border border-third placeholder:text-sm' required />
            </div>

            <div className="flex items-center space-x-4 pb-4">
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
