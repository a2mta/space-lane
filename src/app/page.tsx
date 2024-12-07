'use client';
import { useSwipeable } from 'react-swipeable';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import { projects } from '@/utils';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import MobileCover from '@/components/MobileCover';
import DesktopCover from '@/components/DesktopCover';

export default function Home() {
  const [coverIndex, setIndex] = useState(0);

  const { push } = useRouter();

  const { link, subTitle, coverSubTitle, title } = projects[coverIndex];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const handleClick = () => {
    push(`/projects/${link}`);
  };

  return (
    <>
      <DesktopCover />
      <MobileCover />
      <PageMarginWithTitle>
        <Grid className='mt-20 md:mt-32 xl:mt-16'>
          <div className='col-span-2 md:col-span-7 md:col-start-2 mb-6 md:mb-0'>
            <div
              className='relative aspect-coverMobile md:aspect-cover'
              {...handlers}
            >
              <div className='flex absolute top-0 left-0 w-full items-center justify-between h-full z-20 '>
                <div className='flex w-full justify-between'>
                  <span
                    className='bg-white py-2 px-[11px] md:px-[18px] md:py-[14px] aspect-square flex justify-center items-center cursor-pointer'
                    onClick={handlePrev}
                  >
                    <Image
                      className='h-[12px] md:h-auto'
                      width={10}
                      height={20}
                      alt=''
                      src='/icons/shevron-left-black.svg'
                    />
                  </span>
                  <span
                    className='bg-white py-2 px-[11px] md:px-[18px] md:py-[14px] aspect-square flex justify-center items-center cursor-pointer'
                    onClick={handleNext}
                  >
                    <Image
                      className='h-[12px] md:h-auto'
                      width={10}
                      height={20}
                      alt=''
                      src='/icons/shevron-right-black.svg'
                    />
                  </span>
                </div>
              </div>
              {projects.map(({ coverImage }, index) => (
                <Image
                  key={coverImage}
                  src={coverImage}
                  alt=''
                  className={classNames('transition-opacity duration-200', {
                    'opacity-100': index === coverIndex,
                    'opacity-0': index !== coverIndex,
                  })}
                  layout='fill'
                />
              ))}
            </div>
          </div>
          <div className='col-span-2 md:col-span-4'>
            <div
              className='flex group cursor-pointer md:hover:text-grey flex-col'
              onClick={handleClick}
            >
              <span className='text-body-regular-mob md:text-h6 xl:text-h5 font-medium pb-2 border-b border-medium-grey'>
                {title}
              </span>
              <div className='flex justify-between items-center mt-4'>
                <span className='block text-body-regular-mob md:text-body-regular font-light md:font-medium'>
                  {coverSubTitle || subTitle}
                </span>
                <span className='min-w-[26px] md:group-hover:opacity-50 relative ml-2 h-[24px] md:min-w-8 md:h-7'>
                  <Image src='/icons/arrow-right.svg' alt='' fill />
                </span>
              </div>
            </div>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </>
  );
}
