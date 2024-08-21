import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const ProjectCard: FC<{ url: string; title: string; subTitle: string }> = ({
  subTitle,
  title,
  url,
}) => {
  return (
    <div className='group cursor-pointer'>
      <Link href="project/1" style={{display: 'flex', flexDirection: 'column'}}>
        <div className='overflow-hidden'>
          <Image
            className='group-hover:scale-110 transition-transform duration-700 ease-out aspect-w-10 aspect-h-9'
            src='/pics/projects/rublevo.png'
            height={560}
            width={560}
            alt='project'
          />
        </div>
        <span className='mt-4 mb-2'>{title}</span>
        <span>{subTitle}</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
