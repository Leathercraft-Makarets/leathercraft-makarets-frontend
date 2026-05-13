import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export default function WishlistPage() {
  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title="Улюблене"
          description="Тут будуть товари, які ви додали до улюблених."
        />
      </main>
    </PageLayout>
}
