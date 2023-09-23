// import ReactQuiz from '@/components/projects/react-quiz/ReactQuiz'
import ReactQuizV2 from '@/components/projects/react-quiz-v2/ReactQuizV2'
import ReactQuiz from '@/components/projects/react-quiz/ReactQuiz';
import { QuizProvider } from '@/contexts/QuizContext';
import React from 'react'

export default function page() {
  return (
    <div className="max-container w-full">
      {/* <ReactQuiz /> */}
      <QuizProvider>
        <ReactQuizV2 />
      </QuizProvider>
    </div>
  );
}
