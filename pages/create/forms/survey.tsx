import React, { useEffect, useState } from 'react';

import HomeLayout from '../../../components/layout/Home.layout';
import RewardForm from '../../../components/shared/RewardForm';
import RewardView from '../../../components/shared/RewardView';
import SurveyDesign from '../../../components/shared/SurveyDesign';
import SurveyForm from '../../../components/shared/SurveyForm';
import PrivateRoute from '../../../hoc/PrivateRoute';
import { RewardI } from '../../../interfaces/Reward';
import { SurveyFormType } from '../../../interfaces/Survey';

const Survey = () => {
  const [page, setPage] = useState(0);
  const [reward, setReward] = useState(false);
  const [maxPages, setMaxPages] = useState(1);
  const [rewardFormData, setRewardFormData] = useState<RewardI>({
    name: '',
    type: 'promo',
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
    style: {
      bgColor: '#4ab1ff',
      fgColor: '#ff5757',
    },
  });
  const [formData, setFormData] = useState<SurveyFormType>({
    title: '',
    reward: false,
    questions: [],
  });

  useEffect(() => {
    if (reward) setMaxPages(3);
    else setMaxPages(1);
  }, [reward]);

  const moveToNextPage = () => {
    if (page >= maxPages) return;
    setPage((page) => page + 1);
  };
  const moveToPreviousPage = () => {
    if (page < 1) return;
    setPage((page) => page - 1);
  };
  const generateRewardTitle = () => {
    if (rewardFormData.type === 'coupon') {
      return `${rewardFormData.coupon?.discount}% Discount`;
    } else if (rewardFormData.type === 'voucher') {
      return `Get ${
        rewardFormData.voucher?.price
      } ${rewardFormData.voucher?.currency?.toUpperCase()} Voucher`;
    } else if (rewardFormData.type === 'promo') {
      return `Buy ${rewardFormData.promo?.buy} Get ${rewardFormData.promo?.get} Promo`;
    } else {
      return '';
    }
  };

  return (
    <PrivateRoute>
      <HomeLayout>
        <ul className='steps w-full my-4'>
          <li className='step step-primary'>Create</li>
          {reward && (
            <>
              <li className={`step ${page >= 1 && 'step-primary'}`}>Reward</li>
              <li className={`step ${page >= 2 && 'step-primary'}`}>
                Design Reward
              </li>
            </>
          )}
          <li
            className={`step ${
              ((maxPages === 1 && page >= 1) ||
                (maxPages === 3 && page >= 3)) &&
              'step-primary'
            }`}>
            Design
          </li>
        </ul>
        <div className='flex flex-col space-y-5 items-center'>
          {page === 0 ? (
            <SurveyForm
              formData={formData}
              setFormData={setFormData}
              reward={reward}
              setReward={setReward}
            />
          ) : maxPages > 1 ? (
            page === 1 ? (
              <RewardForm
                formData={rewardFormData}
                setFormData={setRewardFormData}
              />
            ) : page === 2 ? (
              <RewardView
                editable
                formData={rewardFormData}
                setFormData={setRewardFormData}
                title={generateRewardTitle()}
              />
            ) : (
              <SurveyDesign editable title={generateRewardTitle()} />
            )
          ) : (
            <SurveyDesign editable title={generateRewardTitle()} />
          )}
          <div className='flex gap-2'>
            <button
              className={`btn btn-primary xl:btn-wide `}
              onClick={moveToPreviousPage}>
              Back
            </button>
            <button
              className='btn btn-primary xl:btn-wide'
              onClick={moveToNextPage}>
              Next
            </button>
          </div>
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Survey;
