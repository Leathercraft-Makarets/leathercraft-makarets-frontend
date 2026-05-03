'use client';

import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  return (
    <>
      {/* Хлібні крихти */}
      <nav className={styles.breadcrumbs}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>/ <Link className={styles.breadcrumbLink} href="#">Всі гаманці</Link> / <Link className={styles.breadcrumbLink} href="#">Чоловічі гаманці</Link> / <Link className={styles.breadcrumbLink} href="#">Гаманець чоловічий</Link></span>
      </nav>
    </>
  );
}

export default Breadcrumbs;