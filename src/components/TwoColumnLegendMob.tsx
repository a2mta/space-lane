import React, { FC } from 'react';

const TwoColumnLegendMob: FC<{ items: string[][] }> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className='col-span-1 space-y-2'>
          {item.map((subItem, subIndex) => (
            <span
              key={subItem + subIndex}
              className='text-body-caption-10 font-medium block'
            >
              {subItem}
            </span>
          ))}
        </div>
      ))}
    </>
  );
};

export default TwoColumnLegendMob;
