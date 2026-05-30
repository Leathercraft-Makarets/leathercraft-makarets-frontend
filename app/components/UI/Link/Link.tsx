'use client';

import NextLink, { LinkProps } from 'next/link';
import styles from './Link.module.css';

type Props = LinkProps & { className?: string; children: React.ReactNode };

export default function Link({ children, className = '', ...rest }: Props) {
  return (
    <NextLink className={[styles.link, className].join(' ')} {...rest}>
      {children}
    </NextLink>
  );
}
