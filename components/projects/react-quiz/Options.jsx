import React from 'react'
import styles from "./reactQuiz.module.css";

export default function Options({ questions, answer, dispatch }) {
  const hasAnswered = answer !== null;
  // console.log(questions);
  return (
    <div className="flex flex-col self-start gap-4 w-full">
      {questions.options.map((option, index) => (
        <button
          key={index}
          disabled={hasAnswered}
          className={`${styles.btn} ${styles.btnOption} ${
            index === answer ? styles.answer : ""
          } ${
            hasAnswered
              ? index === questions.correctOption
                ? styles.correct
                : styles.wrong
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}

    </div>
  );
}
