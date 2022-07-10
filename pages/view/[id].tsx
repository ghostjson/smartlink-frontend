import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import QuizDesign from '../../components/shared/QuizDesign';
import SurveyDesign from '../../components/shared/SurveyDesign';
import UserResponse from '../../components/shared/UserResponse';
import AXIOS from '../../helpers/axios';
import { dbFormData, dbQuestionData } from '../../interfaces/Form';

const Survey = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [formValue, setFormValue] = useState(null);

  const { isLoading, isError, data } = useQuery(
    ['form', router.query.id],
    () => AXIOS.get(`/api/v1/forms/${router.query.id}`),
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
        totalScore: data?.data.type === 'survey' ? -1 : 0,
      });
      router.push('/submit');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {isLoading && <span>Loading</span>}
      {
        data ? (
          page === 0 ? (
            data.data.type === 'survey' ? (
              <SurveyDesign
                title={data.data.name}
                data={data!.data as dbFormData}
                submitAction={(data) => {
                  setFormValue(data);
                  setPage(1);
                }}
              />
            ) : data.data.type === 'quiz' ? (
              <QuizDesign
                title='Lays Quiz'
                data={data!.data as dbQuestionData}
                submitAction={() => {
                  router.push('/submit');
                }}
              />
            ) : null // not quiz
          ) : (
            <UserResponse
              title={data.data.name}
              fgColor={data.data.style.fgColor}
              bgColor={data.data.style.bgColor}
              submitAction={(data) => {
                sendResponse(data);
              }}
            />
          ) // not page 0
        ) : null // no data
      }
    </div>
  );
};

export default Survey;
