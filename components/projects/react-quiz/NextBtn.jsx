import React from 'react'

export default function NextBtn({dispatch,index,
numQuestions}) {
  if (index !== numQuestions - 1)
  return (

      <button
        className="small-btn w-fit px-4 py-2 self-end rounded-full"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
  );
    if (index === numQuestions - 1)
      return (
        <button
          className="small-btn w-fit px-4 py-2 self-end rounded-full"
          onClick={() => dispatch({ type: "gameFinished" })}
        >
          Finish
        </button>
      );
}
