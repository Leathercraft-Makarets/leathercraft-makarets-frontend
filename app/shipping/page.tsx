import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function ShippingPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Доставка</h1>
        <p className={styles.description}>
          Інформація про умови доставки та оплати.
        </p>
      </main>
      <Footer />
    </div>
  );
}
