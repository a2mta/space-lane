'use client';
import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, useState } from 'react';

const MobileSlider: FC<{
  image1: { src: string; title: string };
  image2: { src: string; title: string };
  width: number;
  height: number;
  className?: string;
}> = ({ height, width, image1, image2, className }) => {
  const [activeSlide, toggleSlide] = useState(0);
  const handleToggle = (slide: number) => toggleSlide(slide);
  const src = [image1.src, image2.src][activeSlide];
  const isActive = (slide: number) => activeSlide === slide;
  return (
    <div className={classNames(className, 'md:hidden')}>
      <Image width={width} height={height} src={src} alt='' />
      <div className='text-body-caption-10 font-medium space-x-2 mt-2 flex justify-center'>
        <span
          onClick={() => handleToggle(0)}
          className={classNames('px-2 py-1 block text-medium-grey', {
            'bg-black text-white': isActive(0),
          })}
        >
          {image1.title}
        </span>
        <span
          onClick={() => handleToggle(1)}
          className={classNames('px-2 cursor-pointer py-1 block', {
            'bg-black text-white': isActive(1),
          })}
        >
          {image2.title}
        </span>
      </div>
    </div>
  );
};

export default MobileSlider;
