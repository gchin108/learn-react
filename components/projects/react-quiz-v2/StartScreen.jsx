import { useQuiz } from '@/contexts/QuizContext';
import React from 'react'

export default function StartScreen() {
  const {numQuestions, dispatch} = useQuiz()
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold font-palanquin">
        Welcome to The React Quiz !
      </h2>
      <h3 className="text-xl font-semibold font-palanquin">
        {numQuestions} questions to test your React Mastery
      </h3>
      <button
        className="button mt-4"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
