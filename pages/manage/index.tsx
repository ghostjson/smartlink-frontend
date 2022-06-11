import axios from 'axios';
import { NextPage } from 'next';
import { useQuery } from 'react-query';

import HomeLayout from '../../components/layout/Home.layout';
import SmartLinkItem, {
  SmartLinkProps,
} from '../../components/shared/SmartLinkItem';
import AXIOS from '../../helpers/axios';
import PrivateRoute from '../../hoc/PrivateRoute';
import { Form } from '../../interfaces/Form';

const Manage: NextPage = () => {
  const { data, isLoading, isError } = useQuery('smartlinks', async () => {
    const { data: forms } = await AXIOS.get('/api/v1/forms');
    const { data: rewards } = await AXIOS.get('/api/v1/rewards');
    return [...forms, ...rewards];
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
            title={form.name}
            category={form.type}
          />
        ))}
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Manage;
