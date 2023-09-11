"use client";
import Image from "next/image";
import { useState, useEffect,useRef } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKeys } from "@/hooks/useKeys";

const APIKEY = process.env.API_KEY;

const MovieDetails = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
 
  const countRef = useRef(0);
  // let count = 0; //test:doesn't persist through renders

  useEffect(() => {
    if (userRating) countRef.current++; //runs if theres a rating
    // if (userRating) count++;
  }, [userRating]); //and whenever userRating gets updated.

  //checks if selected Movie is in the array of watched
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie; //destructuring fetched data

  // console.log(runtime, imdbRating); //initially undefined because useEffect runs after render logic

  //TEST
  //  if (imdbRating > 8) [isTop, setIsTop] = useState(true); //Don'ts change hooks order
  // if (imdbRating>8) return <p>Greatest ever</p> // Don'ts: early return

  // const [isTop, setIsTop]= useState(imdbRating>8); //the initial state is only looked at during initial render, or onMount
  // console.log(isTop)
  // useEffect(()=>{
  //   setIsTop(imdbRating>8)
  // },[imdbRating])
  // const isTop = imdbRating>8; //derived state
  // console.log(isTop)
  // const [avgRating, setAvgRating]= useState(0)

  //adding movie to watched state
  const handleAdd = () => {
    const addedMovie = {
      imdbID: selectedId,
      poster,
      title,
      userRating,
      year,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      countRatingDecisions: countRef.current,
      // count: count,
    };
    onAddWatched(addedMovie);
    onCloseMovie();

    //TEST
    // setAvgRating(Number(imdbRating))
    // setAvgRating(avgRating=>(avgRating + rating)/2)
    // //avgRating is 0 initially, so use the callback to get the current rating
  };

   useKeys("Escape", onCloseMovie);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${APIKEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        // console.log(data)
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "Learn React";
      // console.log( `Clean up effect for movie ${title}`)
    };
  }, [title]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="flex gap-10 relative bg-[#3e2f4e]">
            <button
              onClick={onCloseMovie}
              className="rounded-full bg-white text-black w-8 h-8 font-bold absolute"
            >
              &larr;
            </button>
            <Image
              src={poster}
              alt={`poster of ${movie}`}
              width={150}
              height={150}
            />
            <div className="flex flex-col justify-evenly ">
              <h2 className="text-2xl font-bold font-palanquin">{title}</h2>
              <p className="text-md ">
                {released} &bull; {runtime}
              </p>
              <p className="text-md">{genre}</p>
              <p className="text-md">
                <span className="relative right-1">⭐</span> {imdbRating} imdb
                Rating
              </p>
            </div>
          </header>
          {/* <p>{avgRating}</p> */}
          <section className="mt-10 px-14 flex flex-col gap-6 ">
            {!isWatched ? (
              <div className="bg-[#3e2f4e] p-5 rounded-lg flex flex-col gap-4">
                <StarRating
                  maxRating={10}
                  size={30}
                  className=""
                  onSetRating={setUserRating}
                />
                {userRating > 0 && (
                  <button
                    onClick={handleAdd}
                    className="bg-[#66347F] flex-1 py-2 rounded-full font-semibold"
                  >
                    + Add to List
                  </button>
                )}
              </div>
            ) : (
              <p>{`You rated this movie ${watchedRating} ⭐`}</p>
            )}
            <p className="italic text-[16px] break-normal leading-relaxed ">
              {plot}
            </p>
            <p className="text-md">Staring {actors}</p>
            <p className="text-md">Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
