"use client";
import { questions } from "@/constants";
import { useState } from "react";

const FlashCard = () => {
  const [clickedIndices, setClickedIndices] = useState({}); // Using an object to keep track of clicked states

  const handleClick = (index) => {
    // Update the clicked state of the card at the given index
    setClickedIndices((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="grid grid-cols-3 gap-7">
      {questions.map((question, index) => (
        <div
          key={index}
          className={` ${clickedIndices[index] ? `bg-coral-red` : `bg-[#333]`} cursor-pointer`}
        >
          <h2 onClick={() => handleClick(index)}>
            {clickedIndices[index] ? question.answer : question.question}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FlashCard;
