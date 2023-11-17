import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://www.haply.co/static/vidBannerHaplyLogo-73066d955b999d2d285d70fb3826742d.png'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Fullstack Web Developer</h4>
        <p className='font-bold text-2xl mt-1'>Haply Robotics</p>
        <div>
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p>started work ...... - ended</p>
        <ul className='list-disc space-y-4 text-lg'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
