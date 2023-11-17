import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6]
  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='sectionHeader'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y5 items-center justify-center p-20 md:p-44 h-screen '>
            <img
              src='https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png'
              alt=''
            />
            <div>
              <h4>
                case study {i + 1} of {projects.length}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute w-full top-[30%] bg-[#84A98C]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default Projects
