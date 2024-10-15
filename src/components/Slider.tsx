'use client';
import Image from 'next/image';
import React, { useState, useRef, MouseEvent } from 'react';

interface ImageSliderProps {
  image1: string;
  image2: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ image1, image2 }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging && sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newPosition =
        ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
      if (newPosition >= 1 && newPosition <= 99) {
        setSliderPosition(newPosition);
      }
    }
  };

  return (
    <div className='relative w-full aspect-video overflow-hidden'>
      <Image
        fill
        src={image1}
        alt='Image 1'
        className='absolute top-0 left-0 w-full h-full object-cover select-none'
      />
      <Image
        src={image2}
        fill
        alt='Image 2'
        className='absolute top-0 left-0 w-full h-full object-cover select-none'
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      <div
        ref={sliderRef}
        className='absolute top-0 left-0 w-full h-full cursor-ew-resize'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Image
          src='/icons/shevron-left.svg'
          width={13}
          height={26}
          alt=''
          className='absolute top-[50%] select-none'
          style={{ left: `${sliderPosition - 2}%` }}
        />
        <div
          className='absolute top-0 left-0 h-full bg-orange w-2'
          style={{ left: `${sliderPosition}%` }}
        />
        <Image
          src='/icons/shevron-right.svg'
          width={13}
          height={26}
          alt=''
          className='absolute top-[50%] select-none'
          style={{ left: `${sliderPosition + 2}%` }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
