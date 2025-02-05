import Image from 'next/image';
import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import { SectionHead } from '@/components/SectionHead';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from '@/components/Card';
const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='pt-16 lg:py-24 pb-16'>
      <div className='container'>
        <SectionHead
          title='Happy Clientes'
          header='What Clients Say About Me'
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div
          className='mt-16 lg:mt-24 flex overflow-x-clip'
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent) ',
          }}
        >
          <div className='flex-none flex gap-8'>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className='max-w-xs md:max-w-md md:p-8'>
                <div className='flex gap-4 items-center '>
                  <div className='flex rounded-full bg-gray-700 size-14 flex-shrink-0'>
                    <Image src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='font-semibold'>{testimonial.name}</h3>
                    <h4 className='text-white/50 text-sm'>
                      {testimonial.position}
                    </h4>
                  </div>
                </div>
                <p className='mt-4 md:mt-6 text-sm md:text-base px-4'>
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
