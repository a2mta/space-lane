import Collapse from '@/components/Collapse';
import CollapseWide from '@/components/CollapseWide';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ImageSlider from '@/components/Slider';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React from 'react';

const picLink = makePicLink('novoseltsevo');

const MediaPage = () => {
  return (
    <PageMarginWithTitle withBorder title='Медиа'>
      <CollapseWide
        title='01'
        subTitle='Sber Design Conf'
        shortDesc='Организация и проведение архитектурной части конференции'
      >
        <Grid>
          <div className='aspect-video w-full relative h-full'>
            <Image style={{objectFit: 'cover'}} src={picLink('01')} fill alt='' />
          </div>
        </Grid>
      </CollapseWide>
      <Collapse title='03 Входная группа Флакона на Большой Новодмитровской'>
        wwwwqqqq
      </Collapse>
    </PageMarginWithTitle>
  );
};

export default MediaPage;
