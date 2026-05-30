'use client';

import React from 'react';
import styles from './Button.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <button className={[styles.button, className].join(' ')} {...rest}>
      {children}
    </button>
  );
}
