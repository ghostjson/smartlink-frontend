import axios from 'axios';
import Cookies from 'js-cookie';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import AuthLayout from '../components/layout/Auth.layout';
import FacebookLoginBtn from '../components/shared/FacebookLoginBtn';

const Home: NextPage = () => {
  const loginUser = async (response: any) => {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/v1/auth/facebook',
      {
        accessToken: response.accessToken,
      }
    );

    Cookies.set('token', data.accessToken);
    Cookies.set('profile', response.picture?.data.url);

    window.location.href = '/';
  };

  useEffect(() => {
    const url = new URL(location.href)
    const facebookToken = url.searchParams.get('token')
    if(facebookToken !== null){
      loginUser({accessToken: facebookToken})
    }
  }, [])

  return (
    <AuthLayout>
      <div className='flex flex-col h-full justify-center p-10'>
        <h1 className='text-5xl font-bold'>🔗SmartLink</h1>
        <div className='form-control w-full max-w-md'>
          <FacebookLogin
            appId='512848473966078'
            fields='name,email,picture'
            callback={loginUser}
            render={(renderProps) => (
              <FacebookLoginBtn onClick={renderProps.onClick} />
            )}
          />
          {/* <label className='label'>
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
        <button
          className='btn btn-primary max-w-md mt-2'
          onClick={() => router.push('/create')}>
          Submit
        </button>
        <Link href='/register'>
          <a className='text-blue-400 hover:underline mt-2 text-center max-w-md'>
            Dont have an accout? SignUp
          </a>
        </Link> */}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Home;
