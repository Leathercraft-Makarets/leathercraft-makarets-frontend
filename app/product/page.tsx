'use client';

import styles from "./page.module.css";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import LeftColumn from "@/components/LeftColumn/LeftColumn";
import RightColumn from "@/components/RightColumn/RightColumn";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import PageLayout from "@/components/PageLayout/PageLayout";

const product = {
  id: 101,
  title: 'Шкіряний гаманець Makarets',
  price: '1450 грн',
  newPrice: '1290 грн',
  oldPrice: '1650 грн',
  imageUrl: '/images/product-101.jpg',
};

export default function ProductPage() {
  return (
    <PageLayout className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Каталог', href: '/catalog' },
            { label: 'Товари', href: '/products' }
          ]}
        />
        <div className={styles.productLayout}>
          <LeftColumn product={product} />
          <RightColumn />
        </div>
        <div className={styles.container}>
          <RelatedProducts />
        </div>
      </div>
    </PageLayout>
  );
}
