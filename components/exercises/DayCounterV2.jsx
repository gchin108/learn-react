"use client";
import { useState } from "react";

const DayCounterV2 = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const addDays = (date, daysToAdd, increment) => {
    const newDate = new Date(
      date.getTime() + daysToAdd * increment * 24 * 60 * 60 * 1000
    );
    return newDate.toDateString();
  };
  const currentDate = new Date();
  const newDateStr = addDays(currentDate, count, step); // Adding 5 days
  const handleReset = ()=>{
    setStep(1)
    setCount(0)
  }
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex gap-2 items-center justify-between border-b-2">
        <input
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          max="10"
        />
        {step}
      </div>
      <div className="flex gap-2 items-center justify-between border-b-2">
        <button
          className="small-btn"
          onClick={() => {
            setCount((cs) => cs - 1);
          }}
        >
          -
        </button>
        <input
          type="number"
          placeholder={count}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="text-black"
        />
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
        {count === 0 && "Today is " + newDateStr}
        {count > 0 && count * step + " days from today is " + newDateStr}
        {count < 0 && Math.abs(count * step) + " days ago was " + newDateStr}
      </h2>
      {(count !== 0 || step !==1)&& (
        <button className="small-btn" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default DayCounterV2;
