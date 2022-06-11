import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import AXIOS from '../../helpers/axios';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AXIOS.post('/api/v1/auth/logout');
    Cookies.remove('token');
    window.location.href = '/login';
  };

  return (
    <div className='navbar xl:px-8 bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link href='/create' passHref>
                <a
                  className={
                    router.pathname.match('/create*') ? 'font-bold' : ''
                  }>
                  Create
                </a>
              </Link>
            </li>
            <li>
              <Link href='/manage' passHref>
                <a
                  className={
                    router.pathname.match('/manage*') ? 'font-bold' : ''
                  }>
                  Manage
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href='/' passHref>
          <a className='normal-case font-bold text-xl'>
            <img
              src='/logo-horizontal.png'
              alt='smartlink logo'
              className='h-auto w-32'
            />
          </a>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link href='/create' passHref>
              <a
                className={
                  router.pathname.match('/create*') ? 'font-bold' : ''
                }>
                Create
              </a>
            </Link>
          </li>
          <li>
            <Link href='/manage' passHref>
              <a
                className={
                  router.pathname.match('/manage*') ? 'font-bold' : ''
                }>
                Manage
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={Cookies.get('profile')} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
