import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const HeroOrbit = ({
  children,
  size,
  rotation,
  doesOrbit = false,
  orbitDuration,
  doesSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  doesOrbit?: boolean;
  orbitDuration?: string;
  doesSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
      <div
        className={twMerge(doesOrbit && 'animate-spin')}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
          animationDuration: orbitDuration,
        }}
      >
        <div
          className={twMerge(doesSpin && 'animate-spin', 'inline-flex')}
          style={{
            transform: `rotate(${rotation * -1}deg)`,
            animationDuration: spinDuration,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
