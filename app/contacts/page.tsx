import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function ContactsPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Контакти"
          description={"Зв'яжіться з нами для замовлень або консультацій."}
        />

        <div className={styles.contactInfo}>
          <p><strong>Email:</strong> info@makarets.com</p>
          <p><strong>Телефон:</strong> +380 (00) 000-00-00</p>
          <p><strong>Адреса:</strong> Київ, Україна</p>
        </div>
      </main>
    </PageLayout>
}
