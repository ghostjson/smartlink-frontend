import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { QuizQuestionType } from '../../interfaces/Quiz';

import TextInput from './TextInput';

interface QuizQuestionProps {
  qnumber: number | string;
  id: string | number;
  onDelete: (id: number | string) => void;
  questionData: QuizQuestionType;
  updateQuestionData: (
    question: QuizQuestionType,
    index: number | string
  ) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
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
        placeholder='What flavour does yellow colored lays have?'
        value={questionData.question}
        onChange={(e) =>
          updateQuestionData(
            { ...questionData, question: e.target.value },
            +qnumber - 1
          )
        }
      />
      <div className='my-2'>
        <div className='flex flex-col w-full'>
          <span>MCQ</span>
          {questionData.choices.map((choice, index) => (
            <div key={index} className='flex justify-evenly'>
              <span className='flex w-full items-center space-x-2'>
                <span>{index + 1} </span>
                <TextInput
                  name='a'
                  placeholder='Enter an Option'
                  value={choice.text}
                  onChange={(e) =>
                    updateQuestionData(
                      {
                        ...questionData,
                        choices: questionData.choices.map((c, i) =>
                          i === index ? { ...c, text: e.target.value } : c
                        ),
                      },
                      +qnumber - 1
                    )
                  }
                />
              </span>

              <span className='flex w-full items-center ml-2 space-x-2'>
                <span>Score </span>
                <input
                  type='number'
                  name={choice.text}
                  placeholder='0-100'
                  className='input input-bordered w-full'
                  value={choice.score}
                  onChange={(e) =>
                    updateQuestionData(
                      {
                        ...questionData,
                        choices: questionData.choices.map((c, i) =>
                          i === index ? { ...c, score: +e.target.value } : c
                        ),
                      },
                      +qnumber - 1
                    )
                  }
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
