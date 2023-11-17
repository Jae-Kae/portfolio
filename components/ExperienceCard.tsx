import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col snap-center  rounded-lg items-center space-y-7 flex-shrink-0 bg-[#84A98C]/20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden p-10  w-[500px] md:w-[600px]'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://www.haply.co/static/haply_logo_white-9cd1c59477d084959e6e9bc0e20dd38b.png'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Fullstack Web Developer</h4>
        <p className='font-bold text-2xl mt-1'>Haply Robotics</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full '
            src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
            alt='tech icon'
          />
          <img
            className='h-10 w-10 rounded-full '
            src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
            alt='tech icon'
          />{' '}
          <img
            className='h-10 w-10 rounded-full '
            src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
            alt='tech icon'
          />{' '}
          <img
            className='h-10 w-10 rounded-full '
            src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
            alt='tech icon'
          />
        </div>
        <p className='uppercase'>started work ...... - ended</p>
        <ul className='list-disc space-y-4 text-lg'>
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
