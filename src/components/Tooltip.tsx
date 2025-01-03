'use client';
import useClickAway from '@/hooks/useClickAway';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';

const Tooltip: FC<{ children: ReactElement }> = ({ children }) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);
  const toggleTooltip = () => setTooltipVisibility(!isTooltipVisible);
  const modalRef = useRef(null);
  useClickAway(modalRef, () => setTooltipVisibility(false));
  const pathname = usePathname();
  useEffect(() => {
    setTooltipVisibility(false);
  }, [pathname]);
  return (
    <>
      {React.cloneElement(children, { onClick: toggleTooltip })}
      {isTooltipVisible && (
        <div className='absolute  py-2 bg-white left-20 -top-4' ref={modalRef}>
          <div className='aspect-tooltip w-52 md:w-60'>
            <Image alt='' src='/icons/tooltip-bg.svg' fill />
            <span className='pl-6 pr-9 text-body-caption-mob md:text-body-caption font-medium block top-4 absolute'>
              The English version of the site is currently under development
            </span>
            <Image
              onClick={toggleTooltip}
              src='/icons/tooltip-cross.svg'
              width={11}
              height={12}
              alt=''
              className='absolute top-4 right-2 cursor-pointer'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
