import React from 'react'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Header() {
  return (
    <header className=' flex px-48 justify-between items-center w-full h-24 border-b'>
      <div className=''>
        <h1 className=' text-2xl font-bold text-first'>Habilite Clinic.</h1>
      </div>
      <div>
        <nav>
          <ul className=' flex justify-center items-center gap-20 font-medium text-lg  '>
            <li>Home</li>
            <li>About</li>
            <li>Surgery</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div>
        <button className=' px-3 py-2 rounded-md bg-first text-white'>Book Appointment</button>
      </div>
    </header>
  )
}

export default Header
