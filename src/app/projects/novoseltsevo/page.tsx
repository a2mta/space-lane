import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import React, { FC } from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Image from 'next/image';

const MapDescRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <div className='flex pb-4 border-b border-grey flex-col'>
    <span className='text-h3'>{title}</span>
    <span className='text-body-regular mt-2 w-[60%]'>{subTitle}</span>
  </div>
);

const ConceptionCard: FC<{
  image: string;
  title: string;
  subTitles: string[];
}> = ({ image, subTitles, title }) => (
  <div className='col-span-4 flex flex-col'>
    <Image src={image} alt='' width={560} height={370} />
    <span className='text-h5 mt-10'>{title}</span>
    <div className='flex flex-col space-y-4 mt-6 text-body-regular'>
      {subTitles.map((subTitle, index) => (
        <span key={subTitle + index}>{`— ${subTitle}`}</span>
      ))}
    </div>
  </div>
);

const FragmentCard: FC<{
  image: string;
  title: string;
  description: string;
}> = ({ description, image, title }) => (
  <Grid>
    <div className='col-span-4 border-t border-medium-grey'>
      <span className='text-h4 mt-6 block'>{title}</span>
      <span className='mt-4 text-body-regular block'>{description}</span>
    </div>
    <div className='col-span-8'>
      <Image alt='' width={1160} height={820} src={image} />
    </div>
  </Grid>
);

const NovoseltsevoPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={t('page_titles.novoseltsevo')}
          coverLink='/pics/projects/novoseltsevo/01.png'
          coverLink2='/pics/projects/novoseltsevo/02.png'
          status='Концепция'
          area='5,4 га'
          location='п. Новосельцево, Московская область'
          subTitle={
            'Дизайн-проект благоустройства береговой линии коттеджного посёлка «Новосельцево»'
          }
          type='Исследование, благоустройство'
          year='2022'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4 space-y-6'>
              <MapDescRow title='45 км' subTitle='До Кремля' />
              <MapDescRow
                title='28 км'
                subTitle='До станции метро Альтуфьево (Серпуховско-Тимирязевкая линия)'
              />
              <MapDescRow title='32 км' subTitle='До аэропорта Шереметьево' />
              <MapDescRow title='17 км' subTitle='До станции МЦД Хлебниково' />
            </div>
            <div className='col-span-8'>
              <Image
                width={1160}
                height={822}
                alt='moscow map'
                src='/pics/projects/novoseltsevo/03.png'
              />
            </div>
          </Grid>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>Идеи проекта</span>
            </div>
            <div className='col-span-8'>
              <span className='text-body-regular'>
                Береговая линия, к которой примыкает посёлок, останется
                пространством, доступным для использования местными жителями
                которые могут прийти сюда пешком с соседних населённых пунктов.
                Поэтому концепция благоустройства предполагает функциональное
                разделение набережной на две основные зоны: (1) условно
                приватную, которая ориентирована прежде всего на жителей посёлка
                и отделяется приподнятым озеленением, и (2) открытую
                общественную, рассчитанную внешнюю аудиторию. В приватной зоне
                организуются камерные, спокойные рекреационные пространства, в
                то время как в открытой зоне располагаются площадки и объекты
                для активного отдыха и семейного досуга.
              </span>
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-4 flex justify-end flex-col'>
              <Image
                width={452}
                height={480}
                alt=''
                src='/pics/projects/novoseltsevo/05.png'
              />
            </div>
            <div className='col-span-8'>
              <Image
                width={1160}
                height={768}
                alt=''
                src='/pics/projects/novoseltsevo/04.png'
              />
              <span className='text-body-caption mt-2'>
                Схема функционального зонирования набережной
              </span>
            </div>
          </Grid>
          <Grid className='mt-50'>
            <div className='col-span-8'>
              <Image
                width={1160}
                height={720}
                alt=''
                src='/pics/projects/novoseltsevo/06.png'
              />
              <span className='text-body-caption mt-2'>
                Вид на частную зону
              </span>
            </div>
            <div className='col-span-4'>
              <Image
                width={560}
                height={720}
                alt=''
                src='/pics/projects/novoseltsevo/07.png'
              />
              <span className='text-body-caption mt-2'>
                Вид на спортивную зону
              </span>
            </div>
            <div className='col-span-8 mt-10'>
              <Image
                width={1160}
                height={720}
                alt=''
                src='/pics/projects/novoseltsevo/08.png'
              />
              <span className='text-body-caption mt-2'>
                Вид на улицу и частную зону в районе большой детской площадки
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4'>Концепция озеленения</span>
            </div>
            <ConceptionCard
              image='/pics/projects/novoseltsevo/09.png'
              title='Острова — созерцание'
              subTitles={[
                'Невысокое и декоративное озеленение деревьями',
                'Травы в нижнем ярусе с деликатными акцентами из цветов',
                'Создание максимально эффектной и визуально запоминающейся среды',
              ]}
            />
            <ConceptionCard
              image='/pics/projects/novoseltsevo/10.png'
              title='Острова — действие'
              subTitles={[
                'Функциональное озеленение, оказывающее экосистемные услуги',
                'Поддержка локального биоразнообразия и формирования новых экосистем',
              ]}
            />
            <ConceptionCard
              image='/pics/projects/novoseltsevo/11.png'
              title='Острова — осязание'
              subTitles={[
                'Тактильные и ароматные травы для исследования и взаимодействия',
                'Солитерные посадки деревьев и куртины из кустарников, продолжающие рисунок из многолетников',
              ]}
            />
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4'>
                Генеральный план и фрагменты генерального плана
              </span>
            </div>
            <div className='col-span-12 mt-12'>
              <Image
                alt=''
                src='/pics/projects/novoseltsevo/12.png'
                width={1760}
                height={940}
              />
              <span className='text-h5 mt-10 block'>
                Пляж Новосельцево — идеальное место для отдыха и активного
                времяпрепровождения на берегу Клязьминского водохранилища.
                Чистый свежий воздух, зеленые берега и живописные пейзажи. Летом
                температура воды достигает +19 ̊ С, а в жаркие дни может
                подниматься до + 23 ̊ С. Благодаря благоустройству берег получит
                разнообразные сценарии использования, в том числе в зимнее
                время.
              </span>
            </div>
          </Grid>
        </section>
        <section className='mt-20 space-y-10'>
          <FragmentCard
            image='/pics/projects/novoseltsevo/13.png'
            title='Фрагмент 01'
            description='От воркаут-площадки начинается оздоровительная тропа, пересекающая всю набережную. Она огибает площадку для пляжного волейбола и оборудованный пляж. Помимо тропы, перемещаться по набережной можно по тропинкам, накрытым дощатым ностилом, который помогает сберечь растительный покров.'
          />
          <FragmentCard
            image='/pics/projects/novoseltsevo/14.png'
            title='Фрагмент 02'
            description='В центральной части набережной находится большая детская игровая площадка, разбитая на несколько зон. От неё к площадке для настольного тенниса и пляжу ведут дощатые мостки. Маршрут оздоровительной тропы пересекает ещё одну воркаут-зону и огибает площадку для мероприятий со сценой. На участке центральной улицы, примыкающему к этому фрагменту набережной, организован парковочный карман для удобной посадки/высадки пассажиров.'
          />
          <FragmentCard
            image='/pics/projects/novoseltsevo/15.png'
            title='Фрагмент 03'
            description='Оздоровительный маршрут завершается площадкой для стритбола и скейт-парком, которые отделены друг от друга стенкой — своеобразным арт-объектом. Здесь же оборудован пирс, по которому можно подойти к воде, площадка для тихого отдыха, а также водный сад, где высажены растения, очищающие воду.'
          />
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default NovoseltsevoPage;
