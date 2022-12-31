import React from 'react';
import { useState } from "react";

import Tools from './Tools';
import Content from './Content';


export default function Panel(props) {
  let [isOpen, setIsOpen] = useState(false);
  let [mousePos, setMousePos] = useState({});

  let mousePosition = null;
  let isPressed = false;

  function handleClick() { setIsOpen(!isOpen);}
  function handleDragStart(e) {
    setMousePos({ x: e.clientX, y: e.clientY})
    console.log('handleDragStart', e)
  }
  function handleDragOver(e) {
    console.log('handleDragOver', e)
  }
  function handleDragEnd(e) {
    console.log('handleDragEnd', e)
  }
  // function handleDrop(e) {
  //   console.log('handleDrop', e)
  // }

  return (
    <div 
      draggable={true}
      className={`absolute inset-0 z-10 | bg-white shadow-md border-l border-gray-200 | transition duration-500 ${isOpen ? 'translate-x-[30%]' : 'translate-x-[90%]'}`}>
      <div className="relative h-full | p-6">
        <div 
          draggable={true}
          onClick={handleClick}
          onDragStart={handleDragStart} 
          onDragOver={handleDragOver} 
          // onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          class="absolute -left-[0.5rem] top-1/2 -translate-y-1/2 | w-4 h-16 bg-gray-300 rounded-full | cursor-pointer"></div>
        <Tools />
        <Content content={props.content}/>
      </div>
   </div>
  )
}