import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='sectionHeader'> Contact</h3>

      <div className=' flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Looking for help with a project?{' '}
          <span className='underline decoration-[#f7ab0a]/50'>Let's talk.</span>
        </h4>
        <div className=' space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='icon' />
            <p>+123456789</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='icon' />
            <p>janetteking@proton.me</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='icon' />
            <p>Vancouver, BC</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input className='contactInput' type='text' />
            <input className='contactInput' type='text' />
          </div>

          <input className='contactInput' type='text' />

          <textarea />
          <button
            type='submit'
            className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
