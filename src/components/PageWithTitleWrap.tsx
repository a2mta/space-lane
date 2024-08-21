import React, { FC, PropsWithChildren } from 'react';

const PageWithTitleWrap: FC<PropsWithChildren&{title: string}> = ({children, title}) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full mt-52 border-b border-medium-grey'>
        <h4 className='text-4xl mb-6'>{title}</h4>
      </div>
      {children}
    </div>
  );
};

export default PageWithTitleWrap;
