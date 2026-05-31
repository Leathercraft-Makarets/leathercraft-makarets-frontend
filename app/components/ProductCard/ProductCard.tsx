'use client';

import Image from "next/image";
import Link from "next/link"; // 👈 1. Імпортуємо Link для швидких переходів
import HeartButton from "@/components/HeartButton/HeartButton";
import AddToCart from '@/components/AddToCart/AddToCart';
import ProductBadge from "@/components/ProductBadge/ProductBadge";
import styles from "./ProductCard.module.css";

interface BadgeItem {
  type: 'hit' | 'discount' | 'new' | string;
  value: string;
}

interface Product {
  id: number | string;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  badges?: BadgeItem[];
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      {/* 2. Загортаємо контейнер фотографії в Link, що веде на динамічний роут товару */}
      <Link href={`/product${/* /${product.id} */ ''}`}
         className={styles.imageWrapperLink}>
        <div className={styles.imageWrapper}>
          <ProductBadge badges={product.badges} />
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={styles.productImage}
            unoptimized
          />
        </div>
      </Link>

      <div className={styles.productContent}>
        <div className={styles.productInfoTop}>
          <div className={styles.productInfoTopWrapper}>
        <Link href={`/product${/* /${product.id} */ ''}`} className={styles.titleLink}>
          <h3 className={styles.productTitle}>{product.name}</h3>
        </Link>

            
            {product.description && (
              <p className={styles.productDescription}>{product.description}</p>
            )}

            <div className={styles.priceContainer}>
              {product.oldPrice && (
                <span className={styles.oldPrice}>{product.oldPrice}</span>
              )}
              <span className={styles.newPrice}>{product.price}</span>
            </div>
          </div>
          <HeartButton product={product} /> 
        </div>

        <AddToCart product={product} className={styles.addToCartBtn} />
      </div>
    </div>
  );
}
