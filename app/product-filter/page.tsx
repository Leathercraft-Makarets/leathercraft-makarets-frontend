'use client';

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PageLayout from "@/components/PageLayout/PageLayout";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from './page.module.css';

export default function ProductsList() {
  const products = [
    { 
      id: 1, 
      image: '/images/product1.jpg', 
      title: 'Домінатор', 
      newPrice: '190 ₴', 
      oldPrice: '220 ₴', 
      discount: '-14', 
      isNew: true, 
      isHit: false,
      description: 'Компактний шкіряний картхолдер ручної роботи з надійним фіксатором та швидким доступом до карток.' 
    },
    { 
      id: 2, 
      image: '/images/product2.jpg', 
      title: 'Мерседес', 
      newPrice: '345 ₴', 
      oldPrice: '390 ₴', 
      discount: false, 
      isNew: false, 
      isHit: true,
      description: 'Класичний чоловічий ремінь із цілісного полотна натуральної шкіри та стильною сталевою пряжкою.' 
    },
    { 
      id: 3, 
      image: '/images/product3.jpg', 
      title: 'Перспектива', 
      newPrice: '890 ₴', 
      oldPrice: '935 ₴', 
      discount: '-5', 
      isNew: false, 
      isHit: false,
      description: 'Містке портмоне преміум-класу з відділенням для паспорта, автодокументів та паперових купюр.' 
    },
    { 
      id: 4, 
      image: '/images/product4.jpg', 
      title: 'Оторва', 
      newPrice: '900 ₴', 
      oldPrice: '1000 ₴', 
      discount: false, 
      isNew: true, 
      isHit: true,
      description: 'Ексклюзивний жіночий гаманець із фактурної шкіри на блискавці з великою кількістю внутрішніх секцій.' 
    },
    { 
      id: 5, 
      image: '/images/product5.jpg', 
      title: 'Grande Conion', 
      newPrice: '876 ₴', 
      oldPrice: '980 ₴', 
      discount: '-3', 
      isNew: false, 
      isHit: true,
      description: 'Стильна ділова шкіряна папка для документів формату А4 з додатковими тримачами для ручок.' 
    },
    { 
      id: 6, 
      image: '/images/product6.jpg', 
      title: 'Multiplex', 
      newPrice: '1200 ₴', 
      oldPrice: '1400 ₴', 
      discount: '-14', 
      isNew: true, 
      isHit: false,
      description: 'Універсальний тревел-кейс із натуральної шкіри Крейзі Хорс для закордонних паспортів та квитків.' 
    },
    { 
      id: 7, 
      image: '/images/product7.jpg', 
      title: 'The Sun', 
      newPrice: '1500 ₴', 
      oldPrice: '1800 ₴', 
      discount: false, 
      isNew: true, 
      isHit: false,
      description: 'Елегантна жіноча сумка крос-боді з регульованим шкіряним ремінцем та якісною фурнітурою.' 
    },
    { 
      id: 8, 
      image: '/images/product8.jpg', 
      title: 'Слава Україні!', 
      newPrice: '2000 ₴', 
      oldPrice: '2500 ₴', 
      discount: false, 
      isNew: false, 
      isHit: false,
      description: 'Патріотична серія: міцний шкіряний міський рюкзак із тисненням національного герба України.' 
    },
    { 
      id: 9, 
      image: '/images/product9.jpg', 
      title: 'Героям слава!', 
      newPrice: '2500 ₴', 
      oldPrice: '3000 ₴', 
      discount: false, 
      isNew: false, 
      isHit: false,
      description: 'Тактична шкіряна сумка-месенджер підвищеної міцності зі швидким скиданням та посиленими швами.' 
    },
    { 
      id: 10, 
      image: '/images/product10.jpg', 
      title: 'Батько наш Бендера', 
      newPrice: '3000 ₴', 
      oldPrice: '3500 ₴', 
      discount: '-15', 
      isNew: false, 
      isHit: false,
      description: 'Надійний брутальний ремінь з авторською латунною пряжкою глибокого художнього лиття.' 
    },
    { 
      id: 11, 
      image: '/images/product11.jpg', 
      title: 'Україна мати', 
      newPrice: '1 ₴', 
      oldPrice: '1.5 ₴', 
      discount: '-14', 
      isNew: false, 
      isHit: false,
      description: 'Брендовий шкіряний брелок для ключів із символічним глибоким гравіюванням нашої майстерні.' 
    },
    { 
      id: 12, 
      image: '/images/product12.jpg', 
      title: 'Смерть Кремля', 
      newPrice: '1200 ₴', 
      oldPrice: '1400 ₴', 
      discount: false, 
      isNew: false, 
      isHit: true,
      description: 'Ботоксна голова вибухає під час усвідомлення жаху військових злочинів, що сама і накоїла.' 
    }
  ];

  return (
    <PageLayout className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Каталог', href: '/catalog' },
            { label: 'Список товарів', href: '/product-filter' }
          ]}
        />
        <div className={styles.shopContainer}>
          <FilterSidebar />
          <main className={styles.mainContent}>
            <div className={styles.productGrid}>
              {products.map((item) => {
                const productBadges = [];
                if (item.discount) productBadges.push({ type: 'discount', value: `${item.discount}%` });
                if (item.isHit) productBadges.push({ type: 'hit', value: 'Хіт' });
                if (item.isNew) productBadges.push({ type: 'new', value: 'New' });

                const adaptedProduct = {
                  id: item.id,
                  name: item.title,
                  price: item.newPrice,
                  oldPrice: item.oldPrice || undefined,
                  image: item.image,
                  badges: productBadges,
                  description: item.description 
                };

                return <ProductCard key={item.id} product={adaptedProduct} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}
