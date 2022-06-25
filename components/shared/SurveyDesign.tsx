import React, { useState } from 'react';
import { BiPencil, BiUpload } from 'react-icons/bi';

import { RewardI } from '../../interfaces/Reward';
import { SurveyFormType } from '../../interfaces/Survey';
import TextInput from './TextInput';

type SurveyDesignProps =
  | {
      editable: true;
      title: string;
      formData: SurveyFormType;
      setFormData: React.Dispatch<React.SetStateAction<SurveyFormType>>;
    }
  | {
      editable: false | undefined;
      title: string;
      description: string;
      image: string;
      headerColor: string;
      bodyColor: string;
    };

const SurveyDesign: React.FC<SurveyDesignProps> = (props) => {
  return (
    <div className='w-full min-h-screen grid overflow-hidden grid-cols-1 grid-rows-4 gap-0'>
      {/* header  */}
      <header
        style={{
          backgroundColor: props.editable
            ? props.formData.style.fgColor
            : props.headerColor,
        }}
        className='min-h-full relative'>
        <div className='absolute z-50 -bottom-1/2 left-1/2 md:left-8 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 rounded-full h-32 w-32 bg-green-500 border-2 border-white'>
          {/* TODO: add image edit option  */}
        </div>
        {/* header color picker  */}
        {props.editable && (
          <label className='absolute right-1 top-1 text-2xl p-2'>
            <BiPencil />
            <input
              className='absolute right-1 top-1 hidden'
              type='color'
              value={props.formData.style.fgColor}
              onChange={(e) =>
                props.setFormData({
                  ...props.formData,
                  style: { ...props.formData.style, fgColor: e.target.value },
                })
              }
            />
          </label>
        )}
        {/* end header color picker  */}
      </header>
      {/* body  */}
      <div
        style={{
          backgroundColor: props.editable
            ? props.formData.style.bgColor
            : props.bodyColor,
        }}
        className='relative flex flex-col   items-center row-span-3 min-h-full py-10'>
        <h4 className='font-bold text-3xl mt-5 px-4 text-center'>
          {props.title}
        </h4>
        {!props.editable ? (
          <>
            <div className='w-full xl:w-1/2 h-48 overflow-hidden my-10 px-6'>
              <img
                src='https://i.ytimg.com/vi/KQHujoNkmwI/maxresdefault.jpg'
                alt='title'
                className='bg-center object-cover w-full'
              />
            </div>
            <p className='w-auto px-6 xl:w-1/2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur neque enim molestias doloremque exercitationem
              cumque, maiores distinctio incidunt libero, quibusdam similique
              voluptatum numquam at possimus dolore? Eveniet ducimus iste
              sapiente.
            </p>
          </>
        ) : (
          <>
            {/* custom file upload  */}
            <label className='flex flex-col w-full px-3 md:w-1/2'>
              <span>Text</span>
              <textarea
                className='textarea w-full p-2'
                rows={5}
                placeholder='Welcome to GuriBoi customer survey!'></textarea>
            </label>
            {/* body color picker */}
            <label className='absolute right-1 top-0 text-2xl p-2 '>
              <BiPencil />
              <input
                className='absolute right-1 top-1 hidden'
                type='color'
                value={props.formData.style.bgColor}
                onChange={(e) =>
                  props.setFormData({
                    ...props.formData,
                    style: { ...props.formData.style, bgColor: e.target.value },
                  })
                }
              />
            </label>
            {/* end body color picker */}
            {/* quiz data  */}
            <div className='flex flex-col gap-4 px-4 my-4 w-full md:w-1/2'>
              {props.formData.questions.map((question, index) => (
                <div className='flex flex-col' key={question.id}>
                  <span className='font-semibold text-lg'>
                    Q{index + 1}. {question.question}
                  </span>
                  {question.type === 'MCQ' ? (
                    <div>
                      {question.content.MCQ.map((option, index) => (
                        <label
                          key={index}
                          className='flex items-center gap-2 cursor-pointer'>
                          <input type='radio' name='ans-1' />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <TextInput name={question.id} />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyDesign;
