import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Профіль</h1>
        <p className={styles.description}>
          Тут буде інформація про ваш профіль та історія замовлень.
        </p>
      </main>
      <Footer />
    </div>
  );
}
