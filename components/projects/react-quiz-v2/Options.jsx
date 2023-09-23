import React from 'react'
import styles from "./reactQuiz.module.css";
import { useQuiz } from '@/contexts/QuizContext';

export default function Options() {
  const {answer, dispatch,questions, index } = useQuiz()
  const question = questions[index]
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col self-start gap-4 w-full">
      {question.options.map((option, i) => (
        <button
          key={i}
          disabled={hasAnswered}
          className={`${styles.btn} ${styles.btnOption} ${
            i === answer ? styles.answer : ""
          } ${
            hasAnswered
              ? i === question.correctOption
                ? styles.correct
                : styles.wrong
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}

    </div>
  );
}
