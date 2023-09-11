import Image from "next/image";

const Movie = ({ movie, onSelectedMovie }) => {
  return (
    <div
      onClick={() => onSelectedMovie(movie.imdbID)}
      className="pl-8 flex justify-between border-b-[1px] pt-5 border-slate-gray gap-6  hover:bg-[#463f4e] cursor-pointer"
    >
      <div className="flex gap-6 mb-5">
        <Image
          src={
            movie.Poster === "N/A"
              ? "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg"
              : movie.Poster
          }
          width={50}
          height={50}
          alt={movie.Title}
          className="object-cover w-auto h-auto"
        />

        <div className="flex flex-col gap-2 justify-center w-full ">
          <span className="font-bold text-lg">{movie.Title}</span>
          <ul className="flex justify-between gap-8">
            <li>📅 {movie.Year}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movie;
