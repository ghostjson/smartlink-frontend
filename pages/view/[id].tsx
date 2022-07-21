import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import QuizDesign from '../../components/shared/QuizDesign';
import RewardView from '../../components/shared/RewardView';
import SurveyDesign from '../../components/shared/SurveyDesign';
import UserResponse from '../../components/shared/UserResponse';
import AXIOS from '../../helpers/axios';
import { createWhatsappMessage } from '../../helpers/whatsapp';
import { dbFormData, dbQuestionData } from '../../interfaces/Form';

const Survey = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [formValue, setFormValue] = useState(null);
  const [rewardCode, setRewardCode] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);

  const formQuery = useQuery(
    ['form', router.query.id],
    () => AXIOS.get(`/api/v1/forms/${router.query.id}`),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000,
    }
  );

  const rewardQuery = useQuery(
    ['reward', formQuery.data?.data.rewardId],
    () => AXIOS.get(`/api/v1/rewards/${formQuery.data?.data.rewardId}`),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000,
    }
  );

  const sendResponse = async (values: any) => {
    try {
      const { data } = await AXIOS.post(
        `/api/v1/responses/${router.query.id}`,
        {
          answers: {
            values: formValue,
          },
          name: values.name,
          number: values.phone,
          meta: {},
          totalScore: formQuery.data?.data.type === 'survey' ? -1 : 0,
        }
      );

      if (!formQuery.data?.data.rewardId) {
        router.push('/submit');
      } else {
        setRewardCode(data.voucherCode as string);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(rewardQuery.data?.data);

  return (
    <div>
      {formQuery.isLoading && <span>Loading</span>}
      {formQuery.data ? (
        page === 0 ? (
          formQuery.data.data.type === 'survey' ? (
            <SurveyDesign
              data={formQuery.data!.data as dbFormData}
              submitAction={(data) => {
                setUserData(data);
                setFormValue(data);
                setPage(1);
              }}
            />
          ) : formQuery.data.data.type === 'quiz' ? (
            <QuizDesign
              title='Lays Quiz'
              data={formQuery.data!.data as dbQuestionData}
              submitAction={() => {
                router.push('/submit');
              }}
            />
          ) : null // not quiz
        ) : page === 1 ? (
          <UserResponse
            title={formQuery.data.data.name}
            fgColor={formQuery.data.data.style.fgColor}
            bgColor={formQuery.data.data.style.bgColor}
            submitAction={(data) => {
              if (formQuery.data.data.rewardId) {
                setUserData(data);
                console.log(data);
                sendResponse(data);
                setPage(2);
              } else {
              }
            }}
          />
        ) : formQuery.data.data.rewardId ? (
          <RewardView
            data={rewardQuery.data?.data}
            code={rewardCode}
            submitAction={(e) => {
              window.location.assign(
                `https://api.whatsapp.com/send?phone=6281279888897&text=` +
                  createWhatsappMessage(
                    userData.name,
                    userData.gender,
                    userData.email,
                    userData.phone,
                    userData.dob,
                    rewardCode,
                    rewardQuery.data
                      ? new Date(
                          rewardQuery.data.data.validity as Date
                        ).toLocaleDateString()
                      : ''
                  )
              );
            }}
          />
        ) : null
      ) : null}
    </div>
  );
};

export default Survey;
