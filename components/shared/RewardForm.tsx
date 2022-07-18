import React from 'react';
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from 'react-hook-form';
import { RewardI } from '../../interfaces/Reward';

interface RewardFormProps {
  formData: RewardI;
  setFormData: React.Dispatch<React.SetStateAction<RewardI>>;
  register: UseFormRegister<RewardI>;
}

const RewardForm: React.FC<RewardFormProps> = ({
  formData,
  setFormData,
  register,
}) => {
  return (
    <div>
      <label className='flex flex-col'>
        Reward link name:
        <input {...register('name')} className='input input-bordered' />
      </label>

      <div className='flex flex-col'>
        <label htmlFor='type'>Reward type:</label>
        {/* reward type radio buttons */}
        <div className='flex flex-col space-y-4 pl-2 mt-2'>
          {/* coupon  */}
          <span className='flex items-center space-x-2'>
            <input
              type='radio'
              className='radio'
              id='coupon'
              value='coupon'
              {...register('type')}
            />
            <label htmlFor='coupon'>
              Coupon
              <input
                type='number'
                className='w-20 mx-2 input input-bordered'
                {...register('coupon.discount')}
              />
              % discount
            </label>
          </span>
          {/* voucher */}
          <span className='flex items-center space-x-2'>
            <input
              type='radio'
              className='radio'
              id='voucher'
              value='voucher'
              {...register('type')}
            />
            <label htmlFor='voucher'>
              Voucher
              <input
                type='number'
                className='w-20 mx-2 input input-bordered'
                {...register('voucher.price')}
              />
              <select
                id='currency'
                className='select select-bordered'
                {...register('voucher.currency')}>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gbp'>GBP</option>
                <option value='cad'>CAD</option>
                <option value='aud'>AUD</option>
                <option value='jpy'>JPY</option>
              </select>
            </label>
          </span>
          {/* promo  */}
          <span className='flex items-start xl:items-center space-x-2'>
            <input
              type='radio'
              className='radio'
              id='promo'
              value='promo'
              {...register('type')}
            />
            <label className='flex flex-col items-end' htmlFor='promo'>
              <span>
                Promo Buy
                <input
                  type='text'
                  className='mx-2 input input-bordered'
                  placeholder='Any Beef Burger'
                  {...register('promo.buy')}
                />
              </span>
              <br />
              <span>
                Get
                <input
                  type='text'
                  className=' mx-2 input input-bordered'
                  placeholder='1 Small Fry'
                  {...register('promo.get')}
                />
              </span>
            </label>
          </span>
        </div>
      </div>
      <label className='flex flex-col'>
        <span>Valid till:</span>
        <input
          type='date'
          className='input input-bordered'
          {...register('date')}
        />
      </label>
      <label className='flex items-center gap-2 mt-4'>
        <span>Count:</span>
        <input
          type='number'
          className='input input-bordered flex-1'
          {...register('count')}
        />
      </label>
    </div>
  );
};

export default RewardForm;
