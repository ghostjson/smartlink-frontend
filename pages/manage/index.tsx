import axios from 'axios';
import { NextPage } from 'next';
import { useQuery } from 'react-query';

import HomeLayout from '../../components/layout/Home.layout';
import SmartLinkItem, {
  SmartLinkProps,
} from '../../components/shared/SmartLinkItem';
import { BASE_URL } from '../../helpers/constants';
import PrivateRoute from '../../hoc/PrivateRoute';
import { Form } from '../../interfaces/Form';

const Manage: NextPage = () => {
  const { data, isLoading, isError } = useQuery('smartlinks', async () => {
    const { data } = await axios.get(BASE_URL + '/api/v1/forms');
    return data;
  });

  return (
    <PrivateRoute>
      <HomeLayout>
        <h1 className='text-center font-bold text-3xl my-10'>
          Active SmartLink
        </h1>
        {isLoading && <div>Loading</div>}
        {data?.map((form: Form) => (
          <SmartLinkItem
            id={form.id}
            key={form.id}
            title={'title'} // TODO: need titile from response
            category={form.type}
          />
        ))}
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Manage;
