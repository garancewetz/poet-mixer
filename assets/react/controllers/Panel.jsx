import React from 'react';
import { useState, useEffect } from "react";

import Draggable from 'react-draggable';

import Tools from './Tools';
import Content from './Content';

export default function Panel(props) {
  const [position, setPosition] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const [maxLeft, setMaxLeft] = useState(0)

  const handleClick = () => { 
    if(isDragged) {
        setIsDragged(false)
    } else {
        setPosition({x: 0, y:0})
    }
  }
   useEffect(() => {
    setMaxLeft(window.innerWidth-300)
   }, [])

  const trackPos = (data) => {
    setPosition(null)
    setIsDragged(true)
    // console.log(data.x)
  };


  return (
    <Draggable
      axis="x"
      handle="#handle"
      onDrag={(e, data) => trackPos(data)}
      bounds={{left: -maxLeft, top: 0, right: 0, bottom: 0}}
      position={position}
    >
      <div        
        style={{left: '90%'}}
        className={`absolute w-full inset-0 z-10 | bg-white shadow-md border-l-4 border-gray-200`}>
        <div className="relative h-full | p-6">
          <div 
            id="handle"
            onClick={handleClick}
            className="absolute -left-[10px] top-1/2 -translate-y-1/2 | w-4 h-16 bg-gray-300 rounded-lg | cursor-pointer"></div>
          <Tools />
          <Content content={props.content}/>
        </div>
      </div>
    </Draggable>
  )
}