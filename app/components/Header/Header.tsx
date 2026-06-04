'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import LeathercraftMakaretsLogo from "@/logo/LeathercraftMakaretsLogo/LeathercraftMakaretsLogo_radius10.svg";
import NextLink from 'next/link';
import { useStore } from '@/store/useStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const favoriteCount = useStore((s) => s.favorites.length);
  const cartCount = useStore((s) => s.cart.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.headerMenuOpen : ''}`}>
        {/* Кнопка-сендвіч для мобільних */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
            <NextLink href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Головна</NextLink>
            <NextLink href="/#catalog" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Каталог</NextLink>
            <NextLink href="/#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Про нас</NextLink>
            <NextLink href="/contacts" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Контакти</NextLink>
        </nav>

        <div className={styles.logoContainer}>
            <NextLink href="/">
                <Image 
                    src={LeathercraftMakaretsLogo} 
                    alt="Makarets Leathercraft" 
                    className={styles.headerLogo}
                />
            </NextLink>
        </div>

        <div className={styles.actions}>
            <NextLink href="/profile" className={styles.iconButton} aria-label="Профіль">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </NextLink>
            <NextLink href="/wishlist" className={styles.iconButton} aria-label="Улюблене">
                {favoriteCount > 0 && (
                  <span className={styles.iconBadge} aria-hidden="true">{favoriteCount}</span>
                )}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </NextLink>
            <NextLink href="/cart" className={styles.iconButton} aria-label="Кошик">
              {cartCount > 0 && (
                <span className={styles.iconBadge} aria-hidden="true">{cartCount}</span>
              )}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </NextLink>
        </div>
    </header>
  );
}
