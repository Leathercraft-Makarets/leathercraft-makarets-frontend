import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CatalogGrid from "@/components/CatalogGrid/CatalogGrid";
import styles from "./page.module.css";

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Каталог</h1>
        <p className={styles.description}>
          Оберіть категорію та знайдіть найкращі шкіряні вироби.
        </p>
        <CatalogGrid />
      </main>
      <Footer />
    </div>
  );
}
