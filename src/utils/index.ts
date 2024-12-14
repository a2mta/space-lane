import { setCookie } from 'nookies';

export const setLocale = (locale: string) => {
  setCookie(null, 'NEXT_LOCALE', locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

export const makePicLink =
  (pageName: string) => (picNumber: string, type?: string) =>
    `/pics/projects/${pageName}/${picNumber}.${type || 'png'}`;

export function addLeadingZero(num: number) {
  return num.toString().padStart(2, '0');
}

export const projects = [
  {
    title: 'СберСити в Рублево-Архангельском',
    subTitle: 'Благоустройство, авторский надзор',
    coverImage: '/pics/cover/01.png',
    link: 'rublevo',
    image: '/pics/projects/rublevo.png',
  },
  {
    title: 'Коттеджный поселок «Новосельцево»',
    coverImage: '/pics/cover/02.png',
    subTitle: 'Исследование, благоустройство',
    link: 'novoseltsevo',
    image: '/pics/projects/novoseltsevo.png',
  },
  {
    title: 'Махтумкули Фраги',
    coverImage: '/pics/cover/03.png',
    subTitle: 'Исследование, благоустройство',
    link: 'fragi',
    image: '/pics/projects/fragi.png',
  },
  {
    title: 'Коттеджный посёлок «Ели»',
    coverImage: '/pics/cover/04.png',
    coverSubTitle:
      'Мастер-план и архитектурные решения общественных зданий коттеджного посёлка «Ели»',
    subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
    link: 'ely',
    image: '/pics/projects/ely-cover.png',
  },
  {
    title: 'Коттеджный поселок «Максимово парк»',
    coverImage: '/pics/cover/05.png',
    subTitle: 'Исследование, благоустройство',
    link: 'maksimovo',
    image: '/pics/projects/maksimovo.png',
  },
  {
    title: 'ЖК Corso',
    coverImage: '/pics/cover/06.png',
    subTitle: 'Благоустройство',
    link: 'corso',
    image: '/pics/projects/corso.png',
  },
  {
    title: 'Дарьино парк',
    coverImage: '/pics/cover/07.png',
    subTitle: 'Благоустройство',
    link: 'darino',
    image: '/pics/projects/darino.png',
  },
  {
    title: 'Олений парк',
    coverImage: '/pics/cover/0_8.png',
    subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
    link: 'oleniy-park',
    image: '/pics/projects/oleniy-park-cover.png',
  },
  {
    title: 'Савеловский кластер',
    coverImage: '/pics/cover/09.png',
    subTitle: 'Исследование, благоустройство',
    link: 'savelovskiy',
    image: '/pics/projects/savelovskiy.png',
  },
];
