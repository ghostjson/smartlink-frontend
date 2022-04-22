import React from 'react';

import HomeLayout from '../../../components/layout/Home.layout';
import SurveyForm from '../../../components/shared/SurveyForm';
import PrivateRoute from '../../../hoc/PrivateRoute';

const Survey = () => {
  return (
    <PrivateRoute>
      <HomeLayout>
        <ul className='steps w-full my-4'>
          <li className='step step-primary'>Create</li>
          <li className={`step `}>Design</li>
        </ul>
        <div className='flex flex-col space-y-5 items-center'>
          <SurveyForm />
          <div className='flex gap-2'>
            <button className={`btn btn-primary xl:btn-wide `}>Back</button>
            <button className='btn btn-primary xl:btn-wide'>Next</button>
          </div>
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Survey;
