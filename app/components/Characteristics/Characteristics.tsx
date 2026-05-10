'use client';

import Image from 'next/image';
import styles from './Characteristics.module.css';
import ArrowUpLogo from '@/logo/ArrowUpLogo/ArrowUpLogo.svg';
import { useState } from 'react';

const Characteristics = () => {
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState(true);

  const toggleCharacteristics = () => {
    setIsCharacteristicsOpen(!isCharacteristicsOpen);
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeader} onClick={toggleCharacteristics}>
          <span>Характеристики</span>
          <span className={`${styles.iconWrapper} ${!isCharacteristicsOpen ? styles.iconRotated : ''}`}>
            <Image 
              src={ArrowUpLogo} 
              alt="Makarets Leathercraft" 
              className={styles.arrowUpLogo}
            />
          </span>
        </div>
        <div className={`${styles.accordionContent} ${isCharacteristicsOpen ? styles.open : styles.closed}`}>
          <div className={styles.colorsListInner}>
            <div className={styles.specsTable}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Матеріал</span>
                <span className={styles.specValue}>Натуральна шкіра</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Тип</span>
                <span className={styles.specValue}>Портмоне</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Тип шкіри</span>
                <span className={styles.specValue}>Crazy Horse</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Колір</span>
                <span className={styles.specValue}>Чорний</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Для кого</span>
                <span className={styles.specValue}>Чоловічий</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 

export default Characteristics;