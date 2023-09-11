import Image from "next/image";

const WatchedMovie = ({ item, onDelete }) => {
  return (
    <div className="flex justify-between px-8 border-b-[1px] border-slate-gray">
      <div className="flex gap-6 my-4">
        <Image
          src={item.poster}
          width={60}
          height={50}
          alt={item.Title}
          className="object-cover"
        />

        <div className="flex flex-col gap-2 justify-center w-full ">
          <span className="font-bold text-lg">{item.Title}</span>
          <ul className="flex justify-between gap-8">
            <li>⭐ {item.imdbRating}</li>
            <li>🌟 {item.userRating}</li>
            <li>⏳ {item.runtime} mins</li>
          </ul>
        </div>
      </div>
      <div className="self-center flex items-center">
        <button
          onClick={() => onDelete(item.imdbID)}
          className="bg-coral-red rounded-full text-black px-[6px] text-sm font-semibold relative top-1"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default WatchedMovie;
