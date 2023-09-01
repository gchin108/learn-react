"use client"
import React from "react";
import { useState } from "react";
import { faqs } from "@/constants";

export default function AccordionExample() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion data={faqs} />
    </div>
  );
}

const Accordion= ({data})=>{
  return data.map((item, i) => (
    <AccordionItem
      title={item.title}
      text={item.text}
      num={i}
      key={item.title}
    />
  )); //returns an array of AccordionItem components, one for each object in the data array.
}

const AccordionItem = ({title,text, num})=>{
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
    return (
      <div
        className={`bg-[#333] p-8 flex flex-col gap-6 w-[700px] ${
          isOpen && "border-t-4 border-orange-500"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span
              className={`text-slate-gray text-x  ${
                isOpen && "text-orange-500"
              }`}
            >
              {num < 10 ? `0${num + 1}` : `${num + 1}`}
            </span>
            <p className={`text-left ${isOpen && "text-orange-500"}`}>
              {title}
            </p>
          </div>

          <button className="text-xl text-slate-gray" onClick={handleToggle}>
            {isOpen ? "-" : "+"}
          </button>
        </div>

        {isOpen && (
          <p className="max-w-xl leading-2 text-gray-400 ml-10">{text}</p>
        )}
      </div>
    );

}




    
  


