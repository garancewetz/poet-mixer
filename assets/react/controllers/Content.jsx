import React from 'react';
import { useState } from 'react';

export default function Content(props) {
  const [ array, setArray ] = useState([])

  
  return (
    <>
    <div className='border'>
      <p>{props.content}</p>
    </div>
    </>
  )
}