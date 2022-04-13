import { NextPage } from 'next';

import HomeLayout from '../../components/layout/Home.layout';
import PrivateRoute from '../../hoc/PrivateRoute';

const Manage: NextPage = () => {
  return (
    <PrivateRoute>
      <HomeLayout>
        <div>Manage</div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Manage;
