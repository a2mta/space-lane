'use client';
import { useSwipeable } from 'react-swipeable';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import { projects } from '@/utils';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import animationData from './animation.json';
import Lottie, { AnimationItem } from 'lottie-web';

export default function Home() {
  const [coverIndex, setIndex] = useState(0);

  const { push } = useRouter();

  const { link, subTitle, title } = projects[coverIndex];
  const [animationVisible, toggleVisibility] = useState(true);
  const [containerVisible, toggleContainer] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const animation = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      toggleVisibility(false);
      toggleContainer(false);
      document.documentElement.style.overflow = 'auto';
      return;
    }

    const hasShownAnimation = sessionStorage.getItem('hasShownAnimation');
    if (hasShownAnimation) {
      toggleVisibility(false);
      toggleContainer(false);
      document.documentElement.style.overflow = 'auto';
      return;
    }

    document.documentElement.style.overflow = 'hidden';
    if (containerRef.current) {
      animation.current = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        loop: false,
        autoplay: false,
        name: 'screen',
      });
      animation.current.play();
    }

    setTimeout(() => {
      if (animationVisible) {
        handleVisibility();
      }
    }, 10000);
  }, [animationVisible]);

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

  const handleVisibility = () => {
    toggleVisibility(false);
    if (animation.current) {
      animation.current.stop();
    }
    setTimeout(() => {
      document.documentElement.style.overflow = 'auto';
      toggleContainer(false);
      sessionStorage.setItem('hasShownAnimation', 'true');
    }, 1000);
  };

  return (
    <>
      {containerVisible && (
        <div
          onClick={handleVisibility}
          className={classNames(
            'z-[999999] cursor-pointer fixed w-screen bg-white h-screen top-0 left-0 transition-opacity duration-1000 md:block hidden',
            { 'opacity-0': !animationVisible }
          )}
          ref={containerRef}
        />
      )}
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
            <div className='flex cursor-pointer flex-col' onClick={handleClick}>
              <span className='text-body-regular-mob md:text-h6 xl:text-h5 font-medium pb-2 border-b border-medium-grey'>
                {title}
              </span>
              <div className='flex justify-between items-center mt-4'>
                <span className='block text-body-regular-mob md:text-body-regular font-light md:font-medium'>
                  {subTitle}
                </span>
                <span className='w-6 h-4 md:w-8 md:h-7'>
                  <Image
                    src='/icons/arrow-right.svg'
                    alt=''
                    width={31}
                    height={28}
                  />
                </span>
              </div>
            </div>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </>
  );
}
