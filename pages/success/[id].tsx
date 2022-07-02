import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeLayout from '../../components/layout/Home.layout';

const Success = () => {
  const router = useRouter();
  const [url, setUrl] = useState('');
  useEffect(() => {
    const path = location.href.split('success')[0];
    setUrl(path + 'view/' + router.query.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeLayout>
      <div className='flex flex-col items-center'>
        <div className='text-xl font-bold'>Successfully created SmartLink</div>
        <span>Share the link below</span>
        <a href={url} className='underline text-blue-500' target='blank'>
          {url}
        </a>
      </div>
    </HomeLayout>
  );
};
export default Success;
