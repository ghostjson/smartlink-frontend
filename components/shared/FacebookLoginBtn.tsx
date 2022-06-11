import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { BsFacebook } from 'react-icons/bs';

interface FacebookLoginBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const FacebookLoginBtn: FC<FacebookLoginBtnProps> = ({ onClick }) => {
  return (
    <button
      className='bg-[#1877f2] rounded p-4 px-8 text-white font-bold my-8 flex items-center space-x-2'
      onClick={onClick}>
      <BsFacebook className='text-xl' />
      <span>Login/Signup with Facebook</span>
    </button>
  );
};
export default FacebookLoginBtn;
