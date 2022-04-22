import React from 'react';
import { BiTrash } from 'react-icons/bi';

import TextInput from './TextInput';

const SurveyQuestion = () => {
  return (
    <div className='border border-slate-200 shadow-xs p-4 rounded-lg my-2 '>
      <div className='flex justify-between'>
        <span className='font-semibold'>1</span>
        <BiTrash className='text-slate-300  text-xl hover:text-slate-500 cursor-pointer' />
      </div>
      <TextInput
        name='question'
        label='Question:'
        placeholder='What is your favorite color?'
      />
      <div className='my-2'>
        <label className='flex space-x-2'>
          <input type='radio' name='answer' className='radio radio-primary' />
          <div className='flex flex-col w-full'>
            <span>MCQ</span>
            {/* mcq option  */}
            <span className='flex w-full items-center space-x-2'>
              <span>A) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>
            {/* end mcq option  */}

            {/* mcq option  */}
            <span className='flex w-full items-center space-x-2'>
              <span>B) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>
            {/* end mcq option  */}
            {/* mcq option  */}
            <span className='flex w-full items-center space-x-2'>
              <span>C) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>
            {/* end mcq option  */}
            {/* mcq option  */}
            <span className='flex w-full items-center space-x-2'>
              <span>D) </span>
              <TextInput name='a' placeholder='Enter an Option' />
            </span>
            {/* end mcq option  */}
          </div>
        </label>
        <label className='flex space-x-2 mt-2 items-start'>
          <input
            type='radio'
            name='answer'
            className='radio radio-primary mt-2'
          />
          <TextInput
            name='longAnswer'
            label='Long Answer:'
            placeholder='Please enter your answer'
          />
        </label>
      </div>
    </div>
  );
};

export default SurveyQuestion;
