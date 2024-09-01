import Image from 'next/image';
import React, { FC } from 'react';

const ProjectPicWithTitle:FC<{coverLink: string, title:string}> = ({coverLink,title}) => {
    return (
        <div className='flex flex-col space-y-4'>
            <Image src={coverLink} alt='' width={860} height={574} objectFit='cover' />
            <span className='text-body-regular'>{title}</span>
        </div>
    );
};

export default ProjectPicWithTitle;