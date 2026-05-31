'use client';

import React, { ComponentProps } from 'react';
import styles from './FavoritesList.module.css';
import { useStore } from '@/store/useStore';
import ProductCard from '@/components/ProductCard/ProductCard';

type ExpectedProductType = ComponentProps<typeof ProductCard>['product'];

interface FavoriteItemInStore {
  id: number | string;
  title?: string;
  name?: string;
  price: number | string;
  newPrice?: number | string;
  image: string;
  badges?: Array<{ type: 'hit' | 'discount'; value?: string }>;
  description?: string;
}

export default function FavoritesList() {
  const favorites = useStore((s) => s.favorites) as FavoriteItemInStore[];

  if (!favorites || favorites.length === 0) {
    return <div className={styles.empty}>У вас ще немає улюблених товарів.</div>;
  }

  return (
    <div className={styles.favoritesGrid}>
      {favorites.map((product) => {
        const adaptedProduct: ExpectedProductType = {
          id: product.id,
          name: product.title || product.name || 'Без назви',
          price: product.newPrice ?? product.price,
          image: product.image,
          badges: product.badges || [],
          description: product.description || ''
        };

        return (
          <ProductCard 
            key={product.id} 
            product={adaptedProduct} 
          />
        );
      })}
    </div>
  );
}
