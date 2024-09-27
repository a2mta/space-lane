import { setCookie } from 'nookies';

export const setLocale = (locale: string) => {
  setCookie(null, 'NEXT_LOCALE', locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

export const makePicLink = (pageName: string) => (picNumber: string) =>
  `/pics/projects/${pageName}/${picNumber}.png`;

export function addLeadingZero(num: number) {
  return num.toString().padStart(2, '0');
}
