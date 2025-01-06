import React from 'react'
import * as Accordion from "@radix-ui/react-accordion";
import * as Separator from "@radix-ui/react-separator";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import classNames from 'classnames';

function Header() {
  return (
    <header className=' flex px-4 gap-3 items-center w-full h-20 border-b-[0.5px] border-b-gray-300 md:gap-0 md:h-24 md:px-10 md:justify-between md:border-none lg:px-20'>

      {/* HAMBURGER */}
      <div className="hamburger md:hidden">
        <label htmlFor="checker">
          <input type="checkbox" name="checker" id="checker" className='sr-only peer' />
          <svg width="32" height="38" className="peer-checked:text-white peer-checked:bg-first z-10 peer-checked:rounded-md ease-in-out" viewBox="-5 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

          <div className=" hidden peer-checked:absolute peer-checked:flex peer-checked:flex-col gap-5 z-10 bg-white w-screen p-7 justify-center">
          
          <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>

            <Accordion.Item className="AccordionItem" value="item-1">
			        <AccordionTrigger className="AccordionTrigger flex justify-between items-center w-full text-2xl accordion-open:font-bold">Home</AccordionTrigger>
			        <AccordionContent>
                <div className="AccordionContentBox mt-3">
                  <div className="subsection">
                    <p className='text-xl'>Sub-Section 1</p>
                    <p className='text-first'>Links</p>
                  </div>

                  <div className="subsection mt-3">
                    <p className='text-xl'>Sub-Section 2</p>
                    <p className='text-first'>Links</p>
                  </div>
				        </div>
			        </AccordionContent>
		        </Accordion.Item>
            <Separator.Root orientation="horizontal" className="w-full h-[0.5px] mt-3 bg-third" />

            <Accordion.Item className="AccordionItem" value="item-2">
			        <AccordionTrigger className="AccordionTrigger mt-4 flex justify-between items-center w-full text-2xl accordion-open:font-bold">About</AccordionTrigger>
			        <AccordionContent>
                <div className="AccordionContentBox mt-3">
                  <div className="subsection">
                    <p className='text-xl'>Sub-Section 1</p>
                    <p className='text-first'>Links</p>
                  </div>

                  <div className="subsection mt-3">
                    <p className='text-xl'>Sub-Section 2</p>
                    <p className='text-first'>Links</p>
                  </div>
				        </div>
			        </AccordionContent>
		        </Accordion.Item>
            <Separator.Root orientation="horizontal" className="w-full h-[0.5px] mt-3 bg-third" />

            <Accordion.Item className="AccordionItem" value="item-3">
			        <AccordionTrigger className="AccordionTrigger mt-4 flex justify-between items-center w-full text-2xl accordion-open:font-bold">Surgery</AccordionTrigger>
			        <AccordionContent>
                <div className="AccordionContentBox mt-3">
                  <div className="subsection">
                    <p className='text-xl'>Sub-Section 1</p>
                    <p className='text-first'>Links</p>
                  </div>

                  <div className="subsection mt-3">
                    <p className='text-xl'>Sub-Section 2</p>
                    <p className='text-first'>Links</p>
                  </div>
				        </div>
			        </AccordionContent>
		        </Accordion.Item>
            <Separator.Root orientation="horizontal" className="w-full h-[0.5px] mt-3 bg-third" />

            <Accordion.Item className="AccordionItem" value="item-4">
			        <AccordionTrigger className="AccordionTrigger mt-4 flex justify-between items-center w-full text-2xl accordion-open:font-bold">Blog </AccordionTrigger>
			        <AccordionContent>
                <div className="AccordionContentBox mt-3">
                  <div className="subsection">
                    <p className='text-xl'>Sub-Section 1</p>
                    <p className='text-first'>Links</p>
                  </div>

                  <div className="subsection mt-3">
                    <p className='text-xl'>Sub-Section 2</p>
                    <p className='text-first'>Links</p>
                  </div>
				        </div>
			        </AccordionContent>
		        </Accordion.Item>
            <Separator.Root orientation="horizontal" className="w-full h-[0.5px] mt-3 bg-third" />

            <Accordion.Item className="AccordionItem" value="item-5">
			        <AccordionTrigger className="AccordionTrigger mt-4 flex justify-between items-center w-full text-2xl accordion-open:font-bold">Contact Us</AccordionTrigger>
			        <AccordionContent>
                <div className="AccordionContentBox mt-3">
                  <div className="subsection">
                    <p className='text-xl'>Sub-Section 1</p>
                    <p className='text-first'>Links</p>
                  </div>

                  <div className="subsection mt-3">
                    <p className='text-xl'>Sub-Section 2</p>
                    <p className='text-first'>Links</p>
                  </div>
				        </div>
			        </AccordionContent>
		        </Accordion.Item>

	        </Accordion.Root>

          </div>
        </label>
      </div>{/* HAMBURGER ENDS */}
		
      <div className=''>
        <h1 className=' select-none text-2xl font-bold text-first hover:cursor-pointer md:text-lg lg:text-2xl'>Habilite Clinic.</h1>
      </div>

     	<div className=''>
        <nav>
          <div className=' hidden md:flex justify-center items-center text-md md:text-sm hover:cursor-pointer border-[0.5px] font-[0.5px] rounded-3xl lg:text-base'>
          <label htmlFor="home" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='home' name='navigator' defaultChecked/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Home</p> 
            </label>

            <label htmlFor="about" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='about' name='navigator'/>
                <DropdownMenu.Root>
			            <DropdownMenu.Trigger asChild>
                    <p className="select-none flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
			            </DropdownMenu.Trigger>

			            <DropdownMenu.Portal>
				            <DropdownMenu.Content className="DropdownMenuContent bg-white w-32 translate-x-5 shadow-xl" sideOffset={10}>

					            <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-white hover:cursor-pointer hover:bg-first">
                        Test 1
					            </DropdownMenu.Item>
                      <Separator.Root orientation="horizontal" className="w-full h-[0.5px] bg-third" />

					            <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-white hover:cursor-pointer hover:bg-first">
						            Test 2 
					            </DropdownMenu.Item>
                      <Separator.Root orientation="horizontal" className="w-full h-[0.5px] bg-third" />

					            <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-white hover:cursor-pointer hover:bg-first" disabled>
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
			            <DropdownMenu.Trigger asChild>
                    <p className="select-none flex items-center gap-1 rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Surgery <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></p>
			            </DropdownMenu.Trigger>

			            <DropdownMenu.Portal>
				            <DropdownMenu.Content className="DropdownMenuContent bg-white w-32 translate-x-5 shadow-xl" sideOffset={10}>

					            <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-white hover:cursor-pointer hover:bg-first">
                        Laparoscopic 
					            </DropdownMenu.Item>
                      <Separator.Root orientation="horizontal" className="w-full h-[0.5px] bg-third" />

					            <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-white hover:cursor-pointer hover:bg-first">
						            Laser Surgery
					            </DropdownMenu.Item>
                      <Separator.Root orientation="horizontal" className="w-full h-[0.5px] bg-third" />

					            <DropdownMenu.Item className="DropdownMenuItem h-10 flex items-center px-4 py-1 hover:text-white hover:cursor-pointer hover:bg-first" disabled>
						            Diabetes
					            </DropdownMenu.Item>

                    </DropdownMenu.Content>
			            </DropdownMenu.Portal>
		            </DropdownMenu.Root>
              {/* <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">About</p>  */}
            </label>

            <label htmlFor="blog" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='blog' name='navigator'/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Blogs</p> 
            </label>

            <label htmlFor="contact" className='hover:cursor-pointer'>
              <input type="radio" className='sr-only peer' id='contact' name='navigator'/>
              <p className="select-none rounded-3xl px-5 py-2 text-gray-500 hover:text-black peer-checked:text-white peer-checked:bg-first transition-all duration-300 ease-in-out">Contact Us</p> 
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

const AccordionTrigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);

export default Header
