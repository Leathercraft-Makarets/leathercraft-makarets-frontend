'use client';

import React from 'react';
import styles from './FavoritesList.module.css';
import HeartButton from '@/components/HeartButton/HeartButton';
import { useStore } from '@/store/useStore';

export default function FavoritesList() {
  const favorites = useStore((s) => s.favorites);

  if (!favorites || favorites.length === 0) {
    return <div className={styles.empty}>У вас ще немає улюблених товарів.</div>;
  }

  return (
    <div className={styles.favoritesGrid}>
      {favorites.map((p) => (
        <div key={p.id} className={styles.card}>
          <div className={styles.imageBox} style={{ backgroundImage: p.imageUrl ? `url(${p.imageUrl})` : 'none' }} />
          <div className={styles.infoRow}>
            <div>
              <h3 className={styles.productName}>{p.title}</h3>
              <div className={styles.priceContainer}>{p.newPrice ?? p.price}</div>
            </div>
            <HeartButton product={p} />
          </div>
        </div>
      ))}
    </div>
  );
}
