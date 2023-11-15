import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        <SocialIcon
          url='https://twitter.com/janetteking?lang=en'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.tiktok.com/@janette.king'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/janette-king/'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      <div>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          GET IN TOUCH
        </p>
      </div>
    </header>
  );
};

export default Header;
