import React, { useState } from 'react';
import Button from './Button';

export default function List(props) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
    <div 
      data-active={isActive}
      onClick={handleClick}
      className={`border border-gray-200 | flex items-start | p-4 mb-6 | cursor-pointer hover:bg-grey-100 ${isActive && 'bg-gray-100'}`}>
      <div className="h-10 min-w-[5rem] w-20">
        <div>image</div>
      </div>
      <div>
        <h3 className="uppercase mb-2">{props.fullName}</h3>
        <p>{props.description}</p>
        <Button url={props.link} text="Voir +" classes="bg-gray-200 text-gray-500"></Button>
      
      </div>
    </div>
    </>
  )
}