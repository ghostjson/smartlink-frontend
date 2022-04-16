import { NextPage } from 'next';
import HomeLayout from '../../../components/layout/Home.layout';
import Card from '../../../components/shared/Card';
import PrivateRoute from '../../../hoc/PrivateRoute';

const Forms: NextPage = () => {
  return (
    <PrivateRoute>
      <HomeLayout>
        <h1 className='text-center font-bold text-3xl my-10'>
          Create a new Smartlink Form
        </h1>
        <div className='flex flex-col md:flex-row w-full justify-center md:space-x-5'>
          <Card
            title='Survey'
            imageSrc='https://images.unsplash.com/photo-1589187775328-882e91b3db4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/form/survey'}
          />
          <div className='divider divider-vertical md:divider-horizontal '>
            OR
          </div>
          <Card
            title='Quiz'
            imageSrc='https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/forms/quiz'}
          />
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Forms;
