import type { NextPage } from 'next';
import Link from 'next/link';
import AuthLayout from '../components/layout/Auth.layout';

const Home: NextPage = () => {
  return (
    <AuthLayout>
      <div className='flex flex-col h-full justify-center p-10'>
        <h1 className='text-5xl font-bold'>🔗SmartLink | Login</h1>
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
        <div className='form-control w-full max-w-md'>
          <label className='label'>
            <span className='label-text'>Password:</span>
          </label>
          <input
            type='text'
            placeholder='Password'
            className='input input-bordered w-full max-w-md'
          />
          <label className='label'>
            <span className='label-text-alt text-error'></span>
          </label>
        </div>
        <button className='btn btn-primary max-w-md mt-2'>Submit</button>
        <Link href='/register'>
          <a className='text-blue-400 hover:underline mt-2 text-center max-w-md'>
            Dont have an accout? SignUp
          </a>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Home;
