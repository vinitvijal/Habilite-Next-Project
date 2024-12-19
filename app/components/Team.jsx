import React from 'react'

function Team() {
  return (
     
    <div className="w-screen bg-gray-100 py-6 "> 
      <div className='flex item-center justify-center text-4xl font-bold text-first'>ABOUT THE TEAM...</div> <br />
      <p className=' text-center mx-auto mb-10 '> <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. <br /> Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.</b>
      </p>
      <div className="comtainer grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl max-h-xl mx-auto pb-20">
      {/* {card1} */}
      <Card
        image="/doc1.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
           Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien. "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card2} */}
        <Card
        image="/doc2.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
           Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien. "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card3} */}
        <Card
        image="/doc3.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
           Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien. "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card4} */}
        <Card
        image="/doc4.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
           Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien. "
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
       
      </div>
    </div>
  )
}
const Card = ({ image, description, name, date }) => {
  return (
    
    <div className="bg-white cursor-pointer rounded-lg border-3 border-fourth grid grid-cols-2 p-3 border border-third hover:border-first hover:border-3 transform hover:scale-105 transition-transform duration-300 gap-5">

      <div className="h-80 m-2 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-md shadow-third">
        <img
          src = {image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gray-100 p-6 text-sm mb-1 flex items-center justify-center text-center mt-2 transform hover:scale-105 transition-transform duration-300">
        <p className="text-black">{description}</p>
      </div>
     
   <div className='m-5'> 
<div className="p-1 gap-4 text-first text-md font-bold flex justify-between items-center border-t-2 border-first transform hover:scale-105 transition-transform duration-300">
        <div>{name}</div>
        <div>{date}</div>
      </div>
      </div>  
    </div>
  );;
};


export default Team
