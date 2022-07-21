import { FC, useEffect, useState } from 'react';

import TextInput from './TextInput';

interface UserResponseProps {
  title: string;
  fgColor: string;
  bgColor: string;
  submitAction: (data: any) => void;
}
const UserResponse: FC<UserResponseProps> = (props) => {
  const [data, setData] = useState<any | null>(null);

  return (
    <div className='w-full min-h-screen grid overflow-hidden grid-cols-1 grid-rows-4 gap-0'>
      {/* header  */}
      <header
        style={{
          backgroundColor: props.fgColor,
        }}
        className='min-h-full relative'>
        <div className='absolute z-50 -bottom-1/2 left-1/2 md:left-8 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 rounded-full h-32 w-32 bg-green-500 border-2 border-white'>
          {/* TODO: add image edit option  */}
        </div>
        {/* header color picker  */}

        {/* end header color picker  */}
      </header>
      {/* body  */}
      <div
        style={{
          backgroundColor: props.bgColor,
        }}
        className='relative flex flex-col   items-center row-span-3 min-h-full py-10'>
        <h4 className='font-bold text-3xl mt-5 px-4 text-center'>
          {props.title}
        </h4>

        <>
          <div className='flex flex-col gap-4 px-4 my-4 w-full md:w-1/2'>
            <TextInput
              name='a'
              label='Name'
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextInput
              name='phone'
              label='Phone'
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <TextInput
              name='email'
              label='Email'
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <label className='flex flex-col px-4 items-start my-2 md:w-1/2'>
            <span>Birthday:</span>
            <input
              type='date'
              className='bg-transperant rounded px-4'
              value={data?.date}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
            />
          </label>
          <div className='flex flex-col gap-2 px-4 md:w-1/2 my-2'>
            <span>Gender</span>
            <div className='form-control items-start flex-row'>
              <label className='label cursor-pointer gap-2'>
                <input
                  type='radio'
                  name='radio-6'
                  className='radio bg-white checked:bg-primary'
                  checked={data?.gender === 'Male'}
                  onChange={(e) =>
                    e.target.checked && setData({ ...data, gender: 'Male' })
                  }
                />
                <span className='label-text'>Male</span>
              </label>
              <label className='label cursor-pointer gap-2'>
                <input
                  type='radio'
                  name='radio-6'
                  className='radio bg-white checked:bg-primary'
                  checked={data?.gender === 'Female'}
                  onChange={(e) =>
                    e.target.checked && setData({ ...data, gender: 'Female' })
                  }
                />
                <span className='label-text'>Female</span>
              </label>
              <label className='label cursor-pointer gap-2'>
                <input
                  type='radio'
                  name='radio-6'
                  className='radio bg-white checked:bg-primary'
                  checked={data?.gender === 'Other'}
                  onChange={(e) =>
                    e.target.checked && setData({ ...data, gender: 'Other' })
                  }
                />
                <span className='label-text'>Other</span>
              </label>
            </div>
          </div>
          <button
            style={{ backgroundColor: props.fgColor }}
            className='p-4 rounded-lg w-1/2'
            onClick={() => props.submitAction(data)}>
            Submit
          </button>
        </>
      </div>
    </div>
  );
};

export default UserResponse;
