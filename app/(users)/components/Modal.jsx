'use client'
import React,{useState,useEffect} from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { createAppointment } from '@/actions/appointment';

function Modal({isVisible, onClose}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [query, setQuery] = useState('')


  const [loading, setLoading] = useState(false);  
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);



  async function handleSubmit(){
    if(!name || !email || !phone || !query) return alert('Please fill all the fields')

    
    // let response = await createAppointment(name, email, phone, query)
    // console.log(response)
    setLoading(true);  
    setSubmissionMessage(''); 
    try {
      const response = await createAppointment(name, email, phone, query);
      setSubmissionMessage('Appointment created successfully!'); 
      setIsSuccess(true)
    } catch (error) {
      setSubmissionMessage('Failed to create appointment. Please try again.');
      setIsSuccess(false)
    } finally {
      setLoading(false);
    }
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
      setSubmissionMessage('');
    },350);
  };
    
  if (!isVisible ) return null;

  return (
    <div id='appointment' className='fixed z-50 inset-0 bg-opacity-40 bg-black backdrop-blur-md  w-full flex items-center justify-center ' >
      <div className={`mx-12 px-6 pt-5 max-sm:min-w-[60vw] w-full max-w-md bg-white shadow-black shadow-sm  rounded-md ${isVisible ? 'animate-fadein' : ''} ${!showAnimation?'animate-fadeout':''} `}>
        <h1 className=" mb-4 font-semibold text-xl sm:text-2xl text-center">Book An Appointment</h1>
        
        {loading ? (
          <div className="flex justify-center items-center flex-1 py-16 w-full h-full "><AiOutlineLoading3Quarters className=' text-first size-12 animate-spin' /></div>
        ) : submissionMessage ? (
          <div className="flex mx-auto flex-col justify-center space-y-6 items-center text-center pt-10 pb-4">
            <div className="flex flex-col items-center gap-x-4">
              {isSuccess ? (
                <FaRegCheckCircle className='text-green-600 text-4xl ' />
              ) : (
                <RxCrossCircled className='text-red-600 text-4xl ' />
              )}
              <p className={`text-lg text-wrap text-medium ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>{submissionMessage}</p>
            </div>
            <button type="button" className='mx-auto w-1/2 py-1  focus:scale-90 border-third border-2 box-border font-semibold  rounded-md hover:bg-third'onClick={handleClose} >Close</button>
          </div>
        ) : (
        <div className=' rounded-md'>
          <div className="flex flex-col space-y-3">
            <div className="">
              <label htmlFor="firstName" className='block font-medium mb-2' ><IoPersonSharp className='text-xl  inline-block mr-2' />Full Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="fullName" id="fullName" className='rounded-md p-2 border border-third w-full placeholder:text-sm 'placeholder='Enter Your Full Name' required/>
            </div>

            <div className="">
              <label htmlFor="phoneNum" className='block font-medium mb-2'><MdCall className='text-xl  inline-block mr-2' />Phone Number</label>
              <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} name="phoneNum" id="phoneNum" className='rounded-md p-2 border border-third w-full placeholder:text-sm ' placeholder='Enter Your Phone Number' required />
            </div>
            
            <div className="">
              <label htmlFor="email" className='block font-medium mb-2'><IoMail className='text-xl  inline-block mr-2' />Email ID</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className=' rounded-md p-2 border w-full border-third placeholder:text-sm' placeholder='Enter Your Email Address' required />
            </div>
            
            <div className="">
              <label htmlFor="query" className='block font-medium mb-2'><FaPen className='text-xl  inline-block mr-2' />Query</label>
              <textarea name='query' value={query} onChange={(e)=>setQuery(e.target.value)} id='query' placeholder='Write Your Query' rows={4} className='rounded-md w-full p-2 border border-third placeholder:text-sm' required />
            </div>

            <div className="flex items-center space-x-4 pb-4">
              <button type="submit" className=' bg-first w-full py-1 hover:bg-second border-2 border-first hover:border-second focus:scale-90 text-white font-semibold rounded-md' onClick={handleSubmit}>Submit</button>
              <button type="button" className=' w-full py-1 focus:scale-90 border-third border-2 box-border font-semibold  rounded-md hover:bg-third'onClick={handleClose} >Cancel</button>
            </div>

          </div>
        </div>
        )}

      </div>
    </div>
  )
}

export default Modal
