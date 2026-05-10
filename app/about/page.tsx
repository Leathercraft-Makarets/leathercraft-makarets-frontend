import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Про нас</h1>
        <p className={styles.description}>
          Ми — команда майстрів, які створюють якісні шкіряні вироби ручної роботи.
          Наша місія — поєднати традиції ремесла з сучасним дизайном.
        </p>
      </main>
      <Footer />
    </div>
  );
}
