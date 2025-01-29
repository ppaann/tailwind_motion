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
  { title: 'painting', emoji: '🎨' },
  { title: 'reading', emoji: '📚' },
  { title: 'traveling', emoji: '🌍' },
  { title: 'photography', emoji: '📸' },
  { title: 'cooking', emoji: '🍳' },
  { title: 'badminton', emoji: '🏸' },
  { title: 'gardening', emoji: '🌿' },
  { title: 'snowboarding', emoji: '🏂' },
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
        <div className='mt-20 flex flex-col gap-8'>
          <Card className='h-[320px]'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspectives.'
            />

            <div className='"flex w-40 mx-auto mt-8'>
              <Image src={bookImage} alt='Book cover' />
            </div>
          </Card>
          <Card className='h-[320px] p-0'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tolls I use to craft exceptional digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItems className='mt-6' toolboxItems={toolboxItems} />
            <ToolboxItems
              className='mt-6'
              wrapperClassName='-translate-x-1/2'
              toolboxItems={toolboxItems}
            />
          </Card>
          <Card>
            <CardHeader
              title='Beyond the Code'
              description='Explore my interest and hobbbies beyond th e development.'
            />

            <div>
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className='flex gap-4 px-3 py-2 outline-2 outline-whilte/10 rounded-lg'
                >
                  <p>{hobby.title}</p>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt='Map' />
            <Image src={smileEmoji} alt='smiling memoji' />
          </Card>
        </div>
      </div>
    </div>
  );
};
