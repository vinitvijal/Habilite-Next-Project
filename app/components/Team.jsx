import React from 'react'

function Team() {
  return (
     
    <div className="w-screen bg-white p-12"> 
      <div className='flex items-center justify-center text-6xl text-first px-10'>Meet Our Team</div> <br />
      <p className=' text-second flex items-center justify-center text-center mx-auto mb-8 text-lg px-10'> <b>We are a team of qualified psychiatrists and psychologists from premier institutions of the country. <br />We are highly motivated to provide cutting egde evidence based management for mental health issues tailored to individual needs.</b>
      </p>
      <div className="comtainer grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-h-xl mx-auto p-10">
      {/* {card1} */}
      <Card
        image="/doc1.jpg"
          greeting="Hello everyone."
          description="         
          MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
          Founder & Head, Habilite Clinic
          Consultant Psychiatrist and Deaddiction Specialist "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card2} */}
        <Card
        image="/doc2.jpg"
        greeting="Hello everyone."
        description="         
        MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card3} */}
        <Card
        image="/doc3.jpg"
        greeting="Hello everyone."
        description="         
        MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card4} */}
        {/* <Card
        image="/doc4.jpg"
        greeting="Hello everyone."
        description="         
        MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "
        goal="We are a team of doctors and clinical psychologists from the most premier institutes in the country. We offer end-to-end solutions for assessing and managing all mental-health related issues"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card> */}
       
      </div>
    </div>
  )
}
const Card = ({ image, greeting,description, name, date }) => {
  return (
    
    <div className="bg-white cursor-pointer rounded-lg border-3 border-fourth p-3 border border-third hover:border-first hover:border-3 transform hover:scale-105 transition-transform duration-300">

      <div className="flex justify-center item-center transform hover:scale-105 transition-transform duration-300 w-full ">
        <img
          src = {image}
          className="w-80 h-80 rounded-full object-cover shadow-third shadow-lg"
        />
      </div>
      <div className="bg-gray-100 p-4  gap-2 text-lg flex flex-col items-center justify-center text-center m-4">
      <p className="text-black">{greeting}</p>
        <p className="text-black">{description}</p>
      </div>
     
   <div className='m-3'> 
<div className="p-3 gap-2 text-first text-lg font-bold flex justify-between items-center border-t-2 border-first transform hover:scale-105 transition-transform duration-300">
        <div >{name}</div>
        <div>{date}</div>
      </div>
      </div>  
    </div>
  );;
};
export default Team
