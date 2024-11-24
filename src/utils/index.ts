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
      link: 'rublevo',
      image: '/pics/projects/rublevo.png',
    },
    {
      title: 'Коттеджный поселок «Новосельцево»',
      subTitle: 'Исследование, благоустройство',
      link: 'novoseltsevo',
      image: '/pics/projects/novoseltsevo.png',
    },
    {
      title: 'Махтумкули Фраги',
      subTitle: 'Исследование, благоустройство',
      link: 'fragi',
      image: '/pics/projects/fragi.png',
    },
    {
      title: 'Коттеджный посёлок «Ели»',
      subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
      link: 'ely',
      image: '/pics/projects/ely.png',
    },
    {
      title: 'Коттеджный поселок «Максимово парк»',
      subTitle: 'Исследование, благоустройство',
      link: 'maksimovo',
      image: '/pics/projects/maksimovo.png',
    },
    {
      title: 'ЖК Corso',
      subTitle: 'Благоустройство',
      link: 'corso',
      image: '/pics/projects/corso.png',
    },
    {
      title: 'Дарьино парк',
      subTitle: 'Благоустройство',
      link: 'darino',
      image: '/pics/projects/darino.png',
    },
    {
      title: 'Олений парк',
      subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
      link: 'oleniy-park',
      image: '/pics/projects/oleniy-park.png',
    },
    {
      title: 'Савеловский кластер',
      subTitle: 'Исследование, благоустройство',
      link: 'savelovskiy',
      image: '/pics/projects/savelovskiy.png',
    },
  ];