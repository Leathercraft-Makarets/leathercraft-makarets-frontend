"use client";

import Link from "next/link";
import styles from "./CatalogGrid.module.css";

// Дані для карточок каталогу
const catalogItems = [
  {
    id: 1,
    title: "Чоловічі",
    description: "Класичні та сучасні моделі для чоловіків",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
    href: "/catalog/men"
  },
  {
    id: 2,
    title: "Жіночі",
    description: "Елегантні гаманці для жінок",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9ql0n8uTullB7SAYlPrfxIBRxT-TJUEToQ&s",
    href: "/catalog/women"
  },
  {
    id: 3,
    title: "Дитячі",
    description: "Яскраві та надійні гаманці для дітей",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GXJ_QGA41pYd6HpjsmMnWS2SJoS2Lb71nA&s",
    href: "/catalog/kids"
  },
  {
    id: 4,
    title: "Діловий стиль",
    description: "Преміум моделі для бізнесу",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgjUN-MdO-JSvHgNuV0HjJMZH5P26I4afeA&s",
    href: "/catalog/business"
  },
  {
    id: 5,
    title: "Подарункові",
    description: "Унікальні набори для подарунків",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
    href: "/catalog/gifts"
  },
  {
    id: 6,
    title: "Стилізовані",
    description: "Гаманці з оригінальним дизайном",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOZZljfbw5zPNF7Z73kJoBOQ2e74b5DFH4Q&s",
    href: "/catalog/style"
  }
];

export default function CatalogGrid() {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
  <span className={styles.accentText}>Каталог </span>гаманців</h2>

        
        <div className={styles.grid}>
          {catalogItems.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Фонове зображення */}
              <div 
                className={styles.cardBackground}
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Оверлей */}
              <div className={styles.cardOverlay} />
              
              {/* Контент карточки */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                
                <Link href={'/product-filter'} className={styles.cardButton}>
                  <span className={styles.buttonIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </span>
                  Перейти
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}