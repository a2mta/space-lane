import { setCookie } from 'nookies';

export const setLocale = (locale: string) => {
  setCookie(null, 'NEXT_LOCALE', locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

export const makePicLink =
  (pageName: string) => (picNumber: string, type?: string) =>
    `/pics/projects/${pageName}/${picNumber}.${type || 'webp'}`;

export function addLeadingZero(num: number) {
  return num.toString().padStart(2, '0');
}

export const projects = [
  {
    title: 'СберСити в Рублево-Архангельском',
    subTitle: 'Благоустройство, авторский надзор',
    coverImage: '/pics/cover/01.webp',
    link: 'rublevo',
    image: '/pics/projects/rublevo.webp',
  },
  {
    title: 'Коттеджный поселок «Новосельцево»',
    coverImage: '/pics/cover/02.webp',
    subTitle: 'Исследование, благоустройство',
    link: 'novoseltsevo',
    image: '/pics/projects/novoseltsevo.webp',
  },
  {
    title: 'Махтумкули Фраги',
    coverImage: '/pics/cover/03.webp',
    subTitle: 'Исследование, благоустройство',
    link: 'fragi',
    image: '/pics/projects/fragi.webp',
  },
  {
    title: 'Коттеджный посёлок «Ели»',
    coverImage: '/pics/cover/04.webp',
    coverSubTitle:
      'Мастер-план и архитектурные решения общественных зданий коттеджного посёлка «Ели»',
    subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
    link: 'ely',
    image: '/pics/projects/ely-cover.webp',
  },
  {
    title: 'Коттеджный поселок «Максимово парк»',
    coverImage: '/pics/cover/05.webp',
    subTitle: 'Исследование, благоустройство',
    link: 'maksimovo',
    image: '/pics/projects/maksimovo.webp',
  },
  {
    title: 'ЖК Corso',
    coverImage: '/pics/cover/06.webp',
    subTitle: 'Благоустройство',
    link: 'corso',
    image: '/pics/projects/corso.webp',
  },
  {
    title: 'Дарьино парк',
    coverImage: '/pics/cover/07.webp',
    subTitle: 'Благоустройство',
    link: 'darino',
    image: '/pics/projects/darino.webp',
  },
  {
    title: 'Олений парк',
    coverImage: '/pics/cover/0_8.webp',
    subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
    link: 'oleniy-park',
    image: '/pics/projects/oleniy-park-cover.webp',
  },
  {
    title: 'Савеловский кластер',
    coverImage: '/pics/cover/09.webp',
    subTitle: 'Исследование, благоустройство',
    link: 'savelovskiy',
    image: '/pics/projects/savelovskiy.webp',
  },
];
