'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='sectionHeader'>About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src='https://media.licdn.com/dms/image/D5603AQEpkYbzWs7gzw/profile-displayphoto-shrink_800_800/0/1664904622974?e=1705536000&v=beta&t=ooGalYlf2TuufVlpFC09mcEN3v49Z4Y0fTu3ITigc68'
        alt='profile portrait'
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
          background:
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio
          distinctio neque nihil quisquam blanditiis id dolore, consequuntur
          consectetur? Laboriosam ex sed sequi sint optio aut reiciendis harum
          ipsum eveniet.
        </p>
      </div>
    </motion.div>
  )
}

export default About
