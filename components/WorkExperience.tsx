'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative overflow-hidden flex flex-col text-lift md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='sectionHeader'>Expeerience</h3>

      <div>
        {/* Experience Card */}
        {/* Experience Card */}
        {/* Experience Card */}
        {/* Experience Card */}
      </div>
    </motion.div>
  )
}

export default WorkExperience
