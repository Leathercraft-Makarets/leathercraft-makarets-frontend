import PageLayout from "@/components/PageLayout/PageLayout";
import CatalogGrid from "@/components/CatalogGrid/CatalogGrid";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function CatalogPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Каталог"
          description="Оберіть категорію та знайдіть найкращі шкіряні вироби."
        />
        <CatalogGrid />
      </main>
    </PageLayout>
  );
}
