import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Профіль"
          description="Тут буде інформація про ваш профіль та історія замовлень."
        />
      </main>
    </PageLayout>
}
