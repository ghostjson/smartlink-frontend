import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import HomeLayout from '../../../components/layout/Home.layout';
import QuizDesign from '../../../components/shared/QuizDesign';
import QuizForm from '../../../components/shared/QuizForm';
import RewardForm from '../../../components/shared/RewardForm';
import RewardView from '../../../components/shared/RewardView';
import ScoreForm from '../../../components/shared/ScoreForm';
import AXIOS from '../../../helpers/axios';
import PrivateRoute from '../../../hoc/PrivateRoute';
import { QuizFormType, QuizQuestionType } from '../../../interfaces/Quiz';
import { newReward, RewardI } from '../../../interfaces/Reward';

const Quiz = () => {
  // mutations for creating form
  const createFormMutation = useMutation(
    async ({ name, style }: { name: string; style: any }) => {
      return await AXIOS.post('/api/v1/forms', {
        type: 'quiz',
        name: name,
        style: style,
        validity: new Date().toISOString(),
      });
    }
  );

  //mutation that adds questions to a form
  const createQuestionsMutation = useMutation(
    async ({
      questions,
      formId,
    }: {
      questions: QuizQuestionType[];
      formId: string | number;
    }) => {
      const data = questions.map(({ id, ...rest }) => {
        return { type: 'MCQ', content: rest.choices, question: rest.question };
      });
      return await AXIOS.post('/api/v1/questions/many', {
        questions: data,
        formId: formId,
      });
    }
  );

  //mutation that creates a reward
  const createRewardMutation = useMutation(async (data: newReward) => {
    return await AXIOS.post('/api/v1/rewards', data);
  });

  //mutation that links a reward to a form
  const associateRewardMutation = useMutation(
    async (data: { formId: string; rewardId: string }) => {
      return await AXIOS.patch(`/api/v1/forms/${data.formId}/${data.rewardId}`);
    }
  );

  //states
  const [page, setPage] = useState(0);
  const [reward, setReward] = useState(false);
  const [maxPages, setMaxPages] = useState(2);
  const [formData, setFormData] = useState<QuizFormType>({
    name: '',
    reward: false,
    questions: [],
    style: {
      bgColor: '#ab0000',
      fgColor: '#2cd97a',
    },
    results: [
      { message: '', from: 0, to: 0 },
      { message: '', from: 0, to: 0 },
      { message: '', from: 0, to: 0 },
      { message: '', from: 0, to: 0 },
    ],
  });
  const [rewardFormData, setRewardFormData] = useState<RewardI>({
    name: '',
    type: 'coupon',
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
      fgColor: '#ff5757',
      bgColor: '#4ab1ff',
    },
  });

  const moveToNextPage = () => {
    if (page >= maxPages) {
      console.log(formData);
      console.log(rewardFormData);
    }
    console.log(page);

    setPage((page) => page + 1);
  };
  const moveToPreviousPage = () => {
    if (page < 1) return;
    setPage((page) => page - 1);
  };
  useEffect(() => {
    if (reward) setMaxPages(4);
    else setMaxPages(2);
  }, [reward]);

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
          <li className={`step ${page >= 1 && 'step-primary'}`}>Score</li>
          {reward && (
            <>
              <li className={`step ${page >= 2 && 'step-primary'}`}>Reward</li>
              <li className={`step ${page >= 3 && 'step-primary'}`}>
                Design Reward
              </li>
            </>
          )}
          <li
            className={`step ${
              ((maxPages === 2 && page >= 2) ||
                (maxPages === 4 && page >= 4)) &&
              'step-primary'
            }`}>
            Design Quiz
          </li>
        </ul>
        <div className='flex flex-col space-y-5 items-center'>
          {page === 0 ? (
            <QuizForm formData={formData} setFormData={setFormData} />
          ) : page === 1 ? (
            <ScoreForm
              title={formData.name}
              formData={formData}
              setFormData={setFormData}
              hasReward={reward}
              handleReward={setReward}
              total={100}
            />
          ) : maxPages > 2 ? (
            page === 2 ? (
              <RewardForm
                formData={rewardFormData}
                setFormData={setRewardFormData}
              />
            ) : page === 3 ? (
              <RewardView
                editable
                formData={rewardFormData}
                setFormData={setRewardFormData}
                title={generateRewardTitle()}
              />
            ) : (
              <QuizDesign
                editable
                formData={formData}
                setFormData={setFormData}
                title={formData.name}
              />
            )
          ) : (
            <QuizDesign
              formData={formData}
              setFormData={setFormData}
              editable
              title={formData.name}
            />
          )}

          <div className='flex gap-2'>
            <button
              onClick={moveToPreviousPage}
              className={`btn btn-primary xl:btn-wide `}>
              Back
            </button>
            <button
              onClick={moveToNextPage}
              className='btn btn-primary xl:btn-wide'>
              Next
            </button>
          </div>
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Quiz;
