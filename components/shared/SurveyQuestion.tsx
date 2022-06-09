import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { SurveyQuestionType } from '../../interfaces/Survey';

import TextInput from './TextInput';

interface SurveyQuestionProps {
  qnumber: number | string;
  id: string | number;
  onDelete: (id: number | string) => void;
  questionData: SurveyQuestionType;
  updateQuestionData: (
    question: SurveyQuestionType,
    index: number | string
  ) => void;
}
const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  qnumber,
  id,
  onDelete,
  questionData,
  updateQuestionData,
}) => {
  return (
    <div className='border border-slate-200 shadow-xs p-4 rounded-lg my-2 '>
      <div className='flex justify-between'>
        <span className='font-semibold'>{qnumber}</span>
        <BiTrash
          className='text-slate-300  text-xl hover:text-slate-500 cursor-pointer'
          onClick={() => onDelete(id)}
        />
      </div>
      <TextInput
        name='question'
        label='Question:'
        placeholder='What is your favorite color?'
        value={questionData.question}
        onChange={(e) =>
          updateQuestionData(
            { ...questionData, question: e.target.value },
            +qnumber - 1
          )
        }
      />
      <div className='my-2'>
        <label className='flex space-x-2'>
          <input
            type='radio'
            name={`answer${id}`}
            className='radio radio-primary'
            onChange={(e) =>
              e.target.checked
                ? updateQuestionData(
                    {
                      ...questionData,
                      type: 'MCQ',
                      content: { MCQ: ['', '', '', ''] },
                    },
                    +qnumber - 1
                  )
                : null
            }
            checked={questionData.type === 'MCQ'}
          />
          <div className='flex flex-col w-full'>
            <span>MCQ</span>
            {questionData.type === 'MCQ' &&
              questionData.content.MCQ.map((option, index) => (
                <span
                  className='flex w-full items-center space-x-2'
                  key={index}>
                  <span>{index + 1}</span>
                  <TextInput
                    name='a'
                    placeholder='Enter an Option'
                    value={option}
                    onChange={(e) =>
                      updateQuestionData(
                        {
                          ...questionData,
                          content: {
                            ...questionData.content,
                            MCQ: [
                              ...questionData.content.MCQ.slice(0, index),
                              e.target.value,
                              ...questionData.content.MCQ.slice(index + 1),
                            ],
                          },
                        },
                        +qnumber - 1
                      )
                    }
                  />
                </span>
              ))}
          </div>
        </label>
        <label className='flex space-x-2 mt-2 items-center'>
          <input
            type='radio'
            name={`answer${id}`}
            className='radio radio-primary'
            onChange={(e) =>
              e.target.checked
                ? updateQuestionData(
                    {
                      ...questionData,
                      type: 'Long Answer',
                      content: {},
                    },
                    +qnumber - 1
                  )
                : null
            }
            checked={questionData.type === 'Long Answer'}
          />
          <span>Long Answer</span>
        </label>
      </div>
    </div>
  );
};

export default SurveyQuestion;
