import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function TermsPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Умови використання"
          description="Правила використання сайту та послуг."
        />
      </main>
    </PageLayout>
}
