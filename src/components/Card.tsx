import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...others
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800 p-6 rounded-3xl outline outline-3 outline-white/20 overflow-hidden relative -z-20 ',
        className
      )}
      {...others}
    >
      <div
        className='inset-0 absolute -z-10 opacity-5'
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
