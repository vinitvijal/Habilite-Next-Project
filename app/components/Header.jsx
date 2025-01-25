import React from 'react'
import Link from 'next/link'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { ChevronRight } from 'lucide-react'

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
              <input type="radio" className='sr-only peer' id='home' name='navigator' defaultChecked />
              <p className="select-none relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out peer-checked:text-first peer-checked:font-semibold peer-checked:before:w-full">Home</p>
            </label>

            <label htmlFor="about" className='hover:cursor-pointer group'>
              <input type="radio" className='sr-only peer' id='about' name='dropdown' />
              <p className="select-none h-20  relative flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out group-hover:text-first">About <svg className="group-hover:rotate-180 group-hover:translate-y-[2px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>

              <div className="DropdownMenuContent group-hover:display-appear group hidden group-hover:block visible absolute bg-white w-48 z-50 translate-x-2 -translate-y-2 shadow-xl rounded-md">

                <p className="DropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  About Habilite Clinic
                </p>

                <p className="DropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Dr. Kapil Agarwal
                </p>

              </div>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
            </label>

            <label htmlFor="surgery" className='hover:cursor-pointer group'>
              <input type="radio" className='sr-only peer' id='surgery' name='dropdown' />
              <p className="select-none h-20 relative flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out group-hover:text-first">Surgery <svg className="group-hover:rotate-180 group-hover:translate-y-[2px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
              <div className="DropdownMenuContent hidden hover:block  group-hover:block group-hover:display-appear absolute bg-white w-40 z-50 translate-x-2 -translate-y-2 shadow-2xl rounded-md">

                <div className="DropdownMenuItem relative group2 flex h-10 justify-between items-center pl-4 pr-2 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Laparoscopic
                  <ChevronRight className='h-3' />
                  <div className="subdropdown hidden group2-hover:block animate-custfadein py-1 hover:block absolute top-0 left-full -translate-x-1 bg-white whitespace-nowrap shadow-md rounded-md text-black">
                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Gall Stones</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Hernia</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Rectal Prolapse</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Appendix</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Gerd</Link>
                    </p>
                  </div>
                </div>

                <div className="DropdownMenuItem relative group3 flex h-10 justify-between items-center pl-4 pr-2 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Laser Surgery
                  <ChevronRight className='h-3' />
                  <div className="subdropdown hidden group3-hover:block animate-custfadein hover:block absolute py-1 top-0 left-full -translate-x-1 bg-white whitespace-nowrap shadow-md rounded-md text-black">
                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Hemorrhoids/Piles
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Anal Fissure
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Pilonidal Sinus
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Anal Fistula
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Lipoma
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Circumcision
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="DropdownMenuItem relative group4 flex h-10 justify-between items-center pl-4 pr-2 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Bariatrics
                  <ChevronRight className='h-3' />
                  <div className="subdropdown hidden group4-hover:block animate-custfadein py-1 hover:block absolute top-0 left-full -translate-x-1 bg-white shadow-md rounded-md text-black whitespace-nowrap">
                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Bariatric Surgery
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Non-Surgical Weight Loss Program
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Surgery for Diabetes
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/">Intragastric Balloon
                      </Link>
                    </p>
                  </div>
                </div>

              </div>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
            </label>

            <label htmlFor="blog" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='blog' name='navigator' />
              <Link href="/blogs">
                <p className="select-none  relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:bg-opacity-45 transition-all duration-300 ease-in-out peer-checked:text-first peer-checked:font-semibold peer-checked:before:w-full">Blogs</p>
              </Link>
            </label>

            <label htmlFor="contact" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='contact' name='navigator' />
              <p className="select-none  relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:bg-opacity-45 transition-all duration-300 ease-in-out peer-checked:text-first peer-checked:font-semibold peer-checked:before:w-full">Contact Us</p>
            </label>


            <label htmlFor="surgery" className='hover:cursor-pointer group'>
              <input type="radio" className='sr-only peer' id='surgery' name='dropdown' />
              <p className="select-none h-20 relative flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out group-hover:text-first">More <svg className="group-hover:rotate-180 group-hover:translate-y-[2px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
              <div className="DropdownMenuContent hidden hover:block group-hover:block group-hover:display-appear absolute bg-white w-48 z-50 translate-x-2 -translate-y-2 shadow-2xl rounded-md">

                <p className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  International Patient
                </p>

              </div>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
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
