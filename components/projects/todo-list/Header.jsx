"use client"
import React, { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 8));
  const today = new Date().toDateString()
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 8));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-purple-600 flex justify-between">
      <h1>{today}</h1>
      {/* <span className="text-gray-400">{time}</span> */}
    </div>
  );
};
export default Header;