'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="scrollToTopButton"
      aria-label="Повернутись вгору"
    >
      ↑
    </button>
  );
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
