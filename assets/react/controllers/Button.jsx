import React from 'react';

export default function Button(props) {
  console.log(props)

  return (
    <>
      <a href={props.url}>
        <button className={`${props.classes} px-3.5 py-1 rounded-md `} type={props.type}>
          {props.text}
        </button>
      </a>
    </>
  )
}