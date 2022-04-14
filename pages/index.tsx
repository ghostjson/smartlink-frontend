import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import PrivateRoute from '../hoc/PrivateRoute';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/create');
  });
  return <PrivateRoute>fdksj</PrivateRoute>;
};

export default Home;
