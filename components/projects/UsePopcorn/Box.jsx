"use client";
import { useState } from "react";

const Box = ({children}) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex-1 bg-[#2B2730] flex flex-col rounded-lg relative min-h-fit ">
      <button
        onClick={() => setHide(!hide)}
        className="absolute top-2 right-4 bg-[#222] px-2 rounded-full font-bold"
      >
        {hide ? "+" : "-"}
      </button>
      {!hide && children}
    </div>
  );
};

export default Box;
