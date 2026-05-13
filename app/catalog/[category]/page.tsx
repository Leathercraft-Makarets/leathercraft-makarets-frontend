import PageLayout from "@/components/PageLayout/PageLayout";
import PageHero from "@/components/PageHero/PageHero";
import styles from "../page.module.css";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryTitles: Record<string, string> = {
  men: 'Чоловічий каталог',
  women: 'Жіночий каталог',
  kids: 'Дитячий каталог',
  business: 'Діловий каталог',
  gifts: 'Подарункові набори',
  style: 'Стильні аксесуари',
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const title = categoryTitles[params.category] || 'Каталог';

  return (
    <PageLayout className={styles.page}>
      <main className={styles.main}>
        <PageHero
          title={title}
          description={`Переглядайте доступні товари в категорії «${params.category}».`}
        />
      </main>
    </PageLayout>
  );
}
