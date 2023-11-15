import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div>
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
    </header>
  );
};

export default Header;
