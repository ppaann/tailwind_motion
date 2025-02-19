import { Card } from '@/components/Card';
import { SectionHead } from '@/components/SectionHead';
import StartIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from '@/components/TechIcon';
import mapImage from '@/assets/images/map.png';
import smileEmoji from '@/assets/images/memoji-avatar-1.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';

const toolboxItems = [
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML', iconType: HTMLIcon },
  { title: 'CSS', iconType: CSSIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Github', iconType: GithubIcon },
  { title: 'Chrome', iconType: ChromeIcon },
];
const hobbies = [
  { title: 'painting', emoji: '🎨', top: '5%', left: '5%' },
  { title: 'reading', emoji: '📚', top: '60%', left: '5%' },
  { title: 'traveling', emoji: '🌍', top: '10%', left: '35%' },
  { title: 'photography', emoji: '📸', top: '35%', left: '40%' },
  { title: 'cooking', emoji: '🍳', top: '70%', left: '45%' },
  { title: 'badminton', emoji: '🏸', top: '5%', left: '65%' },
  { title: 'gardening', emoji: '🌿', top: '45%', left: '70%' },
  { title: 'snowboarding', emoji: '🏂', top: '30%', left: '10%' },
];

export const AboutSection = () => {
  return (
    <div className='py-24'>
      <div className='container'>
        <SectionHead
          title='About Me'
          header='A Glimpse Into My Word'
          description='Learn more about who I am, what I do'
        />
        <div className='mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8'>
          <Card className='h-[320px] md:col-span-2'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspectives.'
            />

            <div className='"flex w-40 mx-auto mt-8'>
              <Image src={bookImage} alt='Book cover' />
            </div>
          </Card>
          <Card className='h-[320px] p-0 md:col-span-3'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tolls I use to craft exceptional digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItems
              className='mt-6'
              toolboxItems={toolboxItems}
              wrapperClassName='animate-move-left [animation-duration:30s]'
            />
            <ToolboxItems
              className='mt-6'
              wrapperClassName='animate-move-right [animation-duration:15s]'
              toolboxItems={toolboxItems}
            />
          </Card>
          <Card className='h-[320px] p-0 flex flex-col md:col-span-3'>
            <CardHeader
              title='Beyond the Code'
              description='Explore my interest and hobbbies beyond th e development.'
              className='py-6 px-4'
            />

            <div className='flex-1 relative'>
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className='absolute inline-flex gap-2 items-center px-6 py-2 outline-2 outline-whilte/10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400'
                  style={{
                    top: hobby.top,
                    left: hobby.left,
                  }}
                >
                  <p className='font-medium text-gray-950'>{hobby.title}</p>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className='h-[320px p-0 relative md:col-span-2'>
            <Image
              src={mapImage}
              alt='Map'
              className='w-full h-full object-cover'
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400  rounded-full border-2  border-gray-950/30'>
              <Image
                src={smileEmoji}
                alt='smiling memoji'
                className='size-20'
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
