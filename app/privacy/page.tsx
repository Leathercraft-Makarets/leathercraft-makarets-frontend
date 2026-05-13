import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Політика конфіденційності"
          description="Як ми обробляємо ваші персональні дані."
        />
      </main>
    </PageLayout>
}
