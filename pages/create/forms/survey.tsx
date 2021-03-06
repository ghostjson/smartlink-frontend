import { useMutation } from 'react-query';
import React, { useEffect, useState } from 'react';

import AXIOS from '../../../helpers/axios';
import PrivateRoute from '../../../hoc/PrivateRoute';
import RewardForm from '../../../components/shared/RewardForm';
import RewardView from '../../../components/shared/RewardView';
import SurveyForm from '../../../components/shared/SurveyForm';
import { newReward, RewardI } from '../../../interfaces/Reward';
import HomeLayout from '../../../components/layout/Home.layout';
import SurveyDesign from '../../../components/shared/SurveyDesign';
import { SurveyFormType, SurveyQuestionType } from '../../../interfaces/Survey';
import { useRouter } from 'next/router';

const Survey = () => {
  const router = useRouter();
  // mutaion hooks to create a survey
  const createSurveryMutation = useMutation(
    async ({ name, style }: { name: string; style: any }) => {
      return await AXIOS.post('/api/v1/forms', {
        type: 'survey',
        name: name,
        style: style,
        metaData: {},
        validity: new Date().toISOString(),
      });
    }
  );

  const createQuestionsMutation = useMutation(
    async ({
      questions,
      formId,
    }: {
      questions: SurveyQuestionType[];
      formId: string | number;
    }) => {
      const data = questions.map(({ id, ...rest }) => rest);
      return await AXIOS.post('/api/v1/questions/many', {
        questions: data,
        formId: formId,
      });
    }
  );
  const createRewardMutation = useMutation(async (data: newReward) => {
    return await AXIOS.post('/api/v1/rewards', data);
  });

  const associateRewardMutation = useMutation(
    async (data: { formId: string; rewardId: string }) => {
      return await AXIOS.patch(`/api/v1/forms/${data.formId}/${data.rewardId}`);
    }
  );

  // states
  const [page, setPage] = useState(0);
  const [reward, setReward] = useState(false);
  const [maxPages, setMaxPages] = useState(1);
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
    content: {},
    date: '',
    style: {
      bgColor: '#4ab1ff',
      fgColor: '#ff5757',
    },
    count: 0,
  });
  const [formData, setFormData] = useState<SurveyFormType>({
    title: '',
    reward: false,
    questions: [],
    style: {
      bgColor: '#4ab1ff',
      fgColor: '#ff5757',
    },
  });

  const createSurvey = async () => {
    // creating new survey
    createSurveryMutation.mutate(
      {
        name: formData.title,
        style: formData.style,
      },
      {
        onSuccess: (data) => {
          const formId = data.data.id;
          // creating questions
          createQuestionsMutation.mutate(
            {
              questions: formData.questions,
              formId: formId,
            },
            {
              onSuccess: () => {
                if (reward) {
                  const rewardData = {
                    name: rewardFormData.name,
                    type: rewardFormData.type,
                    content: {
                      [rewardFormData.type]:
                        rewardFormData[rewardFormData.type],
                      description: rewardFormData.content?.description || '',
                    },
                    validity: new Date(rewardFormData.date).toISOString(),
                    style: rewardFormData.style,
                    count: rewardFormData.count,
                  };

                  createRewardMutation.mutate(rewardData, {
                    onSuccess: (data) => {
                      //associating reward to survey
                      associateRewardMutation.mutate(
                        {
                          rewardId: data.data.id,
                          formId: formId,
                        },
                        {
                          onSuccess: () => {
                            router.push(`/success/${formId}`);
                          },
                        }
                      );
                    },
                  });
                } else {
                  router.push(`/success/${formId}`);
                }
              },
            }
          );
        },
      }
    );
  };

  useEffect(() => {
    if (reward) setMaxPages(3);
    else setMaxPages(1);
  }, [reward]);

  const moveToNextPage = () => {
    if (page >= maxPages) {
      createSurvey();
    }
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
                title={rewardFormData.name}
              />
            ) : (
              <SurveyDesign
                editable
                formData={formData}
                setFormData={setFormData}
                title={formData.title}
              />
            )
          ) : (
            <SurveyDesign
              editable
              formData={formData}
              setFormData={setFormData}
              title={formData.title}
            />
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
