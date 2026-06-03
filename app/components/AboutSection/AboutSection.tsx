"use client";

import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Велике фото зліва */}
          <div className={styles.mainImage}>
            <div 
              className={styles.imageBg}
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop')` }}
            />
          </div>

          {/* Контент праворуч */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              MAKARETS: <span className={styles.accentText}>Мистецтво</span> в деталях
            </h2>

            
            <p className={styles.description}>
              Ми віримо, що гаманець — це не просто аксесуар, а відображення вашого характеру. У MAKARETS ми поєднуємо традиційні методи обробки шкіри з сучасним дизайном. Кожен виріб створюється вручну з відібраних матеріалів, щоб забезпечити довговічність, до якої приємно торкатися.
            </p>
            
            <Link href="/about" className={styles.learnMoreButton}>
              Дізнатися більше
              <span className={styles.buttonIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Два маленькі фото знизу праворуч */}
            <div className={styles.bottomImages}>
              <div 
                className={styles.smallImage}
                style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0823/2013/0329/files/pikaso_texttoimage_old-wornout-wallets-scattered-on-table_1024x1024.jpg?v=1724836915')` }}
              />
              <div 
                className={styles.smallImage}
                style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHQoZTKeD7sZ2iIpaTobzkAdpiz5YbbtE_w&s')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}