import React, { useState } from 'react';
import { BiPencil, BiUpload } from 'react-icons/bi';

import { RewardI } from '../../interfaces/Reward';

type RewardViewProps =
  | {
      editable: true;
      title: string;
    }
  | {
      editable: false | undefined;
      title: string;
      description: string;
      image: string;
      headerColor: string;
      bodyColor: string;
    };

const RewardView: React.FC<RewardViewProps> = (props) => {
  const [headerColor, setHeaderColor] = useState('#ff5757');
  const [bodyColor, setBodyColor] = useState('#4ab1ff');
  return (
    <div className='w-full min-h-screen grid overflow-hidden grid-cols-1 grid-rows-4 gap-0'>
      {/* header  */}
      <header
        style={{
          backgroundColor: props.editable ? headerColor : props.headerColor,
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
              value={headerColor}
              onChange={(e) => setHeaderColor(e.target.value)}
            />
          </label>
        )}
        {/* end header color picker  */}
      </header>
      {/* body  */}
      <div
        style={{
          backgroundColor: props.editable ? bodyColor : props.bodyColor,
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
            <label className='w-3/4 md:w-1/2 text-center border-2 border-dotted p-10 cursor-pointer my-8'>
              <div className='font-semibold text-xl flex items-center gap-2 justify-center'>
                <BiUpload />
                Upload Image
              </div>
              <input className='hidden' type='file' />
            </label>
            <label className='flex flex-col w-full px-3 md:w-1/2'>
              <span>Description</span>
              <textarea className='textarea w-full p-2' rows={5}></textarea>
            </label>
            {/* body color picker */}
            <label className='absolute right-1 top-0 text-2xl p-2 '>
              <BiPencil />
              <input
                className='absolute right-1 top-1 hidden'
                type='color'
                value={bodyColor}
                onChange={(e) => setBodyColor(e.target.value)}
              />
            </label>
            {/* end body color picker */}
          </>
        )}
      </div>
    </div>
  );
};

export default RewardView;
