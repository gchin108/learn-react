"use client";
import { useState } from "react";

const DayCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const addDays = (date, daysToAdd, increment) => {
    const newDate = new Date(date.getTime() + (daysToAdd * increment) * 24 * 60 * 60 * 1000) ;
    return newDate.toDateString();
  };
  const currentDate = new Date();
  const newDateStr = addDays(currentDate, count, step); // Adding 5 days

//   console.log(newDateStr);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex gap-2 items-center w-[150px] justify-between border-b-2">
        <button
          className="small-btn"
          onClick={() => {
           if(step>1) setStep((cs) => cs - 1);
          }}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button className="small-btn" onClick={() => setStep((cs) => cs + 1)}>
          +
        </button>
      </div>
      <div className="flex gap-2 items-center w-[150px] justify-between border-b-2">
        <button
          className="small-btn"
          onClick={() => {
            setCount((cs) => cs - 1);
          }}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          className="small-btn"
          onClick={() => {
            setCount((cs) => cs + 1);
          }}
        >
          +
        </button>
      </div>
      <h2 className="font-mono">
        {count===0 && "Today is " + newDateStr}
        {count > 0 && (count * step) + " days from today is " + newDateStr}
        {count< 0 && Math.abs(count * step) + " days ago was " + newDateStr}
      </h2>
    </div>
  );
};

export default DayCounter;
