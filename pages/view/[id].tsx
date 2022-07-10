import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import QuizDesign from '../../components/shared/QuizDesign';
import SurveyDesign from '../../components/shared/SurveyDesign';
import AXIOS from '../../helpers/axios';
import { dbFormData, dbQuestionData } from '../../interfaces/Form';

const Survey = () => {
  const router = useRouter();

  const { isLoading, isError, data } = useQuery('form', () =>
    AXIOS.get(`/api/v1/forms/${router.query.id}`)
  );

  return (
    <div>
      {isLoading && <span>Loading</span>}
      {data &&
        (data.data.type === 'survey' ? (
          <SurveyDesign
            title='Lays Survey'
            data={data!.data as dbFormData}
            submitAction={() => {
              router.push('/submit');
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
        ) : null)}
    </div>
  );
};
export default Survey;
