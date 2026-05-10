import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>FAQ</h1>
        <p className={styles.description}>
          Часті запитання та відповіді.
        </p>
      </main>
      <Footer />
    </div>
  );
}
