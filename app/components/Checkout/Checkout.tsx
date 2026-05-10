'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Checkout.module.css';

interface CheckoutProps {
  cartItems?: Array<{
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }>;
  totalPrice?: number;
}

const Checkout: React.FC<CheckoutProps> = ({
  cartItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop',
      name: 'Чоловічий гаманець класичний',
      description: 'Натуральна шкіра, 8 відділень',
      price: 780,
      quantity: 1
    }
  ],
  totalPrice = 780
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+380',
    city: '',
    deliveryMethod: '',
    deliveryType: '',
    paymentMethod: '',
    comment: '',
    giftWrapping: false
  });

  const deliveryOptions = {
    'nova-pochta': [
      { id: 'nova-pochta-office', label: 'Нова пошта', icon: '📦' },
      { id: 'nova-pochta-courier', label: "Нова пошта кур'єром", icon: '🚚' }
    ],
    'ukrposhta': [
      { id: 'ukrposhta', label: 'Укрпошта', icon: '✉️' }
    ]
  };

  const paymentOptions = [
    { id: 'cod', label: 'Оплата при отриманні/накладний платіж', icon: '💵' },
    { id: 'fop', label: 'Оплата на рахунок ФОП', icon: '🏦' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDeliveryChange = (method: string) => {
    setFormData(prev => ({
      ...prev,
      deliveryMethod: method,
      deliveryType: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Імітація відправки даних
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Перехід на сторінку успішного замовлення
    router.push('/checkout/success?order=1278');
  };

  return (
    <div className={styles.container}>
      {/* Хлібні крихти */}
      <nav className={styles.breadcrumbs}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>
          / <Link className={styles.breadcrumbLink} href="/catalog">Каталог</Link>
          / <Link className={styles.breadcrumbLink} href="/cart">Кошик</Link>
          / <span>Оформити замовлення</span>
        </span>
      </nav>

      <h1 className={styles.pageTitle}>Оформлення замовлення</h1>

      <div className={styles.layout}>
        {/* Ліва колонка - Форма */}
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit}>
            {/* Контакти */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Контактні дані
              </h2>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{"Ім'я"}</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Введіть ім'я кирилицею"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Прізвище</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Введіть прізвище кирилицею"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+380 00 00 00 000"
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Доставка */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                Доставка
              </h2>

              <div className={styles.formGroup}>
                <label className={styles.label}>Ваше місто</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Введіть назву вашого міста"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.deliveryOptions}>
                {Object.entries(deliveryOptions).map(([method, options]) => (
                  <div key={method} className={styles.deliveryMethod}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value={method}
                        checked={formData.deliveryMethod === method}
                        onChange={() => handleDeliveryChange(method)}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioText}>
                        {options[0].icon} {options[0].label}
                      </span>
                    </label>

                    {formData.deliveryMethod === method && (
                      <div className={styles.deliverySubOptions}>
                        {options.map(option => (
                          <label key={option.id} className={styles.radioLabel}>
                            <input
                              type="radio"
                              name="deliveryType"
                              value={option.id}
                              checked={formData.deliveryType === option.id}
                              onChange={handleInputChange}
                              className={styles.radioInput}
                            />
                            <span className={styles.radioText}>
                              {option.icon} {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Оплата */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Оплата
              </h2>

              <div className={styles.paymentOptions}>
                {paymentOptions.map(option => (
                  <label key={option.id} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={option.id}
                      checked={formData.paymentMethod === option.id}
                      onChange={handleInputChange}
                      className={styles.radioInput}
                      required
                    />
                    <span className={styles.radioText}>
                      {option.icon} {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Коментар */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Коментар
              </h2>

              <div className={styles.formGroup}>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Введіть ім'я кирилицею"
                  className={styles.textarea}
                  rows={4}
                />
              </div>
            </section>

            {/* Подарункове пакування */}
            <div className={styles.giftWrapping}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="giftWrapping"
                  checked={formData.giftWrapping}
                  onChange={handleInputChange}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>Загорнути в подарункову упаковку</span>
              </label>
            </div>

            {/* Кнопка відправки */}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? (
                <>
                  <svg className={styles.spinner} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.3" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" />
                  </svg>
                  Обробка...
                </>
              ) : (
                <>
                  Зберегти
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Посилання назад */}
          <Link className={styles.backLink} href="/main-page">
            ← На головну
          </Link>
        </div>

        {/* Права колонка - Підсумок */}
        <div className={styles.summarySection}>
          <h2 className={styles.sectionTitle}>Ваше замовлення</h2>

          <div className={styles.summaryItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <div className={styles.summaryItemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.summaryItemInfo}>
                  <h3 className={styles.summaryItemName}>{item.name}</h3>
                  <p className={styles.summaryItemDescription}>{item.description}</p>
                </div>
                <div className={styles.summaryItemPrice}>
                  {item.price * item.quantity}₴
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summaryTotals}>
            <div className={styles.summaryRow}>
              <span>Вартість замовлення</span>
              <span>{totalPrice}₴</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Доставка</span>
              <span>За тарифами перевізника</span>
            </div>
            {formData.giftWrapping && (
              <div className={styles.summaryRow}>
                <span>Подарункове пакування</span>
                <span>Безкоштовно</span>
              </div>
            )}
          </div>

          <div className={styles.summaryNote}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>{"Після оформлення замовлення наш менеджер зв'яжеться з вами для підтвердження деталей."}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;