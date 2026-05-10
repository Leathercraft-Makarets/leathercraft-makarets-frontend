'use client';

import styles from "./ProductPage.module.css";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import LeftColumn from "@/components/LeftColumn/LeftColumn";
import RightColumn from "@/components/RightColumn/RightColumn";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ProductPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productLayout}>
            <LeftColumn />
            <RightColumn />
          </div>
          <div className={styles.container}>
            <RelatedProducts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
