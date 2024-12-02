import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const ProjectCard: FC<{
  densed?: boolean;
  image: string;
  link: string;
  title: string;
  subTitle: string;
}> = ({ subTitle, title, densed, link, image }) => {
  return (
    <div className='group cursor-pointer'>
      <Link
        href={`/projects/${link}`}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div className='overflow-hidden'>
          <Image
            className='md:group-hover:scale-110 transition-transform duration-700 ease-out aspect-w-10 aspect-h-9'
            src={image}
            height={560}
            width={560}
            alt='project'
          />
        </div>
        <span className='mt-4 mb-2 text-body-regular-mob md:text-body-regular xl:text-h5 font-medium'>{title}</span>
        <span className='text-body-regular-mob md:text-body-regular font-light md:font-medium'>{subTitle}</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
