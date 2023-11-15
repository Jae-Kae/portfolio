'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Janette King", 'Frontend Developer', 'MERN'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F&AB0A' />
      </h1>
    </div>
  );
};

export default Hero;
