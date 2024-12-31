import React from 'react'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Header() {
  return (
    <header className=' flex px-20 justify-between items-center w-full h-24'>
      <div className=''>
        <h1 className=' select-none text-2xl font-bold text-first hover:cursor-pointer'>Habilite Clinic.</h1>
      </div>
      <div>
        <nav>
          <div className=' flex justify-center items-center text-md hover:cursor-pointer border-[0.5px] font-[0.5px] rounded-3xl'>


            <label htmlFor="home" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='home' name='navigator' defaultChecked/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Home</p> 
            </label>
            <label htmlFor="about" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='about' name='navigator'/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p> 
            </label>
            <label htmlFor="surgery" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='surgery' name='navigator'/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Surgery</p> 
            </label>
            <label htmlFor="blog" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='blog' name='navigator'/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Blog</p> 
            </label>
            <label htmlFor="contact" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='contact' name='navigator'/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Contact Us</p> 
            </label>
          </div>
        </nav>
      </div>
      <div>
        <button className=' px-3 py-2 select-none rounded-md border-[0.5px] border-first border-solid bg-transparent text-first hover:text-white hover:bg-first text-md'>Book Appointment</button>
      </div>
    </header>
  )
}

export default Header
