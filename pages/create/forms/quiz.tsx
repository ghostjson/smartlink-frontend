import React, { useState } from 'react';
import uniqid from 'uniqid';

import HomeLayout from '../../../components/layout/Home.layout';
import QuizForm from '../../../components/shared/QuizForm';
import ScoreForm from '../../../components/shared/ScoreForm';
import PrivateRoute from '../../../hoc/PrivateRoute';

const Quiz = () => {
  const [page, setPage] = useState(0);
  const moveToNextPage = () => {
    if (page >= 1) return;
    setPage((page) => page + 1);
  };
  const moveToPreviousPage = () => {
    if (page < 1) return;
    setPage((page) => page - 1);
  };

  return (
    <PrivateRoute>
      <HomeLayout>
        <ul className='steps w-full my-4'>
          <li className='step step-primary'>Create</li>
          <li className={`step ${page === 1 && 'step-primary'}`}>Score</li>
          <li className='step'>Design</li>
        </ul>
        <div className='flex flex-col space-y-5 items-center'>
          {page === 0 ? <QuizForm /> : <ScoreForm title='apple' total={100} />}

          <div className='flex gap-2'>
            <button
              onClick={moveToPreviousPage}
              className={`btn btn-primary xl:btn-wide `}>
              Back
            </button>
            <button
              onClick={moveToNextPage}
              className='btn btn-primary xl:btn-wide'>
              Next
            </button>
          </div>
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Quiz;
