import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";
import FavoritesList from '@/components/FavoritesList/FavoritesList';

export default function WishlistPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Улюблене"
          description="Товари, що полюбились вам."
        />
        <FavoritesList />
      </main>
    </PageLayout>
  );
}
