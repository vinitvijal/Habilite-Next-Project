"use client"

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogPortal, DialogClose, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Accordion, AccordionContent, AccordionHeader, AccordionTrigger, AccordionItem } from "@radix-ui/react-accordion";
import { Separator } from '@radix-ui/react-separator'
import AppointmentButton from './HeadBook'

function Header() {
  const selected = "text-first before:w-full hover:text-first";
  const selectedDropdown = "text-first before:w-10/12 hover:text-first before:bg-center";
  const dash = "";
  const selectedAcc = "bg-first text-white data-open:bg-first";
  const pathname = usePathname();
  return (
    <header className='shadow-md flex justify-between px-4 gap-3 items-center w-full h-20 border-b-[0.5px] border-b-gray-300 md:gap-0 md:h-24 md:px-10 md:border-none lg:px-20'>
      <div className='flex md:block items-center gap-3'>

        <Dialog>
          <DialogTrigger className='md:hidden'>
            <Menu className='text-gray-600 md:hidden h-6 mt-1' />
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay className='fixed inset-0 bg-black/50 z-50' />

            <DialogContent className='DialogContent overflow-x-clip pb-20 overflow-scroll h-screen' asChild>
              <div className='fixed top-0 left-0 w-72 h-screen z-50 bg-white shadow-2xl'>
                <DialogTitle asChild>
                  <div className='w-full whitespace-nowrap top-0 h-24 select-none px-4 flex items-center justify-between text-2xl font-bold text-first hover:cursor-pointer md:text-lg lg:text-2xl'>
                    Habilite Clinic.
                    <DialogClose asChild>
                      <X className='text-black h-6' />
                    </DialogClose>
                  </div>
                </DialogTitle>

                <DialogDescription asChild>
                  <div className="h-full flex flex-col gap-4 pl-2 pr-2">
                    <div className="buttons flex flex-col py-6 text-lg gap-1">

                      <Link href="/">
                        <p className={cn('py-3 px-5 mb-1 rounded-full', pathname == "/" && selectedAcc)}>Home</p>
                      </Link>


                      <Accordion type='single' collapsible>
                        <AccordionItem value="item1">

                          <AccordionHeader>
                            <AccordionTrigger className={cn(pathname.startsWith("/about") && selectedAcc, 'data-open:bg-blue-300 group duration-200')} asChild>
                              <div className={cn('py-3 px-5 mb-1 rounded-full flex justify-between items-center', pathname.startsWith("/about") && selectedAcc)}>About <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-500' /></div>
                            </AccordionTrigger>
                          </AccordionHeader>

                          <AccordionContent className='AccordionContent overflow-clip' asChild>
                            <div className='text-md pl-4 flex flex-col gap-1'>
                              <Link href="/about">
                                <p className={cn('rounded-full pl-4 py-2', pathname == "/about" && selectedAcc)}>About Habilite Clinic</p>
                              </Link>
                              <Link href="/about/dr-kapil-about">
                                <p className={cn('rounded-full pl-4 py-2', pathname == "/about/dr-kapil-about" && selectedAcc)}>Dr. Kapil Agarwal</p>
                              </Link>
                            </div>
                          </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="item2">

                          <AccordionHeader>
                            <AccordionTrigger className={cn('data-open:bg-blue-300 group duration-200', pathname.startsWith("/surgery") && selectedAcc)} asChild>
                              <div className={cn('py-3 px-5 mb-1 rounded-full flex justify-between items-center', pathname.startsWith("/surgery") && selectedAcc)}>Surgery <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-500' /></div>
                            </AccordionTrigger>
                          </AccordionHeader>

                          <AccordionContent className='AccordionContent overflow-clip' asChild>
                            <Accordion type='single' collapsible>
                              <div className='text-md pl-4 flex flex-col py-2 gap-1'>
                                <AccordionItem value="subitem1">

                                  <AccordionHeader>
                                    <AccordionTrigger className='data-open:bg-blue-300 group duration-200' asChild>
                                      <div className='rounded-full pl-4 mb-2 py-2 flex items-center justify-between pr-3'>Laparoscopic <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-500' /></div>
                                    </AccordionTrigger>
                                  </AccordionHeader>

                                  <AccordionContent className='AccordionContent overflow-clip' asChild>
                                    <div className='text-md pl-4 flex flex-col gap-1'>
                                      <Link href="/surgery/gall-stone">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/gall-stone" && selectedAcc)}>Gall Stones</p>
                                      </Link>
                                      <Link href="/surgery/hernia">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/hernia" && selectedAcc)}>Hernia</p>
                                      </Link>
                                      <Link href="/surgery/rectal-prolapse">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/rectal-prolapse" && selectedAcc)}>Rectal Prolapse</p>
                                      </Link>
                                      <Link href="/surgery/appendix">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/appendix" && selectedAcc)}>Appendix</p>
                                      </Link>
                                      <Link href="/surgery/gerd">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/gerd" && selectedAcc)}>Gerd</p>
                                      </Link>
                                      <Separator className='bg-gray-300 h-[1.5px] w-11/12' orientation='horizontal' />
                                    </div>
                                  </AccordionContent>

                                </AccordionItem>
                                <AccordionItem value="subitem2">

                                  <AccordionHeader>
                                    <AccordionTrigger className='data-open:bg-blue-300 group duration-200' asChild>
                                      <div className='rounded-full mb-2 pl-4 py-2 flex items-center justify-between pr-3'>Laser Surgery <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-500' /></div>
                                    </AccordionTrigger>
                                  </AccordionHeader>

                                  <AccordionContent className='AccordionContent overflow-clip' asChild>
                                    <div className='text-md pl-4 flex flex-col gap-1'>
                                      <Link href="/surgery/piles">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/piles" && selectedAcc)}>Hemorrhoids/Piles</p>
                                      </Link>
                                      <Link href="/surgery/anal-fissure">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/anal-fissure" && selectedAcc)}>Anal Fissure</p>
                                      </Link>
                                      <Link href="/surgery/pilonidal-sinus">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/pilonidal-sinus" && selectedAcc)}>Pilonidal Sinus</p>
                                      </Link>
                                      <Link href="/surgery/anal-fistula">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/anal-fistula" && selectedAcc)}>Anal Fistula</p>
                                      </Link>
                                      <Link href="/surgery/lipoma">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/lipoma" && selectedAcc)}>Lipoma</p>
                                      </Link>
                                      <Link href="/surgery/circumcision">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/circumcision" && selectedAcc)}>Circumcision</p>
                                      </Link>
                                      <Separator className='bg-gray-300 h-[1.5px] w-11/12' orientation='horizontal' />
                                    </div>
                                  </AccordionContent>

                                </AccordionItem>
                                <AccordionItem value="subitem3">

                                  <AccordionHeader>
                                    <AccordionTrigger className='data-open:bg-blue-300 group duration-200' asChild>
                                      <div className='rounded-full pl-4 py-2 mb-2 flex items-center justify-between pr-3'>Bariatrics <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-500' /></div>
                                    </AccordionTrigger>
                                  </AccordionHeader>

                                  <AccordionContent className='AccordionContent overflow-clip' asChild>
                                    <div className='text-md pl-4 flex flex-col gap-1'>
                                      <Link href="/surgery/bariatric-surgery">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/bariatric-surgery" && selectedAcc)}>Bariatric Surgery</p>
                                      </Link>
                                      <Link href="/surgery/medical-weight-loss-program">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/medical-weight-loss-program" && selectedAcc)}>Non-Surgical Weight Loss Program</p>
                                      </Link>
                                      <Link href="/surgery/surgery-for-diabetes">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/surgery-for-diabetes" && selectedAcc)}>Surgery for Diabetes</p>
                                      </Link>
                                      <Link href="/surgery/intraGastric-balloon">
                                        <p className={cn('rounded-full pl-4 py-2', pathname == "/surgery/intraGastric-balloon" && selectedAcc)}>Intragastric Balloon</p>
                                      </Link>
                                      <Separator className='bg-gray-300 h-[1.5px] w-11/12' orientation='horizontal' />
                                    </div>
                                  </AccordionContent>

                                </AccordionItem>
                              </div>
                            </Accordion>
                          </AccordionContent>

                        </AccordionItem>

                        <Link href="/blogs">
                          <p className={cn('py-3 px-5 mb-1 rounded-full', pathname.startsWith("/blogs") && selectedAcc)}>Blogs</p>
                        </Link>

                        <Link href="/contact-us">
                          <p className={cn('py-3 px-5 mb-1 rounded-full whitespace-nowrap', pathname.startsWith("/contact-us") && selectedAcc)}>Contact Us</p>
                        </Link>

                        <AccordionItem value="item3">

                          <AccordionHeader>
                            <AccordionTrigger className='data-open:bg-blue-300 group duration-200' asChild>
                              <div className={cn('py-3 mb-2 px-5 rounded-full flex justify-between items-center', pathname.startsWith("/more") && selectedAcc)}>More <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-500' /></div>
                            </AccordionTrigger>
                          </AccordionHeader>

                          <AccordionContent className='AccordionContent overflow-hidden' asChild>
                            <div className='text-md pl-4 flex flex-col gap-1'>
                              <Link href="/more/international-patient">
                                <p className={cn('rounded-full pl-4 py-2', pathname == "/more/international-patient" && selectedAcc)}>International Patient</p>
                              </Link>
                              <Link href="/more/faqs">
                                <p className={cn('rounded-full pl-4 py-2', pathname == "/more/faqs" && selectedAcc)}>FAQs</p>
                              </Link>
                            </div>
                          </AccordionContent>

                        </AccordionItem>
                      </Accordion>
                    </div>
                    {/* <button className='whitespace-nowrap overflow-hidden px-3 py-2 w-full flex justify-center select-none rounded-md border-[0.5px] border-first border-solid bg-transparent text-first text-md duration-200 text-lg active:scale-95 shadow-md active:shadow-none'>Book Appointment</button> */}
                      <AppointmentButton/>
                  </div>

                </DialogDescription>
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>

        <h1 className=' select-none text-2xl font-bold text-first hover:cursor-pointer md:text-lg lg:text-2xl'>Habilite Clinic.</h1>
      </div>


      <div className=''>
        <nav>
          <div className=' hidden md:flex justify-center items-center text-md md:text-sm hover:cursor-pointer font-[0.5px] rounded-3xl lg:text-base'>
            <div className='hover:cursor-pointer'>
              <Link href={'/'} className={cn("select-none relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-11px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out", pathname == "/" && selected)}>Home</Link>
            </div>

            <div className='hover:cursor-pointer group'>
              <p className={cn("select-none h-20  relative flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out group-hover:text-first before:content-[''] before:bg-first before:w-0 before:absolute before:left-0 before:h-[2.5px] before:bottom-[0.7rem] before:rounded-md before:transition-all before:duration-300", pathname.startsWith("/about") && selectedDropdown)}>About <svg className="group-hover:rotate-180 group-hover:translate-y-[2px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>

              <div className="DropdownMenuContent group-hover:display-appear group hidden group-hover:block visible absolute bg-white w-48 z-50 translate-x-2 -translate-y-2 shadow-xl rounded-md">

                <p className="DropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  <Link href="/about">About Habilite Clinic</Link>
                </p>

                <p className="DropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  <Link href="/about/dr-kapil-about">Dr. Kapil Agarwal</Link>
                </p>

              </div>
            </div>

            <div className='hover:cursor-pointer group'>
              <p className={cn("select-none h-20 relative flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out group-hover:text-first before:content-[''] before:bg-first before:w-0 before:h-[2.5px] before:bottom-[0.7rem] before:absolute before:left-0 before:self-center before:rounded-md before:transition-all before:duration-300", pathname.startsWith("/surgery") && selectedDropdown)}>Surgery <svg className="group-hover:rotate-180 group-hover:translate-y-[2px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
              <div className="DropdownMenuContent hidden hover:block  group-hover:block group-hover:display-appear absolute bg-white w-40 z-50 translate-x-2 -translate-y-2 shadow-2xl rounded-md">

                <div className="DropdownMenuItem relative group2 flex h-10 justify-between items-center pl-4 pr-2 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Laparoscopic
                  <ChevronRight className='h-3' />
                  <div className="subdropdown hidden group2-hover:block animate-custfadein py-1 hover:block absolute top-0 left-full -translate-x-1 bg-white whitespace-nowrap shadow-md rounded-md text-black">
                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/gall-stone">Gall Stones</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/hernia">Hernia</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/rectal-prolapse">Rectal Prolapse</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/appendix">Appendix</Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/gerd">Gerd</Link>
                    </p>
                  </div>
                </div>

                <div className="DropdownMenuItem relative group3 flex h-10 justify-between items-center pl-4 pr-2 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Laser Surgery
                  <ChevronRight className='h-3' />
                  <div className="subdropdown hidden group3-hover:block animate-custfadein hover:block absolute py-1 top-0 left-full -translate-x-1 bg-white whitespace-nowrap shadow-md rounded-md text-black">
                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/piles">Hemorrhoids/Piles
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/anal-fissure">Anal Fissure
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/pilonidal-sinus">Pilonidal Sinus
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/anal-fistula">Anal Fistula
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/lipoma">Lipoma
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/circumcision">Circumcision
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="DropdownMenuItem relative group4 flex h-10 justify-between items-center pl-4 pr-2 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                  Bariatrics
                  <ChevronRight className='h-3' />
                  <div className="subdropdown hidden group4-hover:block animate-custfadein py-1 hover:block absolute top-0 left-full -translate-x-1 bg-white shadow-md rounded-md text-black whitespace-nowrap">
                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/bariatric-surgery">Bariatric Surgery
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/medical-weight-loss-program">Non-Surgical Weight Loss Program
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/surgery-for-diabetes">Surgery for Diabetes
                      </Link>
                    </p>

                    <p className="subDropdownMenuItem text-md h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                      <Link href="/surgery/intraGastric-balloon">Intragastric Balloon
                      </Link>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className='hover:cursor-pointer'>
              <Link href="/blogs">
                <p className={cn("select-none  relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md before:transition-all before:duration-300 hover:before:w-full rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:bg-opacity-45 transition-all duration-300 ease-in-out", pathname.startsWith("/blogs") && selected)}>Blogs</p>
              </Link>
            </div>

            <div htmlFor="contact" className='hover:cursor-pointer'>
              <Link href="/contact-us">
                <p className={cn("select-none  relative before:content-[''] before:bg-first before:w-0 before:h-[2px] before:absolute before:left-0 before:bottom-[-10px] before:rounded-md hover:before:w-full before:transition-all before:duration-300 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:bg-opacity-45 transition-all duration-300 ease-in-out", pathname.startsWith("/contact-us") && selected)}>Contact Us</p>
              </Link>
            </div>


            <div className='hover:cursor-pointer group'>
              <p className={cn("select-none before:content-[''] before:bg-first before:w-0 before:absolute before:left-0 before:h-[2.5px] before:bottom-[0.7rem] before:rounded-md before:transition-all before:duration-300 h-20 relative flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black transition-all duration-300 ease-in-out group-hover:text-first", pathname.startsWith("/more") && selectedDropdown)}>More <svg className="group-hover:rotate-180 group-hover:translate-y-[2px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
              <div className="DropdownMenuContent hidden hover:block group-hover:block group-hover:display-appear absolute bg-white w-48 z-50 translate-x-2 -translate-y-2 shadow-2xl rounded-md">
                <Link href='/more/international-patient'>
                  <p className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                    International Patient
                  </p>
                </Link>

                <Link href='/more/faqs'>
                  <p className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-first hover:cursor-pointer hover:translate-x-1 transition-all duration-150">
                    FAQs
                  </p>
                </Link>
              </div>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
            </div>
          </div>
        </nav>
      </div>

      <div>
        {/* <button className=' px-3 py-2 hidden md:flex select-none rounded-md border-[0.5px] border-first border-solid bg-transparent text-first hover:text-white hover:bg-first text-md duration-200 md:text-sm lg:text-base'>Book Appointment</button> */}
        <AppointmentButton className='hidden md:block'/>
      </div>
    </header>
  )
}


export default Header
