import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';
import { getLocale } from '../../i18n/server';
import { LocaleProvider } from '@/hooks/locale-provider';
import HeaderMobile from '@/components/Header/HeaderMobile';
import { Suspense } from 'react';
import { YaMetrika } from '@/components/YaMetrika';
import { GoogleAnalytics } from '@next/third-parties/google';

const myFont = localFont({
  src: '../../public/fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Space Lane',
  keywords: 'architecture, consulting, urban, planning',
  openGraph: {
    images: {
      url: '/opengraph-image.png',
      width: 1000,
      height: 770,
      type: 'image/png',
    },
  },
  description:
    'Space Lane — архитектура, консалтинг и городское планирование. Мы найдем подход и решения для объекта любого масштаба и сложности. Свяжитесь с нами для сотрудничества.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();

  return (
    <html lang={locale}>
      <body
        className={
          myFont.variable + ' font-manrope flex flex-col min-h-[100dvh]'
        }
      >
        <Suspense>
          <YaMetrika />
          <GoogleAnalytics gaId='G-3QE8ZSYJR8' />
        </Suspense>
        <LocaleProvider value={locale}>
          <Header />
          <HeaderMobile />
          <div className='flex flex-1 flex-col w-full justify-between h-full'>
            <main className='tracking-h5'>{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
