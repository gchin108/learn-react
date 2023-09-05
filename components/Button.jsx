"use client"
import React from 'react'

const Button = ({color, func, moreClass, children}) => {
  return (
      <button onClick={func} className={`p-2 rounded-full ${moreClass}`} style={{backgroundColor:`${color}`}}>
        {children}
      </button>
  );
}

export default Button