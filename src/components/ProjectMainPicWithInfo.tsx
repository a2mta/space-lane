import React, { FC, ReactNode } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';
import Image from 'next/image';

const ProjectMainPicWithInfo: FC<{
  title: string;
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
          <div className='col-span-12 lg:mb-10 mb-5'>
            <div className='text-h3-mob lg:text-h2 font-medium'>{title}</div>
          </div>
        </Grid>
      </PageMarginWithTitle>
      {coverLink && (
        <div className='aspect-video w-full relative'>
          <Image objectFit='cover' src={coverLink} fill alt='' />
        </div>
      )}
      <PageMarginWithTitle>
        <Grid className='lg:pt-10 pt-4'>
          <div className='lg:col-span-7 col-span-2'>
            {typeof subTitle === 'string' ? (
              <span className='lg:text-h4 text-h4-mob font-medium  tracking-normal'>
                {subTitle}
              </span>
            ) : (
              subTitle
            )}
          </div>
          <div className='lg:col-start-9 lg:col-span-4 col-span-2 text-body-regular space-y-4 lg:mt-0 mt-4'>
            <Grid>
              <div className='lg:col-span-6 col-span-1'>
                <span className='text-body-regular font-light text-grey'>
                  Местоположение
                </span>
              </div>
              <div className='lg:col-span-6 col-span-1'>
                <span>{location}</span>
              </div>
            </Grid>
            <Grid>
              <div className='lg:col-span-6 col-span-1'>
                <span className='text-body-regular font-light text-grey'>
                  Площадь
                </span>
              </div>
              <div className='lg:col-span-6 col-span-1'>
                <span>{area}</span>
              </div>
            </Grid>
            <Grid>
              <div className='lg:col-span-6 col-span-1'>
                <span className='text-body-regular font-light text-grey'>
                  Год
                </span>
              </div>
              <div className='lg:col-span-6 col-span-1'>
                <span>{year}</span>
              </div>
            </Grid>
            <Grid>
              <div className='lg:col-span-6 col-span-1'>
                <span className='text-body-regular font-light text-grey'>
                  Статус проекта
                </span>
              </div>
              <div className='lg:col-span-6 col-span-1'>
                <span>{status}</span>
              </div>
            </Grid>
            <Grid>
              <div className='lg:col-span-6 col-span-1'>
                <span className='text-body-regular font-light text-grey'>
                  Тип
                </span>
              </div>
              <div className='lg:col-span-6 col-span-1'>
                <span>{type}</span>
              </div>
            </Grid>
          </div>
        </Grid>
      </PageMarginWithTitle>
      {coverLink2 && (
        <>
          <div className='aspect-video w-full relative lg:mt-20 mt-10'>
            <Image objectFit='cover' src={coverLink2} fill alt='' />
          </div>
          {coverLink2Title && (
            <PageMarginWithTitle>
              <Grid>
                <span className='text-body-caption mt-2 col-span-12'>
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
