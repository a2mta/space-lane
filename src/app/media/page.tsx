import CollapseWide from '@/components/CollapseWide';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import { addLeadingZero } from '@/utils';
import React from 'react';
import { createTranslation } from '../../../i18n/server';
import Link from 'next/link';

const picLink = (url: string) => `/pics/media/${url}.png`;

const data = [
  {
    cover: picLink('01'),
    description: 'media.sber_design.description',
    title: 'media.sber_design.title',
    subTitle: 'media.sber_design.subTitle',
    links: [
      {
        title: 'media.article_link',
        link: 'https://promo.sber.ru/design#/arhitektura',
      },
      {
        title: 'media.video',
        link: 'https://okko.tv/serial/sberdesign-conf/season/1/episode/12',
      },
    ],
  },
  {
    cover: picLink('02'),
    description: 'media.architectors.description',
    title: 'media.architectors.title',
    subTitle: 'media.architectors.subTitle',
    links: [
      {
        title: 'media.article_link',
        link: 'https://archi.ru/russia/88520/arkhitektory-rf--chast-ii',
      },
    ],
  },
  {
    cover: picLink('03'),
    description: 'media.urban_forum.description',
    title: 'media.urban_forum.title',
    subTitle: 'media.urban_forum.subTitle',
    links: [
      {
        title: 'media.event',
        link: 'https://cloudcityconf.com/ru/',
      },
      {
        title: 'media.video',
        link: 'https://vk.com/video-221979126_456239130',
      },
    ],
  },
  {
    cover: picLink('04'),
    description: 'media.city_practics.description',
    title: 'media.city_practics.title',
    subTitle: 'media.city_practics.subTitle',
    links: [
      {
        title: 'media.link',
        link: 'https://xn--80akijuiemcz7e.xn--p1ai/urban-practices',
      },
    ],
  },
  {
    cover: picLink('05'),
    description: 'media.niu_lecture.description',
    title: 'media.niu_lecture.title',
    subTitle: 'media.niu_lecture.subTitle',
    links: [
      {
        title: 'media.article_link',
        link: 'https://www.hse.ru/ma/communicate/news/559531402.html',
      },
    ],
  },
  {
    cover: picLink('06'),
    description: 'media.my_street.description',
    title: 'media.my_street.title',
    subTitle: 'media.my_street.subTitle',
    links: [
      {
        title: 'media.article_link',
        link: 'https://dzen.ru/a/WjftI4MJBaKP6wRc',
      },
    ],
  },
  {
    cover: picLink('07'),
    description: 'media.metaverse.description',
    title: 'media.metaverse.title',
    subTitle: 'media.metaverse.subTitle',
    links: [
      {
        title: 'media.article_link',
        link: 'https://archi.ru/russia/98985/sny-o-vselennoi',
      },
    ],
  },
  {
    cover: picLink('08'),
    description: 'media.ai.description',
    title: 'media.ai.title',
    subTitle: 'media.ai.subTitle',
    links: [
      {
        title: 'media.article_link',
        link: 'https://archi.ru/russia/99620/podrazhanie-prirode',
      },
    ],
  },
];

const MediaPage = async () => {
  const { t } = await createTranslation('common');
  return (
    <PageMarginWithTitle withBorder title='Медиа'>
      <Grid className='md:mb-0 mb-40'>
        <div className='col-span-12 mt-16 md:mt-30'>
          {data.map(({ cover, links, description, subTitle, title }, index) => (
            <CollapseWide
              image={cover}
              index={addLeadingZero(index + 1)}
              shortDesc={t(subTitle)}
              title={t(title)}
              key={title}
            >
              <Grid className='md:min-h-48 xl:min-h-64 h-full'>
                <div className='col-span-2 md:col-span-11 text-body-regular-mob md:text-body-regular font-light'>
                  <span className=''>
                    {t(description)}
                  </span>
                  {links && (
                    <div className='mb-4 flex space-x-5 md:space-x-10 xl:flex-col xl:space-x-0 mt-6 md:mt-10 xl:space-y-4 text-orange underline'>
                      {links?.map(({ link, title }) => (
                        <Link
                          key={link}
                          href={link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <span>{t(title)}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Grid>
            </CollapseWide>
          ))}
        </div>
      </Grid>
    </PageMarginWithTitle>
  );
};

export default MediaPage;
