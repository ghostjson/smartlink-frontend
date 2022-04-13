import { NextPage } from 'next';
import HomeLayout from '../../components/layout/Home.layout';
import PrivateRoute from '../../hoc/PrivateRoute';

const Rewards: NextPage = () => {
  return (
    <PrivateRoute>
      <HomeLayout>kjdksj</HomeLayout>
    </PrivateRoute>
  );
};

export default Rewards;
