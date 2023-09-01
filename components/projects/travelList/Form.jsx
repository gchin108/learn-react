"use client"
import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem)
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="bg-[#e5771f] h-12 flex items-center justify-center">
      <div className="flex gap-4 py-2 px-8 items-center">
        <h3>What do you need for your trip?</h3>
        <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
          <select
            className="text-black rounded-full bg-[#ffebb3] p-[2px] pl-2"
            onChange={(e) => setQuantity(Number(e.target.value))}
            value={quantity}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n, index) => (
              <option key={index}>{n}</option>
            ))}
          </select>
          <input
            placeholder="item"
            className="text-black rounded-full bg-[#ffebb3] p-[2px] pl-2"
            onChange={(e) => setDescription(e.target.value)}
            value={description} // Controlled input field
          />
          <button className="bg-[#76c7ad] uppercase rounded-full py-1 px-2 text-sm ">
            add
          </button>
        </form>
      </div>
    </div>
  );
}
