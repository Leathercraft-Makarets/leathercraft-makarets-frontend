'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import UserInfo from '@/components/UserInfo/UserInfo';
import ProfileMenu from '@/components/ProfileMenu/ProfileMenu';
import styles from './page.module.css';

export default function ProfilePage() {
  const userData = {
    name: 'Олена',
    surname: 'Коваленко',
    phone: '+380 00 00 000',
    email: 'olena@gmail.com'
  };

  const menuItems = [
    { id: 'password', label: 'Пароль', href: '/profile/password' },
    { id: 'orders', label: 'Мої замовлення', href: '/profile/orders' },
    { id: 'favorites', label: 'Обрані товари', href: '/profile/favorites' },
    { id: 'reviews', label: 'Відгуки', href: '/profile/reviews' }
  ];

  // Виправлення: додано масив хлібних крихт
  const breadcrumbsItems = [
    { label: 'Головна', href: '/main-page' },
    { label: 'Профіль', href: '/profile' }
  ];

  const handleEdit = () => {
    // Тут буде логіка відкриття модального вікна або переходу на сторінку редагування
    console.log('Редагувати дані');
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Передаємо дані в компонент */}
          <Breadcrumbs items={breadcrumbsItems} />
          
          <UserInfo 
            data={userData} 
            onEdit={handleEdit} 
          />
          
          <ProfileMenu items={menuItems} />
          
          <div className={styles.backLink}>
            <a href="/main-page" className={styles.backLinkText}>
              ← На головну
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}