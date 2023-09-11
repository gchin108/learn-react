import React from "react";

function average(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return arr.length ? sum / arr.length : 0;
}

  
export const YourStats = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const filteredRuntimes = watched
    .filter((movie) => movie.runtime !== "N/A")
    .map((movie) => Number(movie.runtime))
    .filter((runtime) => !isNaN(runtime)); // filter out NaN values
    // console.log(filteredRuntimes)

  const avgRuntime = average(filteredRuntimes);
  return (
    <div className="px-8 py-6 bg-[#3e2f4e]">
      <h3 className="font-bold capitalize font-palanquin text-lg">
        Movies you watch
      </h3>
      <ul className="flex justify-between ">
        <li>{watched.length} movies</li>
        <li>⭐ {avgImdbRating.toFixed(2)}</li>
        <li>🌟 {avgUserRating.toFixed(2)}</li>
        <li>⏳{avgRuntime.toFixed(2)} mins</li>
      </ul>
    </div>
  );
};
