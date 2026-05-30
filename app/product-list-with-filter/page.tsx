'use client';

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PageLayout from "@/components/PageLayout/PageLayout";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import styles from './page.module.css';
import HeartButton from "@/components/HeartButton/HeartButton";
import AddToCart from '@/components/AddToCart/AddToCart';

export default function ProductsList() {
  const products = [
    { id: 1, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 2, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 3, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 4, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 5, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 6, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 7, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 8, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 9, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 10, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 11, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 12, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 13, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 14, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 15, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 16, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 17, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 18, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
  ];


  return (
    <PageLayout className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Каталог', href: '/catalog' },
            { label: 'Список товарів', href: '/product-list-with-filter' }
          ]}
        />
        <div className={styles.shopContainer}>
          <FilterSidebar />
          <main className={styles.mainContent}>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={styles.productCard}
                >
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.badgeContainer}>
                      {product.discount && (
                        <span className={styles.badge}>🏷️ {product.discount}</span>
                      )}
                      {product.isHit && (
                        <span className={`${styles.badge} ${styles.dark}`}>🔥 Хіт</span>
                      )}
                    </div>
                  </div>
                  <div className={styles.productInfoTop}>
                    <div className={styles.productInfoTopWrapper}>
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <div className={styles.priceContainer}>
                        <span className={styles.newPrice}>{product.newPrice}</span>
                        {product.oldPrice && 
                          <span className={styles.oldPrice}>{product.oldPrice}</span>
                        }
                      </div>
                    </div>
                    <HeartButton product={product} /> 
                  </div>
                  <AddToCart product={product} className={styles.addToCartBtn} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}