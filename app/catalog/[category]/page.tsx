import Link from "next/link";
import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "../page.module.css";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryTitles: Record<string, string> = {
  men: 'Чоловічий каталог',
  women: 'Жіночий каталог',
  kids: 'Дитячий каталог',
  business: 'Діловий каталог',
  gifts: 'Подарункові набори',
  style: 'Стильні аксесуари',
};

const demoProducts = [
  {
    id: 1,
    title: 'Портмоне Classic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.stockcake.com/public/2/7/9/2792f926-027c-4232-9369-07e4fcf58cf8_large/prosperity-in-leather-stockcake.jpg',
    price: '1 250',
    tag: ''
  },
  {
    id: 2,
    title: 'Портмоне Premium',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: 'https://images.stockcake.com/public/d/a/0/da0717fc-425f-45b3-b753-2d6ac5a7fd74_large/vintage-leather-secrets-stockcake.jpg',
    price: '1 480',
    tag: ''
  },
  {
    id: 3,
    title: 'Портмоне Soft',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    image: 'https://images.stockcake.com/public/0/e/a/0ea7b3d0-a4a4-444d-9a72-f97d34a7331a_large/vintage-glasses-display-stockcake.jpg',
    price: '1 620',
    tag: ''
  }
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryKey = params?.category || '';
  const title = categoryTitles[categoryKey] || 'Каталог';
  const products = demoProducts;
  const description = categoryKey
    ? `Переглядайте доступні товари в категорії «${categoryKey}».`
    : 'Переглядайте доступні товари в нашому каталозі.';

  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title={title}
          description={description}
        />

        <section className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>Демо-товари категорії</h2>
          <p className={styles.description}>
            Це демо-версія. Клік на товар веде на сторінку продукту.
          </p>
          <div className={styles.productsGrid}>
            {products.length > 0 ? (
              products.map((product) => (
                <Link key={product.id} href="/product" className={styles.productCard}>
                  <div
                    className={styles.productImage}
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className={styles.productContent}>
                    <span className={styles.productTag}>{product.tag}</span>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <div className={styles.productFooter}>
                      <span className={styles.productPrice}>{product.price} ₴</span>
                      <span className={styles.productAction}>Перейти</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>Тут з’являться товарні картки, як тільки буде доступна інформація для цієї категорії.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
