import React, { FC, PropsWithChildren } from 'react';

const PageWithTitleWrap: FC<PropsWithChildren&{title: string}> = ({children, title}) => {
  return (
    <div className='flex flex-col w-full lg:px-20 px-5'>
      <div className='w-full mt-50 border-b border-medium-grey'>
        <h4 className='text-h4 mb-6'>{title}</h4>
      </div>
      {children}
    </div>
  );
};

export default PageWithTitleWrap;
