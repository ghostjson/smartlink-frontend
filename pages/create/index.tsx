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
            imageSrc='/rewards.png'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/rewards'}
          />
          <div className='divider divider-vertical md:divider-horizontal '>
            OR
          </div>
          <Card
            title='Forms'
            imageSrc='/forms.png'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/forms'}
          />
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Create;
