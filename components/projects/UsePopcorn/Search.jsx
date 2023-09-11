"use client";
import { useKeys } from "@/hooks/useKeys";
import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useKeys("Enter", function () {
    if (document.activeElement === inputEl.current) return; // When element is in focus, do nothing
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      id="my-input"
      className="bg-[#83539b] pl-2 py-1 text-white rounded-md w-[25%]"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
