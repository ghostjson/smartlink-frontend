import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import uniqid from 'uniqid';
import { SurveyFormType, SurveyQuestionType } from '../../interfaces/Survey';

import SurveyQuestion from './SurveyQuestion';
import TextInput from './TextInput';
interface SurveyFormI {
  reward: boolean;
  setReward: (reward: boolean) => void;
  formData: SurveyFormType;
  setFormData: React.Dispatch<React.SetStateAction<SurveyFormType>>;
}
const SurveyForm: React.FC<SurveyFormI> = ({
  reward,
  setReward,
  formData,
  setFormData,
}) => {
  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          id: uniqid(),
          question: '',
          type: 'MCQ',
          content: { MCQ: ['', '', '', ''] },
        },
      ],
    });
  };

  const updateQuestion = (
    question: SurveyQuestionType,
    index: number | string
  ) => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions.splice(0, +index),
        question,
        ...formData.questions.splice(+index + 1),
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
        label='Form link(Survey) Name:'
        placeholder='Nestle International Survey'
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <label className='flex items-center space-x-3'>
        <input
          type='checkbox'
          className='checkbox checkbox-primary'
          checked={reward}
          onChange={(e) => setReward(e.target.checked)}
        />
        <span>Add Reward</span>
      </label>
      {formData.questions.map((question, id) => (
        <SurveyQuestion
          id={question.id}
          onDelete={removeQuestion}
          qnumber={id + 1}
          key={question.id}
          questionData={question}
          updateQuestionData={updateQuestion}
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
