import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Image from 'next/image'
import Link from 'next/link'

// pallet https://coolors.co/palette/cad2c5-84a98c-52796f-354f52-2f3e46

const Home = () => {
  return (
    <div
      className='bg-[#354F52] text-[#cad2c5] h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden
    customScrollbar'
    >
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center gap-2'>
            Built by Janette King
            <img
              src='https://media.licdn.com/dms/image/D5603AQEpkYbzWs7gzw/profile-displayphoto-shrink_800_800/0/1664904622974?e=1705536000&v=beta&t=ooGalYlf2TuufVlpFC09mcEN3v49Z4Y0fTu3ITigc68'
              alt='Logo'
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
