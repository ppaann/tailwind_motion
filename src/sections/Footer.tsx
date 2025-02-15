const FooterLinks = [
  {
    title: 'Youtube',
    link: '#',
  },
  {
    title: 'Twitter',
    link: '#',
  },
  {
    title: 'Instagram',
    link: '#',
  },
  {
    title: 'LinkedIn',
    link: '#',
  },
];
import ArrowTopRightIcon from '@/assets/icons/arrow-up-right.svg';

export const Footer = () => {
  return (
    <div className='relative z-0 overflow-x-clip'>
      <div
        className='absolute w-[1600px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/50 -z-10 '
        style={{
          maskImage:
            'radial-gradient(50% 50% at bottom center, black, transparent)',
        }}
      ></div>
      <div className='container pt-16'>
        <div className='py-8 flex flex-col gap-9 items-center border-t-white/40 border-t md:flex-row md:justify-between'>
          <div className='text-white/50'>@copy; All right reserved.</div>
          <nav className='flex flex-col gap-6 md:flex-row md:justify-between'>
            {FooterLinks.map((link, index) => (
              <a
                href='#'
                key={index}
                className='inline-flex gap-1.5 items-center text-white/80'
              >
                <span className='font-semibold text-sm'>{link.title}</span>
                <ArrowTopRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
