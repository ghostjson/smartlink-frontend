import React, { useState } from 'react';
import { BiPlus, BiTrash } from 'react-icons/bi';
import uniqid from 'uniqid';

import SurveyQuestion from './SurveyQuestion';
import TextInput from './TextInput';

const SurveyForm = () => {
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
        label='Form link(Survey) Name:'
        placeholder='Nestle International Survey'
      />
      <label className='flex items-center space-x-3'>
        <input type='checkbox' className='checkbox checkbox-primary' />
        <span>Add Reward</span>
      </label>
      {questions.map((question, id) => (
        <SurveyQuestion
          id={question.id}
          onDelete={removeQuestion}
          qnumber={id + 1}
          key={question.id}
        />
      ))}
      <div
        className='btn btn-outline btn-primary self-center btn-sm'
        onClick={addQuestion}>
        <BiPlus /> New Question
      </div>
    </div>
  );
};

export default SurveyForm;
