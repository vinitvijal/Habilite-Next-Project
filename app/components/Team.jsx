import React from 'react'

function Team() {
  return (
     
    <div className="w-screen bg-gray-100 py-6 "> 
      <div className='flex item-center justify-center text-4xl text-bold text-first'>ABOUT THE TEAM...</div> <br />
      <p className=' text-center mx-auto mb-6 '> <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. <br /> Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.</b>
      </p>
      <div className="comtainer grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl max-h-xl mx-auto pb-20 ">
      {/* {card1} */}
      <Card
        image="/doc1.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card2} */}
        <Card
        image="/doc2.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card3} */}
        <Card
        image="/doc3.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card4} */}
        <Card
        image="/doc4.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card5} */}
        <Card
        image="/doc5.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
"
          name="DR. ADIN AZAM"
          date="May 26">
        </Card>
        {/* {card6} */}
        <Card
        image="/doc6.jpg"
          description="Hello everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam viverra bibendum eros, nec consectetur nulla feugiat eu. Duis sollicitudin metus vitae ipsum dignissim, a consequat sapien.
"
          name="DR. ADIN AZAM"
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
        <p className="text-black text-sm mb-4 text-center">{description}</p>
      </div>
   <div className='m-5'> 
<div className="px-6 pb-3 text-black text-md font-bold flex justify-between items-center border-t-2 ">
        <div>{name}</div>
        <div>{date}</div>
      </div>
      </div>  
    </div>
  );;
};


export default Team
