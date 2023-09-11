"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Box from "./Box";
import Main from "./Main";
import MovieLists from "./MovieLists";
import NumResults from "./NumResults";
import Search from "./Search";
import { YourStats } from "./YourStats";
import WatchedList from "./WatchedList";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import { useMovies } from "@/hooks/useMovies";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const UsePopcorn = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorage([],"watched")

  const handleSelectedMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  function handleCloseMovie() {
    setSelectedId(null);
  };

  const handleWatchedMovie = (newMovie) => {
    setWatched((movies) => [...movies, newMovie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };



  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieLists movies={movies} onSelectedMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <YourStats watched={watched} />
              <WatchedList watched={watched} onDelete={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default UsePopcorn;

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className="text-xl font-bold text-center mt-5">{message}</p>
    </div>
  );
};
