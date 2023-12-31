'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative overflow-hidden flex flex-col text-lift md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='sectionHeader'>Experience</h3>

      <div className='customScrollbar w-full flex mt-10 space-x-5 overflow-scroll p-10  snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience
