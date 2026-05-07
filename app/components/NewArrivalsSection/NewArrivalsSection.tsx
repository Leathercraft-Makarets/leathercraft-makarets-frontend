"use client";

import Link from "next/link";
import styles from "./NewArrivalsSection.module.css";

// Дані для товарів
const products = [
  {
    id: 1,
    title: "Класичний гаманець",
    price: 1200,
    oldPrice: 1500,
    isNew: true,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop",
    category: "Чоловічі"
  },
  {
    id: 2,
    title: "Сумка через плече",
    price: 2400,
    oldPrice: 3000,
    isSale: true,
    salePercent: "20%",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=400&auto=format&fit=crop",
    category: "Жіночі"
  },
  {
    id: 3,
    title: "Гаманець з монетницею",
    price: 950,
    oldPrice: null,
    isNew: true,
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=400&auto=format&fit=crop",
    category: "Акесуари"
  },
  {
    id: 4,
    title: "Ремень з ручним тисненням",
    price: 1800,
    oldPrice: 2200,
    isSale: true,
    salePercent: "18%",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
    category: "Діловий стиль"
  }
];

export default function NewArrivalsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Новинки та <span className={styles.highlight}>гарячі пропозиції</span>
          </h2>
          <p className={styles.subtitle}>
            Обирайте найкраще з нашої свіжої колекції
          </p>
        </div>

        {/* Сітка товарів */}
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {/* Ярлики */}
              <div className={styles.badges}>
                {product.isNew && <span className={styles.badgeNew}>NEW</span>}
                {product.isSale && <span className={styles.badgeSale}>{product.salePercent}</span>}
              </div>

              {/* Зображення */}
              <div className={styles.productImage}>
                <div 
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>

              {/* Інформація про товар */}
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{product.category}</span>
                <h3 className={styles.productTitle}>{product.title}</h3>
                
                <div className={styles.priceBlock}>
                  {product.oldPrice && (
                    <span className={styles.oldPrice}>{product.oldPrice} ₴</span>
                  )}
                  <span className={styles.currentPrice}>{product.price} ₴</span>
                </div>

                <Link href={`/catalog#catalog`} className={styles.buyButton}>
                  До кошика
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Перейти до каталогу" */}
        <div className={styles.ctaContainer}>
          <Link href="/catalog#catalog" className={styles.catalogButton}>
            <span className={styles.buttonIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </span>
            Переглянути весь каталог
          </Link>
        </div>
      </div>
    </section>
  );
}