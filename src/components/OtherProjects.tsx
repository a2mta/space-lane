'use client';
import React, { useMemo, useState } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';
import { projects as unfilteredProj } from '@/utils';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const getActiveProject = (url: string) => {
  const urlParts = url.split('/');
  return urlParts.length > 2 ? urlParts[2] : null;
};

const OtherProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();
  const prname = getActiveProject(pathname);

  const projects = useMemo(
    () => unfilteredProj.filter(({ link }) => link !== prname),
    [prname]
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Math.round(projects.length / 3) - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Math.round(projects.length / 3) - 1 ? prevIndex + 1 : 0
    );
  };

  const translates = (val: number, index: number) => {
    switch (true) {
      case val === index:
        return 'translateX(0%)';
      case val < index:
        return 'translateX(calc(100% + 40px))';
      case val > index:
        return 'translateX(calc(-100% - 40px))';
      default:
        break;
    }
  };

  return (
    <PageMarginWithTitle className='mt-30 md:mt-60 mb-30 md:mb-0'>
      <Grid>
        <div className='col-span-2 md:col-span-12 mb-10 md:mb-16'>
          <div className='flex justify-between items-center'>
            <span className='text-h3-mob md:text-h4 font-medium'>
              Другие проекты
            </span>
            <div className='hidden md:flex space-x-4 xl:space-x-6 h-9 py-1'>
              <Image
                onClick={handlePrev}
                className='cursor-pointer'
                src='/icons/arrow-left.svg'
                width={24}
                height={24}
                alt=''
              />
              <Image
                onClick={handleNext}
                className='cursor-pointer'
                src='/icons/arrow-right.svg'
                width={24}
                height={24}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='col-span-2 md:hidden -mr-5'>
          <div className='flex overflow-x-scroll w-full space-x-5'>
            {projects.map((item, index) => (
              <div className='min-w-[80vw]' key={index + item.title}>
                <ProjectCard {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:flex col-span-12 md:min-h-[40rem] justify-between items-center'>
          <div className='overflow-hidden flex relative h-full w-full'>
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                style={{
                  transform: translates(currentIndex, index),
                }}
                className={classNames(
                  'w-full h-full absolute transition-transform duration-500 ease-in-out bg-white',
                  `z-${index}`
                )}
              >
                <Grid>
                  {projects
                    .slice(index * 3, (index + 1) * 3)
                    .map((item, idx) => (
                      <div className='col-span-4' key={idx + item.title}>
                        <ProjectCard densed {...item} />
                      </div>
                    ))}
                </Grid>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </PageMarginWithTitle>
  );
};

export default OtherProjects;
