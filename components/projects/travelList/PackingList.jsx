
import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDelete, onToggleItem, onClearList }) {
  const [sortBy, setSortBy]= useState("input")

  let sortedItems;
  if (sortBy === "input") sortedItems = items
  if (sortBy === "description") sortedItems =items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if (sortBy ==="packed") sortedItems= items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))

  return (
    <div className="bg-[#5a3e2b] min-h-[200px] flex gap-2 flex-col justify-between px-4">
      <div className="grid grid-cols-3 gap-4 mt-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDelete}
          />
        ))}
      </div>
      <div className="flex gap-2 self-center">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          className="bg-[#ffebb3] uppercase text-black font-mono text-sm font-semibold px-1 rounded-sm"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {/* <button className="bg-[#ffebb3] uppercase text-black font-mono text-sm font-semibold px-1 rounded-sm">
          sort by input order
        </button> */}
        <button
          onClick={onClearList}
          className="bg-[#ffebb3] uppercase text-black font-mono text-sm font-semibold px-1 rounded-sm"
        >
          clear list
        </button>
      </div>
    </div>
  );
}
