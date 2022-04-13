import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import AuthLayout from '../components/layout/Auth.layout';

const Home: NextPage = () => {
  const [sendOTP, setSendOTP] = useState<boolean>(false);
  const handleSendOTP = () => {
    setSendOTP(true);
  };
  return (
    <AuthLayout>
      <div className='flex flex-col h-full justify-center p-10'>
        <h1 className='text-5xl font-bold'>🔗SmartLink | Signup</h1>
        <div className='form-control w-full max-w-md'>
          <label className='label'>
            <span className='label-text'>Mobile No:</span>
          </label>
          <input
            type='text'
            placeholder='+64-1234567890'
            className='input input-bordered w-full max-w-md'
          />
          <label className='label'>
            <span className='label-text-alt text-error'></span>
          </label>
        </div>
        {!sendOTP && (
          <button onClick={handleSendOTP} className='btn btn-info max-w-md'>
            Send Otp
          </button>
        )}
        {sendOTP && (
          <>
            <div className='form-control w-full max-w-md'>
              <label className='label'>
                <span className='label-text'>Verification Code:</span>
              </label>
              <input
                type='text'
                placeholder='_ _ _ _ _ '
                className='input input-bordered w-full max-w-md'
              />
              <label className='label'>
                <span className='label-text-alt text-error'></span>
              </label>
            </div>
            <button className='btn btn-primary max-w-md mt-2'>Submit</button>
          </>
        )}
        <Link href='/login'>
          <a className='link link-hover mt-2 text-center max-w-md'>
            Have an accout? Login
          </a>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Home;
