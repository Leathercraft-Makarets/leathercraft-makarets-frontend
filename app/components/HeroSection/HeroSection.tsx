"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Ефект паралаксу
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && heroRef.current) {
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroRef.current.offsetHeight;
        
        if (scrollPosition < heroHeight) {
          const parallaxOffset = scrollPosition * 0.5;
          imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bannerImageUrl = 
    "https://images.stockcake.com/public/7/c/0/7c0339e0-8046-4fff-99c2-0fdfb5acdb44_large/weathered-leather-craft-stockcake.jpg";

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <img
        ref={imageRef}
        src={bannerImageUrl}
        alt="Стильні шкіряні гаманці"
        className={styles.backgroundImage}
      />
      
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        {/* Назва магазину */}
        <h1 className={styles.brandName}>Leathercraft Makarets</h1>
        
        {/* Слоган */}
        <p className={styles.tagline}>Аксесуари, що мають характер.</p>

        <div className={styles.buttonContainer}>
          <Link href="#catalog" className={styles.catalogButton} aria-label="Перейти до каталогу">
            <span className={styles.catalogIcon}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </span>
            До каталогу
          </Link>
        </div>
      </div>
    </section>
  );
}