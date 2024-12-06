import React, { FC, ReactNode } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';
import Image from 'next/image';

const ProjectMainPicWithInfo: FC<{
  title: string | ReactNode;
  coverLink?: string;
  coverLink2?: string;
  coverLink2Title?: string;
  subTitle: string | ReactNode;
  location: string;
  area: string;
  year: string;
  status: string;
  type: string;
}> = ({
  area,
  coverLink,
  coverLink2,
  coverLink2Title,
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
          <div className='col-span-2 md:col-span-12 md:mb-10 mb-5'>
            <div className='whitespace-pre-wrap md:whitespace-normal text-h3-mob md:text-h2 font-medium'>{title}</div>
          </div>
        </Grid>
      </PageMarginWithTitle>
      {coverLink && (
        <div className='aspect-video w-full relative'>
          <Image style={{ objectFit: 'cover' }} src={coverLink} fill alt='' />
        </div>
      )}
      <PageMarginWithTitle>
        <Grid className='md:pt-10 pt-4'>
          <div className='md:col-span-8 col-span-2'>
            {typeof subTitle === 'string' ? (
              <span className='md:text-h4 text-h4-mob font-medium whitespace-pre-wrap md:whitespace-normal tracking-normal'>
                {subTitle}
              </span>
            ) : (
              subTitle
            )}
          </div>
          <div className='md:col-start-9 md:col-span-4 col-span-2 text-body-regular space-y-4 md:mt-0 mt-4'>
            <Grid cols={10} colsXL={10}>
              <div className='md:col-span-5 col-span-1'>
                <span className='text-body-regular-mob md:text-body-regular font-light text-grey'>
                  Местоположение
                </span>
              </div>
              <div className='md:col-span-5 col-span-1'>
                <span className='whitespace-pre-wrap md:whitespace-normal'>{location}</span>
              </div>
            </Grid>
            <Grid cols={10} colsXL={10}>
              <div className=' md:col-span-5 col-span-1'>
                <span className='text-body-regular-mob md:text-body-regular font-light text-grey'>
                  Площадь
                </span>
              </div>
              <div className=' md:col-span-5 col-span-1'>
                <span>{area}</span>
              </div>
            </Grid>
            <Grid cols={10} colsXL={10}>
              <div className=' md:col-span-5 col-span-1'>
                <span className='text-body-regular-mob md:text-body-regular font-light text-grey'>
                  Год
                </span>
              </div>
              <div className=' md:col-span-5 col-span-1'>
                <span>{year}</span>
              </div>
            </Grid>
            <Grid cols={10} colsXL={10}>
              <div className=' md:col-span-5 col-span-1'>
                <span className='text-body-regular-mob md:text-body-regular font-light text-grey'>
                  Статус проекта
                </span>
              </div>
              <div className=' md:col-span-5 col-span-1'>
                <span>{status}</span>
              </div>
            </Grid>
            <Grid cols={10} colsXL={10}>
              <div className=' md:col-span-5 col-span-1'>
                <span className='text-body-regular-mob md:text-body-regular font-light text-grey'>
                  Тип
                </span>
              </div>
              <div className=' md:col-span-5 col-span-1'>
                <span>{type}</span>
              </div>
            </Grid>
          </div>
        </Grid>
      </PageMarginWithTitle>
      {coverLink2 && (
        <>
          <div className='aspect-video w-full relative md:mt-20 mt-10'>
            <Image
              style={{ objectFit: 'cover' }}
              src={coverLink2}
              fill
              alt=''
            />
          </div>
          {coverLink2Title && (
            <PageMarginWithTitle>
              <Grid>
                <span className='text-body-caption mt-2 col-span-2 md:col-span-12'>
                  {coverLink2Title}
                </span>
              </Grid>
            </PageMarginWithTitle>
          )}
        </>
      )}
    </>
  );
};

export default ProjectMainPicWithInfo;
