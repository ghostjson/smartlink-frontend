import React, { useState } from 'react';
import { BiPlus, BiTrash } from 'react-icons/bi';
import uniqid from 'uniqid';

import QuizQuestion from './QuizQuestion';
import TextInput from './TextInput';

const QuizForm = () => {
  const [questions, setQuestions] = useState([{ id: uniqid() }]);
  const addQuestion = () => {
    setQuestions([...questions, { id: uniqid() }]);
  };
  const removeQuestion = (id: number | string) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <div className='flex flex-col w-full max-w-lg'>
      <TextInput
        name='name'
        label='Form link(Quiz) Name:'
        placeholder='Nestle Buy 1 Get 1 Quiz'
      />
      {questions.map((question, index) => {
        return (
          <QuizQuestion
            id={question.id}
            onDelete={removeQuestion}
            qnumber={index + 1}
            key={question.id}
          />
        );
      })}
      <div
        className='btn btn-outline btn-primary self-center btn-sm'
        onClick={addQuestion}>
        <BiPlus /> New Question
      </div>
    </div>
  );
};

export default QuizForm;
