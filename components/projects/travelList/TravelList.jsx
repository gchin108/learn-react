"use client";
import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "laptop", quantity: 1, packed: true },
];

const TravelList = () => {
  const [input, setInput] = useState({ num: 0, item: "", packed:false });
  const [display, setDisplay] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.name)
    const value = e.target.value;
    const name = e.target.name; //having name attribute so react knows where the event is coming from.

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.item) return;
    setDisplay((prevDisplay) => [...prevDisplay, input]); // This will append 'input' to the 'display' array
        console.log(`Submitted: ${input.num}, ${input.item}`);
    setInput({num:"", item:""});
  };

  return (
    <div className="w-fit">
      <div className="bg-[#f4a226] flex justify-center">
        <h1 className="font-monoton text-4xl uppercase">
          🏝️ far <span className="ml-4">away</span> 💼
        </h1>
      </div>
      {/*form*/}
      <div className="bg-[#e5771f] h-12 flex items-center">
        <div className="flex gap-4 p-4">
          <h3>What do you need for your trip?</h3>
          <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
            <select
              name="num" // Added 'name' attribute
              className="text-black rounded-md"
              onChange={handleChange}
              value={input.num}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n, index) => (
                <option key={index}>{n}</option>
              ))}
            </select>
            <input
              name="item" // Added 'name' attribute
              placeholder="item"
              className="text-black rounded-md"
              onChange={handleChange}
              value={input.item} // Controlled input field
            />
            <button className="bg-[#76c7ad] uppercase rounded-md px-1">
              add
            </button>
          </form>
        </div>
      </div>
      {/*list item*/}
      <div className="bg-[#5a3e2b] min-h-[200px] flex gap-2 flex-col justify-between px-4">
        <div className="grid grid-cols-3 gap-2 mt-2">
          {display.map((item, index) => (
            <ul key={index} className="flex items-center gap-2">
              <span
                className={`${
                  item.packed ? "line-through" : null
                } flex gap-2 text-md text-[#ffebb3]`}
              >
                <li>{item.item}</li>
                <li>{item.num}</li>
              </span>

              <button>❌</button>
            </ul>
          ))}

        </div>
        <div className="flex gap-2 self-center">
          <button className="bg-[#ffebb3] uppercase text-black font-mono text-sm font-semibold px-1 rounded-sm">
            sort by input order
          </button>
          <button className="bg-[#ffebb3] uppercase text-black font-mono text-sm font-semibold px-1 rounded-sm">
            clear list
          </button>
        </div>
      </div>
      {/*stats*/}
      <div className="bg-[#76c7ad] text-center text-[#5a3e2b] font-sans font-semibold">
        You have x item on your list. You list is x% packed 💼
      </div>
    </div>
  );
};

export default TravelList;
