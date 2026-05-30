'use client';

import styles from './HeartButton.module.css';
import { Product, useStore } from '@/store/useStore';
import type { FC } from 'react';

type Props = { product?: Product };

const HeartButton: FC<Props> = ({ product }) => {
  const favorites = useStore((s) => s.favorites);
  const toggleFavorite = useStore((s) => s.toggleFavorite);

  const isFavorite = product ? favorites.some(f => f.id === product.id) : false;

  const handle = () => {
    if (!product) return;
    toggleFavorite(product);
  };

  return (
    <button
      className={styles.favoriteBtn}
      onClick={handle}
      aria-pressed={isFavorite}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={isFavorite ? '#E22D2D' : 'none'}
        stroke={isFavorite ? '#E22D2D' : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'all 0.15s ease' }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
};

export default HeartButton;