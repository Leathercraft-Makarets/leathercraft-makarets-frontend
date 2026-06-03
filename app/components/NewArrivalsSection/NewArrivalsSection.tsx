"use client";

import Link from "next/link";
import styles from "./NewArrivalsSection.module.css";
// Імпортуємо готовий компонент з вашого проєкту
import ProductCard from "@/components/ProductCard/ProductCard";

// Дані для товарів
const products = [
  {
    id: 1,
    title: "Класичний гаманець",
    price: '1200 ₴',
    oldPrice: '1500 ₴',
    isNew: true,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop",
    category: "Чоловічі"
  },
  {
    id: 2,
    title: "Сумка через плече",
    price: '2400 ₴',
    oldPrice: '3000 ₴',
    isSale: true,
    salePercent: "20%",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=400&auto=format&fit=crop",
    category: "Жіночі"
  },
  {
    id: 3,
    title: "Гаманець з монетницею",
    price: '950 ₴',
    oldPrice: '1000 ₴',
    isNew: true,
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=400&auto=format&fit=crop",
    category: "Акесуари"
  },
  {
    id: 4,
    title: "Ремень з ручним тисненням",
    price: '1800 ₴',
    oldPrice: '2200 ₴',
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
            Новинки та <span className={styles.accentText}>гарячі пропозиції</span>
          </h2>
          <p className={styles.subtitle}>
            Обирайте найкраще з нашої свіжої колекції
          </p>
        </div>

        {/* Сітка товарів */}
        <div className={styles.productsGrid}>
          {products.map((item) => {
            // Формуємо правильні бейджі
            const productBadges: Array<{ type: 'hit' | 'discount' | 'new' | string; value?: string }> = [];
            if (item.isSale && item.salePercent) {
              productBadges.push({ type: "discount", value: item.salePercent });
            }
            if (item.isNew) {
              productBadges.push({ type: "new", value: "New" });
            }

            // Адаптуємо об'єкт під формат ProductCardProps
            const adaptedProduct = {
              id: item.id,
              name: item.title,
              price: item.price,
              oldPrice: item.oldPrice || undefined,
              image: item.image,
              badges: productBadges,
              description: "", // додаємо пусту строку, якщо компонент її вимагає
            };

            return (
              <ProductCard 
                key={item.id} 
                product={adaptedProduct} 
              />
            );
          })}
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
