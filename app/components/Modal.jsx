'use client'
import React,{useState,useEffect} from 'react'
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
      <div className={`mx-12  max-sm:min-w-[60vw] sm:flex  bg-first rounded-md ${showAnimation ? 'animate-slideindown' : 'animate-slideoutup'} `}>
        <div className="max-sm:hidden h-full text-white w-auto sm:w-72 p-2 sm:p-4 ">
          <span className="font-semibold mt-4 p-1 border text-sm border-third rounded-md">HabiLite</span>
          <p className=" font-semibold underline mt-7 mx-auto w-fit text-2xl">Start Your Journey With Us</p>
          <p className='mt-4 text-sm sm:text-base ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ad alias quod ratione similique! Distinctio, laboriosam quis ipsum itaque consequuntur culpa repellat beatae rem ullam aliquid velit accusamus cupiditate necessitatibus.</p>
        </div>
        <form className=' bg-white h-fit items-center justify-center shadow-black shadow-sm rounded-md ' >
          <div className="px-5 pt-3 pb-1 font-semibol text-xl sm:text-3xl text-center border-b border-third rounded-tl-md rounded-tr-md ">Book An Appointment</div>
          <div className="px-5 sm:px-8 py-3 pb-2 flex flex-col rounded-bl-md rounded-br-md ">

            <label htmlFor="firstName" className='mt-3 font-semibold' >Full Name</label>
            <input type="text" name="fullName" id="fullName" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm 'placeholder='Enter Your Full Name' required/>

            <label htmlFor="phoneNum" className='mt-3 font-semibold'>Phone Number</label>
            <input type="text" name="phoneNum" id="phoneNum" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Phone Number' required />
            
            <label htmlFor="email" className='mt-3 font-semibold'>Email ID</label>
            <input type="email" name="email" id="email" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Email Address' required />
            
            <label htmlFor="query" className='mt-3 font-semibold'>Query</label>
            <textarea name='query' id='query' placeholder='Write Your Query' rows={4} className='rounded-md py-1 px-2 border border-third placeholder:text-sm' required />
            <button type="submit" className=' bg-first w-full py-1 mt-5 mb-2 hover:bg-second focus:scale-90 text-white font-semibold rounded-md' onClick={handleSubmit}>Submit</button>
            <button type="button" className=' w-full py-1 mb-3 focus:scale-90 border-third border-2 font-semibold  rounded-md hover:bg-third'onClick={handleClose} >Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
