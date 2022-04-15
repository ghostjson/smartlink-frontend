import { NextPage } from 'next';

import HomeLayout from '../../components/layout/Home.layout';
import SmartLinkItem, {
  SmartLinkProps,
} from '../../components/shared/SmartLinkItem';
import PrivateRoute from '../../hoc/PrivateRoute';

const Manage: NextPage = () => {
  return (
    <PrivateRoute>
      <HomeLayout>
        <h1 className='text-center font-bold text-3xl my-10'>
          Active SmartLink
        </h1>
        {dummyData.map((data) => (
          <SmartLinkItem {...data} key={data.id} />
        ))}
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Manage;

const dummyData: SmartLinkProps[] = [
  {
    id: 1,
    title: 'something',
    category: 'reward',
  },
  {
    id: 2,
    title: 'something',
    category: 'reward',
  },
  {
    id: 3,
    title: 'something',
    category: 'reward',
  },
  {
    id: 4,
    title: 'something',
    category: 'reward',
  },
  {
    id: 5,
    title: 'something',
    category: 'reward',
  },
];
