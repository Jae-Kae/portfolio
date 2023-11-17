'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Janette King', 'Frontend Developer', 'MERN'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://media.licdn.com/dms/image/D5603AQEpkYbzWs7gzw/profile-displayphoto-shrink_800_800/0/1664904622974?e=1705536000&v=beta&t=ooGalYlf2TuufVlpFC09mcEN3v49Z4Y0fTu3ITigc68'
        alt='portfolio'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase pb-2 tracking-[15px]'>
          Web Developer
        </h2>
        <h1 className='px-10 text-5xl lg:text-6xl font-semibold'>
          <span className='mr-3 '>{text}</span>
          <Cursor cursorColor='#cad2c5' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroBtn'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroBtn'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroBtn'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroBtn'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
