import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './page.module.css';

export default function MyOrderPage() {
  const orderData = {
    orderNumber: '1278',
    customer: {
      name: 'Олена Коваленко',
      email: 'olena@gmail.com',
      phone: '+380 00 00 000',
      city: 'Київ',
      deliveryMethod: 'Нова пошта',
      address: 'Відділення №1: Хрещатик, 1',
      paymentMethod: 'Оплата при отриманні'
    },
    items: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1689844833510-10939e60e8dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8',
        name: 'Шкіряний гаманець',
        description: 'Ручна робота, чорний колір',
        price: 780
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1599066852653-42826a50b163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        name: 'Шкіряний ремінь',
        description: 'Класичний дизайн, коричневий',
        price: 780
      }
    ],
    totals: {
      giftWrapping: 'Безкоштовно',
      delivery: 'За тарифами перевізника',
      total: 1740
    }
  };

  return (
    <PageLayout className={styles.container}>

      <Breadcrumbs
        items={[
          { label: 'Головна', href: '/' },
          { label: 'Каталог', href: '/catalog' },
          { label: 'Кошик', href: '/cart' },
          { label: 'Замовлення' }
        ]}
      />

      <main className={styles.main}>
        <h1 className={styles.orderTitle}>
          Замовлення № {orderData.orderNumber}
        </h1>

        <section className={styles.customerInfo}>
          <div className={styles.infoRow}>
            <span className={styles.label}>{"Ім'я та прізвище"}</span>
            <span className={styles.value}>{orderData.customer.name}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{orderData.customer.email}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Телефон</span>
            <span className={styles.value}>{orderData.customer.phone}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Місто</span>
            <span className={styles.value}>{orderData.customer.city}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Спосіб доставки</span>
            <span className={styles.value}>{orderData.customer.deliveryMethod}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Адреса</span>
            <span className={styles.value}>{orderData.customer.address}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Спосіб оплати</span>
            <span className={styles.value}>{orderData.customer.paymentMethod}</span>
          </div>
        </section>

        <section className={styles.orderItems}>
          <h2 className={styles.sectionTitle}>Замовлення</h2>
          
          <div className={styles.itemsHeader}>
            <div className={styles.itemImageHeader}>Фото</div>
            <div className={styles.itemDetailsHeader}>
              <span className={styles.itemNameHeader}>Назва</span>
              <span className={styles.itemDescHeader}>Опис</span>
            </div>
            <div className={styles.itemPriceHeader}>Ціна</div>
          </div>

          <div className={styles.itemsList}>
            {orderData.items.map((item) => (
              <div key={item.id} className={styles.itemRow}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.itemImageInner}
                    unoptimized
                  />
                </div>
                <div className={styles.itemDetails}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemDescription}>{item.description}</span>
                </div>
                <div className={styles.itemPrice}>
                  {item.price} ₴
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.orderSummary}>
          <div className={styles.summaryRow}>
            <span>Подарункове пакування</span>
            <span>{orderData.totals.giftWrapping}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Доставка</span>
            <span>{orderData.totals.delivery}</span>
          </div>
          <div className={styles.summaryRowTotal}>
            <span>Всього</span>
            <span>{orderData.totals.total} ₴</span>
          </div>
        </section>

        <div className={styles.backButtonContainer}>
          <Link href="/main-page" className={styles.backButton}>
            ← На головну
          </Link>
        </div>
      </main>
    </PageLayout>
  );
}