import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import SurveyDesign from '../../components/shared/SurveyDesign';
import AXIOS from '../../helpers/axios';
import { dbFormData } from '../../interfaces/Form';

const Survey = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isLoading, isError, data } = useQuery(
    'form',
    () => AXIOS.get(`/api/v1/forms/${router.query.id}`),
    {
      refetchInterval: 1000,
    }
  );

  return (
    <div>
      {isLoading && <span>Loading</span>}
      {data && (
        <SurveyDesign title='Lays Survey' data={data!.data as dbFormData} />
      )}
    </div>
  );
};
export default Survey;
