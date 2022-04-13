import { NextPage } from 'next';
import HomeLayout from '../../../components/layout/Home.layout';
import PrivateRoute from '../../../hoc/PrivateRoute';

const Forms: NextPage = () => {
  return (
    <PrivateRoute>
      <HomeLayout>forms</HomeLayout>
    </PrivateRoute>
  );
};

export default Forms;
