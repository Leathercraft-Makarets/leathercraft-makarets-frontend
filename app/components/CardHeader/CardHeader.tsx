'use client';

import styles from './CardHeader.module.css';

export default function CardHeader() {
  return (
    <>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Гаманець<br />чоловічий</h1>
        <p className={styles.price}>200₴</p>
      </div>
    </>
  );
}