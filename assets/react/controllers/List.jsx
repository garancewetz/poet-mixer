import React from 'react';

export default function List(props) {
  
  return (
    <>
    <div className='shadow-md border border-transparent | flex items-start | p-4 mb-6 | cursor-pointer hover:border-grey-600'>
      <div class="h-10 w-20">
        <div>image</div>
      </div>
      <div>
        <h3 className="uppercase mb-2">{props.fullName}</h3>
        <p>{props.description}</p>
        <a href={props.link}>
          <p class="underline text-blue-500"> lien</p>
        </a>
      </div>
    </div>
    </>
  )
}