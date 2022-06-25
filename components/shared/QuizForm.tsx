import React, { FC, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import uniqid from 'uniqid';
import { QuizFormType, QuizQuestionType } from '../../interfaces/Quiz';

import QuizQuestion from './QuizQuestion';
import TextInput from './TextInput';

interface QuizFormI {
  formData: QuizFormType;
  setFormData: React.Dispatch<React.SetStateAction<QuizFormType>>;
}

const QuizForm: FC<QuizFormI> = ({ formData, setFormData }) => {
  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          id: uniqid(),
          question: '',
          choices: [
            { score: 0, text: '' },
            { score: 0, text: '' },
            { score: 0, text: '' },
            { score: 0, text: '' },
          ],
        },
      ],
    });
  };

  const updateQuestion = (
    question: QuizQuestionType,
    index: number | string
  ) => {
    setFormData({
      ...formData,
      questions: [
        ...[...formData.questions].splice(0, +index),
        question,
        ...[...formData.questions].splice(+index + 1),
      ],
    });
  };
  const removeQuestion = (id: number | string) => {
    setFormData({
      ...formData,
      questions: formData.questions.filter((q) => q.id !== id),
    });
  };

  return (
    <div className='flex flex-col w-full max-w-lg'>
      <TextInput
        name='name'
        label='Form link(Quiz) Name:'
        placeholder='Nestle Buy 1 Get 1 Quiz'
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {formData.questions.map((question, index) => {
        return (
          <QuizQuestion
            id={question.id}
            onDelete={removeQuestion}
            qnumber={index + 1}
            key={question.id}
            questionData={question}
            updateQuestionData={updateQuestion}
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
