import React from 'react'

const Navbar = ({children}) => {
  return (
    <div className="bg-[#66347F] flex justify-between items-center p-4 rounded-lg">
      <span className="text-2xl font-bold font-palanquin">🍿usePopcorn</span>
      {children}
    </div>
  );
}

export default Navbar