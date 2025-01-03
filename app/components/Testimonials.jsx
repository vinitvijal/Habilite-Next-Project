import React from 'react';

import Carousal from './Carousal';
const data = [{ review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry sojdmwiemi eijdiow wiojeofihjo iojhfioh ijhuiohowi fiohiofhwio fiohrfi hriofh iorfh hriofhiorhf i", name: "Karl Urban", occupation: "Businessman", }, { review: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", name: "Dilip", occupation: "Doctor", }, { review: "An unknown printer took a galley of type and scrambled it to make a type specimen book.", name: "Rajini", occupation: "Doctor", }, { review: "It has survived not only five centuries but also the leap into electronic typesetting.", name: "Suresh", occupation: "Pirate", }, { review: "Remaining essentially unchanged, it was popularized in the 1960s with Letraset sheets.", name: "Emma", occupation: "Engineer", },];

function Testimonials() {

  return(
    <>
     <Carousal data={data} />
    </>
  )
  
}

export default Testimonials;
