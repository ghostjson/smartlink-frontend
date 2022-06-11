import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authorised, setAuthorised] = useState(false);
  useEffect(() => {
    // TODO: check token and authenticate
    const token = Cookies.get('token');
    if (!token) {
      window.location.href = '/login';
    }
    setAuthorised(true);
  }, []);
  return <>{authorised ? children : null}</>;
};

export default PrivateRoute;
