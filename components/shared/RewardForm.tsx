import React from 'react';
import { RewardI } from '../../interfaces/Reward';

interface RewardFormProps {
  formData: RewardI;
  setFormData: React.Dispatch<React.SetStateAction<RewardI>>;
}

const RewardForm: React.FC<RewardFormProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <label className='flex flex-col'>
        Reward link name:
        <input
          type='text'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className='input input-bordered'
        />
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
              name='type'
              id='coupon'
              value='coupon'
              checked={formData.type === 'coupon'}
              onChange={(e) => setFormData({ ...formData, type: 'coupon' })}
            />
            <label htmlFor='coupon'>
              Coupon
              <input
                type='number'
                min={0}
                max={100}
                className='w-20 mx-2 input input-bordered'
                value={formData.coupon?.discount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    coupon: { ...formData.coupon, discount: e.target.value },
                  })
                }
              />
              % discount
            </label>
          </span>
          {/* voucher */}
          <span className='flex items-center space-x-2'>
            <input
              type='radio'
              className='radio'
              name='type'
              id='voucher'
              value='voucher'
              checked={formData.type === 'voucher'}
              onChange={(e) => setFormData({ ...formData, type: 'voucher' })}
            />
            <label htmlFor='voucher'>
              Voucher
              <input
                type='number'
                max={100}
                className='w-20 mx-2 input input-bordered'
                value={formData.voucher?.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    voucher: { ...formData.voucher, price: e.target.value },
                  })
                }
              />
              <select
                name='currency'
                id='currency'
                className='select select-bordered'
                value={formData.voucher?.currency}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    voucher: { ...formData.voucher, currency: e.target.value },
                  })
                }>
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
              name='type'
              id='promo'
              value='promo'
              checked={formData.type === 'promo'}
              onChange={(e) => setFormData({ ...formData, type: 'promo' })}
            />
            <label className='flex flex-col items-end' htmlFor='promo'>
              <span>
                Promo Buy
                <input
                  type='text'
                  className=' mx-2 input input-bordered'
                  placeholder='Any Beef Burger'
                  value={formData.promo?.buy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      promo: { ...formData.promo, buy: e.target.value },
                    })
                  }
                />
              </span>
              <br />
              <span>
                Get
                <input
                  type='text'
                  className=' mx-2 input input-bordered'
                  placeholder='1 Small Fry'
                  value={formData.promo?.get}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      promo: { ...formData.promo, get: e.target.value },
                    })
                  }
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
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className='input input-bordered'
        />
      </label>
    </div>
  );
};

export default RewardForm;
