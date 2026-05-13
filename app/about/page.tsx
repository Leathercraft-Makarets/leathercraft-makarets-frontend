import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Про нас"
          description="Ми — команда майстрів, які створюють якісні шкіряні вироби ручної роботи. Наша місія — поєднати традиції ремесла з сучасним дизайном."
        />
      </main>
    </PageLayout>
  );
}
