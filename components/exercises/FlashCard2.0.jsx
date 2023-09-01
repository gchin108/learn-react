"use client";
import { questions } from "@/constants";
import { useState } from "react";

const FlashCard2 = () => {
  const [stateId, setStateId] = useState(null);

  const handleClick = (id) => {
    setStateId(id !== stateId ? id : null);//clicking the answer again would turn it back to question, because id would become null: setStateId(null)
  };

  return (
    <div className="grid grid-cols-3 gap-7">
      {questions.map((question) => (
        <div
          key={question.id}
          className={` ${
            question.id === stateId ? `bg-coral-red` : `bg-[#333]`
          } cursor-pointer`}
        >
          <h2 onClick={() => handleClick(question.id)}>
            {question.id === stateId ? question.answer : question.question}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FlashCard2;
