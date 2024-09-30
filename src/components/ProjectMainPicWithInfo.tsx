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
          <div className='col-span-12 mb-10'>
            <div className='text-h2'>{title}</div>
          </div>
        </Grid>
      </PageMarginWithTitle>
      {coverLink && (
        <div className='aspect-video w-full relative'>
          <Image objectFit='cover' src={coverLink} fill alt='' />
        </div>
      )}
      <PageMarginWithTitle>
        <Grid className='pt-10'>
          <div className='col-span-7'>
            {typeof subTitle === 'string' ? (
              <span className='text-h4 tracking-normal'>{subTitle}</span>
            ) : (
              subTitle
            )}
          </div>
          <div className='col-start-9 col-span-4 text-body-regular space-y-4'>
            <Grid>
              <div className='col-span-6'>
                <span>Местоположение</span>
              </div>
              <div className='col-span-6'>
                <span>{location}</span>
              </div>
            </Grid>
            <Grid>
              <div className='col-span-6'>
                <span>Площадь</span>
              </div>
              <div className='col-span-6'>
                <span>{area}</span>
              </div>
            </Grid>
            <Grid>
              <div className='col-span-6'>
                <span>Год</span>
              </div>
              <div className='col-span-6'>
                <span>{year}</span>
              </div>
            </Grid>
            <Grid>
              <div className='col-span-6'>
                <span>Статус проекта</span>
              </div>
              <div className='col-span-6'>
                <span>{status}</span>
              </div>
            </Grid>
            <Grid>
              <div className='col-span-6'>
                <span>Тип</span>
              </div>
              <div className='col-span-6'>
                <span>{type}</span>
              </div>
            </Grid>
          </div>
        </Grid>
      </PageMarginWithTitle>
      {coverLink2 && (
        <>
          <div className='aspect-video w-full relative mt-20'>
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
