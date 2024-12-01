import Image from 'next/image';
import React, { FC } from 'react';

const ProjectPicWithTitle:FC<{coverLink: string, title:string}> = ({coverLink,title}) => {
    return (
        <div className='flex flex-col space-y-4 tracking-normal'>
            <Image src={coverLink} alt='' width={860} height={574} style={{objectFit: 'cover'}} />
            <span className='text-body-caption-10 md:text-body-regular font-light'>{title}</span>
        </div>
    );
};

export default ProjectPicWithTitle;