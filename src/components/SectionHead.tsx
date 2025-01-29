export const SectionHead = ({
  title,
  header,
  description,
}: {
  title: string;
  header: string;
  description: string;
}) => {
  return (
    <>
      <div className='flex  justify-center'>
        <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent'>
          {title}
        </p>
      </div>

      <h1 className='text-center font-serif text-3xl mt-6 md:text-5xl'>
        {header}
      </h1>
      <p className='text-center text-white/50 mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>
        {description}
      </p>
    </>
  );
};
