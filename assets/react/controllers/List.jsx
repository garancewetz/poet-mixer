import React from 'react';

export default function List(props) {
  
  return (
    <>
    <div className='shadow-md p-4 mb-10'>
      <h3>{props.fullName}</h3>
      <p>{props.description}</p>
    </div>
    </>
  )
}