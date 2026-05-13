import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function FaqPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="FAQ"
          description="Часті запитання та відповіді."
        />
      </main>
    </PageLayout>
}
