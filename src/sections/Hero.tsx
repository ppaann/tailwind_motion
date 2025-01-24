import Image from 'next/image';
import memojicomputer from '../assets/images/memoji-computer.png';
import ArrowDown from '../assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';

export const HeroSection = () => {
  return (
    <div className='pt-32 md:py-48 lg:py-60 relative overflow-x-clip'>
      <div
        className='absolute inset-0 -z-10 opacity-5'
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className='hero-ring size-[620px] '></div>
      <div className='hero-ring size-[820px] '></div>
      <div className='hero-ring size-[1020px] '></div>
      <div className='hero-ring size-[1220px] '></div>
      <div className='container'>
        <div className='flex flex-col justify-between items-center'>
          <Image
            className='size-[100px]'
            src={memojicomputer}
            alt='Man looking from behind the laptop'
          />
          <div className='flex gap-4 justify-center items-center bg-gray-950 border border-white/20 rounded px-4 py-1.5'>
            <div className='bg-green-500 h-2.5 w-2.5 border border-green-500 rounded-full'></div>
            <div className='text-sm text-white/90'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <div className='flex flex-col items-center text-center mt-8 '>
            <h1 className='font-serif text-3xl md:text-5xl tracking-wide '>
              Building Exceptional User Experiences
            </h1>
            <p className='text-gray-400 mt-4 text-center md:text-lg'>
              I specialize in transforming designs into functional,
              high-performing web applications. Let&apos;s discuss your next
              project.
            </p>
          </div>
        </div>
        <div className='flex items-center mt-8 flex-col md:flex-row justify-center gap-4'>
          <button className='border border-white/15 rounded-xl px-6 h-12 gap-2 inline-flex items-center font-bold text-white/90'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='border border-white  rounded-xl px-6 h-12 gap-2 inline-flex items-center font-bold text-gray-900 bg-white'>
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
