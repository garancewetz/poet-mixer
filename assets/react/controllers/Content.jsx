import React from 'react';

export default function Content(props) {
  
  return (
    <>
    <div className='border'>
      <p>{props.content}</p>
    </div>
    </>
  )
}