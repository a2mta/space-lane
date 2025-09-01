"use client"
import React, { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookieAccepted';

const CookieModal: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setVisible(!localStorage.getItem(COOKIE_KEY));
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='items-end md:items-start md:space-y-0 space-y-7 text-body-regular text-white fixed bottom-0 left-0 w-full z-[9999] px-5 py-8 md:px-20 md:py-10 bg-black flex justify-between md:flex-row flex-col'>
      <span>Мы используем cookies для улучшения работы сайта.</span>
    <button
      className='md:ml-6 px-4 py-2.5 border-white border  md:w-auto w-fit'
      onClick={handleAccept}
    >
      Хорошо
    </button>
    </div>
  );
};

export default CookieModal;
