'use client';
import React from 'react';

import { useTranslation } from '../../i18n/client';
import { switchLocaleAction } from '@/app/actions';
import { useLocale } from '@/hooks/locale-provider';

// We removed the `locale` prop because we can get it from the hook
export default function ChangeLocale() {
  const locale = useLocale();
  console.info(locale);
  // You can also use our custom hook instead of `i18n.resolvedLanguage`
  // const locale = useLocale();

  return (
    <div>
      <select
        onChange={(e) => switchLocaleAction(e.target.value)}
        value={locale}
      >
        <option value='en'>🇺🇸 </option>
        <option value='ru'>🇨🇳 </option>
      </select>
    </div>
  );
}
