import React from 'react'

function BookAppointment() {

  const handleSubmit= async(e)=> {
    'use server'

    console.log(e.get('fullName'),e.get('email'),e.get('phoneNum'))
  }

  return (
    <section id='appointment' className='py-8 container mx-auto flex items-center justify-center my-8 '>
      <div className="mx-12  sm:flex  bg-first rounded-md">
        <div className="h-full text-white w-auto sm:w-72 p-2 sm:p-4 ">
          <span className="-sm:hidden sm:visible font-semibold mt-4 p-1 border text-sm border-third rounded-md">HabiLite</span>
          <p className="font-semibold underline sm:mt-7 mx-auto w-fit text-2xl">Start Your Journey With Us</p>
          <p className='mt-2 sm:mt-4 text-sm sm:text-base px-4' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ad alias quod ratione similique! Distinctio, laboriosam quis ipsum itaque consequuntur culpa repellat beatae rem ullam aliquid velit accusamus cupiditate necessitatibus.</p>
        </div>
      <form className=' bg-white h-fit items-center justify-center shadow-black shadow-sm rounded-md '  action={handleSubmit}>
        <div className="px-5 pt-3 pb-1 font-semibol text-xl md:text-3xl text-center border-b border-third rounded-tl-md rounded-tr-md ">Book An Appointment</div>
        <div className="px-5 py-3 pb-2 flex flex-col rounded-bl-md rounded-br-md ">
          <div className="flex flex-row justify-end text-xs md:text-sm"><span className="text-red-500">*</span>Indicates required</div>

          <label htmlFor="firstName" className='mt-3 font-semibold' >Full Name<span className='text-red-500'>*</span></label>
          <input type="text" name="fullName" id="fullName" className='sm:w-5/6 rounded-md py-1 px-2 border border-third placeholder:text-sm 'placeholder='Enter Your Full Name' required/>

          <label htmlFor="phoneNum" className='mt-3 font-semibold'>Phone Number<span className='text-red-500'>*</span></label>
          <input type="text" name="phoneNum" id="phoneNum" className='sm:w-5/6 rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Phone Number' required />
          
          <label htmlFor="email" className='mt-3 font-semibold'>Email ID<span className='text-red-500'>*</span></label>
          <input type="email" name="email" id="email" className='sm:w-5/6 rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Email Address' required />
          
          <label htmlFor="query" className='mt-3 font-semibold'>Query<span className='text-red-500'>*</span></label>
          <input type="text" name="query" id="query" className=' rounded-md py-1 px-2 border border-third placeholder:text-sm ' placeholder='Write Your Query' required />

          <button type="submit" className=' bg-first w-full py-1 mt-5 mb-3 hover:bg-second focus:scale-90 text-white font-semibold  rounded-md'>Submit</button>
        </div>
      </form>
      </div>
    </section>
  )
}

export default BookAppointment
