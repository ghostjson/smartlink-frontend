import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiChevronLeft } from 'react-icons/bi';

import HomeLayout from '../../components/layout/Home.layout';
import QuizDetails from '../../components/shared/QuizDetails';
import { genQuizData } from '../../helpers/data';
import PrivateRoute from '../../hoc/PrivateRoute';
import CouponDetails from '../../components/shared/CouponDetails';
import PromoDetails from '../../components/shared/PromoDetails';
import RewardDetails from '../../components/shared/RewardDetails';
import SurveyDetails from '../../components/shared/SurveyDetails';
import VoucherDetails from '../../components/shared/VoucherDetails';
import { useQuery } from 'react-query';
import AXIOS from '../../helpers/axios';

const Manage = () => {
  const [quizDetails, setQuizDetails] = useState(genQuizData());
  const router = useRouter();
  const type: 'quiz' | 'coupon' | 'promo' | 'survey' | 'reward' | 'voucher' =
    'quiz';

  const formQuery = useQuery(['view/form', router.query.id], () => {
    return AXIOS.get(`/api/v1/forms/${router.query.id}`);
  });

  const responseQuery = useQuery(['view/reponse', router.query.id], () => {
    return AXIOS.get(`/api/v1/responses/${router.query.id}`);
  });

  return (
    <PrivateRoute>
      <HomeLayout>
        <Link href='/manage'>
          <a className='text-slate-400 flex items-center container mx-auto'>
            <BiChevronLeft />
            <span>Back</span>
          </a>
        </Link>
        <div className='mt-2'>
          {!formQuery.isLoading && !responseQuery.isLoading ? (
            formQuery?.data?.data.type === 'quiz' ? (
              <QuizDetails {...quizDetails} />
            ) : formQuery?.data?.data.type === 'coupon' ? (
              <CouponDetails />
            ) : formQuery?.data?.data.type === 'promo' ? (
              <PromoDetails />
            ) : formQuery?.data?.data.type === 'reward' ? (
              <RewardDetails />
            ) : formQuery?.data?.data.type === 'survey' ? (
              <SurveyDetails
                form={formQuery.data?.data}
                responses={responseQuery.data?.data}
              />
            ) : (
              <VoucherDetails />
            )
          ) : null}
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Manage;
