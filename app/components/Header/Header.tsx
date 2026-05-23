'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import LeathercraftMakaretsLogo from "@/logo/LeathercraftMakaretsLogo/LeathercraftMakaretsLogo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Головна</Link>
            <Link href="/#catalog" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Каталог</Link>
            <Link href="/#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Про нас</Link>
            <Link href="/contacts" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Контакти</Link>
        </nav>

        <div className={styles.logoContainer}>
            <Link href="/">
                <Image 
                    src={LeathercraftMakaretsLogo} 
                    alt="Makarets Leathercraft" 
                    className={styles.headerLogo}
                />
            </Link>
        </div>

        <div className={styles.actions}>
            <Link href="/profile" className={styles.iconButton} aria-label="Профіль">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </Link>
            <Link href="/wishlist" className={styles.iconButton} aria-label="Улюблене">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </Link>
            <Link href="/cart" className={styles.iconButton} aria-label="Кошик">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
        </div>
    </header>
  );
}
