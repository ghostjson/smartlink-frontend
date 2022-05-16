import { FC } from 'react';
import { BiTrash } from 'react-icons/bi';
import TextInput from './TextInput';

interface ScoreFormProps {
  title: string;
  total: number;
  hasReward: boolean;
  handleReward: (reward: boolean) => void;
}
const ScoreForm: FC<ScoreFormProps> = ({
  title,
  total,
  hasReward,
  handleReward,
}) => {
  return (
    <div className='flex flex-col items-start'>
      <h1 className='font-bold text-2xl py-2 capitalize'>Quiz: {title}</h1>
      <label className='self-start flex items-center gap-2 cursor-pointer'>
        <input
          type='checkbox'
          name='rewards'
          className='checkbox checkbox-primary'
          checked={hasReward}
          onChange={(e) => handleReward(e.target.checked)}
        />
        <span>Add reward</span>
      </label>
      <div className='border border-slate-200 shadow-xs p-4 rounded-lg my-2 '>
        <div className='my-2'>
          <span>Results based on score:</span>
          <div className='flex flex-col w-full space-y-6'>
            {/* mcq option  */}
            <div className='flex flex-col justify-evenly'>
              <span className='flex w-full items-center space-x-2'>
                <span>A) </span>
                <TextInput name='a' placeholder='Enter an Option' />
              </span>

              <div className='flex'>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>From </span>
                  <input
                    type='number'
                    name='a'
                    placeholder='0'
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>To </span>
                  <input
                    type='number'
                    name='a'
                    placeholder={'' + total}
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
              </div>
            </div>
            {/* end mcq option  */}

            {/* mcq option  */}
            <div className='flex flex-col justify-evenly'>
              <span className='flex w-full items-center space-x-2'>
                <span>B) </span>
                <TextInput name='a' placeholder='Enter an Option' />
              </span>

              <div className='flex'>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>From </span>
                  <input
                    type='number'
                    name='b'
                    placeholder='0'
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>To </span>
                  <input
                    type='number'
                    name='b'
                    placeholder={'' + total}
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
              </div>
            </div>
            {/* end mcq option  */}
            {/* mcq option  */}
            <div className='flex flex-col justify-evenly'>
              <span className='flex w-full items-center space-x-2'>
                <span>C) </span>
                <TextInput name='a' placeholder='Enter an Option' />
              </span>

              <div className='flex'>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>From </span>
                  <input
                    type='number'
                    name='c'
                    placeholder='0'
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>To </span>
                  <input
                    type='number'
                    name='c'
                    placeholder={'' + total}
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
              </div>
            </div>
            {/* end mcq option  */}
            {/* mcq option  */}
            <div className='flex flex-col justify-evenly'>
              <span className='flex w-full items-center space-x-2'>
                <span>D) </span>
                <TextInput name='a' placeholder='Enter an Option' />
              </span>

              <div className='flex'>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>From </span>
                  <input
                    type='number'
                    name='d'
                    placeholder='0'
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
                <span className='flex w-full items-center ml-2 space-x-2'>
                  <span>To </span>
                  <input
                    type='number'
                    name='d'
                    placeholder={'' + total}
                    max={total}
                    className='input input-bordered w-full'
                  />
                </span>
              </div>
            </div>
            {/* end mcq option  */}
          </div>

          <label className='flex items-center gap-2 mt-6 cursor-pointer'>
            <input type='checkbox' className='checkbox checkbox-primary ' />
            <span>Show results</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ScoreForm;
