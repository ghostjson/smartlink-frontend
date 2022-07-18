import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import QuizDesign from '../../components/shared/QuizDesign';
import RewardView from '../../components/shared/RewardView';
import SurveyDesign from '../../components/shared/SurveyDesign';
import UserResponse from '../../components/shared/UserResponse';
import AXIOS from '../../helpers/axios';
import { dbFormData, dbQuestionData } from '../../interfaces/Form';

const Survey = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [formValue, setFormValue] = useState(null);

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
      await AXIOS.post(`/api/v1/responses/${router.query.id}`, {
        answers: {
          values: formValue,
        },
        name: values.name,
        number: values.phone,
        meta: {},
        totalScore: formQuery.data?.data.type === 'survey' ? -1 : 0,
      });
      router.push('/submit');
    } catch (e) {
      console.log(e);
    }
  };

  console.log(formQuery.data?.data.rewardId);
  return (
    <div>
      {formQuery.isLoading && <span>Loading</span>}
      {
        formQuery.data ? (
          page === 0 ? (
            formQuery.data.data.type === 'survey' ? (
              <SurveyDesign
                data={formQuery.data!.data as dbFormData}
                submitAction={(data) => {
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
            formQuery.data.data.rewardId === null ? (
              <UserResponse
                title={formQuery.data.data.name}
                fgColor={formQuery.data.data.style.fgColor}
                bgColor={formQuery.data.data.style.bgColor}
                submitAction={(data) => {
                  sendResponse(data);
                }}
              />
            ) : (
              <RewardView
                data={rewardQuery.data?.data}
                submitAction={(e) => {
                  setPage(2);
                }}
              />
            ) // not page 0
          ) : (
            <UserResponse
              title={formQuery.data.data.name}
              fgColor={formQuery.data.data.style.fgColor}
              bgColor={formQuery.data.data.style.bgColor}
              submitAction={(data) => {
                sendResponse(data);
              }}
            />
          )
        ) : null // no data
      }
    </div>
  );
};

export default Survey;
