import React from 'react';

export default function Button(props) {
  console.log(props)

  return (
    <>
      <a href={props.url}>
        <button className={`${props.classes} px-2 py-1 rounded-md`}>
          {props.text}
        </button>
      </a>
    </>
  )
}