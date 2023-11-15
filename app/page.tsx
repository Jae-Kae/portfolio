import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Image from 'next/image';

// pallet https://coolors.co/palette/cad2c5-84a98c-52796f-354f52-2f3e46

const Home = () => {
  return (
    <div className='bg-[#354F52] text-[#cad2c5] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
