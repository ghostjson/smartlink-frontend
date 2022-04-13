import React from 'react';
import Navbar from '../shared/Navbar';

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='p-8 pt-0'>{children}</div>
    </div>
  );
};

export default HomeLayout;
