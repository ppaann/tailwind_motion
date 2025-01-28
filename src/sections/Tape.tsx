const words = [
  'Performant',
  'Scalable',
  'Maintainable',
  'Reliable',
  'Secure',
  'Accessible',
  'Responsive',
  'Intuitive',
  'Search Optimized',
  'Useable',
  'Interactive',
];
import StarIcon from '@/assets/icons/star.svg';
export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24  overflow-x-clip '>
      <div className='flex bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div
          className='flex'
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 70%, transparent)',
          }}
        >
          <div className='flex flex-none gap-4 py-3 '>
            {words.map((word, i) => (
              <div key={i} className='inline-flex items-center gap-4'>
                <span className=' uppercase text-gray-900 font-extrabold text-sm'>
                  {word}
                </span>
                <StarIcon className='size-6 text-gray-900 -rotate-12' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
