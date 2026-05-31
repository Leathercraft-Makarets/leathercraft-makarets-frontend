'use client';

import styles from "./ProductBadge.module.css";

interface BadgeItem {
  type: 'hit' | 'discount' | 'new' | string;
  value?: string;
}

interface ProductBadgeProps {
  badges?: BadgeItem[];
}

export default function ProductBadge({ badges }: ProductBadgeProps) {
  if (!badges || badges.length === 0) return null;

  return (
    <div className={styles.badges}>
      {badges.map((badge, idx) => (
        <span 
          key={idx} 
          className={`${styles.badge} ${badge.type === 'new' ? styles.badgeNew : 'Нове'}`}
        >
          {badge.type === 'hit' && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className={styles.starIcon}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          )}
          {badge.type === 'hit' ? 'Хіт' : badge.value}
        </span>
      ))}
    </div>
  );
}
