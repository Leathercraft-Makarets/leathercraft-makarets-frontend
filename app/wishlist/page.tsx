import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function WishlistPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Улюблене</h1>
        <p className={styles.description}>
          Тут будуть товари, які ви додали до улюблених.
        </p>
      </main>
      <Footer />
    </div>
  );
}
