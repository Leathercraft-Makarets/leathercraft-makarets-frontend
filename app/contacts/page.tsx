import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Контакти</h1>
        <p className={styles.description}>
          {"Зв'яжіться з нами для замовлень або консультацій."}
        </p>
        <div className={styles.contactInfo}>
          <p><strong>Email:</strong> info@makarets.com</p>
          <p><strong>Телефон:</strong> +380 (00) 000-00-00</p>
          <p><strong>Адреса:</strong> Київ, Україна</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
