import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function ReturnsPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Повернення"
          description="Умови повернення товарів та коштів."
        />
      </main>
    </PageLayout>
}
