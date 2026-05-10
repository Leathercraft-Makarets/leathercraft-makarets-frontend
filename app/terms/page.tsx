import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Умови використання</h1>
        <p className={styles.description}>
          Правила використання сайту та послуг.
        </p>
      </main>
      <Footer />
    </div>
  );
}
