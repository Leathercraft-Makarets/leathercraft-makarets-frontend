'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
