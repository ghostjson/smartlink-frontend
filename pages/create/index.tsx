import { NextPage } from 'next';

import HomeLayout from '../../components/layout/Home.layout';
import Card from '../../components/shared/Card';
import PrivateRoute from '../../hoc/PrivateRoute';

const Create: NextPage = () => {
  return (
    <PrivateRoute>
      <HomeLayout>
        <h1 className='text-center font-bold text-3xl my-10'>
          Create a new SmartLink
        </h1>
        <div className='flex flex-col md:flex-row w-full justify-center md:space-x-5'>
          <Card
            title='Rewards'
            imageSrc='https://images.unsplash.com/photo-1554134449-8ad2b1dea29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/rewards'}
          />
          <div className='divider divider-vertical md:divider-horizontal '>
            OR
          </div>
          <Card
            title='Forms'
            imageSrc='https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/forms'}
          />
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Create;
