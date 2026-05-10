"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') || '1278';
  const currentTime = new Date().toLocaleString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const orderDetails = {
    customer: 'Олена Коваленко',
    email: 'elena@gmail.com',
    phone: '+380 00 00 00 000',
    city: 'Київ',
    delivery: 'Нова пошта',
    deliveryAddress: 'Відділення №1: Хрещатик, 1',
    payment: 'Оплата при отриманні',
    items: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop',
        name: 'Чоловічий гаманець класичний',
        description: 'Натуральна шкіра, 8 відділень',
        price: 780,
        quantity: 1
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1606503825008-909a6184aeb4?w=300&h=300&fit=crop',
        name: 'Гаманець мінімаліст',
        description: 'Компактний, 4 відділення',
        price: 650,
        quantity: 1
      }
    ],
    subtotal: 1430,
    giftWrapping: 'Безкоштовно',
    deliveryCost: 'За тарифами перевізника',
    total: 1430
  };

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumbs}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>
          / <Link className={styles.breadcrumbLink} href="/catalog">Каталог</Link>
          / <Link className={styles.breadcrumbLink} href="/cart">Кошик</Link>
          / <Link className={styles.breadcrumbLink} href="/checkout">Оформити замовлення</Link>
          / <span>Замовлення</span>
        </span>
      </nav>

      <div className={styles.successContent}>
        <div className={styles.successIcon}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        <h1 className={styles.successTitle}>Дякуємо за замовлення!</h1>
        <p className={styles.successSubtitle}>
          Замовлення № <span className={styles.orderNumber}>{orderNumber}</span> успішно оформлено
        </p>
        <p className={styles.successDate}>
          Дата оформлення: {currentTime}
        </p>

        <div className={styles.infoBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p>
            Ми надіслали підтвердження на вашу електронну пошту.
            Наш менеджер зв'яжеться з вами протягом 1-2 годин для уточнення деталей доставки.
          </p>
        </div>

        <div className={styles.detailsSection}>
          <h2 className={styles.detailsTitle}>Деталі замовлення</h2>

          <div className={styles.detailsGrid}>
            <div className={styles.detailsColumn}>
              <h3 className={styles.detailsSubTitle}>Контактні дані</h3>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Ім'я та прізвище:</span>
                <span className={styles.detailValue}>{orderDetails.customer}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Email:</span>
                <span className={styles.detailValue}>{orderDetails.email}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Телефон:</span>
                <span className={styles.detailValue}>{orderDetails.phone}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Місто:</span>
                <span className={styles.detailValue}>{orderDetails.city}</span>
              </div>
            </div>

            <div className={styles.detailsColumn}>
              <h3 className={styles.detailsSubTitle}>Доставка та оплата</h3>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Спосіб доставки:</span>
                <span className={styles.detailValue}>{orderDetails.delivery}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Адреса:</span>
                <span className={styles.detailValue}>{orderDetails.deliveryAddress}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Спосіб оплати:</span>
                <span className={styles.detailValue}>{orderDetails.payment}</span>
              </div>
            </div>
          </div>

          <h3 className={styles.detailsSubTitle}>Товари у замовленні</h3>
          <div className={styles.itemsList}>
            {orderDetails.items.map(item => (
              <div key={item.id} className={styles.itemRow}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemName}>{item.name}</h4>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <span className={styles.itemQuantity}>Кількість: {item.quantity}</span>
                </div>
                <div className={styles.itemPrice}>
                  {item.price * item.quantity}₴
                </div>
              </div>
            ))}
          </div>

          <div className={styles.totalsBox}>
            <div className={styles.totalsRow}>
              <span>Вартість товарів:</span>
              <span>{orderDetails.subtotal}₴</span>
            </div>
            {orderDetails.giftWrapping && (
              <div className={styles.totalsRow}>
                <span>Подарункове пакування:</span>
                <span>{orderDetails.giftWrapping}</span>
              </div>
            )}
            <div className={styles.totalsRow}>
              <span>Доставка:</span>
              <span>{orderDetails.deliveryCost}</span>
            </div>
            <div className={`${styles.totalsRow} ${styles.totalsRowTotal}`}>
              <span>Всього:</span>
              <span>{orderDetails.total}₴</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            ← На головну
          </Link>
          <Link href="/catalog" className={styles.catalogButton}>
            Продовжити покупки
          </Link>
        </div>
      </div>
    </div>
  );
}