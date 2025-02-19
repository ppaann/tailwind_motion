import { twMerge } from 'tailwind-merge';
import { TechIcon } from './TechIcon';
import { Fragment } from 'react';
export const ToolboxItems = ({
  toolboxItems,
  className,
  wrapperClassName,
}: {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  wrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge('flex', className)}
      style={{
        maskImage:
          'linear-gradient(to right, transparent,black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={twMerge(
          'flex-none flex gap-6 py-0.5 pr-6',
          wrapperClassName
        )}
      >
        {new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item, index) => (
              <div
                key={index}
                className=' inline-flex items-center gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-lg'
              >
                <TechIcon component={item.iconType} />
                <p>{item.title}</p>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
