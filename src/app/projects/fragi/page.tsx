import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import Image from 'next/image';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import classNames from 'classnames';

const picLink = (picNumber: string) => `/pics/projects/fragi/${picNumber}.png`;

const descData = [
  {
    title: 'Освещение',
    description:
      'Освещение является мощным инструментом для преображения территории и расставления акцентов. Главный акцент в освещение — памятник поэту Махтумкули Фраги и постамент, остальная территория является фоном для него.',
    images: [
      <Image key='27' alt='' src={picLink('27')} width={260} height={330} />,
      <Image key='28' alt='' src={picLink('28')} width={260} height={330} />,
    ],
  },
  {
    title: 'Малые архитектурные формы',
    description:
      'Малые архитектурные формы — навесы, скамейки и урны — деликатно встраиваются в ландшафт, не отвлекая на себя внимание, и подчёркивают локальную идентичность места за счёт использования орнаментов в их оформлении.',
    images: [
      <Image key='29' alt='' src={picLink('29')} width={260} height={202} />,
      <Image key='30' alt='' src={picLink('30')} width={260} height={167} />,
    ],
  },
  {
    title: 'Мощение',
    description:
      'Мощение играет важную роль в формировании образа территории, особенно когда оно занимает значимую площадь. Единые принципы работы с мощением помогут избежать монотонности и отразят идентичность территории (сочетание природных и городских текстур, сигнация, градиент мощения от светлого у входа к тёмному у монумента).',
    images: [
      <Image key='31' alt='' src={picLink('31')} width={260} height={250} />,
      <Image key='32' alt='' src={picLink('32')} width={260} height={250} />,
    ],
  },
  {
    title: 'Озеленение',
    description:
      'Озеленение состоит из многоярусных композиций, которые включают в себя лиственные, вечнозелёные и хвойные деревья и кустарники. Таким образом, в парке возникают растительные оазисы, привлекающие птиц и насекомых. Для создания дополнительного декоративного эффекта используется злаки и цветы.',
    images: [
      <Image key='33' alt='' src={picLink('33')} width={260} height={189} />,
      <Image key='34' className='mt-4' alt='' src={picLink('34')} width={260} height={143} />,
    ],
  },
];

const PersonDescRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <div className='flex flex-col space-y-4'>
    <span className='text-untitled'>{title}</span>
    <span className='text-body-regular'>{subTitle}</span>
  </div>
);

const MosaiqPic: FC<{ src: string; className?: string }> = ({
  src,
  className,
}) => (
  <div className={classNames('col-span-3', className)}>
    <Image alt='' src={src} width={410} height={518} />
  </div>
);

const DescRow: FC<{
  index: number;
  title: string;
  description: string;
  images: React.JSX.Element[];
}> = ({ description, index, images, title }) => (
  <Grid className='border-t border-medium-grey pt-6'>
    <div className='col-span-1'>
      <span className='text-h4'>{index}</span>
    </div>
    <div className='col-span-3'>
      <span className='text-h5'>{title}</span>
    </div>
    <div className='col-span-4'>
      <span className='text-body-regular'>{description}</span>
    </div>
    {images.map((image, index) => (
      <div key={image.key || 0 + index} className='col-span-2'>
        {image}
      </div>
    ))}
  </Grid>
);

const AcsonoRow: FC<{ title: string; image: ReactElement }> = ({
  image,
  title,
}) => (
  <div className='flex justify-between items-center py-4 border-b border-medium-grey'>
    <span className='text-body-regular mr-4'>{title}</span>
    <div className='flex min-w-20 items-center justify-center'>{image}</div>
  </div>
);

const FragiPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Культурно-парковый комплекс Махтумкули Фраги'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Фото до реализации существующего положения'
          status={t('status.concept')}
          area={'4.1 га'}
          location={'Ашхабад, Туркменистан'}
          subTitle={
            'Эскизное предложение по благоустройству культурно-паркового комплекса в Ашхабаде'
          }
          type={'Исследование, благоустройство'}
          year='2022'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>Видение</span>
            </div>
            <div className='col-span-8 mb-10'>
              <span className='text-h5'>
                Главная идея концепции благоустройства вдохновлена жизнью и
                поэзией философа, классика туркменской поэзии Махтумкули Фраги.
                Это парк, воспевающий природу Туркмении и творческую личность,
                черпавшую в ней вдохновение и обогатившую местную культуру.
                Посетители паркового комплекса смогут проникнуться духом жизни
                Махтумкули Фраги и отдать дань памяти великому поэту.
              </span>
            </div>
            <div className='col-span-4 col-start-5'>
              <Image
                width={560}
                height={541}
                alt='Махумкули Фраги'
                src={picLink('03')}
              />
              <span className='text-body mt-4 block'>
                Махумкули Фраги (1724—1807)
              </span>
              <span className='text-body-caption mt-2'>
                Великий поэт, мыслитель и просветитель Махтумкули много
                путешествовал по Ирану, Афганистану и другим странам Востока.
                Его творчество включает песни в народной форме, отражающие
                героические мотивы, легенды и предания туркменского народа.
                Любовная лирика занимает важное место в его произведениях.
                Махтумкули изменилтуркменский поэтический язык, сблизив его с
                народной речью.
              </span>
            </div>
            <div className='col-span-4 space-y-6'>
              <PersonDescRow
                title='Поэзия'
                subTitle='Поэтико-философское наследие Махтумкули навеки вошлов культуру туркменского народа как песнь о любви к Богу, Родине, человеку, природе и самой жизни.'
              />
              <PersonDescRow
                title='Природа в творчестве поэта'
                subTitle='Природа была одной из важных тем в творчестве поэта.Он прекрасно описывал живописные ландшафты, трели птиц, водопады и ручьи. Особое место в лирике занималобраз соловья, именно это подсказало идею высадить в парке растения, которые привлекают этих птиц. Интересная примета: услышать песню соловья считается добрым предзнаменованием — предвестьем счастья.'
              />
              <PersonDescRow
                title='Кара-Кала'
                subTitle='Поэт родился в субтропическом районе Туркменистана Кара-Кала. Этот регион отличается пышной растительностью, водопадами и горами. Природные особенности местности оказали влияние на ландшафтную концепции территории.'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4 text-h4'>
              Исследование локального контекста
            </div>
            <div className='col-span-8 text-h5-regular'>
              В ходе филд-трипа мы побывали в мастерской скульптора Сарагта
              Бабаева, автора памятника поэту, познакомились со знаковыми
              архитектурными объектами старых городов, расположенных на Шёлковом
              пути, и локальными культурными традициями, а также погрузились в
              изучение способов мемориализации творческого наследия Махтумкули
              Фраги.
            </div>
          </Grid>
          <Grid className='mt-30'>
            <MosaiqPic src={picLink('04')} />
            <MosaiqPic src={picLink('05')} />
            <MosaiqPic src={picLink('06')} />
            <MosaiqPic className='mt-10 col-start-4' src={picLink('07')} />
            <MosaiqPic className='mt-10' src={picLink('08')} />
            <MosaiqPic className='mt-10' src={picLink('09')} />
            <MosaiqPic className='mt-10' src={picLink('10')} />
            <MosaiqPic className='mt-10' src={picLink('11')} />
            <MosaiqPic className='mt-10' src={picLink('12')} />
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-4'>
              <Image src={picLink('13')} alt='' width={560} height={442} />
            </div>
            <div className='col-span-8'>
              <span className='text-h5-regular'>
                За основу в дизайне благоустройства были взяты местные мотивы
                орнаментов. Каждый орнамент соответствует историческим
                орнаментам, характерным для пяти велаятов Туркменистана.
              </span>
              <Image
                className='mt-10'
                src={picLink('14')}
                alt=''
                width={1160}
                height={142}
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4 pt-14'>
              <span className='text-h4'>Генеральный план благоустройства</span>
              <span className='text-body-regular mt-6 block'>
                Проект предлагает оживить территорию комплекса за счёт
                озеленения декоративными растениями гранитного пьедестала и
                организациии фонтана-водопада, воды которого будут стекать к
                нижнему ярусу комплекса. Важная задача благоустройства —
                создание комфортных условий для посетителей комплекса в жаркую
                погоду — решается благодаря навесам с системой охлаждения
                туманом и организацией мест отдыха на склоне холма.
              </span>
            </div>
            <div className='col-span-8'>
              <Image src={picLink('15')} alt='' width={1160} height={816} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12 mb-16'>
              <span className='text-h4'>Аксонометрия территории</span>
            </div>
            <div className='col-span-8'>
              <Image src={picLink('16')} alt='' width={1160} height={1029} />
            </div>
            <div className='col-span-4'>
              <AcsonoRow
                title='01 Сигнация в мощении'
                image={
                  <div className='space-x-5 flex'>
                    <Image alt='' src={picLink('17')} width={45} height={46} />
                    <Image alt='' src={picLink('17')} width={45} height={46} />
                  </div>
                }
              />
              <AcsonoRow
                title='02 Навесы с системой охлаждения туманом'
                image={
                  <Image alt='' src={picLink('18')} width={86} height={56} />
                }
              />
              <AcsonoRow
                title='03 Оазисы биоразнообразия'
                image={
                  <Image alt='' src={picLink('19')} width={80} height={56} />
                }
              />
              <AcsonoRow
                title='04 Переходы через водопад'
                image={
                  <Image alt='' src={picLink('20')} width={58} height={64} />
                }
              />
              <AcsonoRow
                title='05 Переходы через водопад'
                image={
                  <Image alt='' src={picLink('21')} width={68} height={58} />
                }
              />
              <AcsonoRow
                title='06 Место для возложения цветов'
                image={
                  <Image alt='' src={picLink('22')} width={88} height={58} />
                }
              />
              <AcsonoRow
                title='07 Использование орнаментов'
                image={
                  <Image alt='' src={picLink('23')} width={88} height={56} />
                }
              />
            </div>
            <div className='col-span-12 mt-10'>
              <Image alt='' src={picLink('24')} width={1760} height={926} />
              <span className='text-body-caption mt-2 block'>
                Вид на центральную зону с водопадом
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-20'>
            <div className='col-span-4 col-start-5'>
              <span className='text-body-regular'>
                У подножия монумента находится место для возложения цветов.
                Постамент разделён на 5 ярусов (по числу вилоятов), уступы
                которых украшены местными орнаментами. В уступ нижнего яруса
                вмонтирована мемориальная доска с цитатой Махтумкули Фраги. Вода
                фонтана-водопада, струясь по ярусам, наполняет квадратный
                резервуар.
              </span>
            </div>
            <div className='col-span-4'>
              <span className='text-body-regular'>
                Над водной гладью резервуара возвышается камень-монумент, в
                котором высечены предметы-символы Мухтумкули Фраги — книга,
                ювелирный инструмент и др. К камню можно подойти по каменным
                плитам.
              </span>
            </div>
            <div className='col-span-8 col-start-5 mt-10'>
              <Image alt='' src={picLink('25')} width={1160} height={684} />
              <span className='text-body-caption block mt-2'>
                Вид на комплекс со стороны входной группы
              </span>
            </div>
            <div className='col-span-8 col-start-5 mt-10'>
              <Image alt='' src={picLink('26')} width={1160} height={684} />
              <span className='text-body-caption block mt-2'>
                Вид на пьедестал монумента и место для возложения цветов
              </span>
            </div>
          </Grid>
        </section>
        <section className='mt-50 space-y-10'>
          {descData.map(({ description, images, title }, index) => (
            <DescRow
              description={description}
              images={images}
              title={title}
              index={index+1}
              key={index + title}
            />
          ))}
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default FragiPage;