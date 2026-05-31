'use client';

import styles from './AddToCart.module.css';
import { Product, useStore } from '@/store/useStore';
import type { ButtonHTMLAttributes, FC } from 'react';

type Props = { product?: Product } & ButtonHTMLAttributes<HTMLButtonElement>;

const AddToCart: FC<Props> = ({ product, className = '', ...rest }) => {
    const addToCart = useStore((s) => s.addToCart);

const handle = () => {
    if (!product) return;

    // Створюємо тимчасовий тип, який дозволяє читати currentPrice як число або рядок
    const productWithCurrentPrice = product as { currentPrice?: number | string };

    const productForCart = {
        ...product,
        // Тепер TypeScript офіційно знає про currentPrice і не свариться на types/any
        price: product.price || productWithCurrentPrice.currentPrice
    };

    addToCart(productForCart);
};
    return (
        <button 
            className={[styles.addToCart, className].join(' ')} 
            onClick={handle} 
            {...rest}
        >
            Додати у кошик
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        </button>
    );
};

export default AddToCart;
