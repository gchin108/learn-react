import React from 'react'

export const metadata = {
  title: "The React Quiz",
  description: "Learn React",
};

export default function layout({children}) {
  return (
    <div className='bg-[#343a40] min-h-screen'>
        {children}
    </div>
  )
}
