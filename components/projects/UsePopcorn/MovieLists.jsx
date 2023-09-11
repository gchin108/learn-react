import Movie from "./Movie";

const MovieLists = ({ movies, onSelectedMovie }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </>
  );
};

export default MovieLists;
