import React from 'react';

export default function List(props) {
  
  return (
    <>
    <div className=' border border-gray-200 | flex items-start | p-4 mb-6 | cursor-pointer hover:border-grey-600'>
      <div className="h-10 w-20">
        <div>image</div>
      </div>
      <div>
        <h3 className="uppercase mb-2">{props.fullName}</h3>
        <p>{props.description}</p>
        <a href={props.link}>
          <p className="underline text-blue-500"> lien</p>
        </a>
      </div>
    </div>
    </>
  )
}