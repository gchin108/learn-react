"use client"
import React from 'react'

const Button = ({text, color, func, moreClass}) => {
  return (
      <button onClick={func} className={`p-2 rounded-full w-20 ${moreClass}`} style={{backgroundColor:`${color}`}}>
        {text}
      </button>
  );
}

export default Button