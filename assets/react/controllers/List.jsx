import React, { useState } from 'react';

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
      <div className="h-10 w-20">
        <div>image</div>
      </div>
      <div>
        <h3 className="uppercase mb-2">{props.fullName}</h3>
        <p>{props.description}</p>
        <a href={props.link}>
          <span className="underline text-blue-500"> lien</span>
        </a>
      </div>
    </div>
    </>
  )
}