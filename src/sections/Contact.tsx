import UpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className='pt-8'>
      <div className='container'>
        <div className='px-8 py-8 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl flex flex-col md:flex-row text-center items-center relative z-0 overflow-hidden md: gap-16'>
          <div
            className='absolute inset-0 opacity-5 -z-10'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className='md:text-start'>
            <h1 className='text-gray-900 font-serif text-2xl md:text-3xl'>
              Let&apos;s create something amazing together
            </h1>
            <p className='pt-4 text-sm text-gray-900 md:text-base'>
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <button className='inline-flex py-3 h-12 px-6 bg-gray-950 rounded-xl mt-8 font-semibold items-center gap-2 w-max'>
              Contact Me
              <span>
                <UpRightIcon className='size-4' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
