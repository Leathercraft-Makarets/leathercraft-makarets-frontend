import PageLayout from '@/components/PageLayout/PageLayout';
import Checkout from '@/components/Checkout/Checkout';
import styles from './page.module.css';

export default function CheckoutPage() {
  // У реальному проекті ці дані прийшли б з контексту кошика або API
  const cartItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop',
      name: 'Чоловічий гаманець класичний',
      description: 'Натуральна шкіра, 8 відділень',
      price: 780,
      quantity: 1
    }
  ];
  
  const totalPrice = 780;

  return (
    <PageLayout className={styles.page}>
      <Checkout cartItems={cartItems} totalPrice={totalPrice} />
    </PageLayout>
  );
}