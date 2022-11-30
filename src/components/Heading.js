import React from 'react';
//  css f i l e 
import "../styles/Heading.css";
const Heading = ({text}) => {
  return (
    <div className='heading'>
      <div></div>
      <p>{text}</p>
      <div></div>
    </div>
  )
}

export default Heading
