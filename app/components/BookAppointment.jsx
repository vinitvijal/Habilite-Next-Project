import React from 'react'

function BookAppointment() {

  const handleSubmit= async(e)=> {
    'use server'

    console.log(e.get('firstName'),e.get('lastName')?e.get('lastName'):'lastName',e.get('email'),e.get('phoneNum'))
  }

  return (
    <div className='container mx-auto flex items-center justify-center my-8'>
      <form className=' mx-auto h-fit items-center justify-center ' action={handleSubmit}>
        <div className="px-5 pt-3 pb-1 font-semibol text-xl md:text-3xl text-center border-b border-third rounded-tl-md rounded-tr-md ">Book An Appointment</div>
        <div className="px-5 py-3 pb-2 flex flex-col rounded-bl-md rounded-br-md ">
          <div className="flex flex-row justify-end text-xs md:text-sm"><span className="text-red-500">*</span>Indicates required</div>

          <label htmlFor="firstName" className='mt-3 font-semibold' >First Name<span className='text-red-500'>*</span></label>
          <input type="text" name="firstName" id="firstName" className='rounded-md py-1 px-2 border border-third placeholder:text-sm 'placeholder='Enter Your First Name' required/>

          <label htmlFor="lastName" className='mt-3 font-semibold'>Last Name</label>
          <input type="text" name="lastName" id="lastName" className='rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Last Name'  />
          
          <label htmlFor="phoneNum" className='mt-3 font-semibold'>Phone Number<span className='text-red-500'>*</span></label>
          <input type="text" name="phoneNum" id="phoneNum" className='rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Phone Number' required />
          
          <label htmlFor="email" className='mt-3 font-semibold'>Email ID<span className='text-red-500'>*</span></label>
          <input type="email" name="email" id="email" className='rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Enter Your Email Address' required />
          
          <label htmlFor="query" className='mt-3 font-semibold'>Query<span className='text-red-500'>*</span></label>
          <input type="text" name="query" id="query" className='rounded-md py-1 px-2 border border-third placeholder:text-sm' placeholder='Write Your Query' required />

          <button type="submit" className=' bg-first w-full py-1 mt-5 mb-3 hover:bg-second focus:scale-90 text-white font-semibold  rounded-md'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BookAppointment
