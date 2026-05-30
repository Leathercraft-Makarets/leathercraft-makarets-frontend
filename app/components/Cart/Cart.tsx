'use client';

import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './Cart.module.css';
import { useStore } from '@/store/useStore';
import Link from '@/components/UI/Link/Link';
import HeartButton from '@/components/HeartButton/HeartButton';
import AddToCart from '@/components/AddToCart/AddToCart';

interface RecommendedProduct {
  id: number;
  image: string;
  name: string;
  currentPrice: number;
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
      image: 'https://images.unsplash.com/photo-1602638034367-26c55969967c?q=80&w=853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Гаманець мінімаліст',
      currentPrice: 650,
      oldPrice: 850,
      badges: [{ type: 'discount', value: '-30%' }]
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544511196-1646449a253b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
      name: 'Сумка для документів',
      currentPrice: 1200,
      badges: [{ type: 'hit' }]
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
      name: 'Гаманець з відділенням для монет',
      currentPrice: 890,
      oldPrice: 1100,
      badges: [{ type: 'discount', value: '-30%' }, { type: 'hit' }]
    }
  ];

  const getNumericPrice = (price: number | string | undefined) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const parsed = parseFloat(price.replace(/[^\\d.,]/g, '').replace(',', '.'));
      return Number.isFinite(parsed) ? parsed : 0;
    }
    return 0;
  };

  const formatPrice = (price: number | string | undefined) => {
    if (typeof price === 'number') return `${price}₴`;
    return price ? String(price) : '0₴';
  };

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
              {recommendedProducts.map(product => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={220}
                      style={{ borderRadius: 16, objectFit: 'cover' }}
                      unoptimized
                    />
                    {product.badges && (
                      <div className={styles.badges}>
                        {product.badges.map((badge, idx) => (
                          <span key={idx} className={styles.badge}>
                            {badge.type === 'hit' && (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                            )}
                            {badge.type === 'hit' ? 'Хіт' : badge.value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={styles.productInfo}>
                    <div className={styles.productHeader}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <HeartButton
                        product={{
                          id: `recommended-${product.id}`,
                          title: product.name,
                          price: product.currentPrice,
                          imageUrl: product.image
                        }}
                      />
                    </div>

                    <div className={styles.priceContainer}>
                      <span className={styles.currentPrice}>{product.currentPrice}₴</span>
                      {product.oldPrice && (
                        <span className={styles.oldPrice}>{product.oldPrice}₴</span>
                      )}
                    </div>

                    <AddToCart
                      product={{
                        id: `recommended-${product.id}`,
                        title: product.name,
                        price: product.currentPrice,
                        imageUrl: product.image
                      }}
                      className={styles.addCartButton}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <p>Ваш кошик порожній</p>
          <Link className={styles.continueShopping} href="/catalog">
            ← Повернутися до покупок
          </Link>
        </div>
      )}

      {/* Посилання назад */}
      {cartItems.length > 0 && (
        <Link className={styles.continueShopping} href="/catalog">
          ← Повернутися до покупок
        </Link>
      )}
    </div>
  );
};

export default Cart;