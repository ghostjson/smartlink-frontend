import axios from 'axios';
import Cookies from 'js-cookie';

const AXIOS = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.browser ? Cookies.get('token') : ''}`,
    'Access-Control-Allow-Origin': '*',
  },
});

AXIOS.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      Cookies.remove('token');
      window.location.href = '/login';
    }
  }
);

export default AXIOS;
