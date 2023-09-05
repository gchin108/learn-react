"use client";
import React from "react";
import { useState } from "react";
import { faqs } from "@/constants";

export default function AccordionV2() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion data={faqs} />
    </div>
  );
}

const Accordion = ({ data }) => {
  const [CurOpen, setCurOpen] = useState(null); // state is lifted up, creating new implementation to check which item is opened and keeps one open at a time
  return (
    <>
      {data.map((item, index) => (
      <AccordionItem
        title={item.title}
        num={index}
        key={item.title}
        CurOpen={CurOpen}
        onCurOpen={setCurOpen}
      >
        {item.text}
      </AccordionItem>
      ))} 
      
      <AccordionItem
        title="A re-used component"
        num={22}
        key="Thinking in React"
        CurOpen={CurOpen}
        onCurOpen={setCurOpen}
      >
        <p>Allows React develops to:</p>
        <ul>
          <li>Break up UI into compoents</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </>
  );
};

const AccordionItem = ({ title, children, num, CurOpen, onCurOpen }) => {
  const isOpen = num === CurOpen; // a boolean expression that checks if the current accordion item (specified by its num index) is the one that should be open (specified by the CurOpen state).
  function handleToggle() {
    onCurOpen(isOpen?null:num); //sets CurOpen to the index of the clicked AccordionItem,isOpen become true, thus opening it.
  }
  return (
    <div
      className={`bg-[#333] p-8 flex flex-col gap-6 w-[700px] ${
        isOpen && "border-t-4 border-orange-500"
      }`}
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span
            className={`text-xl font-semibold ${
              isOpen ? "text-orange-500" : "text-gray-400"
            }`}
          >
            {num < 10 ? `0${num + 1}` : `${num + 1}`}
          </span>
          <p
            className={`text-left ${isOpen && "text-orange-500"}`}
          >
            {title}
          </p>
        </div>

        <button className="text-xl text-slate-gray font-semibold ">
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && (
        <p className="max-w-xl leading-2 text-gray-400 ml-10">{children}</p>
      )}
    </div>
  );
};
