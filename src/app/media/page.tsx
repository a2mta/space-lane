import Collapse from '@/components/Collapse';
import CollapseWide from '@/components/CollapseWide';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import React from 'react';

const MediaPage = () => {
  return (
    <PageMarginWithTitle withBorder title='Медиа'>
      <CollapseWide
        title='01'
        subTitle='Sber Design Conf'
        shortDesc='Организация и проведение архитектурной части конференции'
      />
      <Collapse title='03 Входная группа Флакона на Большой Новодмитровской' />
    </PageMarginWithTitle>
  );
};

export default MediaPage;
