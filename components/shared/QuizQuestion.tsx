import React from 'react';
import { BiTrash } from 'react-icons/bi';

import TextInput from './TextInput';

const QuizQuestion = () => {
  return (
    <div className='border border-slate-200 shadow-xs p-4 rounded-lg my-2 '>
      <div className='flex justify-between'>
        <span className='font-semibold'>1</span>
        <BiTrash className='text-slate-300  text-xl hover:text-slate-500 cursor-pointer' />
      </div>
      <TextInput
        name='question'
        label='Question:'
        placeholder='What flavour does yellow colored lays have?'
      />
      <div className='my-2'>
        <div className='flex flex-col w-full'>
          <span>MCQ</span>
          {/* mcq option  */}
          <div className='flex justify-evenly'>
            <span className='flex w-full items-center space-x-2'>
              <span>A) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>

            <span className='flex w-full items-center ml-2 space-x-2'>
              <span>Score </span>
              <input
                type='number'
                name='a'
                placeholder='0-100'
                className='input input-bordered w-full'
              />
            </span>
          </div>
          {/* end mcq option  */}

          {/* mcq option  */}
          <div className='flex justify-evenly'>
            <span className='flex w-full items-center space-x-2'>
              <span>B) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>

            <span className='flex w-full items-center ml-2 space-x-2'>
              <span>Score </span>
              <input
                type='number'
                name='a'
                placeholder='0-100'
                className='input input-bordered w-full'
              />
            </span>
          </div>
          {/* end mcq option  */}
          {/* mcq option  */}
          <div className='flex justify-evenly'>
            <span className='flex w-full items-center space-x-2'>
              <span>C) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>

            <span className='flex w-full items-center ml-2 space-x-2'>
              <span>Score </span>
              <input
                type='number'
                name='a'
                placeholder='0-100'
                className='input input-bordered w-full'
              />
            </span>
          </div>
          {/* end mcq option  */}
          {/* mcq option  */}
          <div className='flex justify-evenly'>
            <span className='flex w-full items-center space-x-2'>
              <span>D) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>

            <span className='flex w-full items-center ml-2 space-x-2'>
              <span>Score </span>
              <input
                type='number'
                name='a'
                placeholder='0-100'
                className='input input-bordered w-full'
              />
            </span>
          </div>
          {/* end mcq option  */}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
