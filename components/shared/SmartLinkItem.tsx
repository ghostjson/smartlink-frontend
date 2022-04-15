import React from 'react';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
export interface SmartLinkProps {
  id: string | number;
  title: string;
  category: 'reward' | 'survey' | 'quiz' | 'form';
}

const SmartLinkItem: React.FC<SmartLinkProps> = ({ id, title, category }) => {
  return (
    <Link href={`/manage/${id}`} passHref>
      <div className='flex flex-row items-center justify-between gap-1 xl:gap-3 w-full bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-lg p-4 my-4'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-lg capitalize'>{title}</h1>
          <div className='badge badge-info badge-outline'>{category}</div>
        </div>
        <BiLinkExternal className='text-2xl text-gray-500' />
      </div>
    </Link>
  );
};

export default SmartLinkItem;
