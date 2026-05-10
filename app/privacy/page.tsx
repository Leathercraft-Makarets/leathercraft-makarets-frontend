import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Політика конфіденційності</h1>
        <p className={styles.description}>
          Як ми обробляємо ваші персональні дані.
        </p>
      </main>
      <Footer />
    </div>
  );
}
