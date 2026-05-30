'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Colors.module.css';
import ArrowUpLogo from '@/logo/ArrowUpLogo/ArrowUpLogo.svg';

const COLORS = [
  '#E22D2D', 
  '#FCF3B0', 
  '#D2691E', 
  '#3A2A2A', 
  '#9A8080', 
  '#F5EDE8'
];

const Colors = () => {
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [isColorsOpen, setIsColorsOpen] = useState(true);

  const toggleColors = () => {
    setIsColorsOpen(!isColorsOpen);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader} onClick={toggleColors}>
        <span>Кольори</span>
        <span className={`${styles.iconWrapper} ${!isColorsOpen ? styles.iconRotated : ''}`}>
           <Image 
              src={ArrowUpLogo} 
              alt="Makarets Leathercraft" 
              className={styles.arrowUpLogo}
           />
        </span>
      </div>
      <div className={`${styles.accordionContent} ${isColorsOpen ? styles.open : styles.closed}`}>
        <div className={styles.colorsListInner}>
          <div className={styles.colorsList}>
            {
              COLORS.map((color, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveColor(color)}
                  className={`
                    ${styles.colorSwatch} 
                    ${activeColor === color ? styles.activeSwatch : ''}
                  `}
                  style={{ backgroundColor: color }}
                >
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;