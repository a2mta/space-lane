import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const MobileCover = () => {
  const [hasShownAnimation, setHasShownAnimation] = useState(false);
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const hasShownAnimationStorage = sessionStorage.getItem('hasShownAnimation');

  const coverElement = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (hasShownAnimation) return;
    const handleAnimationEnd = () => {
      setTimeout(() => {
        setHasShownAnimation(true);
        sessionStorage.setItem('hasShownAnimation', 'true');
      }, 500);
    };

    const element = coverElement.current;
    if (element) {
      element.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [hasShownAnimation]);
  if (!isMobile || hasShownAnimationStorage) return null;
  return (
    !hasShownAnimation && (
      <div
        className='fixed left-0 top-0 w-full h-full bg-white z-[999999] transition-opacity duration-1000'
        style={{ opacity: 1, animation: 'fadeOut 0.5s forwards 2.5s' }}
      >
        <div className='flex w-full h-full items-center justify-center flex-col px-5'>
          <Image
            priority={true}
            src='/icons/logo.svg'
            width={320}
            height={41}
            className=' transition-opacity duration-1000 delay-500'
            alt='space lane logo'
            style={{ opacity: 0, animation: 'fadeIn 1s forwards 0.5s' }}
          />
          <Image
            ref={coverElement}
            priority={true}
            src='/pics/cover/sub_logo.svg'
            width={281}
            height={48}
            className='mt-6 transition-opacity px-7 duration-1000 delay-800'
            alt='space lane logo'
            style={{ opacity: 0, animation: 'fadeIn 1s forwards 1.5s' }}
          />
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          @keyframes fadeOut {
            to {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    )
  );
};

export default MobileCover;
