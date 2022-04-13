import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen flex items-center'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='https://images.unsplash.com/photo-1531181650159-94d37a94a0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt='reward'
        className='flex-1 h-full object-cover bg-center hidden xl:block'
      />
      <div className='flex-1 h-full'>{children}</div>
    </div>
  );
};

export default AuthLayout;
