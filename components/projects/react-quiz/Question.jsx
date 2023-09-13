import React from 'react'
import Options from './Options';

export default function Question({ questions, children }) {
  return (
    <div className="flex flex-col m-auto gap-6 w-fit">
      <h4 className="text-xl font-bold">{questions.question}</h4>
        {children}
    </div>
  );
}
