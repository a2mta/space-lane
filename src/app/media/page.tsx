import Collapse from '@/components/Collapse';
import CollapseWide from '@/components/CollapseWide';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ImageSlider from '@/components/Slider';
import { makePicLink } from '@/utils';
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
        ss
      </CollapseWide>
      <Collapse title='03 Входная группа Флакона на Большой Новодмитровской'>
        wwwwqqqq
      </Collapse>
      <ImageSlider
        image1={picLink('01')}
        image2={picLink('02')}
      />
    </PageMarginWithTitle>
  );
};

export default MediaPage;
