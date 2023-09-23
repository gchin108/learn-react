import React from 'react'
import Options from './Options';
import { useQuiz } from '@/contexts/QuizContext';

export default function Question({children}) {
  const { questions,index } = useQuiz()
  const question = questions[index]

  return (
    <div className="flex flex-col m-auto gap-6 w-fit">
      <h4 className="text-xl font-bold">{question.question}</h4>
      {children}
    </div>
  );
}
