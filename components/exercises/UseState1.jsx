"use client";
import React from "react";
import Button from "../Button";
import { useState } from "react";

const messages = [
  "Learn React 🌟",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const UseState1 = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen((cs)=>!cs); //cs represents the current value of the state
  };
  const increaseCount= ()=>{
    if (step<3) 
    setStep(cs => cs + 1); 
  }
    const decreaseCount = () => {
      if (step>1)
      setStep(cs=> cs - 1);
    };
  return (

      <div
        className="flex flex-col p-5 gap-2 relative w-[500px]"
        style={{ backgroundColor: isOpen ? "#333" : "#222" }}
      >
        <button className="absolute right-2 top-0" onClick={close}>
          x
        </button>
        {isOpen && (
          <>
            <div className="flex justify-around ">
              {Array.from({ length: 3 }, (_, i) => i + 1).map(
                (
                  i //creates a new array instance.
                ) => (
                  <div
                    key={i}
                    className={`rounded-div ${
                      step >= i ? "active" : "bg-gray-500"
                    }`}
                  >
                    {i}
                  </div>
                )
              )}
            </div>
            <h3 className="font-semibold text-center font-mono">
              Step {step}: {messages[step - 1]}
            </h3>
            <div className="flex justify-around">
              <Button text="Previous" color="#7950f2" func={decreaseCount} />
              <Button text="Next" color="#7950f2" func={increaseCount} />
            </div>
          </>
        )}
      </div>
 
  );
};

export default UseState1;
