import React from 'react'

const NumResults = ({movies}) => {
  return (
    <div>
      Found <strong>{movies.length}</strong> results
    </div>
  );
}

export default NumResults