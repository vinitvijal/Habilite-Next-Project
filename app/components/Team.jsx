import React from 'react'

function Team() {
  return (
     
    <div className="w-screen bg-gray-100 py-6 "> 
      <div className='flex item-center justify-center text-4xl font-bold text-first'>Meet Our Team</div> <br />
      <p className=' text-center mx-auto mb-6'> <b>We are a team of qualified psychiatrists and psychologists from premier institutions of the country. <br />We are highly motivated to provide cutting egde evidence based management for mental health issues tailored to individual needs.</b>
      </p>
      <div className="comtainer grid grid-cols-1 md:grid-cols-2 gap-16 max-w-8xl max-h-2xl mx-auto p-20">
      {/* {card1} */}
      <Card
        image="/doc1.jpg"
          greeting="Hello everyone."
          description="         
          MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
          Founder & Head, Habilite Clinic
          Consultant Psychiatrist and Deaddiction Specialist "
          goal="We are a team of doctors and clinical psychologists from the most premier institutes in the country. We offer end-to-end solutions for assessing and managing all mental-health related issues"
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
        goal="We are a team of doctors and clinical psychologists from the most premier institutes in the country. We offer end-to-end solutions for assessing and managing all mental-health related issues"
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
        goal="We are a team of doctors and clinical psychologists from the most premier institutes in the country. We offer end-to-end solutions for assessing and managing all mental-health related issues"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card4} */}
        <Card
        image="/doc4.jpg"
        greeting="Hello everyone."
        description="         
        MBBS (MAMC), MD (Gold Medalist) Psychiatry (AIIMS, Delhi), DNB
        Founder & Head, Habilite Clinic
        Consultant Psychiatrist and Deaddiction Specialist "
        goal="We are a team of doctors and clinical psychologists from the most premier institutes in the country. We offer end-to-end solutions for assessing and managing all mental-health related issues"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
       
      </div>
    </div>
  )
}
const Card = ({ image, greeting,description,goal, name, date }) => {
  return (
    
    <div className="bg-white cursor-pointer rounded-lg border-3 border-fourth grid grid-cols-2 p-2 border border-third hover:border-first hover:border-3 transform hover:scale-105 transition-transform duration-300">

      <div className="flex justify-center item-center transform hover:scale-105 transition-transform duration-300 ">
        <img
          src = {image}
          className="w-80 h-80 rounded-full object-cover shadow-third shadow-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 h-full gap-2 text-lg flex flex-col items-center justify-center mt-2">
      <p className="text-black font-bold">{greeting}</p>
        <p className="text-black font-bold">{description}</p>
        <p className="text-black font-bold">{goal}</p>
      </div>
     
   <div className='m-3'> 
<div className="p-1 gap-3 text-first text-md font-bold flex justify-between items-center border-t-2 border-first transform hover:scale-105 transition-transform duration-300">
        <div>{name}</div>
        <div>{date}</div>
      </div>
      </div>  
    </div>
  );;
};


export default Team
