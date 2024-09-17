import { setCookie } from 'nookies';

export const setLocale = (locale: string) => {
  setCookie(null, 'NEXT_LOCALE', locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

