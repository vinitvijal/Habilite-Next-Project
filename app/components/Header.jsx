import React from 'react'
import * as Separator from "@radix-ui/react-separator";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import classNames from 'classnames';

function Header() {
  return (
    <header className=' flex justify-between px-4 gap-3 items-center w-full h-20 border-b-[0.5px] border-b-gray-300 md:gap-0 md:h-24 md:px-10 md:border-none lg:px-20'>
        
      <div className=''>
        <h1 className=' select-none text-2xl font-bold text-first hover:cursor-pointer md:text-lg lg:text-2xl'>Habilite Clinic.</h1>
      </div>

      <div className=''>
        <nav>
          <div className=' hidden md:flex justify-center items-center text-md md:text-sm hover:cursor-pointer font-[0.5px] rounded-3xl lg:text-base'>
          <label htmlFor="home" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='home' name='navigator' defaultChecked/>
              <p className="select-none relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out peer-checked:text-first peer-checked:font-semibold peer-checked:before:w-full">Home</p> 
            </label>

            <label htmlFor="about" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='about' name='navigator'/>
                <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                    <p className="select-none relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out peer-checked:before:w-full">About <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent bg-white w-32 translate-x-5 shadow-xl rounded-md" sideOffset={10}>

                                <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer">
                                    Test 1
                                </DropdownMenu.Item>

                                <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer">
                                    Test 2 
                                </DropdownMenu.Item>

                                <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer">
                                    Test 3 
                                </DropdownMenu.Item>

                    </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
            </label>

            <label htmlFor="surgery" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='surgery' name='navigator'/>
                <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild className=''>
                    <p className="select-none relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Surgery <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent bg-white w-32 translate-x-5 shadow-2xl rounded-md" sideOffset={10}>

                                <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer">
                                    Laparoscopic 
                                </DropdownMenu.Item>

                                <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer">
                                    Laser Surgery
                                </DropdownMenu.Item>

                                <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer rounded-md">
                                    Diabetes
                                </DropdownMenu.Item>

                    </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
            </label>

            <label htmlFor="blog" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='blog' name='navigator'/>
              <p className=" relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-first peer-checked:font-semibold peer-checked:bg-opacity-45 transition-all duration-300 ease-in-out peer-checked:before:w-full">Blogs</p> 
            </label>

            <label htmlFor="contact" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='contact' name='navigator'/>
              <p className="select-none relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:bg-opacity-45 transition-all duration-300 ease-in-out peer-checked:text-first peer-checked:font-semibold peer-checked:before:w-full">Contact Us</p> 
            </label>
          </div>
        </nav>
      </div>

      <div>
        <button className=' px-3 py-2 hidden md:flex select-none rounded-md border-[0.5px] border-first border-solid bg-transparent text-first hover:text-white hover:bg-first text-md duration-200 md:text-sm lg:text-base'>Book Appointment</button>
      </div>
    </header>
  )
}


export default Header
