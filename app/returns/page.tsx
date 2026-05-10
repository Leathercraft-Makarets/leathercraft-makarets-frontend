import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function ReturnsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Повернення</h1>
        <p className={styles.description}>
          Умови повернення товарів та коштів.
        </p>
      </main>
      <Footer />
    </div>
  );
}
