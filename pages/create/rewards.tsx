import Link from 'next/link';
import { NextPage } from 'next';
import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { joiResolver } from '@hookform/resolvers/joi';
import HomeLayout from '../../components/layout/Home.layout';
import RewardForm from '../../components/shared/RewardForm';
import RewardView from '../../components/shared/RewardView';
import PrivateRoute from '../../hoc/PrivateRoute';
import { newReward, RewardI } from '../../interfaces/Reward';
import { useMutation } from 'react-query';
import AXIOS from '../../helpers/axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { RewardFormSchema } from '../../schema/RewardFormSchema';
import { DevTool } from '@hookform/devtools';

const Rewards: NextPage = () => {
  const router = useRouter();
  const {
    getValues,
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RewardI>({
    mode: 'onBlur',
    resolver: joiResolver(RewardFormSchema),
    defaultValues: {
      style: {
        fgColor: '#ff5757',
        bgColor: '#4ab1ff',
      },
    },
  });

  const mutation = useMutation(
    (data: newReward) => {
      return AXIOS.post('/api/v1/rewards', data);
    },
    {
      onSuccess: () => {
        router.push('/create');
      },
    }
  );

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<RewardI>({
    name: '',
    type: 'coupon',
    coupon: {
      discount: '',
    },
    voucher: {
      price: 'usd',
      currency: '',
    },
    promo: {
      buy: '',
      get: '',
    },
    content: {},
    date: '',
    style: {
      fgColor: '#ff5757',
      bgColor: '#4ab1ff',
    },
    count: 0,
  });

  // creating a reward in the database
  const createReward = () => {
    const data = {
      name: formData.name,
      type: formData.type,
      content: formData[formData.type],
      validity: new Date(formData.date).toISOString(),
      style: formData.style,
      count: formData.count,
    };
    mutation.mutate(data);
  };

  const generateRewardTitle = () => {
    if (formData.type === 'coupon') {
      return `${formData.coupon?.discount}% Discount`;
    } else if (formData.type === 'voucher') {
      return `Get ${
        formData.voucher?.price
      } ${formData.voucher?.currency?.toUpperCase()} Voucher`;
    } else if (formData.type === 'promo') {
      return `Buy ${formData.promo?.buy} Get ${formData.promo?.get} Promo`;
    } else {
      return '';
    }
  };
  console.log(errors);

  return (
    <PrivateRoute>
      <HomeLayout>
        <DevTool control={control} />
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Link href='/create'>
            <a className='text-slate-400 flex items-center container mx-auto'>
              <BiChevronLeft />
              <span>Home</span>
            </a>
          </Link>
          <ul className='steps w-full my-4'>
            <li className='step step-primary'>Create</li>
            <li className={`step ${page === 1 && 'step-primary'}`}>Design</li>
          </ul>
          <div className='flex flex-col space-y-5 items-center'>
            {page === 0 && (
              <RewardForm
                formData={formData}
                setFormData={setFormData}
                register={register}
              />
            )}
            {page === 1 && (
              <RewardView
                editable
                formData={formData}
                setFormData={setFormData}
                title={formData.name}
              />
            )}
            <span className='text-red-500'>
              {errors[getValues('type')]?.message}
            </span>
            <div className='flex gap-2'>
              <button
                className={`btn btn-primary xl:btn-wide ${
                  page === 0 ? 'disabled' : ''
                }`}
                disabled={page === 0}
                onClick={() => setPage(page - 1)}>
                Back
              </button>
              <button
                type='submit'
                className='btn btn-primary xl:btn-wide'
                onClick={() => {
                  if (page < 1) {
                    setPage(page + 1);
                  } else {
                    // createReward();
                  }
                }}>
                {page === 0 ? 'Next' : 'Create'}
              </button>
            </div>
          </div>
        </form>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Rewards;
