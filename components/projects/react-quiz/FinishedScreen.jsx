import React from 'react'
import styles from "./reactQuiz.module.css"

export default function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="flex flex-col gap-2">
      <p className={styles.result}>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage.toFixed(0)}%)
        <span>{emoji}</span>
      </p>
      <p className="text-center mt-2">(Highscore: {highscore} points)</p>
      <button
        className="small-btn w-fit px-4 py-2 rounded-full self-center mt-4 "
        onClick={() => dispatch({type:"restart"})}
      >
        Restart
      </button>
    </div>
  );
}
