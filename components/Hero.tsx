'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Janette King', 'Frontend Developer', 'MERN'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://exclaim.ca/images/janette_king_what_we_lost.jpg'
        alt='portfolio image'
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F&AB0A' />
      </h1>
    </div>
  );
};

export default Hero;
