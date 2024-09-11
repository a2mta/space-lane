import React, { FC } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';
import Image from 'next/image';

const ProjectMainPicWithInfo: FC<{
  title: string;
  coverLink: string;
  coverLink2: string;
  subTitle: string;
  location: string;
  area: string;
  year: string;
  status: string;
  type: string;
}> = ({
  area,
  coverLink,
  coverLink2,
  location,
  status,
  subTitle,
  title,
  type,
  year,
}) => {
  return (
    <>
      <PageMarginWithTitle>
        <Grid>
          <div className='col-span-12 mb-10'>
            <div className='text-h2'>{title}</div>
          </div>
        </Grid>
      </PageMarginWithTitle>
      <div className='aspect-video w-full relative'>
        <Image objectFit='cover' src={coverLink} fill alt='' />
      </div>
      <PageMarginWithTitle>
        <Grid className='pt-10'>
          <div className='col-span-7'>
            <span className='text-h4 tracking-normal'>{subTitle}</span>
          </div>
          <div className='col-start-9 col-span-4 text-body-regular'>
            <Grid>
              <div className='col-span-6 flex flex-col space-y-4  text-grey'>
                <span>Местоположение</span>
                <span>Площадь</span>
                <span>Год</span>
                <span>Статус проекта</span>
                <span>Тип</span>
              </div>
              <div className='col-span-6 flex flex-col space-y-4'>
                <span>{location}</span>
                <span>{area}</span>
                <span>{year}</span>
                <span>{status}</span>
                <span>{type}</span>
              </div>
            </Grid>
          </div>
        </Grid>
      </PageMarginWithTitle>
      <div className='aspect-video w-full relative mt-20'>
        <Image objectFit='cover' src={coverLink2} fill alt='' />
      </div>
    </>
  );
};

export default ProjectMainPicWithInfo;
