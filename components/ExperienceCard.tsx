import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = { experience: Experience }

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col snap-center  rounded-lg items-center space-y-7 flex-shrink-0 bg-[#84A98C]/20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden p-10  w-[500px] md:w-[600px]'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='company logo'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology?._id}
              className='h-10 w-10 rounded-full '
              src={urlFor(technology?.image).url()}
              alt='tech icon'
            />
          ))}
        </div>
        <p className='uppercase'>
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 text-lg pr-5 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7a]/80'>
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
