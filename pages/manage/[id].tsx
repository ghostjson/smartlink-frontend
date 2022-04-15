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

const Manage = () => {
  const [quizDetails, setQuizDetails] = useState(genQuizData());
  const router = useRouter();
  const { id } = router.query;
  const type: 'quiz' | 'coupon' | 'promo' | 'survey' | 'reward' | 'voucher' =
    'quiz';

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
          {type === 'quiz' ? (
            <QuizDetails {...quizDetails} />
          ) : type === 'coupon' ? (
            <CouponDetails />
          ) : type === 'promo' ? (
            <PromoDetails />
          ) : type === 'reward' ? (
            <RewardDetails />
          ) : type === 'survey' ? (
            <SurveyDetails />
          ) : (
            <VoucherDetails />
          )}
        </div>
      </HomeLayout>
    </PrivateRoute>
  );
};

export default Manage;
