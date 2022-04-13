import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // TODO: check token and authenticate
    const token = Cookies.get('token');
    // if (!token) {
    //   window.location.href = '/login';
    // }
  });
  return <>{children}</>;
};

export default PrivateRoute;
