'use client';

import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './Cart.module.css';
import { useStore } from '@/store/useStore';
import Link from '@/components/UI/Link/Link';
import ProductCard from '@/components/ProductCard/ProductCard'; // Імпортуємо ваш готовий компонент

interface RecommendedProduct {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  badges?: Array<{ type: 'hit' | 'discount'; value?: string }>;
}

const Cart = () => {
  const cartItems = useStore((s) => s.cart);
  const removeItem = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateCartQuantity);

  const recommendedProducts: RecommendedProduct[] = [
    {
      id: 1,
      image: '/images/product1.jpg',
      name: 'Гаманець мінімаліст',
      description: 'Стильний компактний гаманець з натуральної шкіри з відділеннями для карток та монет.',
      price: 650,
      oldPrice: 850,
      badges: [{ type: 'discount', value: '-30%' }]
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      name: 'Сумка для документів',
      description: 'Простір для документів та гаманця, зручна для щоденного використання.',
      price: 1200,
      oldPrice: 1600,
      badges: [{ type: 'hit' }]
    },
    {
      id: 3,
      image: '/images/product3.jpg',
      name: 'Гаманець з відділенням для монет',
      description: 'Гаманець з відділенням для монет, зручний для щоденного використання.',
      price: 890,
      oldPrice: 1100,
      badges: [{ type: 'discount', value: '-30%' }, { type: 'hit' }]
    }
  ];

  const getNumericPrice = (price: number | string | undefined) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const parsed = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.'));
      return Number.isFinite(parsed) ? parsed : 0;
    }
    return 0;
  };

  const formatPrice = (price: number | string | undefined) => {
    if (typeof price === 'number') return `${price}₴`;
    return price ? String(price) : '0₴';
  };

  // Розрахунок загальної суми кошика
  const totalPrice = cartItems.reduce((sum, item) => sum + getNumericPrice(item.price) * item.quantity, 0);

  return (
    <div className={styles.container}>
      <Breadcrumbs
        items={[
          { label: 'Каталог', href: '/catalog' },
          { label: 'Кошик' }
        ]}
      />

      <h1 className={styles.pageTitle}>Кошик</h1>

      {cartItems.length > 0 ? (
        <>
          {/* Список товарів у кошику */}
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.image}
                    unoptimized
                  />
                </div>
                
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>

                <div className={styles.itemControls}>
                  <div className={styles.quantityControl}>
                    <button 
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className={styles.qtyInput}>{item.quantity}</span>
                    <button 
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className={styles.itemPrice}>{formatPrice(getNumericPrice(item.price) * item.quantity)}</div>
                  
                  <button 
                    className={styles.deleteBtn}
                    onClick={() => removeItem(item.id)}
                    title="Видалити"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Блок підсумку */}
          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <span>Сума замовлення</span>
              <span>{totalPrice}₴</span>
            </div>
            <div className={styles.summaryRowTotal}>
              <span>Загальна сума</span>
              <span>{totalPrice}₴</span>
            </div>
            <Link href="/checkout" className={styles.checkoutButton}>
              Оформити замовлення
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <p>Ваш кошик порожній</p>
          <Link href="/catalog" className={styles.checkoutButton}>Перейти до каталогу</Link>
        </div>
      )}

      {/* Рекомендовані товари */}
      <div className={styles.recommendedSection}>
        <div className={styles.recommendedHeader}>
          <h2 className={styles.sectionTitle}>Рекомендовані товари</h2>
          <div className={styles.pagination}>
            <button className={styles.paginationBtn}>&lt;</button>
            <button className={styles.paginationBtn}>&gt;</button>
          </div>
        </div>

        <div className={styles.recommendedGrid}>
          {recommendedProducts.map(product => {
            const adaptedProduct = {
              id: product.id,
              name: product.name,   
              description: product.description,
              price: product.price,
              oldPrice: product.oldPrice,
              image: product.image,
              badges: product.badges || []
            };

            return (
              <ProductCard 
                key={product.id} 
                product={adaptedProduct as any} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
