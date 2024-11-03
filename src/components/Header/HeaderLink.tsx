'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

const HeaderLink: FC<{ url: string; text: string }> = ({ text, url }) => {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <span
      className={`cursor-pointer text-body-regular ${classNames({
        'text-medium-grey': isActive,
      })}`}
    >
      <Link href={url}>{text}</Link>
    </span>
  );
};

export default HeaderLink;
