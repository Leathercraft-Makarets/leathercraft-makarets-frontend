'use client';

import { useState } from 'react';
import styles from './ActionPanel.module.css';
import HeartButton from '../HeartButton/HeartButton';
import AddToCart from '../AddToCart/AddToCart';
import type { Product } from '@/store/useStore';

type Props = { product: Product };

const ActionPanel = ({ product }: Props) => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const increaseQty = () => setQuantity(prev => prev + 1);

    return (
        <>
          <div className={styles.actionsRow}>
            <div className={styles.quantityControl}>
              <button className={styles.qtyBtn} onClick={decreaseQty}>-</button>
              <div className={styles.qtyInput}>{quantity}</div>
              <button className={styles.qtyBtn} onClick={increaseQty}>+</button>
            </div>
            <AddToCart product={product} />
            <HeartButton product={product} />
          </div>
        </>
    );
}

export default ActionPanel;