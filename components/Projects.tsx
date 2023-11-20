'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '
    >
      <h3 className='sectionHeader'>Projects</h3>
      <div className='customScrollbar scrollbar-thin relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png'
              alt=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]/50'>
                  case study {i + 1} of {projects.length}:
                </span>{' '}
                UPS clone
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
                eaque tempora nisi possimus ex dolore voluptatum eum repudiandae
                labore. Dolores tempora consectetur voluptas minus,
                exercitationem nobis dignissimos cumque nemo? Molestiae.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute w-full top-[30%] bg-[#84A98C]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
