'use client'
import React, {useState} from 'react'
import { FaChevronDown } from "react-icons/fa6";

function FAQsingle({question,answer}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={` ${isOpen?'bg-first':'bg-white '} border border-third transition-all duration-300 ease-in-out rounded-md overflow-hidden mb-4`}>
      <button onClick={()=>{setIsOpen(!isOpen)}} className="w-full flex justify-between items-center px-6 py-4 focus:outline-none">
        <span className={`font-medium ${isOpen?'text-white':'text-first'} transition-all duration-300 ease-in-out `}>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen?"rotate-180":"rotate-0"}`}><FaChevronDown className={`${isOpen?'text-white':'text-first'}`} /></span>
      </button>
      <div className={`transition-all ${!isOpen?'h-0':'h-fit'} duration-300 ease-in-out overflow-hidden`}>
        <div className="px-6 py-4 bg-gray-100">
          <p className="text-base">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FAQsingle
