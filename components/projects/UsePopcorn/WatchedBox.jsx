"use client";
import { useState } from "react";
import WatchedList from "./WatchedList";
import { YourStats } from "./YourStats";
import { tempWatchedData } from "@/constants";

const WatchedBox = () => {
  const [hide, setHide] = useState(false);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="flex-1 bg-[#2B2730] flex flex-col gap-6 rounded-lg relative h-screen">
      <button
        onClick={() => setHide(!hide)}
        className="absolute top-2 right-4 bg-[#222] px-2 rounded-full font-bold"
      >
        {hide?"+":"-"}
      </button>
      {!hide && (
        <>
          <YourStats watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
