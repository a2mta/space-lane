'use client';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';

const ReadMore: FC<{
  children: ReactElement[];
}> = ({ children }) => {
  const [readMore, setReadMore] = React.useState(false);
  const toggleReadMore = () => setReadMore((prev) => !prev);
  return (
    <>
      <div className='relative'>
        {children[0]}
        {!readMore && (
          <div onClick={toggleReadMore} className='flex md:hidden justify-end'>
            <span className='text-body-caption-10 font-medium absolute right-3 bottom-0'>
              Читать далее
            </span>
            <Image
              src='/icons/small-shevron-right.svg'
              alt='arrow-right'
              width={8}
              height={16}
            />
          </div>
        )}
      </div>
      {readMore && (
        <div className='relative'>
          {children.slice(1)}
          <div onClick={toggleReadMore} className='flex md:hidden justify-end'>
            <span className='text-body-caption-10 font-medium absolute right-4 bottom-[-3]'>
              Свернуть
            </span>
            <Image
              className='transform -rotate-90'
              src='/icons/small-shevron-right.svg'
              alt='arrow-top'
              width={8}
              height={16}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReadMore;
