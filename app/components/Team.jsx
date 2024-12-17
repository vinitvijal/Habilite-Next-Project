import React from 'react'

function Team() {
  return (
     
    <div className="h-screen w-screen bg-white py-6 ">
      <div className='flex items-center justify-center text-2xl text-bold'>ABOUT THE TEAM...</div> <br />
      <div className="comtainer grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl max-h-xl mx-auto pb-20 ">
      {/* {card1} */}
      <Card
        image="/sample.jpg"
          description="Hello everyone."
          name="AB HADLEY"
          date="May 26">
        </Card>
        {/* {card2} */}
        <Card
        image=""
          description="Hello everyone."
          name="AB HADLEY"
          date="May 26">
        </Card>
        {/* {card3} */}
        <Card
        image=""
          description="Hello everyone."
          name="AB HADLEY"
          date="May 26">
        </Card>
        {/* {card4} */}
        <Card
        image=""
          description="Hello everyone."
          name="AB HADLEY"
          date="May 26">
        </Card>
        {/* {card5} */}
        <Card
        image=""
          description="Hello everyone."
          name="AB HADLEY"
          date="May 26">
        </Card>
        {/* {card6} */}
        <Card
        image=""
          description="Hello everyone."
          name="AB HADLEY"
          date="May 26">
        </Card>
      </div>
    </div>
  )
}
const Card = ({ image, description, name, date }) => {
  return (
    <div className="bg-white cursor-pointer rounded-lg shadow-md shadow-second border-3 border-fourth overflow-hidden">

      <div className="h-44 px-3 mt-4 ">
        <img
          src = {image}
          className="w-full h-full object-cover"
        />
</div>
      <div className="p-6">
        <p className="text-black text-sm mb-4">{description}</p>
      </div>
      
<div className="px-6 pb-3 text-black text-md font-bold flex justify-between items-center ">
        <div>{name}</div>
        <div>{date}</div>
      </div>
    </div>
  );;
};


export default Team
