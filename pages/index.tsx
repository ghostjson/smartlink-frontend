import type { NextPage } from 'next';
import PrivateRoute from '../hoc/PrivateRoute';

const Home: NextPage = () => {
  return <PrivateRoute>Hello</PrivateRoute>;
};

export default Home;
