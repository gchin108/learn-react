import React from 'react'
import WatchedMovie from './WatchedMovie';

const WatchedList = ({ watched, onDelete }) => {
  return (
    <>
      {watched.map((item) => (
        <WatchedMovie key={item.imdbID} item={item} onDelete={onDelete} />
      ))}
    </>
  );
};

export default WatchedList