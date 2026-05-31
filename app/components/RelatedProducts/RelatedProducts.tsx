'use client';

import styles from './RelatedProducts.module.css';
import { MOCK_PRODUCTS } from '@/data/MockProducts';
import HeartButton from '../HeartButton/HeartButton';
import AddToCart from '@/components/AddToCart/AddToCart';

export default function RelatedProducts() {
    return (
        <> 
            <h2 className={styles.sectionTitle}>Вам також може сподобатися</h2>
            <div className={styles.grid}>
                {
                    MOCK_PRODUCTS.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div 
                                className={styles.imageBox} 
                                style={{ 
                                    backgroundImage: product.image ? `url(${product.image})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className={styles.badges}>
                                    {
                                        product.badges.map((badge, index) => (
                                            <div key={`${product.id}-${badge.type}-${index}`} className={styles.badgesContainer}>
                                                {
                                                    badge.type === 'hit' ? (
                                                        <span className={`${styles.badge} ${styles.badgeOrange}`}>
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                                                            </svg>
                                                            {badge.text}
                                                        </span>
                                                    ) : badge.type === 'discount' ? (
                                                        <span className={`${styles.badge} ${styles.badgeBrown}`}>
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                                                <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                                            </svg>
                                                            {badge.text}
                                                        </span>
                                                    ) : null
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.textInfo}>
                                    <h3 className={styles.productName}>{product.title}</h3>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.currentPrice}>{product.price}</span>
                                        {product.oldPrice && (<span className={styles.oldPrice}>{product.oldPrice}</span>)}
                                    </div>
                                </div>
                                <HeartButton product={product} />
                            </div>
                                                        <div>
                                                            <AddToCart product={product} />
                                                        </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}