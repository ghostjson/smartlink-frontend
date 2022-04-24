import Link from 'next/link';
import { NextPage } from 'next';
import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';

import HomeLayout from '../../components/layout/Home.layout';
import RewardForm from '../../components/shared/RewardForm';
import RewardView from '../../components/shared/RewardView';
import PrivateRoute from '../../hoc/PrivateRoute';
import { RewardI } from '../../interfaces/Reward';

const Rewards: NextPage = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<RewardI>({
    name: '',
    type: '',
    coupon: {
      discount: '',
    },
    voucher: {
      price: 'usd',
      currency: '',
    },
    promo: {
      buy: '',
      get: '',
    },
    date: '',
  });

  const generateRewardTitle = () => {
    if (formData.type === 'coupon') {
      return `${formData.coupon?.discount}% Discount`;
    } else if (formData.type === 'voucher') {
      return `Get ${
        formData.voucher?.price
      } ${formData.voucher?.currency?.toUpperCase()} Voucher`;
    } else if (formData.type === 'promo') {
      return `Buy ${formData.promo?.buy} Get ${formData.promo?.get} Promo`;
    } else {
      return '';
    }
  };
  const getPageData = () => {
    if (page === 0) {
      return <RewardForm formData={formData} setFormData={setFormData} />;
    } else {
      return <RewardView editable title={generateRewardTitle()} />;
    }
  };
  return (
    <PrivateRoute>
      <HomeLayout>
        <Link href='/create'>
          <a className='text-slate-400 flex items-center container mx-auto'>
            <BiChevronLeft />
            <span>Home</span>
          </a>
        </Link>
        <ul className='steps w-full my-4'>
          <li className='step step-primary'>Create</li>
          <li className={`step ${page === 1 && 'step-primary'}`}>Design</li>
        </ul>
        <div className='flex flex-col space-y-5 items-center'>
          {getPageData()}
          <div className='flex gap-2'>
            <button
              className={`btn btn-primary xl:btn-wide ${
                page === 0 ? 'disabled' : ''
              }`}
              disabled={page === 0}
              onClick={() => setPage(page - 1)}>
              Back
            </button>
            <button
              className='btn btn-primary xl:btn-wide'
              onClick={() => {
                if (page < 1) {
                  setPage(page + 1);
                } else {
                  console.log(formData);
                }
              }}>
              {page === 0 ? 'Next' : 'Create'}
            </button>
          </div>
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Rewards;
