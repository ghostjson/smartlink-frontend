import { NextPage } from 'next';
import { useMutation } from 'react-query';
import HomeLayout from '../../../components/layout/Home.layout';
import Card from '../../../components/shared/Card';
import AXIOS from '../../../helpers/axios';
import PrivateRoute from '../../../hoc/PrivateRoute';
import { NewForm } from '../../../interfaces/Form';

const Forms: NextPage = () => {
  const mutation = useMutation((data: NewForm) => {
    return AXIOS.post('/api/v1/form', data);
  });

  const newForm = (type: 'survey' | 'quiz') => {
    console.log('runn');

    const d = new Date();
    d.setDate(d.getDate() + 7);
    mutation.mutate({ type: type, validity: d });
  };

  return (
    <PrivateRoute>
      <HomeLayout>
        <h1 className='text-center font-bold text-3xl my-10'>
          Create a new Smartlink Form
        </h1>
        <div className='flex flex-col md:flex-row w-full justify-center md:space-x-5'>
          <Card
            title='Survey'
            imageSrc='/survey.png'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/forms/survey'}
          />
          <div className='divider divider-vertical md:divider-horizontal '>
            OR
          </div>
          <Card
            title='Quiz'
            imageSrc='/quiz.png'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati accusamus quod tenetur vero impedit asperiores id minima omnis inventore?'
            link={'/create/forms/quiz'}
          />
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Forms;
