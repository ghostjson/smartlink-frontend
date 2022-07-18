import React from 'react';
import { BiPencil, BiUpload } from 'react-icons/bi';
import { dbRewardData } from '../../interfaces/Form';

import { RewardI } from '../../interfaces/Reward';

type RewardViewProps =
  | {
      editable: true;
      formData: RewardI;
      setFormData: React.Dispatch<React.SetStateAction<RewardI>>;
      title: string;
    }
  | {
      editable?: false | undefined;
      data: dbRewardData;
      submitAction: (data: any) => void;
    };

const RewardView: React.FC<RewardViewProps> = (props) => {
  return (
    <div className='w-full min-h-screen grid overflow-hidden grid-cols-1 grid-rows-4 gap-0'>
      {/* header  */}
      <header
        style={{
          backgroundColor: props.editable
            ? props.formData.style.fgColor
            : props.data.style.fgColor,
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
              className='absolute right-1 top-1 opacity-0'
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
            : props.data.style.bgColor,
        }}
        className='relative flex flex-col   items-center row-span-3 min-h-full py-10'>
        <h4 className='font-bold text-3xl mt-5 px-4 text-center'>
          {props.editable ? props.title : props.data.name}
        </h4>
        {!props.editable ? (
          <>
            {props.data.content.image && (
              <div className='w-full xl:w-1/2 h-48 overflow-hidden my-10 px-6'>
                <img
                  src={props.data.content?.image}
                  className='bg-center object-cover w-full'
                />
              </div>
            )}
            <p className='w-auto p-6 xl:w-1/2 text-center'>
              {props.data.content?.description}
            </p>
            <button
              style={{ backgroundColor: props.data.style.fgColor }}
              className='p-4 rounded-lg w-1/2'
              onClick={() => props.submitAction('s')}>
              Submit
            </button>
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
              <textarea
                className='textarea w-full p-2'
                rows={5}
                onChange={(e) =>
                  props.setFormData({
                    ...props.formData,
                    content: {
                      ...props.formData.content,
                      description: e.target.value,
                    },
                  })
                }></textarea>
            </label>
            {/* body color picker */}
            <label className='absolute right-1 top-0 text-2xl p-2 '>
              <BiPencil />
              <input
                className='absolute right-1 top-1 opacity-0'
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
          </>
        )}
      </div>
    </div>
  );
};

export default RewardView;
