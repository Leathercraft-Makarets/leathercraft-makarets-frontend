'use client';

import React from 'react';
import styles from './FavoritesList.module.css';
import { useStore } from '@/store/useStore';
import ProductCard from '@/components/ProductCard/ProductCard'; // Імпортуємо готовий компонент

export default function FavoritesList() {
  const favorites = useStore((s) => s.favorites);

  if (!favorites || favorites.length === 0) {
    return <div className={styles.empty}>У вас ще немає улюблених товарів.</div>;
  }

 // Ось абсолютно той самий код, але з назвою 'product':
return (
  <div className={styles.favoritesGrid}>
    {favorites.map((product) => { // Тепер тут 'product' замість 'p'
      const adaptedProduct = {
        id: product.id,
        name: product.title || product.name,
        price: product.newPrice ?? product.price,
        image: product.image || product.imageUrl, // Тепер викликаємо через product.
        badges: (product as any).badges || [],
        description: (product as any).description || ''
      };

      return (
        <ProductCard 
          key={product.id} 
          product={adaptedProduct as any} 
        />
      );
    })}
  </div>
);
}